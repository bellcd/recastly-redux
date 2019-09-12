import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';
import handleVideoSearch from '../actions/search.js';

// TODO: not sure this is needed ... or at least having key:values in the return object
const mapStateToProps = state => {
  return {
    video: state.video,
    videos: state.videos
  };
}

const mapDispatchToProps = dispatch => {
  return {
    handleSearchInputChange: e => {
      debugger;
      dispatch(handleVideoSearch(e));
    }
  }
}

var SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);


//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
