import React from 'react';

class Products extends React.Component {
  constructor() {
    super();

    this.state = {
      titles: [require('../images/title1.png'),
        require('../images/title2.png'),
        require('../images/title3.png'),
        require('../images/title4.png'),
        require('../images/title5.png'),
        require('../images/title1.png')],
      dot1: require('../images/title-dot1.png'),
      dot2: require('../images/title-dot2.png'),
      dot3: require('../images/title-dot3.png')
    }
  }

  render() {
    return (
      <section id='products-section'>
        <div id='products-title'>
          <h3 id='products-h3'><span id='our'>our</span> products</h3>
        </div>
        <div id='product-titles'>
          {
            this.state.titles.map((el, index) => (
              <div key={index} className='title-divs'>
                <img src={el} alt={'title' + {index}} className='title-images' />
                <div className='title-text'>
                  <h4 className='title-h4'>title</h4>
                  <h5 className='title-h5'>best product</h5>
                  <p className='title-p'>
                    Duis bibendum diam non<br/>
                    erat facilaisis en ter
                  </p>
                </div>
              </div>
            ))
          }
        </div>
        <div id='title-dots'>
          <img src={this.state.dot1} alt='title-dot1' id='title-dot1' />
          <img src={this.state.dot2} alt='title-dot2' id='title-dot2' />
          <img src={this.state.dot3} alt='title-dot3' id='title-dot3' />
        </div>
      </section>
    )
  }
}

export default Products;
