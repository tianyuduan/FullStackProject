import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Scroll from 'react-scroll';

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
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleOpen(formType) {
    return () => (this.setState({open: true, formType: formType}));
  }

  handleClose() {
    this.setState({open: false});
  }


  handleDemo(e) {
  e.preventDefault();
  const user = {username: 'GUEST', password: '123456'};
  this.props.login({user});
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

  handleScroll() {
    let scroll = Scroll.animateScroll;
    scroll.scrollTo(window.innerHeight + 100, {
      duration: 1000,
      delay: 100,
      smooth: true
    });
  }

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

        onTouchTap={this.renderErrors ? this.renderErrors : this.handleClose}
      />,
      <FlatButton
        label="Demo"
        primary={true}
        disabled={false}
        onClick = {this.handleDemo}
        onTouchTap={this.handleClose}

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
        onTouchTap={this.renderErrors ? this.renderErrors : this.handleClose}
      />,
      <FlatButton
        label="Demo"
        primary={true}
        disabled={false}
        onClick = {this.handleDemo}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div className="Login-form-container">
        <div className="login">
        <FlatButton label="Log In"
          labelStyle={{ color: 'white',
            fontSize: 14,
            fontFamily: "sans-serif",
            fontWeight: "bold",
            textShadow: "1px 1px #0C090A"
          }}
          disabled={false}
          onTouchTap={this.handleOpen("Login")}
          className="Login"
          style={{width: '150px',
            borderRadius: "10px"
          }}/>
        </div>
        <div className="signup">
        <FlatButton label="Sign Up"
          labelStyle={{ color: 'white',
            fontSize: 14,
            fontFamily: "sans-serif",
            textShadow: "1px 1px #0C090A",
          }}

          disabled={false}
          onTouchTap={this.handleOpen("Signup")}
          className="Signup"
          style={{width: '150px',
            }}/>
        </div>
        <div className="dialogWrap"> <Dialog
          title="Welcome to FishPx"
          actions={ this.state.formType === "Login" ? actions : actions2}
          modal={true}
          open={this.state.open}
        >

              {this.renderErrors()}

        <div className="login-form">
          <br/>
          <label className="inputLabel" >Username:
          </label>
          <TextField id="1" className="textfield1" type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="login-input"
            hintText="John Doe "
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
      </div>
    );
  }
}

export default withRouter(ModalSession);
