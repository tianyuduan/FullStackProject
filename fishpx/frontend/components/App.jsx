import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from "./session_form/session_form_container.jsx";
import ModalSessionContainer from './modal_session/modal_session_container.jsx';
import HomePageContainer from './homepage/homepage_container.js';
import { AuthRoute } from '../util/route_util.jsx';
import  GridListExampleSimple from './image_grid/image_grid.jsx';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <div>

    <header>
      <GreetingContainer/>
    </header>

    <Switch>
       <AuthRoute path="/login" component={ModalSessionContainer} />
       <AuthRoute path="/signup" component={ModalSessionContainer} />
   </Switch>
  </div>
);

export default App;
