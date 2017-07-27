import { connect } from 'react-redux';
import SeaScape from './seascape.jsx';
import { selectUserPhotos } from '../../reducers/selectors.js';
import { selectSeascapePhotos } from '../../reducers/selectors.js';

import { fetchPhotos, fetchPhoto, updatePhoto, deletePhoto, createPhoto }
from '../../actions/photo_actions.js';

const mapStateToProps = state => {
  return {
    photos: selectSeascapePhotos(state),
    session: state.session,
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
