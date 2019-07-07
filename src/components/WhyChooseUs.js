import React from 'react';
import Content from './Content';

class WhyChooseUs extends React.Component {
  constructor() {
    super();

    this.state = {
      icons: [<i className='far fa-heart'/>,
        <i className="far fa-comment-dots"/>,
        <i className="fas fa-laptop"/>,
        <i className="far fa-star"/>,
        <i className="far fa-flag"/>],
      isDesciptionHidden: true,
      isContentHidden: false
    }
  }

  render() {
    return (
      <section id='why-choose-us'>
        <h3 id='choose-h3'><span id='why'>why</span> choose us</h3>
        <p id='choose-p'>
          Quisque fermentm, nisl mattis volutpat rhoncus, tellus est congue nibh, ut euismod quam nisi quis felis.<br/>
          Nullam at scelerisque tellus mattis volutpat rhoncus,
        </p>
        <div id='choose-rows'>
          {
            this.state.icons.map((el, index) => (
              <div key={index} className='choose-particles'>
                <div className='icon'>{el}</div>
                <Content />
              </div>
            ))
          }
        </div>
      </section>
    )
  }
}

export default WhyChooseUs;
