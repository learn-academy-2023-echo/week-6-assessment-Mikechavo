# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is the controller for our application. Responsible for routing outside requests to inside actions. Sets up our RESTFUL ROUTES: index, show, create, new update, edit and destory,defining them.
class BlogPostsController < ApplicationController
  def index
    # ---2) index: retrieve all data ==>  Which is a Get HTTP verb 
    @posts = BlogPost.all
  end

  # ---3) show: Retrieve one datum ==>  Which is a Get HTTP verb 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) new: displays a form ==>  Which is a Get HTTP verb
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) create: adding content ==> Which is a Post HTTP verb
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) edit: displays a form ==>  Which is a Get HTTP verb
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) update: modify content =>  Which is a Get HTTP verb
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) destory: deletes data ==> Which is a Delete HTTP verb
      redirect_to blog_posts_path
    end
  end

  # ---9) Letting us know we have security set in place
  private
  def blog_post_params
    # ---10) Param method, blog_post_params, is placed inside private to give us secuirty for the associated and acts as an extra layer of protection.
    params.require(:blog_post).permit(:title, :content)
  end
end
