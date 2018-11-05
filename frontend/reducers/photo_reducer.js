import merge from 'lodash/merge';

import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO,
  RECEIVE_ERRORS
} from '../actions/photo_actions';

const initialState = Object.freeze({
  photos: {},
  errors: []
});

const photoReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTOS:
      let photosAll =  merge({}, state, {photos: action.photos});
      return photosAll;
    case RECEIVE_PHOTO:
    let newState = merge({}, state );
       newState.photos[action.photo.id ] = action.photo;
       return newState;
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
