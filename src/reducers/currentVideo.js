import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  state = state || null;
  if (action.type === 'CHANGE_VIDEO') {
    let newVideo = { video: action.video };
    if (newVideo.video === undefined) {
      return state;
    } else {
      return newVideo.video;
    }
  } else {
    return state;
  }
};

export default currentVideoReducer;
