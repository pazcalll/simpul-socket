import consumer from "channels/consumer"

const chat = consumer.subscriptions.create("ChatChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected to the chat channel");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log("Received data: ", data);
    $('#dummy_message')
      .clone()
      .text(data['message'])
      .appendTo($('#messages'));
  },

  send_message: function(message) {
    console.log("Sending message: " + message);
    return this.perform('send_message', { message: message });
  }
});

window.chat = chat;
export default chat;