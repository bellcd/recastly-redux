import AutoPlay from '../components/AutoPLay.js';
import {connect} from 'react-redux';
import AutoPlayActionCreator from '../actions/AutoPlay.js';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAutoPlayClick: e => {
      // debugger;
      dispatch(AutoPlayActionCreator(e.target.checked)) // ??
    }
  }
}

const AutoPlayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoPlay);

export default AutoPlayContainer;