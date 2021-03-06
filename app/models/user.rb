class User < ApplicationRecord

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: :true

  after_initialize :ensure_session_token

  has_many :photos,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Photo

  has_many :comments, inverse_of: :author
  has_many :user_votes, inverse_of: :user

  
	def password=(password)
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials(username, password)
		@user = User.find_by(username: username)
		return nil unless @user
		@user.password_is?(password) ? @user : nil
	end

	def password_is?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = SecureRandom.urlsafe_base64
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= SecureRandom.urlsafe_base64
	end


end
