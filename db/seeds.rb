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

m21 = Photo.create!(
    title: "Lake of amaz",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501127771/megan-lewis-38280-min_dkhe8k.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta21 = Tagging.create!(
photo_id: m21.id,
tag_id: t1.id
)

m22 = Photo.create!(
    title: "Sunset!",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501127771/matt-jones-67740-min_htwcss.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta22 = Tagging.create!(
photo_id: m22.id,
tag_id: t4.id
)

m23 = Photo.create!(
    title: "Road!",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501127771/marcelo-quinan-37437-min_apwoiz.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta23 = Tagging.create!(
photo_id: m23.id,
tag_id: t4.id
)

m24 = Photo.create!(
    title: "Galaxy!",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501127767/jason-blackeye-213258-min_jiojme.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta24 = Tagging.create!(
photo_id: m24.id,
tag_id: t4.id
)

m25 = Photo.create!(
    title: "Stars?!",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501126727/wu-jianxiong-239901-min_rmtehw.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta25 = Tagging.create!(
photo_id: m25.id,
tag_id: t4.id
)

m26 = Photo.create!(
    title: "Snow far away",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501126727/wu-jianxiong-239901-min_rmtehw.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta26 = Tagging.create!(
photo_id: m26.id,
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

m29 = Photo.create!(
    title: "Aquarium",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501131082/samuel-zeller-248738-min_zggyn4.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta29 = Tagging.create!(
photo_id: m29.id,
tag_id: t3.id
)

m30 = Photo.create!(
    title: "Out in the water",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501131083/ravi-pinisetti-69440-min_t09l8x.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta30 = Tagging.create!(
photo_id: m30.id,
tag_id: t2.id
)

m31 = Photo.create!(
    title: "Boat",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501131083/pura-comunicacao-78218-min_khhehw.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta31 = Tagging.create!(
photo_id: m31.id,
tag_id: t1.id
)

m32 = Photo.create!(
    title: "Small fish",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501131082/milada-vigerova-35570-min_pmpw1v.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta32 = Tagging.create!(
photo_id: m32.id,
tag_id: t3.id
)

m33 = Photo.create!(
    title: "Small fish 2",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501131082/milada-vigerova-8294-min_mby5kk.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta33 = Tagging.create!(
photo_id: m33.id,
tag_id: t3.id
)

m34 = Photo.create!(
    title: "swimmer with fish",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501131082/marco-assmann-171608-min_cb8avt.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta34 = Tagging.create!(
photo_id: m34.id,
tag_id: t3.id
)

m35 = Photo.create!(
    title: "children fishing",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501131082/luke-brugger-30428-min_iwenop.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta35 = Tagging.create!(
photo_id: m35.id,
tag_id: t2.id
)

m36 = Photo.create!(
    title: "Yellow tail flounder",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501131081/jeremy-bishop-80355-min_ri9pmq.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta36 = Tagging.create!(
photo_id: m36.id,
tag_id: t3.id
)

m37 = Photo.create!(
    title: "Jellyfish",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501131080/aaron-ross-237007-min_snirdh.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta37 = Tagging.create!(
photo_id: m37.id,
tag_id: t3.id
)

m38 = Photo.create!(
    title: "Koi fish!",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501131080/frank-green-49260-min_dph4uq.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta38 = Tagging.create!(
photo_id: m38.id,
tag_id: t3.id
)

m39 = Photo.create!(
    title: "Fisherman!",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501131080/chris-davis-9967-min_dhre3w.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta39 = Tagging.create!(
photo_id: m39.id,
tag_id: t2.id
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

m50 = Photo.create!(
    title: "stand fishing",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132087/aditya-siva-102430-min_slhhnp.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta50 = Tagging.create!(
photo_id: m50.id,
tag_id: t3.id
)

m51 = Photo.create!(
    title: "overseeing the ocean ",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132924/yoni-kaplan-nadel-29-min_xvvd30.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta51 = Tagging.create!(
photo_id: m51.id,
tag_id: t2.id
)

m52 = Photo.create!(
    title: "alone ",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132923/vito-alfano-842-min_my6puj.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta52 = Tagging.create!(
photo_id: m52.id,
tag_id: t2.id
)


m53 = Photo.create!(
    title: "goldfish ",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132923/trevor-cleveland-162924-min_mes4qt.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta53 = Tagging.create!(
photo_id: m53.id,
tag_id: t3.id
)

m54 = Photo.create!(
    title: "hand ",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132922/toa-heftiba-270814-min_iwhjuk.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta54 = Tagging.create!(
photo_id: m54.id,
tag_id: t2.id
)

m55 = Photo.create!(
    title: "gazing Outside ",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132922/markus-wagner-245791-min_xo1f8a.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta55 = Tagging.create!(
photo_id: m55.id,
tag_id: t2.id
)

m56 = Photo.create!(
    title: "Look at this view! ",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132922/lukas-budimaier-108076-min_ezmtkw.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta56 = Tagging.create!(
photo_id: m56.id,
tag_id: t4.id
)

m57 = Photo.create!(
    title: "Amazing ",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132919/chris-abney-140735-min_benurj.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta57 = Tagging.create!(
photo_id: m57.id,
tag_id: t2.id
)

m58 = Photo.create!(
    title: "single ",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132918/brittany-gaiser-240471-min_xdfywp.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta58 = Tagging.create!(
photo_id: m58.id,
tag_id: t2.id
)

m59 = Photo.create!(
    title: "What a fish ",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132921/mathijs-vos-16905-min_uljkpr.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta59 = Tagging.create!(
photo_id: m59.id,
tag_id: t3.id
)

m60 = Photo.create!(
    title: "Yummy!",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1500956495/muopdu6uronvijvsu9jw.jpg",
    description: "drools...",
    user_id: master.id,
)

ta60 = Tagging.create!(
photo_id: m60.id,
tag_id: t4.id
)

m61 = Photo.create!(
    title: "Looking at the ocean",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501280370/warren-wong-311524-min_yp5req.jpg",
    description: "Im so cool",
    user_id: master.id,
)

ta61 = Tagging.create!(
photo_id: m61.id,
tag_id: t2.id
)

m62 = Photo.create!(
    title: "Shooting Star",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501280370/juskteez-vu-1041-min_tx2oeo.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta62 = Tagging.create!(
photo_id: m62.id,
tag_id: t1.id
)

m63 = Photo.create!(
    title: "This is not a fish",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501280370/johannes-andersson-129501-min_pwdy2f.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta63 = Tagging.create!(
photo_id: m63.id,
tag_id: t4.id
)

m64 = Photo.create!(
    title: "Ruh oh",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501280370/hunter-bryant-110214-min_soyhwx.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta64 = Tagging.create!(
photo_id: m64.id,
tag_id: t2.id
)

m65 = Photo.create!(
    title: "Sunbathing!",
    image_url: "http://res.cloudinary.com/djubcegxh/image/upload/v1501280370/nicola-anderson-4773-min_cgusps.jpg",
    description: "So Breathtaking and beautiful",
    user_id: master.id,
)

ta65 = Tagging.create!(
photo_id: m65.id,
tag_id: t3.id
)
