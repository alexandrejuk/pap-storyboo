import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import CartIcon from '../../assets/icons/cart.svg'
import './style.css'

const NavBar = ({
  cartItems,
}) => (
  <Fragment>
    <div class="navbar">
      <div class="nav-wrapper">
        <div class="logo">
          <img 
            src="http://i2.wp.com/perfilwe.com.br/wp-content/uploads/2017/04/Saraiva-cupom.png?fit=700%2C309" alt=""
          />
        </div>
        <div
          className="cardIconWrapper"
        >
          <img
            className="cardIcon"
            src={CartIcon}
            alt="shopping cart"
          />
          <span
            className="cartTotal"
          >
            {cartItems}
          </span>
        </div>
      </div>
    </div>
    <div class="navbar navList">
      <div class="nav-wrapper nav-white">
        <ul>
          <li>LIVROS</li>
          <li>LIVROS</li>
          <li>LIVROS</li>
        </ul>
      </div>
    </div>
  </Fragment>
)

const mapStateToProps = (state)=>{
  const { addedItems } = state
  const cartItems = addedItems.reduce((prev, curr) => (prev + curr.quantity),0)
  return {
    cartItems
  }
}

export default connect(mapStateToProps)(NavBar)