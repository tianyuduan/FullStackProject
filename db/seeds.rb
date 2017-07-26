# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Photo.destroy_all

guest = User.create!(
  username: "GUEST",
  password: "123456"
)

master = User.create!(
  username: "MASTER",
  password: "123456"
)

g1 = Photo.create!(
    title: "Blueberry Pancakes",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1500867355/wskgyjvnamwekz9oiefx.jpg",
    description: "so delicious! it tastes amazing",
    user_id: guest.id,
)

g2 = Photo.create!(
    title: "Window",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1500869248/v6abaaqljlawagwjtcfw.jpg",
    description: "Bridge to the world",
    user_id: guest.id,
)

m1 = Photo.create!(
    title: "Overseas",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501009447/dan-ritson-213685-min_llmf83.jpg",
    description: "snow land and water",
    user_id: master.id,
)

m2 = Photo.create!(
    title: "Ocean feels",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501009446/cristian-grecu-265343-min_ti6hun.jpg",
    description: "Mount snow",
    user_id: master.id,
)

m3 = Photo.create!(
    title: "Ocean breeze",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501009445/cosmic-timetraveler-212581-min_qz8mpw.jpg",
    description: "land",
    user_id: master.id,
)

m4 = Photo.create!(
    title: "So so foamy",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501009445/christoffer-engstrom-189369-min_bfj2tn.jpg",
    description: "on the beach!",
    user_id: master.id,
)

m5 = Photo.create!(
    title: "Lost Boat",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501010023/eugeniu-esanu-197527-min_mkc4cu.jpg",
    description: "Into the depths",
    user_id: master.id,
)

m6 = Photo.create!(
    title: "Artur Pokusin",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501009444/artur-pokusin-741-min_vwukf1.jpg",
    description: "Looking below",
    user_id: master.id,
)

m7 = Photo.create!(
    title: "Landside View",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501010025/gabriel-santiago-1596-min_bk6vqq.jpg",
    description: "wooooo so pretty",
    user_id: master.id,
)

m8 = Photo.create!(
    title: "Lake Gabriel",
    image_url: "https://res.cloudinary.com/djubcegxh/image/upload/v1501010025/gabriel-santiago-242166-min_gwi4dn.jpg",
    description: "awesome lake",
    user_id: master.id,
)
