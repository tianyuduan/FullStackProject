import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './util/session_api_util.js';
import configureStore from './store/store.js';
import Root from './components/root.jsx';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //test
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  //test end

  ReactDOM.render(<Root store={store} />, root);
});
