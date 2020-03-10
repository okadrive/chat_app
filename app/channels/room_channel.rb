class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    new_message = Message.create!(content: data['message']) # 受け取ったメッセージをDBへ保存
    template = ApplicationController.renderer.render(partial: 'messages/message', locals: {message: new_message})
    ActionCable.server.broadcast 'room_channel', template
  end
end
