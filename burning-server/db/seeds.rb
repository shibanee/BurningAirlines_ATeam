Airplane.destroy_all

a1 = Airplane.create name: "Virgin Airlines", rows: "20", cols: "6"
a2 = Airplane.create name: "Qantas", rows: "20", cols: "6"
a3 = Airplane.create name: "Emirates", rows: "20", cols: "6"

puts "Created #{ Airplane.all.length } airplanes."


Flight.destroy_all

f1 = Flight.create origin: "Melbourne", destination: "Sydney", flight_num: "101", date: "01/02/2018", airplane: a1

f2 = Flight.create origin: "Sydney", destination: "Singapore", flight_num: "102", date: "02/02/2018", airplane: a2

f3 = Flight.create origin: "Melbourne", destination: "Honolulu", flight_num: "103", date: "03/02/2018", airplane: a1

f4 = Flight.create origin: "Sydney", destination: "Istanbul", flight_num: "104", date: "01/02/2018", airplane: a2

f5 = Flight.create origin: "Sydney", destination: "Tokyo", flight_num: "105", date: "01/01/2018", airplane: a3

f6 = Flight.create destination: "Florence", origin: "Melbourne", flight_num: "106", date: "03/02/2018", airplane: a3

puts "Created #{ Flight.all.length } flights."



User.destroy_all

u1 = User.create name: "Jimmi", email: "Jimmi@gmail.com", admin: true, password_digest: "chicken"
u2 = User.create name: "Jane", email: "Jane@gmail.com", admin: true, password_digest: "chicken"
u3 = User.create name: "Luke", email: "Luke@gmail.com", admin: true, password_digest: "chicken"
u4 = User.create name: "Steph", email: "Steph@gmail.com", admin: false, password_digest: "chicken"
u5 = User.create name: "Jo", email: "Jo@gmail.com", admin: false, password_digest: "chicken"
u6 = User.create name: "Harry", email: "Harry@gmail.com", admin: false, password_digest: "chicken"

puts "Created #{ User.all.length } users."

Reservation.create user: u1, flight: f1, seat_col: 'A', seat_row: '10'
Reservation.create user: u1, flight: f2, seat_col: 'A', seat_row: '10'
Reservation.create user: u1, flight: f1, seat_col: 'B', seat_row: '10'
Reservation.create user: u2, flight: f1, seat_col: 'A', seat_row: '12'
Reservation.create user: u2, flight: f3, seat_col: 'A', seat_row: '10'
Reservation.create user: u2, flight: f1, seat_col: 'C', seat_row: '12'
