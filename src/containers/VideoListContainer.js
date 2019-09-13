import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

// define mapStateToProps
const mapStateToProps = state => {
  return {
    videos: state.videoList
  }
}
// define mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    // we need this here because this click handler is passed from this component (VideoList), to it's child (VideoListHandler) through normal React props (ie, NOT redux.
    // There's no container component for the VideoListEntry presentational component)
    handleVideoListEntryTitleClick: video => {
      dispatch(changeVideo(video));
    }
  }
}

var VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action dispatchers with your VideoList component props.

export default VideoListContainer;
