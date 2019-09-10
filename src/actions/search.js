import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = q => {
  //TODO:  Write an asynchronous action to handle a video search!

  let obj = {
    query: q,
    key: YOUTUBE_API_KEY
  };

  return function(dispatch) {
    return searchYouTube(obj, data => {
      debugger;
      console.log('we got to search you tube');
      // console.log(changeVideoList(data))
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    });
  };
};

export default handleVideoSearch;

// changeVideoList = searchYoutTube(q)
// new messages
// {type:}
