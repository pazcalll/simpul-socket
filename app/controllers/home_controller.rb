class HomeController < ApplicationController
  def index
    @messages = Message.all # Pass all messages to the view
    @message = Message.new  # Pass a new message object for the form
    puts "Messages: #{@messages.inspect}" # Debugging line to check messages
  end
end
