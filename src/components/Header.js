import React from 'react';
import ProductNames from './ProductNames';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      isProductsHidden: true,
      active: ''
    }
  }

  handleClick = (event) => {
    const buttonId = event.target.id;
    this.setState(prevState =>{
      return({
        isProductsHidden: !prevState.isProductsHidden,
        active: buttonId
      })
    })
  }

  hideProducts = (event) => {
    const buttonId = event.target.id;
    this.setState({
      isProductsHidden: true,
      active: buttonId
    })
  }

  render() {
    const menu = require('../images/menu_icon.png');
    const search = require('../images/search.png');
    return (
      <React.Fragment>
        <header>
          <span id='header-logo'>
            <span id='header-up'>up</span>
            <span id='header-qode'>qode</span>
          </span>
          <button
          id='header-home'
          style={this.state.active === 'header-home' ? {fontWeight:'bold'} : {fontWeight: 'normal'}}
          onClick={this.hideProducts}>
            <a href='banner-div'>Home</a>
          </button>
          <button
          id='header-products'
          style={this.state.active === 'header-products' ? {fontWeight:'bold'} : {fontWeight: 'normal'}}
          onClick={this.handleClick}>
            Products
          </button>
          <button
          id='header-about'
          style={this.state.active === 'header-about' ? {fontWeight:'bold'} : {fontWeight: 'normal'}}
          onClick={this.hideProducts}>
            <a href='about-section'>About</a>
          </button>
          <button
          id='header-contact'
          style={this.state.active === 'header-contact' ? {fontWeight:'bold'} : {fontWeight: 'normal'}}
          onClick={this.hideProducts}>
            <a href='contact-section'>Contact</a>
          </button>
          <input id='header-input' type='text' />
          <img src={search} id='search-icon' alt='search-icon' />
          <img id='header-menu' src={menu} alt='menu-icon' />
        </header>
        <ProductNames isHidden={this.state.isProductsHidden} />
      </React.Fragment>
    )
  }
} 

export default Header;
