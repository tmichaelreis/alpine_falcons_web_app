import React from 'react';
import Hero from './Hero';
import Bio from './Bio';
import Contact from './Contact';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      subject: null,
      body: null
    };
  }

  render() {
    return (
      <div className='component-application'>
        <Hero />
        <Bio />
        <Contact />
      </div>
    );
  }
}

export default App;