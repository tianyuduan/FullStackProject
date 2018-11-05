import merge from 'lodash/merge';

import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  RECEIVE_ERRORS
} from '../actions/tag_actions';

const initialState = Object.freeze({
});

const tagReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TAGS:
      let tagAll =  merge({}, initialState, action.tags);
      return tagAll;
    case RECEIVE_TAG:
       return merge({}, state, action.tag);
    default:
      return state;
  }
};

export default tagReducer;
