import consumer from "./consumer"

const room_channel = consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log("connected")
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(text) {
    var messages = document.getElementById('messages')
    messages.innerHTML += text
    // Called when there's incoming data on the websocket for this channel
  },

  speak: function(text) {
    return this.perform('speak', {message: text});
  }
});

document.addEventListener('DOMContentLoaded', function(){
  var input = document.getElementById('chat-input')
  var button = document.getElementById('send-button')
  button.addEventListener('click', function(){
    var text = input.value
    const rc = Object.create(room_channel)
    rc.speak(text)
    input.value = ''
  })
})