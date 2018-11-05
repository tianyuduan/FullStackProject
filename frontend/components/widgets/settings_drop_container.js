
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SettingsDrop from './settings_drop.jsx';
import { selectUserPhotos } from '../../reducers/selectors.js';
import { fetchPhotos, fetchPhoto, updatePhoto, deletePhoto, createPhoto}
from '../../actions/photo_actions.js';

import { fetchTags, fetchTag}
from '../../actions/tag_actions.js';


const tagHelper = ({tags}) => {

  return Object.keys(tags).map((key) => (
      {
        textKey: tags[key].tag_name,
        valueKey: tags[key].id,
      }
  ));
};

const mapStateToProps = (state) => {

  return {
    photos: selectUserPhotos(state),
    session: state.session,
    tagData: tagHelper(state)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPhotos: (userid) => dispatch(fetchPhotos(userid)),
  fetchPhoto: (id) => dispatch(fetchPhoto(id)),
  updatePhoto: (photo) => dispatch(updatePhoto(photo)),
  createPhoto: (photo) => dispatch(createPhoto(photo)),
  deletePhoto: (id) => dispatch(deletePhoto(id)),
  fetchTags: () => dispatch(fetchTags()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsDrop);
