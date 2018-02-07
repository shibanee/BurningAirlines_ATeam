class AddSeatToAirplane < ActiveRecord::Migration[5.1]
  def change
    add_column :airplanes, :seat, :integer
  end
end
