Airplane.destroy_all

a1 = Airplane.create name: "Virgin Airlines", rows: "20", cols: "6"
a2 = Airplane.create name: "Qantas", rows: "20", cols: "6"
a3 = Airplane.create name: "Emirates", rows: "20", cols: "6"

puts "Created #{ Airplanes.all.length } airplanes."

Flight.destroy_all

f1 = Flight.create destination: "Sydney", origin: "Melbourne", flight_no: "101", date: "01/02/2018"
f2 = Flight.create destination: "Singapore", origin: "Sydney", flight_no: "102", date: "02/02/2018"
f3 = Flight.create destination: "Honolulu", origin: "Melbourne", flight_no: "103", date: "03/02/2018"
f4 = Flight.create destination: "Istanbul", origin: "Sydney", flight_no: "104", date: "01/02/2018"
f5 = Flight.create destination: "Tokyo", origin: "Sydney", flight_no: "105", date: "01/01/2018"
f6 = Flight.create destination: "Florence", origin: "Melbourne", flight_no: "106", date: "03/02/2018"

puts "Created #{ Flight.all.length } flights."

User.destroy_all

u1 = User.create name: "Jimmi", email: "Jimmi@gmail.com", admin: true, password_digest: "chicken"
u2 = User.create name: "Jane", email: "Jane@gmail.com", admin: true, password_digest: "chicken"
u3 = User.create name: "Luke", email: "Luke@gmail.com", admin: true, password_digest: "chicken"
u4 = User.create name: "Steph", email: "Steph@gmail.com", admin: false, password_digest: "chicken"
u5 = User.create name: "Jo", email: "Jo@gmail.com", admin: false, password_digest: "chicken"
u6 = User.create name: "Harry", email: "Harry@gmail.com", admin: false, password_digest: "chicken"

puts "Created #{ User.all.length } users."
