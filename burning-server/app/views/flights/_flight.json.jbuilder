json.extract! flight, :id, :flight_num, :origin, :destination, :airplane_id, :date, :created_at, :updated_at
json.url flight_url(flight, format: :json)
