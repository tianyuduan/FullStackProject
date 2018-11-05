import { connect } from 'react-redux';
import Wildlife from './templateTab.jsx';
import { selectUserPhotos } from '../../reducers/selectors.js';
import { selectWildlifePhotos, selectTagPhotos } from '../../reducers/selectors.js';
import { fetchPhotos, fetchPhoto, updatePhoto, deletePhoto, createPhoto }
from '../../actions/photo_actions.js';
import {  fetchTags, fetchTag }
from '../../actions/tag_actions.js';
import { find } from 'lodash';

const tagHelper = ({tags}) => {
  let obj =  find(tags, tag => (tag.tag_name === "Fish"));
  return obj.id;
};


const mapStateToProps = state => {
  return {
    photos: selectTagPhotos(state, tagHelper(state)),
    session: state.session,
    tags: state.tags,
  };
};


const mapDispatchToProps = dispatch => ({
  fetchPhotos: (userid) => dispatch(fetchPhotos(userid)),
  fetchPhoto: (id) => dispatch(fetchPhoto(id)),
  createPhoto: (photo) => dispatch(createPhoto(photo)),
  deletePhoto: (id) => dispatch(deletePhoto(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wildlife);
