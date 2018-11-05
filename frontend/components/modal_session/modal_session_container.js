import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import ModalSession from './modal_session.jsx';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};
//location is a prop from react router
const mapDispatchToProps = (dispatch) => ({
login: (user) => dispatch(login(user)),
signup: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalSession);
