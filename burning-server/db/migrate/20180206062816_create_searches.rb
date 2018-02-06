class CreateSearches < ActiveRecord::Migration[5.1]
  def change
    create_table :searches do |t|
      t.text :origin
      t.text :destination
      t.date :date

      t.timestamps
    end
  end
end
