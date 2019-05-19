import React, {Component} from 'react';
import ContactForm from './Components/ContactForm';
import ThanksScreen from './Components/ThanksScreen';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submited: false,
      userName: ''
    }
    this.updateForm = this.updateForm.bind(this);
  }
  updateForm(name) {
    this.setState({
      submited: true,
      userName: name
    });
  }

  render () {
    return (
      <div>
        <div className="logo"></div>
        {!this.state.submited &&
          <ContactForm 
            updateForm = {this.updateForm}
          />
        }
        {this.state.submited &&
          <ThanksScreen 
            userName = {this.state.userName }
          />
        }
      </div>
    );
  }
}

export default App;
