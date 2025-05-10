import consumer from "./consumer"

const room = (setRoomNames) => consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected to the room channel");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log("Received data: ", data);
    if (data) setRoomNames(data);
  },

  send_message: function(name) {
    return this.perform('send_message', { message: name });
  }
});

export default room;