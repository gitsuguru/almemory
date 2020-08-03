class Group < ApplicationRecord
  has_many :group_users
  has_many :users, through: :group_users
  has_many :messages
  has_many :prices
  has_many :memos
  
  validates :name, presence: true
end
