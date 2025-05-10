class ChatChannel < ApplicationCable::Channel
  CHATROOMS = Hash.new { |hash, key| hash[key] = [] }.tap do |rooms|
    100.times do |i|
      rooms["main#{i}"] = [] # Add default rooms
    end
  end

  def subscribed
    # Ensure a room is provided
    if params[:room].present?
      # Create the room if it doesn't exist
      CHATROOMS[params[:room]] ||= []

      # Stream from the specific room
      stream_from "chat_channel_#{params[:room]}"
    else
      reject
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def send_message(data)
    puts "Received message: #{data.inspect}"
    message = data['message']
    room = message['room']
    sendable = {
      name: message['name'],
      id: message['id'],
      message: message['message']
    }

    # Add the message to the specific chatroom
    CHATROOMS[room] << sendable

    # Broadcast the message to the specific chatroom
    ActionCable.server.broadcast("chat_channel_#{room}", sendable)
  end
end
