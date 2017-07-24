import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from "./session_form/session_form_container.js";
import ModalSessionContainer from './modal_session/modal_session_container.js';
import { AuthRoute } from '../util/route_util.jsx';
import  HeaderHome from './header/header.jsx';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <div>
    <header>
      <GreetingContainer/>
    </header>
  </div>
);

export default App;
