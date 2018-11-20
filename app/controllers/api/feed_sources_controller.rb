class Api::FeedSourcesController < ApplicationController

  def create
    @feed_source = FeedSource.new(
      feed_id: params[:feed_id],
      source_id: params[:source_id])

    if @feed_source.save
      render 'api/feed_sources/show.json.jbuilder', status: 200
    else
      render json: @feed_source.errors.full_messages, status: 401
    end
  end

  def destroy
    @feed_source = FeedSource.find_by(
      feed_id: params[:feed_id],
      source_id: params[:source_id])

    if @feed_source
      @feed_source.destroy
      render json: {}, status: 200
    else
      render json: ["Invalid feed_source reference"], status: 404
    end
  end
end
