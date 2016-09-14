class Article < ApplicationRecord
  belongs_to :category
  has_many :comments, dependent: :destroy
  belongs_to :user
end
