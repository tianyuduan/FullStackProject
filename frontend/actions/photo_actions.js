import * as APIUtil from '../util/photo_api_util.js';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  photo
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchPhotos = userid => dispatch => (
    APIUtil.fetchPhotos(userid).then(
      photos => (dispatch(receivePhotos(photos))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const fetchPhoto = id => dispatch => (
    APIUtil.fetchPhoto(id).then(
      photo => (dispatch(receivePhoto(photo))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const createPhoto = photo => dispatch => (
  APIUtil.createPhoto(photo).then(
    photo => (dispatch(receivePhoto(photo))
  ))
);

export const deletePhoto = id => dispatch => (
  APIUtil.deletePhoto(id).then(
    photo => (dispatch(removePhoto(photo))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updatePhoto = photo => dispatch => (
  APIUtil.updatePhoto(photo).then(
    photo => (dispatch(receivePhoto(photo))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

window.fetchPhotos = fetchPhotos;
window.fetchPhoto = fetchPhoto;
window.createPhoto = createPhoto;
window.deletePhoto = deletePhoto;
