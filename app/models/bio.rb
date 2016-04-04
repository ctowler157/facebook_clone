class Bio < ActiveRecord::Base
  validates :user_id, :first_name, :last_name, presence: true
  validates :user_id, uniqueness: true

  # belongs_to :user
  #
  # validates_associated :user
end
