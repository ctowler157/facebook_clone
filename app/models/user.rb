class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :profile_pic, default_url: "avatar.png"
  validates_attachment_content_type :profile_pic, content_type: /\Aimage\/.*\Z/

  has_attached_file :cover_photo, default_url: "default_cover.png"
  validates_attachment_content_type :cover_photo, content_type: /\Aimage\/.*\Z/

  attr_reader :password

  has_many :posts, foreign_key: :author_id

	has_many :timeline_posts,	class_name: "Post", foreign_key: :timeline_id

	has_many :sent_requests, class_name: "FriendRequest", foreign_key: :sender_id
	has_many :pending_requests, class_name: "FriendRequest", foreign_key: :target_id

	has_many :friendships
	has_many :friends, through: :friendships

  after_initialize :ensure_session_token


# # dynamically create attributes for timeline methods
#   def self.method_missing(method_sym, *arguments, &block)
#     # the first argument is a Symbol, so you need to_s it if you want to pattern match
#     if method_sym.to_s =~ /^find_by_(.*)$/
#       find($1.to_sym => arguments.first)
#     else
#       super
#     end
#   end

	def is_friends_with?(user_id)
		friends.include?(User.find(user_id))
	end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user.try(:is_password?, password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  protected
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
