class CreateFlights < ActiveRecord::Migration[5.1]
  def change
    create_table :flights do |t|
      t.text :destination
      t.text :origin
      t.text :flight_no
      t.date :date

      t.timestamps
    end
  end
end
