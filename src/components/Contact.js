import React from 'react';

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      user: '',
      email: '',
      message: '',
      like: false,
      isEmailListHidden: true
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCheck = (event) => {
    this.setState(prevState => {
      return ({
        like: !prevState.like
      })
    })
  }

  showEmails = () => {
    this.setState(prevState => {
      return({
        isEmailListHidden: !prevState.isEmailListHidden
      })
    })
  }

  formSubmit = (event) => {
    event.preventDefault();
    console.log('Any action can be here!')
  }

  render() {
    const style = this.state.isEmailListHidden ? {display: 'none'} : {display: 'block'};
    const arrow = require('../images/arrow.png');
    return (
      <section id='contact-section' className='clearfix'>
        <div id='contact-div' className='clearfix'>
          <div id='emails-div' className='clearfix' style={style}>
            <ul id='emails-ul'>
              <li className='email-items'>somename@mail.com,</li>
              <li className='email-items'>name@mail.com,</li>
              <li className='email-items'>yourname@mail.com</li>
            </ul>
          </div>
          <form id='contact-form' onSubmit={this.formSubmit} >
            <input
              id='user-input'
              type='text'
              className='contact-inputs'
              name='user'
              placeholder='Full Name'
              value={this.state.user}
              onChange={this.handleChange} />
            <input
              id='email-input'
              type='text'
              className='contact-inputs'
              name='email'
              placeholder='E-Mail Address'
              onChange={this.handleChange}
              value={this.state.email}
              onSubmit={this.formSubmit}/>
            <img src={arrow} id='arrow' alt='arrow' onClick={this.showEmails} /><br/>
            <textarea
              value={this.state.message}
              onChange={this.handleChange}
              name='message'
              placeholder='Message'
              id='contact-textarea' /><br/>
            <label id='contact-label'>
            <input id='contact-checkbox' type='checkbox' checked={this.state.like} onChange={this.handleCheck} />
            <span id='like-span'>I like your company</span>
            </label>
            <button id='send-button' onSubmit={this.formSubmit}><span id='send-span'>Send</span></button>
          </form>
          <div id='contact-data'>
            <p id='contact-address'>
              69/A, Some Street Name<br/>
              Your City, code 01234<br/>
              Country Name
            </p>
            <p id='contact-phone'>
              +880 123 456 78 98<br/>
              +860 987 648 74 95
            </p>
            <p id='contact-mail'>
              company@mail.com<br/>
              sales@mail.com
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;
