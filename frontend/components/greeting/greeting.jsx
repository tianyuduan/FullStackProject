import React from 'react';
import { Link } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';

import GridListExampleSimple from '../image_grid/image_grid.jsx';
import ModalSessionContainer from '../modal_session/modal_session_container.js';
import HeaderHome from '../header/header.jsx';
import ContentHome from '../content/content.jsx';

import ModalUploadContainer from '../modal_upload/modal_upload_container.js';
import FooterHome from '../footer/footer.jsx';
import Logo from '../logo/logo.jsx';
import TabsExampleSimple from './greeting_tab.jsx';
import CircularProgressSimple from '../widgets/loading.jsx';


import AvatarCurrentUser from '../widgets/avatar.jsx';
injectTapEventPlugin();


const Main = () => (
    <h1>
      <Logo></Logo>
      <AvatarCurrentUser></AvatarCurrentUser>
      <ModalUploadContainer/>
      <HeaderHome></HeaderHome>
      <div className="tabsCss">
        <TabsExampleSimple className= "tabsCsss"></TabsExampleSimple>
      </div>

    </h1>
);

const grid = () => (
  <nav className="image_grid">
    <Logo></Logo>
    <tabView/>
    <ModalSessionContainer/>
    <ContentHome/>

    <div className = "after-header-text-container">
      <div>The Top Photos Chosen By You</div>
      <div className='description'>Become part of a community that celebrates incredible photography.</div>
    </div>

    <GridListExampleSimple/>

      <div className = "after-grid-text-container">
        <div>Get motivated to share your best work</div>
        <div className='description'>Become part of a community that celebrates incredible photography.</div>
      </div>
      <hr></hr>
      <FooterHome/>
  </nav>

);

export const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <div className='logout-wrap'>
    <FlatButton label="Log Out"
      className="logout-button"
      onClick={logout}
      labelStyle={{ color: 'white',
        fontSize: 16,
        fontFamily: "sans-serif",
        fontWeight: "bold",
        textShadow: "1px 1px #0C090A"
      }}
      disabled={false}
      className="upload"
      style={{width: '150px',
        borderRadius: "10px"
      }}
      />
    </div>
    <Main />
	</hgroup>
);


export const logOut = (logout) => (
  <RaisedButton className="header-button" onClick={logout}>Log Out</RaisedButton>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : grid()
);

export default Greeting;


//styling
