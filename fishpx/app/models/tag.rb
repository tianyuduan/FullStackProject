class Tag < ApplicationRecord

  has_many :taggings, dependent: :destroy, inverse_of: :tag
  has_many :photos, through: :taggings

  validates :tag_name, presence: true
  # validates :tag_name, uniqueness: true
end
