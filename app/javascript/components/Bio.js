import React from 'react';
import ListenCTA from 'images/ListenCTA';
import WatchCTA from 'images/WatchCTA';

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

        <div className='cta-container'>
          <div className='left-cta cta-image'>
            <a href='https://soundcloud.com/themfalcons' target='_blank'>
              <img src={ListenCTA} />
            </a>
          </div>

          <div className='right-cta cta-image'>
            <a href='https://vimeo.com/user61592768' target='_blank'>
              <img src={WatchCTA} />
            </a>
          </div>

          <div className='clearfix'></div>
        </div>
      </div>
    );
  }
}

export default Bio;