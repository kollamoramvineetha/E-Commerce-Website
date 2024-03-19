import React from 'react'

const CartContext = React.createContext({
  CartList: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  IncreaseQuantity: () => {},
  DecreaseQuantity: () => {},
})

export default CartContext
