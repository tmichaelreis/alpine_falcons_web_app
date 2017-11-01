import React from 'react';

class Bio extends React.Component {
  render() {
    return (
      <div className='bio'>
        <h2>
          Oh hi there!
        </h2>
        <h3>
          Thanks for stopping by to check us out. Here’s a little bit about us.
        </h3>
        <p>
          Soft, shouting, sweeping and sweet, Alpine Falcons’ adventurous soundscape varies about as
          widely as the weather patterns of Colorado. Featuring intricate vocal harmonies and emotional
          performances infused with infectious joy, this acoustic avalanche of five classically trained
          multi-instrumentalists draws influence from a broad range of popular artists such as Ed
          Sheeran, Maroon 5, Punch Brothers and (most frequently) Barenaked Ladies.
        </p>

        <p>
          With Alpine Falcons, no two shows are ever the same, save for two everlasting principles: bring
          quality music to good people, and share a few beers along the way.
        </p>
      </div>
    );
  }
}

export default Bio;