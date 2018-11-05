import { connect } from 'react-redux';
import Discover from './templateTab.jsx';
import { selectUserPhotos } from '../../reducers/selectors.js';
import { selectTagPhotos, selectShufflePhotos } from '../../reducers/selectors.js';

import { fetchPhotos, fetchPhoto, updatePhoto, deletePhoto, createPhoto }
from '../../actions/photo_actions.js';


const mapStateToProps = state => {
  return {
    photos: selectShufflePhotos(state),
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
)(Discover);
