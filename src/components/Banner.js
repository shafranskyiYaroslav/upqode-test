import React from 'react';

function Banner() {
  const leftArrow = require('../images/left-arrow.png');
  const rightArrow = require('../images/right-arrow.png');
  const darkDot = require('../images/dark-dot.png');
  const brightDot = require('../images/bright-dot.png');
  return (
    <div id='banner-div'>
      <p id='banner-title'><span id='creative'>CREATIVE</span> DESIGN AGENCY</p>
      <p id='banner-p'>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit <br />
          non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.
      </p>
      <div id='left-banner-arrow' className='banner-arrow' >
        <img src={leftArrow} alt='left-arrow' className='arrow-image' id='left-arrow-image' />
      </div>
      <div id='right-banner-arrow' className='banner-arrow' >
        <img src={rightArrow} alt='right-arrow' className='arrow-image' id='right-arrow-image' />
      </div>
      <div id='banner-dots'>
        <img src={darkDot} alt='dark-dot1' id='dark-dot1' />
        <img src={brightDot} alt='bright-dot' id='bright-dot' />
        <img src={darkDot} alt='dark-dot2' id='dark-dot2' />
      </div>
    </div>
  )
}

export default Banner;
