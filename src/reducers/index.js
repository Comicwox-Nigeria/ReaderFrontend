import { combineReducers } from "redux";

import authReducer from './authReducer';
import comicReducer from './comicReducer';
import dashboardReducer from './dashboardReducer';
import errorReducer from './errorReducer';
import studioReducer from './studioReducer';

export default combineReducers({
   auth: authReducer,
   comic: comicReducer,
   dashboard: dashboardReducer,
   errors: errorReducer,
   studio: studioReducer
});
