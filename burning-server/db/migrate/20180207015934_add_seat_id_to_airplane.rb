class AddSeatIdToAirplane < ActiveRecord::Migration[5.1]
  def change
    add_column :airplanes, :seat_id, :integer
  end
end
