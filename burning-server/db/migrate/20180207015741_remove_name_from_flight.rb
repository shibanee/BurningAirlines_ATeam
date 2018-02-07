class RemoveNameFromFlight < ActiveRecord::Migration[5.1]
  def change
    remove_column :flights, :airplane_code, :string
  end
end
