import React from 'react';
import { FormErrors } from './FormErrors'
import $ from 'jquery';
import GoForthCTA from 'images/GoForthCTA';

class Contact extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      subject: '',
      body: '',
      name: '',
      email: '',
      formErrors: {email: '', body: ''},
      emailValid: false,
      bodyValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  validateForm() {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let bodyValid = this.state.bodyValid;

    emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    fieldValidationErrors.email = emailValid ? '' : 'Please provide us with valid contact information so we can respond to your request.';

    bodyValid = this.state.body.length > 0;
    fieldValidationErrors.body = bodyValid ? '': 'Please tell us more about your request.';

    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    bodyValid: bodyValid
                  });

    return (emailValid && bodyValid);
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  clearForm() {
    this.setState({
      subject: '',
      body: '',
      name: '',
      email: ''
    });
  }

  submit(e) {
    e.preventDefault();

    let formValid = this.validateForm();    

    if (formValid) {
      this.sendContact();
    }
  }

  sendContact() {
    var self = this;

    var data = {
      contact: {
        subject: this.state.subject,
        body: this.state.body,
        name: this.state.name,
        email: this.state.email
      }
    }

    // Submit form via jQuery/AJAX
    $.ajax({
      type: 'POST',
      url: '/contacts',
      data: data
    })
    .done(function(data) {
      self.clearForm()
    })
    .fail(function(jqXhr) {
      console.log('failed to submit contact info');
    });

    return false;
  }

  render() {
    return (
      <form className='contact_form' onSubmit={(e) => this.submit(e)}>
        <div className='error-container'>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className='form-group'>
          <label htmlFor='subject'>What can we do for you?</label>
          <input type='text' className='form-control' name='subject'
            placeholder='Play my venue!'
            value={this.state.subject}
            onChange={this.handleUserInput} />
        </div>
        <div className={'form-group ' + this.errorClass(this.state.formErrors.body)}>
          <label htmlFor='body'>Tell us more</label>
          <textarea name='body'
            placeholder='We need a killer band next month. Give me a call...'
            value={this.state.body}
            onChange={this.handleUserInput}  />
        </div>
        <div className='form-group'>
          <div className='inline-input'>
            <label htmlFor='name'>Your Name</label>
            <input type='text' className='form-control' name='name'
              placeholder='Jenny Falcona'
              value={this.state.name}
              onChange={this.handleUserInput} />
          </div>
          <div className={'inline-input ' + this.errorClass(this.state.formErrors.email)}>
            <label htmlFor='email'>How to reach you</label>
            <input type='email' className='form-control' name='email'
              placeholder='you@somewhere.com'
              value={this.state.email}
              onChange={this.handleUserInput}  />
          </div>
          <button type='submit' id='submit_contact' className='btn btn-primary'>
            <img src={GoForthCTA} />
          </button>
        </div>
      </form>
    );
  }
}

export default Contact;