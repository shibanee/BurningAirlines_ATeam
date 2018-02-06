json.extract! flight, :id, :destination, :origin, :flight_no, :date, :created_at, :updated_at
json.url flight_url(flight, format: :json)
