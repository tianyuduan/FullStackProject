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
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }


  handleSubmitLogin(e) {
    e.preventDefault();
    const user = this.state;
    console.log(this);
    this.props.login({user});
  }

  handleSubmitSignup(e) {
    e.preventDefault();
    const user = this.state;
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
    // console.log(this.props);
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={false}
        onTouchTap={this.handleClose}
        onClick = {this.handleSubmitLogin}
      />,
    ];

    return (
      <div className="form-container">
        <RaisedButton label="Log In" onTouchTap={this.handleOpen} />
        <RaisedButton label="Sign Up" onTouchTap={this.handleOpen} />
        <Dialog
          title="Welcome to FishPx"
          actions={actions}
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
