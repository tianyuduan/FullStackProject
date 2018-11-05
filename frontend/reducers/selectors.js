import { values, filter, shuffle } from 'lodash';

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

export const selectShufflePhotos = ({ photos }) => {
   photoGallery = values(photos.photos).reverse();
   return shuffle(photoGallery);
};




// _.filter(photos, photo => photo.tagId === id);
// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [2, 4, 6]
