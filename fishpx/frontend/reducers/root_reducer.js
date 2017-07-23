import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import photoReducer from './photo_reducer.js';

const RootReducer = combineReducers({
  session: SessionReducer,
  photos: photoReducer
});

export default RootReducer;
