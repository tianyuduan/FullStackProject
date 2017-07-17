HomePage
  HomeHeader
  Link(s) to AuthForm
  Home
  Navbar
  Photos Index
  Footer

ContentContainer
  Header
  Navbar
  Photos Index
  Tags
  Footer

AuthForm(SignIn-logIn)
  AuthForm

User Profile Container
  User Section
  Photos Index
  Follows Container

PhotoContainer
  Photo Container
  Aside Detail
  Bonus* Photo nav
  Follow User/User Info Container
  Likes, fav, views container

Photo Upload
  Upload Form


Routes

  Path	Component
  "/"	"AuthFormContainer"
  "/"	"ContentContainer"
  "/home"	"HomePage"
  "/users/:userId"	"UserProfileContainer"
  "/photos/:photoId" "PhotoContainer"
  "/:tags" "ContentContainer" *defaults to fishpx.com/popular upon logging in 
