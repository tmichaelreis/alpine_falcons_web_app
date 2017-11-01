import React from 'react';
import Logo from 'images/Logo';

class Hero extends React.Component {
  render() {
    return (
      <header className='hero'>
        <img src={Logo} />
      </header>
    );
  }
}

export default Hero;