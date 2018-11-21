class Api::FavoritesController < ApplicationController

  def create
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

  def index
    @articles = current_user.favorite_articles

    render 'api/articles/index.json.jbuilder'
  end

  def destroy
    @favorite = Favorite.find(params[:favorite_id])

    if @favorite
      @favorite.destroy
      render json: {}, status: 200
    else
      render json: ["Invalid favorite reference"], status: 404
    end
  end

  private

  # def favorite_params
  #   params.require(:article).permit(:url, :urlToImage,
  #     :title, :author, :publishedAt, :description, :content)
  # end

end
