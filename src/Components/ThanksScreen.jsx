  
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ThanksScreen extends Component {
  render() {
    return (
      <div className="thanksScreen"> 
        <h1>Thanks for your message {this.props.userName} !</h1>
      </div>
    )
  }
}
ThanksScreen.propTypes = {
  userName: PropTypes.string
}
ThanksScreen.defaultProps = {
  userName: ''
}
export default ThanksScreen;