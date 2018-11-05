import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './util/session_api_util.js';
import configureStore from './store/store.js';
import Root from './components/root.jsx';

const CLOUDINARY_URL = 	'https://api.cloudinary.com/v1_1/djubcegxh/upload';
const CLOUDINARY_UPLOAD_PRESET = 'jgyw65qw';
let imgPreview = document.getElementById('img-preview');
let fileUpload = document.getElementById('file-upload');


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
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  //test end

  ReactDOM.render(<Root store={store} />, root);
});

if (fileUpload) {
fileUpload.addEventListener('change', function(event) {
  let file = event.target.files[0];
  let formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  window.axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded'
    },
    data: formData
  }).then(function(res) {
    imgPreview.src = res.data.secure_url;
  });

});
}
