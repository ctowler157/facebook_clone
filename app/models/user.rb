class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  has_many :posts, foreign_key: :author_id


	has_many :timeline_posts,	class_name: "Post", foreign_key: :timeline_id


  after_initialize :ensure_session_token


# dynamically create attributes for timeline methods
  def self.method_missing(method_sym, *arguments, &block)
    # the first argument is a Symbol, so you need to_s it if you want to pattern match
    if method_sym.to_s =~ /^find_by_(.*)$/
      find($1.to_sym => arguments.first)
    else
      super
    end
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
