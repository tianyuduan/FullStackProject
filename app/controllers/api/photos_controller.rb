class Api::PhotosController < ApplicationController


  def index
    @photos = Photo.all
    render 'api/photos/index'
  end


  def show
    @photo = Photo.find(params[:id])
    render 'api/photos/show'
  end

  def create
    @photo = Photo.create!(photo_params)

    if @photo.save
      render 'api/photos/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end


  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render 'api/photos/show'
  end


  def update
    @photo = Photo.find(params[:id])
    if @photo.update(photo_params)
      render 'api/photos/show'
    else
      render json:  @photo.errors.full_messages, status: 422
    end
  end



  private
  def photo_params
    params.require(:photo).permit(
    :title,
    :description,
    :image_url,
    :user_id,
    tag_ids: []
    )
  end
end
