import merge from 'lodash/merge';

import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO,
  RECEIVE_ERRORS
} from '../actions/photo_actions';

const nullPhoto = Object.freeze({
      title: "",
     description: "",
     user_id: null,
     photo_id: null,
     like_ids: [],
     tag_ids: [],
     errors: []
});

const photoReducer = (state = nullPhoto, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTOS:
        return merge({}, action.photos);
    case RECEIVE_PHOTO:
     const newPhoto = {[action.photo.id]: action.photo};
        return merge({}, state, newPhoto);
    case REMOVE_PHOTO:
      let nextState = merge({}, state);
      delete nextState[action.photo.id];
        return nextState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullPhoto, {
        errors
      });
    default:
      return state;
  }
};

export default photoReducer;
