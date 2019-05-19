  
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import formValidate from '../utils/formValidate'

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      errors: {}
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (formValidate(this.state.firstName, this.state.lastName, this.state.email).formIsValid){
      localStorage.setItem('firstName', this.state.firstName);
      localStorage.setItem('lastName', this.state.lastName);
      localStorage.setItem('email', this.state.email);
      localStorage.setItem('message', this.state.message);
      this.props.updateForm(this.state.firstName);
    } else {
      this.setState({
        errors: formValidate(this.state.firstName, this.state.lastName, this.state.email).errors
      })
    }
  }
  
  render() {
    return (
      <div className="contactForm"> 
        <h1>Contact Us</h1>
        <div>
          <form>
            <label>First Name</label>
            <input 
              type="text" 
              id="firstname" 
              name="firstname" 
              placeholder="First name.."
              value={this.state.firstName}
              onChange={e => this.setState({ firstName: e.target.value })}
              required
              />
            <div className="errorMsg">{this.state.errors.firstname}</div>

            <label>Last Name</label>
            <input 
              type="text" 
              id="lastname" 
              name="lastname" 
              placeholder="Last name.."
              value={this.state.lastName}
              onChange={e => this.setState({ lastName: e.target.value })}
              required
            />
            <div className="errorMsg">{this.state.errors.lastname}</div>

            <label>Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Your email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              required
            />
            <div className="errorMsg">{this.state.errors.email}</div>

            <label>Message</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Write something.."
              value={this.state.message}
              onChange={e => this.setState({ message: e.target.value })}>
              required
            </textarea>

            <input type="submit" value="Submit" onClick={e => this.handleFormSubmit(e)}/>
          </form>
        </div>
      </div>
    )
  }
}
ContactForm.propTypes = {
  updateForm: PropTypes.func
}
ContactForm.defaultProps = {
  updateForm: () => {}
}
export default ContactForm;