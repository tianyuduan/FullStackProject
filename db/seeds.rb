# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Photo.destroy_all
Tag.destroy_all

guest = User.create!(
  username: "GUEST",
  password: "123456"
)

master = User.create!(
  username: "MASTER",
  password: "123456"
)

t1 = Tag.create!(
  tag_name: "Seascape"
)
t2 = Tag.create!(
  tag_name: "People"
)
t3 = Tag.create!(
  tag_name: "Fish"
)
t4 = Tag.create!(
  tag_name: "Others"
)

m1 = Photo.create!(
    title: "Blueberry Pancakes",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1500867355/wskgyjvnamwekz9oiefx.jpg",
    description: "so delicious! it tastes amazing",
    user_id: master.id,
)

ta1 = Tagging.create!(
photo_id: m1.id,
tag_id: t4.id
)

m2 = Photo.create!(
    title: "Window",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1500869248/v6abaaqljlawagwjtcfw.jpg",
    description: "Bridge to the world",
    user_id: master.id,
)

ta2 = Tagging.create!(
photo_id: m2.id,
tag_id: t4.id
)

m3 = Photo.create!(
    title: "Overseas",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501009447/dan-ritson-213685-min_llmf83.jpg",
    description: "snow land and water",
    user_id: master.id,
)

ta3 = Tagging.create!(
photo_id: m3.id,
tag_id: t1.id
)


m4 = Photo.create!(
    title: "Ocean feels",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501009446/cristian-grecu-265343-min_ti6hun.jpg",
    description: "Mount snow",
    user_id: master.id,
)

ta4 = Tagging.create!(
photo_id: m4.id,
tag_id: t4.id
)

m5 = Photo.create!(
    title: "Ocean breeze",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501009445/cosmic-timetraveler-212581-min_qz8mpw.jpg",
    description: "land",
    user_id: master.id,
)

ta5 = Tagging.create!(
photo_id: m5.id,
tag_id: t1.id
)

m6 = Photo.create!(
    title: "So so foamy",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501009445/christoffer-engstrom-189369-min_bfj2tn.jpg",
    description: "on the beach!",
    user_id: master.id,
)

ta6 = Tagging.create!(
photo_id: m6.id,
tag_id: t1.id
)

m7 = Photo.create!(
    title: "Lost Boat",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501010023/eugeniu-esanu-197527-min_mkc4cu.jpg",
    description: "Into the depths",
    user_id: master.id,
)

ta7 = Tagging.create!(
photo_id: m7.id,
tag_id: t2.id
)

m8 = Photo.create!(
    title: "Artur Pokusin",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501009444/artur-pokusin-741-min_vwukf1.jpg",
    description: "Looking below",
    user_id: master.id,
)

ta8 = Tagging.create!(
photo_id: m8.id,
tag_id: t1.id
)

m9 = Photo.create!(
    title: "Landside View",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501010025/gabriel-santiago-1596-min_bk6vqq.jpg",
    description: "wooooo so pretty",
    user_id: master.id,
)

ta9 = Tagging.create!(
photo_id: m9.id,
tag_id: t1.id
)


m10 = Photo.create!(
    title: "Lake Gabriel",
    image_url: "https://res.cloudinary.com/djubcegxh/image/upload/v1501010025/gabriel-santiago-242166-min_gwi4dn.jpg",
    description: "awesome lake",
    user_id: master.id,
)

ta10 = Tagging.create!(
photo_id: m10.id,
tag_id: t1.id
)

m11 = Photo.create!(
    title: "Lake Side",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501009441/benny-jackson-185393-min_hdun6n.jpg",
    description: "awesome??!?",
    user_id: master.id,
)

ta11 = Tagging.create!(
photo_id: m11.id,
tag_id: t1.id
)

m12 = Photo.create!(
    title: "Wheat Field!",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501126726/timothy-meinberg-136256-min_de2tpy.jpg",
    description: "frolicking through the field!",
    user_id: master.id,
)

ta12 = Tagging.create!(
photo_id: m12.id,
tag_id: t4.id
)

m13 = Photo.create!(
    title: "Beautiful lady",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501126722/stephanie-krist-72013-min_j4pk6d.jpg",
    description: "gazing at the abyss ",
    user_id: master.id,
)

ta13 = Tagging.create!(
photo_id: m13.id,
tag_id: t2.id
)


m14 = Photo.create!(
    title: "The pier",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501126722/sora-sagano-240125-min_glwbs5.jpg",
    description: "WooOOOOOOOOOoooo ",
    user_id: master.id,
)

ta14 = Tagging.create!(
photo_id: m14.id,
tag_id: t1.id
)

m15 = Photo.create!(
    title: "The LightHouse",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501126726/william-bout-103533-min_utnfct.jpg",
    description: "Ships Incoming! ",
    user_id: master.id,
)

ta15 = Tagging.create!(
photo_id: m15.id,
tag_id: t1.id
)

m16 = Photo.create!(
    title: "Haunted House",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501126725/thomas-shellberg-31280-min_fhcy35.jpg",
    description: "I am so startled ",
    user_id: master.id,
)

ta16 = Tagging.create!(
photo_id: m16.id,
tag_id: t4.id
)

m17 = Photo.create!(
    title: "Nature's Beauty",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501126725/timothy-meinberg-105726-min_hvbyr5.jpg",
    description: "Vacation! ",
    user_id: master.id,
)

ta17 = Tagging.create!(
photo_id: m17.id,
tag_id: t1.id
)

m18 = Photo.create!(
    title: "Breathtaking",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501127769/julia-caesar-15078-min_n3mflf.jpg",
    description: "Speechless",
    user_id: master.id,
)

ta18 = Tagging.create!(
photo_id: m18.id,
tag_id: t2.id
)

m19 = Photo.create!(
    title: "Walking in the pristine",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501127767/jeremy-bishop-262119-min_j16ofj.jpg",
    description: "!!",
    user_id: master.id,
)

ta19 = Tagging.create!(
photo_id: m19.id,
tag_id: t2.id
)

m20 = Photo.create!(
    title: "Aurora Lights",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501127768/jonatan-pie-198664-min_vxujb7.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta20 = Tagging.create!(
photo_id: m20.id,
tag_id: t1.id
)

m27 = Photo.create!(
    title: "finding Nemo",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501131084/wembley-296066-min_hmt8us.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta27 = Tagging.create!(
photo_id: m27.id,
tag_id: t3.id
)

m28 = Photo.create!(
    title: "I like turtles!",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501131083/tanguy-sauvin-3121-min_umi4yu.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta28 = Tagging.create!(
photo_id: m28.id,
tag_id: t3.id
)

m30 = Photo.create!(
    title: "Out in the water",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501131083/ravi-pinisetti-69440-min_t09l8x.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)
m40 = Photo.create!(
    title: "Sunrise!",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501127770/kired-agbayani-240030-min_beldd1.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta40 = Tagging.create!(
photo_id: m40.id,
tag_id: t1.id
)

m41 = Photo.create!(
    title: "D:",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132091/yu-tang-146774-min_sfayjr.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta41 = Tagging.create!(
photo_id: m41.id,
tag_id: t3.id
)

m42 = Photo.create!(
    title: "Whale!",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132092/toa-heftiba-270774-min_bt2oit.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta42 = Tagging.create!(
photo_id: m42.id,
tag_id: t3.id
)

m43 = Photo.create!(
    title: "Fishing!",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132091/steinar-engeland-115728-min_ah5kyf.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta43 = Tagging.create!(
photo_id: m43.id,
tag_id: t2.id
)

m44 = Photo.create!(
    title: "two fisherman",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132091/przemyslaw-sakrajda-206998-min_z4kl0s.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta44 = Tagging.create!(
photo_id: m44.id,
tag_id: t2.id
)

m45 = Photo.create!(
    title: "rise and shine!",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132918/anders-wideskott-229372-min_yxdcut.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta45 = Tagging.create!(
photo_id: m45.id,
tag_id: t2.id
)

m46 = Photo.create!(
    title: "fish race",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132089/jeremy-bishop-93208-min_vvu8uf.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta46 = Tagging.create!(
photo_id: m46.id,
tag_id: t3.id
)

m47 = Photo.create!(
    title: "Rainbow wildlife",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132087/crystal-gard-228496-min_jcvyfh.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta47 = Tagging.create!(
photo_id: m47.id,
tag_id: t3.id
)

m48 = Photo.create!(
    title: "Orange fish",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132091/marius-masalar-132756-min_vrksrj.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta48 = Tagging.create!(
photo_id: m48.id,
tag_id: t3.id
)

m49 = Photo.create!(
    title: "Small shark",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132089/jakob-owens-208998-min_gmlvt8.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta49 = Tagging.create!(
photo_id: m49.id,
tag_id: t3.id
)
