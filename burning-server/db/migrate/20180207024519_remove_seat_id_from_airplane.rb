class RemoveSeatIdFromAirplane < ActiveRecord::Migration[5.1]
  def change
    remove_column :airplanes, :seat_id, :integer
  end
end
