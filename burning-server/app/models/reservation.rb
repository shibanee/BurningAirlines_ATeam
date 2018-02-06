# == Schema Information
#
# Table name: reservations
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  flight_id  :integer
#  seat       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Reservation < ApplicationRecord
  belongs_to :flight, optional: true
  belongs_to :user
end
