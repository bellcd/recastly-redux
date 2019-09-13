import React from 'react';

class AutoPlay extends React.Component {
  render() {
    return (
      <div className="container">
        <label className="switch"><input onClick={this.props.handleAutoPlayClick} type="checkbox" />
        </label>
      </div>
    );
  }
}

// const autoPlay = () => {
//   return (
//     <div class="container">
//       <label class="switch"><input onClick={this.props.handleAutoPlayClick} type="checkbox" />
//       </label>
//     </div>
//   );
// }

export default AutoPlay;

