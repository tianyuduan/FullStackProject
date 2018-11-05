class Comment < ApplicationRecord

  include Votable
  
  validates :body, :photo, presence: true

  after_initialize :ensure_photo_id!

  belongs_to :photo, inverse_of: :comments

  belongs_to(
  :author,
  class_name: "User",
  foreign_key: :user_id,
  inverse_of: :comments
  )

  has_many(
  :child_comments,
  class_name: "Comment",
  foreign_key: :parent_comment_id,
  primary_key: :id
  )

  belongs_to(
  :parent_comment,
  class_name: "Comment",
  foreign_key: :parent_comment_id,
  primary_key: :id
  )

  private
  def ensure_photo_id!
    self.photo_id ||= self.parent_comment.photo_id if parent_comment
  end
end
