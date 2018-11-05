import { connect } from 'react-redux';
import SeaScape from './templateTab.jsx';
import { selectUserPhotos } from '../../reducers/selectors.js';
import { selectTagPhotos } from '../../reducers/selectors.js';

import { fetchPhotos, fetchPhoto, updatePhoto, deletePhoto, createPhoto }
from '../../actions/photo_actions.js';
import { find } from 'lodash';

const tagHelper = ({tags}) => {
  let obj =  find(tags, tag => (tag.tag_name === "Seascape"));
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
)(SeaScape);
