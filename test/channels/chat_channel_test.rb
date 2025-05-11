require "test_helper"

class ChatChannelTest < ActionCable::Channel::TestCase
  # test "subscribes" do
  #   subscribe
  #   assert subscription.confirmed?
  # end
  test "reject when no room attached" do
    subscribe
    assert subscription.rejected?
  end

  test "accept when subscribe with param" do
    subscribe room:"Dummy 0", name:"Johny"
    assert subscription.confirmed?
  end

  test "send chat complete with message, name and id" do
    name = "Johny"
    room = "Dummy 0"
    message = "Test message"
    id = Time.now.to_i
    
    subscribe room: room, name: name
    
    assert subscription.confirmed?

    broadcast_data = broadcasts("chat_channel_#{room}")
    assert broadcast_data.count == 1

    perform :send_message, { "message" => { "id" => id, "name" => name, "message" => message, "room" => room } }
    assert broadcast_data.count == 2
  end
end
