import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class ModalSession extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      open: false,
      formType: "Login"
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
  }

  handleOpen(formType) {
    return () => (this.setState({open: true, formType: formType}));
  }

  handleClose() {
    this.setState({open: false});
  }


  handleSubmitLogin(e) {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const user = {username: username, password: password};
    this.props.login({user});
  }

  handleSubmitSignup(e) {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const user = {username: username, password: password};
      this.props.signup({user});
  }
  //
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/');
  //   }
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  // navLink() {
  //   if (this.props.formType === 'login') {
  //     return <Link to="/signup">sign up instead</Link>;
  //   } else {
  //     return <Link to="/login">log in instead</Link>;
  //   }
  // }

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
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Login"
        primary={true}
        disabled={false}
        onClick = {this.handleSubmitLogin}
        onTouchTap={this.renderErrors() ? this.renderErrors : this.handleClose}
      />,
    ];

    const actions2 = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Sign Up"
        primary={true}
        disabled={false}
        onClick = {this.handleSubmitSignup}
        onTouchTap={this.renderErrors() ? this.renderErrors : this.handleClose}
      />,
    ];

    return (
      <div className="Login-form-container">
        <RaisedButton label="Log In" onTouchTap={this.handleOpen("Login")} />
        <RaisedButton label="Sign Up" onTouchTap={this.handleOpen("Signup")} />
        <Dialog
          title="Welcome to FishPx"
          actions={ this.state.formType === "Login" ? actions : actions2}
          modal={true}
          open={this.state.open}
        >
          Please input your user credentials
              {this.renderErrors()}

        <div className="login-form">
          <br/>
          <label className="inputLabel" >Username:
          </label>
          <TextField id="1" className="textfield1" type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="login-input"
            hintText="  John Doe "
            />
          <br/>
          <label className="passwordLabel">Password:
          </label>
            <TextField id="2" type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

export default withRouter(ModalSession);
