import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {CartList} = value

      let s = 0
      CartList.forEach(each => {
        s += each.price * each.quantity
      })

      return (
        <div className="cartSum">
          <p className="cartSummary">Total Cost: {s}/-</p>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
