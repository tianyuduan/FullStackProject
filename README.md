# FishPx

[FishPx live][heroku]

[heroku]: https://fishpx.herokuapp.com/

FishPx is a full-stack web application inspired by 500 px.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Home Splash Page

Implements a video of the wonders of the underwater sea world. The Show More Button implements an automatic scroll down that leads the user to a sneak peak of the content within.

![Splash Page](http://res.cloudinary.com/djubcegxh/image/upload/v1501281117/Screen_Shot_2017-07-28_at_3.31.10_PM_smvvdb.png)

### User Authentication

Users can sign up/log in. The Authentication Forms are implemented using Google's Material-UI React-Modals. A demo account is available to explore the site's images and features. A User will have
access to the Content Page, navigate through the categories of photos and sign out.

![image of Create/Edit User](http://res.cloudinary.com/djubcegxh/image/upload/v1501281227/Screen_Shot_2017-07-28_at_3.33.09_PM_i9ywdw.png)

### Upload and Rendering images
Users can upload images from the content page. The image upload mechanic is implemented with a combination of Cloudinary API, react Dropzone, superAgent and Material-UI. At upload, a dropdown
menu of the categories will be listed where the user can choose which tag to upload the images under.
Upon upload, that image will be rendered under that specific category.

![image of Upload](http://res.cloudinary.com/djubcegxh/image/upload/v1501282064/Screen_Shot_2017-07-28_at_3.47.11_PM_m3jmq5.png)

### Categories/Tags

The content Page will consist of 6 categories where the user can choose from. The sliding-tabs is a feature implemented with Material-UI. User can browse through all the categories of images.

![gif of categories](https://user-images.githubusercontent.com/26663031/28739323-ed02f212-73ae-11e7-9e33-8dfa98e595cb.gif)


### Masonry Image Grid
All the photos in the content page are implemented with react-Masonry, a javascript grid library. Upon image click, it will render a full-size image modal.

![gif of imageGrid](https://user-images.githubusercontent.com/26663031/28739268-70ff4012-73ae-11e7-89d6-58cd55fa5223.gif)

### Sample Code

The site uses categories to render pictures under each tab. Instead of creating multiple container that did the same thing, I created a templateTab that takes in props.

```javascript
class templateTab extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
       title: "",
       description: "",
       image_url: "",
       tags: "",
       open: false,
       loading: true,
       photosLists: props.photos
      };
      this.componentDidMount = this.componentDidMount.bind(this);
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }
  }
```

And depending on the props, the template Tab returns different sets of images.

```javascript
return (
  <Masonry
      className={'my-gallery-class'}
      elementType={'ul'}
      options={masonryOptions}
      disableImagesLoaded={false}
      updateOnEachImageLoad={false}
      key={elements.title}
  >
      {elements}
      {modal()}
  </Masonry>
);
```

```javascript
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
```

By matching state to props and dispatching the container. We are able to more smoothly render the images as the container only renders depending on the state.

```javascript
switchTab(state) {
 switch(state) {
   case 0:
     return <DiscoverContainer/>;
   case 1:
     return <SeascapeContainer/>;
   case 2:
     return <WildlifeContainer/>;
   case 3:
     return <PeopleContainer/>;
   case 4:
     return <OtherContainer/>;
   case 5:
     return <PhotosIndexContainer/>;
   default:
     return <DiscoverContainer/>;
 }
}
```

### Challenges
  Due to the nature of the detail-heavy images, keep the site from slow performance has been a challenge. I had to think of different to render images that made it less taxing on computers, this included loading bars and only rendering what was necessary.  

## Future Improvements

### Infinite Scroll
  Having Infinite Scroll will optimize page load, which will allow users to scroll through many images in content page more efficiently

### likes and comments
User should be able to like an image, comment on an image. Once like and comments have been implemented, an Popular Category could be implemented so User can browse through heavily liked images.


### User Profile
User should be able to edit their profile, upload a cover photo, be able to view photos that belong to them. Users should also be able to view each others profiles as well.

### Loading Screen
  Implement a loading screen for when the browser is busy rendering all the images fetched from Cloudinary.
