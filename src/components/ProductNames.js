import React from 'react';
import './ProductNames.css';
import Item from './Item';
import NamesList from './NamesList';

class ProductNames extends React.Component {
  constructor() {
    super();

    this.state = {
      active: -1,
      isNamesListHidden: true
    }
  }

  handleClick = (event) => {
    event.target = event.target.closest('li');
    const index = [...document.getElementById('product-names-ul').children].indexOf(event.target);
    (index === 2) ?
    this.setState({
      active: index,
      isNamesListHidden: false
    }) :
    this.setState({
      active: index,
      isNamesListHidden: true
    })
  }

  render() {
    const thisStyle = this.props.isHidden ? {display: 'none'} : {display: 'block'};
    const namesStyle = this.state.isNamesListHidden ? {display: 'none'} : {display: 'block'};
    return (
      <React.Fragment>
        <div className='product-names-div clearfix' id='product-names' style={thisStyle}>
          <ul className='product-names-ul clearfix' onClick={this.handleClick} id='product-names-ul' >
            <Item text='Name Surname' isActive={this.state.active === 0} />
            <Item text='Nelson Noa Chris' isActive={this.state.active === 1} />
            <Item text='Name Surname' isActive={this.state.active === 2} />
            <Item text='Nelson Noa' isActive={this.state.active === 3} />
          </ul>
        </div>
        <NamesList style={namesStyle} isFatherHidden={this.props.isHidden} />
      </React.Fragment>
    )
  }
}

export default ProductNames;
