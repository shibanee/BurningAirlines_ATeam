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
#  name        :string
#

class Flight < ApplicationRecord
  belongs_to :airplanes, optional: true
  # has_many :reservations
  has_many :users, through: :reservations
end
