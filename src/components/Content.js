import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDescriptionHidden: true,
      isContentHidden: false
    }
  }

  onMouseOver = () => {
    this.setState({
      isDescriptionHidden: false,
      isContentHidden: true
    })
  }

  onMouseLeave = () => {
    this.setState({
      isContentHidden: false,
      isDescriptionHidden: true
    })
  }

  render() {
      const contentStyle = this.state.isContentHidden ? {display: 'none'} : {display: 'block'};
      const descriptionStyle = this.state.isDescriptionHidden ? {display: 'none'} : {display: 'block'};
    return (
      <React.Fragment>
        <div className='content'
          style={contentStyle}
          onMouseOver={this.onMouseOver} >
            <h5 className='your-title'>your title</h5>
            <p className='duis-bibendum'>
            Duis bibendum diam<br/>
            non erat facilaisis en ter<br/>
            tincindunt. Duis
            </p>
        </div>
        <div className='description'
        style={descriptionStyle}
        onMouseLeave={this.onMouseLeave} >
          <h4 className='see-more'>see more</h4>
          <div className='description-icons'>
            <div className='rounds chain'><i class="fas fa-link"></i></div>
            <div className='rounds search-plus'><i class="fas fa-search-plus"></i></div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Content;
