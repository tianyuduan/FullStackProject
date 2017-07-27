import merge from 'lodash/merge';

import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  RECEIVE_ERRORS
} from '../actions/tag_actions';

const initialState = Object.freeze({
  tag_ids: [],
  errors: []
});

const tagReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TAGS:
      // const allPhotos = merge ({},
        // {[action.photos.id]: state},
        // {[action.photos.id]: action.photos.id});
      let photosAll =  merge({}, state, {photos: action.photos});
      return photosAll;
    case RECEIVE_TAG:
    let newState = merge({}, state );
       newState.photos[action.photo.id ] = action.photo;
       return newState;
        //const newPhoto = {[action.photos.id]: action.photos};
        // return merge({}, state, newPhoto);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, initialState, {
        errors
      });
    default:
      return state;
  }
};

export default tagReducer;
