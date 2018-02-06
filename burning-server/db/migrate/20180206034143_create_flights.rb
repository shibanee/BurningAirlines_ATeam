class CreateFlights < ActiveRecord::Migration[5.1]
  def change
    create_table :flights do |t|
      t.string :flight_num
      t.string :origin
      t.string :destination
      t.string :airplane_id
      t.date :date

      t.timestamps
    end
  end
end
