import React from 'react';
import { FormErrors } from './FormErrors'
import $ from 'jquery';

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
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let bodyValid = this.state.bodyValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Please provide us with valid contact information so we can respond to your request.';
        break;
      case 'body':
        bodyValid = value.length > 0;
        fieldValidationErrors.body = bodyValid ? '': 'Please tell us more about your request.';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    bodyValid: bodyValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.bodyValid});
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
    console.log(this);
    var self;

    e.preventDefault();
    self = this;

    console.log(this.state);

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
    var csrfToken = $('meta[name=csrf-token]').attr('content');

    return (
      <form className='component-contact_form' onSubmit={(e) => this.submit(e)}>
        <div className='error-container'>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <input type='hidden' name='_method' value='patch' />
        <input type='hidden' name='utf8' value='✓' />
        <input type='hidden' name='authenticity_token' value={csrfToken} />
        <div>
          <label htmlFor='subject'>What can we do for you?</label>
          <input type='text' className='form-control' name='subject'
            placeholder='Play my venue!'
            value={this.state.subject}
            onChange={this.handleUserInput} />
        </div>
        <div className={'form-group ${this.errorClass(this.state.formErrors.body)}'}>
          <label htmlFor='body'>Tell us more</label>
          <textarea required name='body'
            placeholder='We need a killer band next month. Give me a call...'
            value={this.state.body}
            onChange={this.handleUserInput}  />
        </div>
        <div>
          <label htmlFor='name'>Your Name</label>
          <input type='text' className='form-control' name='name'
            placeholder='Jenny Falcona'
            value={this.state.name}
            onChange={this.handleUserInput} />
        </div>
        <div className={'form-group ${this.errorClass(this.state.formErrors.email)}'}>
          <label htmlFor='email'>How to reach you</label>
          <input type='email' required className='form-control' name='email'
            placeholder='you@somewhere.com'
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        <button type='submit' id='submit_contact' className='btn btn-primary' disabled={!this.state.formValid}>Submit</button>
      </form>
    );
  }
}

export default Contact;