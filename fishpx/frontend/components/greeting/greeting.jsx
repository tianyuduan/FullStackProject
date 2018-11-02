import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

import GridListExampleSimple from '../image_grid/image_grid.jsx';
import ModalSessionContainer from '../modal_session/modal_session_container.js';
import HeaderHome from '../header/header.jsx';
import ContentHome from '../content/content.jsx';

import ModalUploadContainer from '../modal_upload/modal_upload_container.js';
import FooterHome from '../footer/footer.jsx';
import Logo from '../logo/logo.jsx';
import TabsExampleSimple from './greeting_tab.jsx';

import SettingsDropContainer from '../widgets/settings_drop_container.js';
injectTapEventPlugin();


const Main = () => (
    <h1>
      <Logo></Logo>
      <SettingsDropContainer/>
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
    <ContentHome></ContentHome>

    <div className = "after-header-text-container">
      <div>The Top Photos Chosen By You</div>
      <div className='description1'>Become part of a community that celebrates incredible photography.</div>
    </div>

    <div className='MainContent'>

    <div>
    <GridListExampleSimple/>
    </div>

      <div className = "after-grid-text-container">
        <div>Get motivated to share your best work</div>
        <div className='description'>Become part of a community that celebrates incredible photography.</div>
      </div>

    </div>

      <hr></hr>
      <FooterHome/>
  </nav>

);

export const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name"></h2>
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
