import * as APIUtil from '../util/tag_api_util.js';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchTags = () => dispatch => (
    APIUtil.fetchTags().then(
      tags => (dispatch(receiveTags(tags))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const fetchTag = id => dispatch => (
    APIUtil.fetchTag(id).then(
      tag => (dispatch(receiveTag(tag))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);
