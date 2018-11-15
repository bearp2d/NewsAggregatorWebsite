class Api::FeedsController < ApplicationController

  def index
    @feeds = current_user.feeds.includes(:sources)

    render 'api/feeds/index.json.jbuilder'
  end

  def create
    @feed = Feed.create(
      user_id: current_user.id,
      feed_name: params[:feed_name])

    if @feed.save
      render 'api/feeds/show.json.jbuilder'
    else
      render json: @feed.errors.full_messages, status: 401
    end
  end

  def destroy
    @feed = Feed.find(params[:feed_id])

    if @feed
      @feed.destroy
      render json: {}, status: 200
    else
      render json: ["Invalid feed reference"], status: 404
    end
  end
end
