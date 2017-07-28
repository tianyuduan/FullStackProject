# FishPx

[FishPx live][heroku]

[heroku]: http://www.fishpx.herokuapp.com

FishPx is a full-stack web application inspired by 500 px.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### User Authentication

Users can sign up for an account. The Authentication Forms are implemented using Google's Material-UI React-Modals. A demo account is available to explore the site's images and features. A User will have
access to the Content Page, navigate through the categories of photos and sign out.

### Upload and Rendering images
Users can upload images from the content page. The image upload mechanic is implemented with a combination of Cloudinary API, react Dropzone, superAgent and Material-UI. At upload, a dropdown
menu of the categories will be listed where the user can choose which tag to upload the images under.
Upon upload, that image will be rendered under that specific category.

### Categories/Tags
The content Page will consist of 6 categories where the user can choose from. The sliding-tabs is a feature implemented with Material-UI. User can browse through all the categories of images.

### Masonary Image Grid
All the photos in the content page are implemented with react-Masonary, a javascript grid library. Upon image click, it will render a full-size image modal.

### Future Improvements

### Infinite Scroll
  Due to the nature of High-res Detail heavy websites, having Infinite Scroll will optimize page load, which will allow users to scroll through many images in content page more efficiently

### likes and comments
User should be able to like an image, comment on an image. Once like and comments have been implemented, an Popular Category could be implemented so User can view heavily liked Images.


### User Profile
User should be able to edit their profile, upload a cover photo, be able to view photos that belong to them. Users should be able to view each others profiles as well.

### loading Screen
  Implement a loading screen for when the browser is busy rendering all the images fetched from cloudinary.
