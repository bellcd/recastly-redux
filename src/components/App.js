import React from 'react';

// I belive these import statements are no longer required here ...
// import VideoList from './VideoList.js';
// import VideoPlayer from './VideoPlayer.js';
// import Search from './Search.js';

import SearchContainer from '../containers/SearchContainer.js';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import AutoPlayContainer from '../containers/AutoPlayContainer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    // now uneeded
    // this.state = {
    //   videos: [],
    //   currentVideo: null
    // };
    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  }

  componentDidMount() {
    this.getYouTubeVideos('react tutorials');
    console.log('this.props.store', this.props.store);
  }

  // I believe we've moved all of this functionality to happen in other modules

  // handleVideoListEntryTitleClick(video) {
  //   this.setState({currentVideo: video});
  // }

  getYouTubeVideos(query) {
    // debugger;
    var options = {
      key: this.props.API_KEY,
      query: query,
      autoplay: this.props.store.getState().autoPlay // ??
    };

    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
  }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            {/* switching the <Search> presentational component with the <SearchContainer> container component */}
            {/* <Search getYouTubeVideos={this.getYouTubeVideos}/> */}
            <SearchContainer/>
            <AutoPlayContainer/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* switching the <VideoPlayer> presentational component with the <VideoPlayerContainer> container component */}
            <VideoPlayerContainer/>
          </div>
          <div className="col-md-5">
            {/* switching the <VideoList> presentational component with the <VideoListContainer> container component */}
            {/* <VideoList
              handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
              videos={this.state.videos}
            /> */}
            <VideoListContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
