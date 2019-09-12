import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

import { composeWithDevTools } from 'redux-devtools-extension'; // additional NPM package
// TODO:  Create your redux store, apply thunk as a middleware, and export it!

// TODO: compose is used here to get the chrome browser extension redux dev tools working
const composeEnhancers = composeWithDevTools({});
const store = createStore(rootReducer,
  {videoList: exampleVideoData, currentVideo: exampleVideoData[0]},
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

// const store = createStore(rootReducer, {videos: exampleVideoData, video: exampleVideoData[0]}, applyMiddleware(thunk));

export default store;
