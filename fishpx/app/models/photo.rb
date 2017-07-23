## images
# column name | data type | details
# ------------|-----------|-----------------------
# id          | integer   | not null, primary key
# user_id     | integer   | not null, foreign key
# image_url   | url       | not null
# title       | string    | not null
# description | string    |


class Photo < ApplicationRecord

  validates :image_url, :title, :user, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  def self.find_by_user_id(id)
    Photo.select(:id, :image_url, :title, :description, :user_id)
    .where(user_id: id)
  end


end
