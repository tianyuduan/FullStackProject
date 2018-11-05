class Tagging < ApplicationRecord
  belongs_to :photo, optional: true
  belongs_to :tag, optional: true

  validates :photo, :tag, presence: true
  # validates :tag, uniqueness: {scope: :photo}

end
