class RemoveSeatIdFromAirplane < ActiveRecord::Migration[5.1]
  def change
    remove_column :airplanes, :seat_id, :integer
    remove_column :airplanes, :add_seat_to_airplane, :string
    remove_column :airplanes, :seat, :integer
  end
end
