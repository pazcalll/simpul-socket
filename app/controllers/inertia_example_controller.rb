# frozen_string_literal: true
require 'securerandom'

class InertiaExampleController < ApplicationController
  def index
    chatRooms = ChatChannel::CHATROOMS.keys
    render inertia: 'InertiaExample', props: {
      name: params.fetch(:name, 'Bro'),
    }
  end

  def room()
    room_name = params[:room_name]
    render inertia: 'Room', props: {
      room_name: room_name,
    }
  end
end
