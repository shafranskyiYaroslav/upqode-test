import React from 'react';
import './ProductNames.css';

class Item extends React.Component {

  render() {
    return (
      <li className={this.props.isActive ? 'active-name' : 'product-names-li'}>{this.props.text}</li>
    )
  }
}

export default Item;
