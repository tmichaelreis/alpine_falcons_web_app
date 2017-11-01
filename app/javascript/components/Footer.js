import React from 'react';
import Facebook from 'images/social/Facebook';
import Instagram from 'images/social/Instagram';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <a className='email-link' href='mailto:hi@alpinefalcons.com'>hi@alpinefalcons.com</a>
        <div className='social-links'>
          <a className='social-link' href='https://www.facebook.com/alpinefalcons'>
            <img src={Facebook} />
          </a>
          <a className='social-link' href='https://www.instagram.com/alpinefalcons/'>
            <img src={Instagram} />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer;