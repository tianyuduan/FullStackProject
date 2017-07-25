import merge from 'lodash/merge';

import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO,
  RECEIVE_ERRORS
} from '../actions/photo_actions';

const initialState = Object.freeze({
  byId: {},
  errors: []
});

const photoReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTOS:
      // const allPhotos = merge ({},
        // {[action.photos.id]: state},
        // {[action.photos.id]: action.photos.id});
      // return allPhotos;
      // let photos;
      // for (let i = 0; i < action.photos.length; i++) {
      //  }
      //  return photos;
      return merge({}, state, {byId: action.photos});
    case RECEIVE_PHOTO:
    const newPhoto = merge({},
      {[action.photo.id]: state},
      {[action.photo.id]: action.photo});
        //const newPhoto = {[action.photos.id]: action.photos};
        // return merge({}, state, newPhoto);
        return newPhoto;
    case REMOVE_PHOTO:
      let nextState = merge({}, state);
      delete nextState[action.photo.id];
        return nextState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, initialState, {
        errors
      });
    default:
      return state;
  }
};

export default photoReducer;
