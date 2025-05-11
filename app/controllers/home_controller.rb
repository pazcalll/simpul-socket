class HomeController < ApplicationController
  def index
    chatRooms = ChatChannel::CHATROOMS.keys
    render inertia: 'Index', props: {
      room_names: chatRooms,
    }
  end

  def room()
    room_name = params[:room_name]
    name = params[:name]
    id = params[:id]
    render inertia: 'Room', props: {
      room_name: room_name,
      name: name,
      id: id,
    }
  end
end
