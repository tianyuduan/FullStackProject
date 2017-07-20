import React from 'react';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';

import GridListExampleSimple from '../image_grid/image_grid.jsx';
import ModalSessionContainer from '../modal_session/modal_session_container.js';

injectTapEventPlugin();


const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
const Main = () => (
    <AppBar title="Welcome to Fish Px!" />
);

const grid = () => (
  <nav className="image_grid">
    <ModalSessionContainer/>
    <GridListExampleSimple/>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <Main />
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <RaisedButton className="header-button" onClick={logout}>Log Out</RaisedButton>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : grid()
);

export default Greeting;


//styling
