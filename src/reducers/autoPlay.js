const autoPlayReducer = (state, action) => {
  state = state || 0; // do we need this??
  if (action.type === 'TOGGLE_AUTOPLAY') {
    // if it's 0 , set to 1 & vice versa
    return state ? 0 : 1;
  } else {
    return state;
  }
}

export default autoPlayReducer;