class Price < ApplicationRecord
  belongs_to :group

  validates :number, presence: true
  validates :name, presence: true
  
end
