import React from 'react';

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
      <div>Hello, Falcons</div>
    );
  }
}

export default App