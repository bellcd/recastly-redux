import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';
import autoPlay from './autoPlay.js';


// TODO: what determines the key names of the properties in the store?
// Is it the names of the reducers that we pass into combineReducers() below?
const rootReducer = combineReducers({ currentVideo, videoList, autoPlay });

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
