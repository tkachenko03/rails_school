class CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end

  def show
    @categories = Category.all
    @category = Category.find(params[:id])
    @articles = Article.where("category_id = ?", @category.id).order(updated_at: :asc)
    @article = Article.all
  end

  def new
	  @categories = Category.new
	end
	def edit
	  @categories = Category.find(params[:id])
	end

	def create
	  @categories = Category.new(category_params)
	  if @categories.save
      redirect_to @categories
	  else
		  render 'new'
	  end
	end
 
	def update
	  @categories = Category.find(params[:id])
	 
	  if @categories.update(category_params)
		redirect_to @categories
	  else
		render 'edit'
	  end
	end

  def destroy
    @categories = Category.find(params[:id])
    @categories.destroy
 
  end

  private
    def category_params
      params.permit(:name)
    end
end


