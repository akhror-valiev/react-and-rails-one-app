class Api::GreetingsController < ApplicationController
  before_action :set_format

  def index
    @random_greet = Greeting.limit(1).order('RANDOM()')
    render json: @random_greet
  end

  private

  def set_format
    request.format ||= :json
  end
end
