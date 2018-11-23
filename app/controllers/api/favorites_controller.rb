class Api::FavoritesController < ApplicationController

  def create
    # check if article already exists in database
    @article = Article.find_by(url: params[:article][:url])

    if @article
      Favorite.create!(user_id: current_user.id, article_id: @article.id)
    else
      @article = Article.new(
        source_id: params[:article][:source][:id],
        url: params[:article][:url],
        urlToImage: params[:article][:urlToImage],
        title: params[:article][:title],
        author: params[:article][:author],
        publishedAt: params[:article][:publishedAt],
        description: params[:article][:description],
        content: params[:article][:content])

      if @article.save
        Favorite.create!(user_id: current_user.id, article_id: @article.id)
      else
        render json: @article.errors.full_messages, status: 401
      end
    end
  end

  def index
    @articles = current_user.favorite_articles

    render 'api/articles/index.json.jbuilder'
  end

  def destroy
    @article = Article.find(params[:id])
    @favorite = Favorite.find_by(user_id: current_user.id,
      article_id: @article.id)

    if @favorite
      @favorite.destroy
      render json: {}, status: 200
    else
      render json: ["Invalid favorite reference"], status: 404
    end
  end

end
