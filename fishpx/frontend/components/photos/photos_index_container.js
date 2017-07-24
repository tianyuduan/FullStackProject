import { connect } from 'react-redux';
import PhotosIndex from './photo_index';
import {selectUserPhotos} from '../../reducers/selectors';

import { fetchPhotos, fetchPhoto, updatePhoto, deletePhoto}
from '../../actions/photo_actions.js';

const mapStateToProps = state => {

  return {
    photos: selectUserPhotos(state)
  };
};


const mapDispatchToProps = dispatch => ({
  fetchPhotos: (userid) => dispatch(fetchPhotos(userid)),
  fetchPhoto: (id) => dispatch(fetchPhoto(id)),
  updatePhoto: (photo) => dispatch(updatePhoto(photo)),
  deletePhoto: (id) => dispatch(deletePhoto(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosIndex);