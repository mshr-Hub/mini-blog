class MessagesController < ApplicationController
  before_action :set_message, only: [:edit, :update, :destroy]

  def index
    @messages = Message.includes(:user).page(params[:page]).per(5).order("created_at DESC")
  end

  def new
    @message = Message.new
  end

  def create
    Message.create(message_params)
    redirect_to action: :index
  end

  def edit
  end

  def update
    @message.update(message_params)
    redirect_to action: :index
  end

  def destroy
    @message.destroy
    redirect_to action: :index
  end

  private

  def set_message
    @message = Message.find(params[:id])
  end

  def message_params
    params.require(:message).permit(:text).merge(user_id: current_user.id)
  end

  # def move_to_index
  #   redirect_to action: :index
  # end
end
