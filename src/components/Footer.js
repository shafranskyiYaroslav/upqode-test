import React from 'react';

const Footer = () => {
  const facebook = require('../images/facebook.png');
  const google = require('../images/google.png');
  const twitter = require('../images/twitter.png');
  const dribbble = require('../images/dribbble.png');
  return (
    <footer>
      <p id='license'>Copyright © Company. All Rights Reserved 2016</p>
      <div id='links-div'>
        <a href='#'>
          <img src={facebook} alt='facebook-link' className='links' id='facebook' ></img>
        </a>
        <a href='#'>
          <img src={google} alt='google-link' className='links' id='google' ></img>
        </a>
        <a href='#'>
          <img src={twitter} alt='twitter-link' className='links' id='twitter' ></img>
        </a>
        <a href='#'>
          <img src={dribbble} alt='dribbble-link' id='dribbble' ></img>
        </a>
      </div>
    </footer>
  )
}

export default Footer;
