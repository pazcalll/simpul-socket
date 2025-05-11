require "test_helper"
require "securerandom"

class RoomChannelTest < ActionCable::Channel::TestCase
  # test "subscribes" do
  #   subscribe
  #   assert subscription.confirmed?
  # end
  test "can append room" do
    # Ensure CHATROOMS is initially empty or has a known state
    initial_length = ChatChannel::CHATROOMS.length

    # Simulate subscribing to the channel
    subscribe

    # Call the `send_message` instance method with test data
    perform :send_message, { "message" => "New Room" }

    # Assert that the CHATROOMS array has been appended
    assert_equal initial_length + 1, ChatChannel::CHATROOMS.length
    assert_includes ChatChannel::CHATROOMS.keys, "New Room"
  end

  test "does not append room with same name" do
    initial_length = ChatChannel::CHATROOMS.length

    subscribe
    random_string = SecureRandom.hex(8)

    perform :send_message, { "message" => random_string }
    perform :send_message, { "message" => random_string }

    assert_equal initial_length + 1, ChatChannel::CHATROOMS.length
    assert_includes ChatChannel::CHATROOMS.keys, random_string
  end
end
