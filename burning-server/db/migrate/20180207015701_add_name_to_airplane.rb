class AddNameToAirplane < ActiveRecord::Migration[5.1]
  def change
    add_column :airplanes, :airplane_code, :string
  end
end
