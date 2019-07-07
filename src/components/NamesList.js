import React from 'react';
import Item from './Item';
import './ProductNames.css';

class NamesList extends React.Component {
  constructor() {
    super();

    this.state = {
      active: -1,
    }
  }

  handleClick = (event) => {
    event.target = event.target.closest('li');
    const index = [...document.getElementById('names-list-ul').children].indexOf(event.target);
    this.setState({
      active: index
    })
  }

  render() {
    const style = this.props.isFatherHidden ? {display: 'none'} : this.props.style;
    return (
      <div className='product-names-div clearfix' id='names-list' style={style}>
        <ul className='product-names-ul clearfix' id='names-list-ul' onClick={this.handleClick}>
          <Item text='Name Surname' isActive={this.state.active === 0} />
          <Item text='Nelson Noa Chris' isActive={this.state.active === 1} />
          <Item text='Name Surname' isActive={this.state.active === 2} />
          <Item text='Nelson Noa' isActive={this.state.active === 3} />
          <Item text='Nelson Noa Chris' isActive={this.state.active === 4} />
        </ul>
      </div>
    )
  }
}

export default NamesList;
