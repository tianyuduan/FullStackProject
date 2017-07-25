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
import HeaderHome from '../header/header.jsx';
import ContentHome from '../content/content.jsx';
import PhotosIndexContainer from '../photos/photos_index_container.js';
import ModalUploadContainer from '../modal_upload/modal_upload_container.js';
import FooterHome from '../footer/footer.jsx';
import Logo from '../logo/logo.jsx';
import ShowMoreButton from '../widgets/show_more_button.jsx';
import tabView from '../widgets/tabs.jsx';

injectTapEventPlugin();


const Main = () => (
    <h1>
    <HeaderHome></HeaderHome>
      <tabView/>
    <PhotosIndexContainer/>
    <ModalUploadContainer/>

    </h1>
);

const grid = () => (
  <nav className="image_grid">
    <Logo></Logo>
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
