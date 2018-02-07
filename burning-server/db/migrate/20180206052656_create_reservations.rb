class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :flight_id
      t.text :seat_row
      t.text :seat_col

      t.timestamps
    end
  end
end
