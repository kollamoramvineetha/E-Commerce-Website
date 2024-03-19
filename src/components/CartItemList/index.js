/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import {AiFillCloseCircle} from 'react-icons/ai'
import CartContext from '../../context/CartContext'

import './index.css'

const CartItemList = props => {
  const {details} = props
  const {id, title, price, category, image, description} = details
  return (
    <CartContext.Consumer>
      {value => {
        const {removeCartItem} = value
        const removedItem = () => removeCartItem(id)
        return (
          <div className="cartItemsList">
            <div>
              <img src={image} alt={title} className="cartItemImage" />
            </div>
            <div className="cardDelete">
              <div>
                <p className="cartItemTitle">{title}</p>
                <p className="cartItemPara">{description}</p>
                <p className="cartItemCategory">Category: {category}</p>
                <p className="cartItemPrice">Cost: {price}</p>
              </div>
              <div className="deleteIcon">
                <button className="cartRemoveItem" onClick={removedItem}>
                  <AiFillCloseCircle color="#616E7C" size={20} />
                </button>
              </div>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}
export default CartItemList
