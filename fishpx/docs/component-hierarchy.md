## Component Hierarchy

**Home Page**
  - HomeHeader
  - Link(s) to AuthForm
  - Home
  - Navbar
  - Photos Index
  - Footer

**AuthForm Container(SignIn-logIn)**
  - AuthForm

**ContentContainer**
  - Header
  - Navbar
  - Photos Index
  - Tags
  - Footer

**User Profile Container**
  - User Section
  - Photos Index
  - Follows Container


**Follows Container**
  - Follows Header
  - Follows Index

**PhotoContainer**-
  - Photo Container
  - Aside Detail
  - Bonus* Photo nav
  - Follow User/User Info Container
  - Likes, fav, views container


**Photo Upload**
  - Upload Form


## Routes

|       Path       |      Component         |
|------------------|------------------------|
| "/"              | "AuthFormContainer"    |
| "/"              | "ContentContainer"     |
| "/home"          | "HomePage"             |
| "/users/:userId" | "UserProfileContainer" |
|"/photos/:photoId"|   "PhotoContainer"     |  
|"/:tags"          |  "ContentContainer"    |  **defaults to fishpx.com/popular upon logging in 
