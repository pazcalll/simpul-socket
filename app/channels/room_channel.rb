class RoomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "room_channel"
    ActionCable.server.broadcast("room_channel", ChatChannel::CHATROOMS.keys)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def send_message(data)
    keys = ChatChannel::CHATROOMS.keys
    if !keys.include?(data['message'])
      keys << data['message']
      ChatChannel::CHATROOMS[data['message']] ||= []
    end
    ActionCable.server.broadcast("room_channel", keys)
  end
end
