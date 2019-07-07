import React from 'react';

function About() {
  const photoshop=require('../images/photoshop.png');
  const phone=require('../images/ipad-mockup.png');
  return (
    <section id='about-section'>
      <div id='about-info'>
        <h3 id='about-h3'>about <span id='us'>us</span></h3>
        <p id='about-title-p'>
          Quisque fermentum, nisl mattis volutpat rhoncus, tellus est congue nibh, ut euism<br/>
          Nullam at scelerisque tellus mattis volutpat rhoncus.
        </p>
        <p id='about-p'>
          Nullam at scelerisque tellus. Nulla feugiat iaculis ante, non tincidunt ligula<br/>
          scelerisque a. Vestibulum acuumsan tincidunt odio vel finibus. Phasellus vestibulum<br/>
          lobortis ligula ut vluptat. Maecenas vitae nibh vel purus mollis semper. Nullam<br/>
          tempus feugiat mi id semper. Pellentesque ao posuere augue, vitae mollis enim.<br/>
          Etiam et ullamcorper dolor, a hendrerit quam.
        </p>
        <div className='skills'>
          <h5 className='skills-title'>photoshop</h5>
          <h5 className='skills-title'>79%</h5>
        </div>
        <div className='wrappers'>
          <img src={photoshop} id='photoshop' alt='photoshop' className='tapes'></img>
        </div>
        <div className='skills'>
          <h5 className='skills-title'>html/css</h5>
          <h5 className='skills-title'>90%</h5>
        </div>
        <div className='wrappers'>
          <img src={photoshop} id='html-css' alt='html-css' className='tapes'></img>
        </div>
        <div className='skills'>
          <h5 className='skills-title'>javascript</h5>
          <h5 className='skills-title'>69%</h5>
        </div>
        <div className='wrappers'>
          <img src={photoshop} id='javascript' alt='javascript' className='tapes'></img>
        </div>
        <div className='skills'>
          <h5 className='skills-title'>wordpress</h5>
          <h5 className='skills-title'>92%</h5>
        </div>
        <div className='wrappers'>
          <img src={photoshop} id='wordpress' alt='wordpress' className='tapes'></img>
        </div>
      </div>
      <div id='phone'>
        <img id='phone-image' src={phone} alt='phone'></img>
      </div>
    </section>
  )
}

export default About;
