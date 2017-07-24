# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

g1 = Photo.create!(
    title: "Blueberry Pancakes",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1500867355/wskgyjvnamwekz9oiefx.jpg",
    description: "so delicious! it tastes amazing",
    user_id: 10,
)

g2 = Photo.create!(
    title: "Window",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1500869248/v6abaaqljlawagwjtcfw.jpg",
    description: "Bridge to the world",
    user_id: 10,
)
