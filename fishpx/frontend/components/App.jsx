import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from "./session_form/session_form_container.jsx";
import HomePageContainer from './homepage/homepage_container.js';
import { AuthRoute } from '../util/route_util.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <div>

    <header>
    <h1>🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟</h1>
    <MuiThemeProvider>
      <GreetingContainer />
    </MuiThemeProvider>
    </header>

    <Switch>
      <HomePageContainer />
       <AuthRoute path="/login" component={SessionFormContainer} />
       <AuthRoute path="/signup" component={SessionFormContainer} />
   </Switch>
  </div>
);

export default App;
