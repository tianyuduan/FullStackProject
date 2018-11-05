## images
# column name | data type | details
# ------------|-----------|-----------------------
# id          | integer   | not null, primary key
# user_id     | integer   | not null, foreign key
# image_url   | url       | not null
# title       | string    | not null
# description | string    |


class Photo < ApplicationRecord

  validates :image_url, :title, :user_id, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_many :taggings, dependent: :destroy, inverse_of: :photo
  has_many :tags, through: :taggings

  has_many :comments, inverse_of: :photo

  #photos tags
  # tags_id
  #tags_id =
  def my_set_tag_ids(new_tag_ids)
    old_tag_ids = self.tag_ids
# [4]
    tags_ids_to_destroy = old_tag_ids - new_tag_ids
    tags_ids_to_create = new_tag_ids - old_tag_ids

    ActiveRecord::Base.transaction do
      Tagging.where(photo_id: self.id, tag_id: tags_ids_to_destroy).destroy_all
      tags_ids_to_create.each do |tag_id|
        Tagging.create!(photo_id: self.id, tag_id: tag_id)
      end
    end
  end

# this is built in c.tag_ids= (new_tags) <-- ruby magic
  def self.find_by_user_id(id)
    Photo.select(:id, :image_url, :title, :description, :user_id)
    .where(user_id: id)
  end


end
