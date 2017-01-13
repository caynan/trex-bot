import './css/style.css'

import Runner from './runner'

const initGame = (element, config) => {
  var _element = typeof element === 'string' ? document.querySelector( element ) : element;
  _element.classList.add( 'interstitial-wrapper' );
  return new Runner( _element, config );
}

export default initGame
