class Api::TagsController < ApplicationController

  def index
    @tags = Tag.all
  end

  def show
      @tag = Tag.find(params[:id])
      render 'api/tags/show'
  end
end
