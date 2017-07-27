import { values, filter } from 'lodash';

  let photoGallery;

export const selectUserPhotos = ({ photos }) => {
   photoGallery = values(photos.photos).reverse();
   return photoGallery;
};


export const selectTagPhotos = ({ photos}, tagId) => {
photoGallery = values(photos.photos).reverse();
return filter(photoGallery, (photo) => (
  photo.tag_ids[0] === tagId
));
};

export const selectSeascapePhotos = ({ photos }) => {
  photoGallery = values(photos.photos).reverse();
  return filter(photoGallery, (photo) => (
    photo.tag_ids[0] === 13
  ));
};

export const selectPeoplePhotos = () => {
  return filter(photoGallery, (photo) => (
    photo.tag_ids[0] === 14
  ));
};

export const selectWildlifePhotos = () => {
  return filter(photoGallery, (photo) => (
    photo.tag_ids[0] === 15
  ));
};

export const selectOthersPhotos = () => {
  return filter(photoGallery, (photo) => (
    photo.tag_ids[0] === 16
  ));
};


// _.filter(photos, photo => photo.tagId === id);
// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [2, 4, 6]
