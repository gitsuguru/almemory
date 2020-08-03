class Memo < ApplicationRecord
  belongs_to :group

  validates :text, presence: true
end
