import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import store from '../store/store.js';

var handleVideoSearch = q => {
  //TODO:  Write an asynchronous action to handle a video search!

  let obj = {
    query: q,
    key: YOUTUBE_API_KEY,
    autoplay: store.getState().autoPlay
  };

  return function(dispatch) {
    return searchYouTube(obj, data => {
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    });
  };
};

export default handleVideoSearch;