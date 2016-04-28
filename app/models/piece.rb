class Piece < ActiveRecord::Base
belongs_to :image, foreign_key: 'image_id'
belongs_to :image, foreign_key: 'thumbnail_id'

end
