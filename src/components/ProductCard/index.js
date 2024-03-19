/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import {Component} from 'react'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import Header from '../Header'

import CartContext from '../../context/CartContext'

import './index.css'

class ProductCard extends Component {
  state = {singleList: {}, quantity: 1}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {id} = match.params
    const singleData = await fetch(`https://fakestoreapi.com/products/${id}`)
    if (singleData.ok) {
      const singleProduct = await singleData.json()
      const singled = singleProduct
      this.setState({singleList: singled})
    }
  }

  IncrementCount = () => {
    this.setState(prevState => prevState.quantity + 1)
  }

  DecrementCount = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prevState => prevState.quantity - 1)
    }
  }

  render() {
    const {singleList, quantity} = this.state
    const {title, price, category, description, image} = singleList
    return (
      <CartContext.Consumer>
        {value => {
          const {addCartItem} = value
          const CartFun = () => {
            console.log(singleList)
            addCartItem({...singleList, quantity})
          }

          return (
            <>
              <Header />
              <div className="productCard">
                <div>
                  <img src={image} alt={title} className="productImage" />
                </div>
                <div className="productDetails">
                  <p className="productTitle">{title}</p>
                  <p className="productPara">{description}</p>
                  <p className="productPara">Category: {category}</p>
                  <p className="productPrice">Rs: {price}</p>
                  <div className="productCrt">
                    <div>
                      <button onClick={this.IncrementCount}>
                        <BsPlusSquare className="iconsContainer" />
                      </button>
                    </div>
                    <div>
                      <button onClick={CartFun} className="productCardButton">
                        Add To Cart
                      </button>
                    </div>
                    <div>
                      <button onClick={this.DecrementCount}>
                        <BsDashSquare className="iconsContainer" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default ProductCard
