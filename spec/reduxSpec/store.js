import store from '../../src/store/store.js';
import { mockStore, mockThunk } from './reduxMocks.jsx';

// debugger;
describe('store', function() {
  it('should be an instance of a redux store', function() {
    var expected = Object.keys(mockStore);
    var actual = Object.keys(store);
    // debugger;
    // unclear why these first two tests are failing
    // there's a 'liftedStore' key in addition to the 4 they want
    expect(actual).to.deep.equal(expected);
  });
  it('should have a state with a .currentVideo field', function() {
    // debugger;
    expect(store.getState().currentVideo).to.be.null;
  });
  it('should have a state with a .videoList field', function() {
    expect(store.getState().videoList).to.be.an('array');
  });
  it('should have Redux Thunk applied as middleware', function() {
    expect(store.dispatch.bind(store, mockThunk())).to.not.throw();
  });
});
