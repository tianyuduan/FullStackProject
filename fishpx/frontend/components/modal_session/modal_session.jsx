import React from 'react';
import { Link, withRouter } from 'react-router-dom';


import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class ModalSession extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    console.log(user);
    this.props.processForm({user});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    console.log(this.props);
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div className="login-form-container">
        <RaisedButton label="Sign In" onTouchTap={this.handleOpen} />
        <Dialog
          title="Welcome to FishPx"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Please input your user credentials

      Please {this.props.formType} or {this.navLink()}
      <form onSubmit={this.handleSubmit} className="login-form-box">
        <div className="login-form">
          <br/>
          <label>Username:
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
            />
          </label>
          <br/>
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
          </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
        </Dialog>
      </div>
    );
  }
}

export default withRouter(ModalSession);
