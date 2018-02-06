# == Schema Information
#
# Table name: flights
#
#  id          :integer          not null, primary key
#  destination :text
#  origin      :text
#  flight_no   :text
#  date        :date
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Flight < ApplicationRecord
  belongs_to :airplane
  has_many :reservations
  has_many :users, through: :reservations
end
