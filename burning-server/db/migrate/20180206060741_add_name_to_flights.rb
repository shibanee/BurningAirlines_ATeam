class AddNameToFlights < ActiveRecord::Migration[5.1]
  def change
    add_column :flights, :name, :string
  end
end
