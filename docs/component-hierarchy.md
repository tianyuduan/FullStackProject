## Component Hierarchy

**Home Container**
  - HomeHeader
  - Link(s) to AuthForm
  - Home Content
  - Photos Index
  - Footer

**AuthForm Container(SignIn-logIn)**
  - AuthForm

**ContentContainer**
  - Header
  - Navbar w Tags
  - Photos Index
  - Footer

**PhotoContainer**-
  - Aside Detail
  - Bonus* Photo nav

  - Likes, Comments, views container

**Photo Upload**
  - Upload Form

**User Profile Container**
  - User Section
  - Photos Index


## Routes

|       Path       |      Component         |
|------------------|------------------------|
| "/"              | "AuthFormContainer"    |
| "/"              | "ContentContainer"     |
| "/home"          | "HomePage"             |
| "/users/:userId" | "UserProfileContainer" |
|"/photos/:photoId"|   "PhotoContainer"     |  
|"/:tags"          |  "ContentContainer"    |  

- Tags: defaults to fishpx.com/popular upon logging in
