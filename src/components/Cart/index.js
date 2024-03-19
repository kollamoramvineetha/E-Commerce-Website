import CartContext from '../../context/CartContext'
import Header from '../Header'
import EmptyCartList from '../EmptyCartList'

import CartItemList from '../CartItemList'
import CartSummary from '../CartSummary'
import './index.css'

const Cart = () => (
  <>
    <Header />
    <CartContext.Consumer>
      {value => {
        const {CartList} = value
        console.log(CartList)
        return (
          <div className="cartCard">
            <ul>
              {CartList.map(each => (
                <CartItemList key={each.id} details={each} />
              ))}
            </ul>
            <div>
              {CartList.length !== 0 ? <CartSummary /> : <EmptyCartList />}
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  </>
)

export default Cart
