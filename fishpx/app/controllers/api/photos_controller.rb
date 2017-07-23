class Api::PhotosController < ApplicationController


  def index
    @photos = Photo.find_by_user_id(params[:user_id])
    render 'api/photos/index'
  end


  def show
    @photo = Photo.find(param[:id])
    render 'api/photos/show'
  end


  def create
    @photo = Photo.create!(photo_params)
    @photo.user_id = currentUser.id

    if @photo.save
      render 'api/photos/show'
    else
      ender json: @photo.errors.full_messages, status: 422
    end
  end


  def destroy
    @photo = Photo.find(param[:id])
    @photo.destroy
    render 'api/photos/show'
  end


  def update
    @photo = Photo.find(param[:id])
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
    :user_id
    )
  end
end
