class Api::NewsSourcesController < ApplicationController

  def index
    @sources = NewsSource.all

    render 'api/news_sources/index.json.jbuilder'
  end
end
