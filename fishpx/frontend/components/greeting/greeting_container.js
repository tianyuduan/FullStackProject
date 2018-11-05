
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { selectUserPhotos } from '../../reducers/selectors.js';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  photos: selectUserPhotos(state),
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
