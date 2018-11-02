import { connect } from 'react-redux';
import PhotosIndex from '../tabs/templateTab.jsx';
import { selectUserPhotos } from '../../reducers/selectors.js';

import { fetchPhotos, fetchPhoto, updatePhoto, deletePhoto, createPhoto}
from '../../actions/photo_actions.js';

const mapStateToProps = state => {
  return {
    photos: selectUserPhotos(state),
    session: state.session,
    IsFetching: false,
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
)(PhotosIndex);
