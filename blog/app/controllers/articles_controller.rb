class ArticlesController < ApplicationController
 

  def index
    @articles = Article.all
    @categories = Category.all
  end

  def show
    @article = Article.find(params[:id])
    @categories = Category.all
    @comment = Comment.all
    @user = User.find(@article.user_id)
  end

	def new
	  @article = Article.new
    @categories = Category.all
	end
 
	def edit
	  @article = Article.find(params[:id])
    @categories = Category.all

	end

	def create
	  @article = Article.new(article_params)
    @article.user_id = current_user.id
	  if @article.save
		redirect_to @article
	  else
		  render 'new'
	  end
	end
 
	def update
	  @article = Article.find(params[:id])
	  @articles = Article.all
	  if @article.update(article_params)
		redirect_to @article
	  else
		render 'edit'
	  end
	end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
 
  end

  private
    def article_params
      params.permit(:title, :text, :category_id, :user_id)
    end

end
