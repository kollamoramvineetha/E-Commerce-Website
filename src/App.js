import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Cart from './components/Cart'

import ProductCard from './components/ProductCard'

import CartContext from './context/CartContext'

class App extends Component {
  state = {CartList: []}

  addCartItem = product => {
    const {CartList} = this.state
    const updatedNew = CartList.find(each => each.id === product.id)
    console.log(CartList)
    console.log(product)
    if (updatedNew) {
      this.setState(prevState => ({
        CartList: prevState.CartList.map(each => {
          if (each.id === product.id) {
            const updatedQuant = each.quantity + product.quantity
            return {...each, quantity: updatedQuant}
          }
          return each
        }),
      }))
    } else {
      const updatedCartList = [...CartList, product]
      this.setState({CartList: updatedCartList})
    }
  }

  removeCartItem = id => {
    const {CartList} = this.state
    const removedList = CartList.filter(each => each.id !== id)
    this.setState({CartList: removedList})
  }

  IncreaseQuantity = id => {
    this.setState(prevState => ({
      CartList: prevState.CartList.map(each => {
        if (id === each.id) {
          const updatedQuantity = each.quantity + 1
          return {...each, quantity: updatedQuantity}
        }
        return each
      }),
    }))
  }

  DecreaseQuantity = id => {
    this.setState(prevState => ({
      CartList: prevState.CartList.map(each => {
        if (each.id === id) {
          const updatedQuantity = each.quantity - 1
          return {...each, quantity: updatedQuantity}
        }
        return each
      }),
    }))
  }

  render() {
    const {CartList} = this.state
    return (
      <CartContext.Provider
        value={{
          CartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          IncreaseQuantity: this.IncreaseQuantity,
          DecreaseQuantity: this.DecreaseQuantity,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Home} />
          <Route exact path="/products/:id" component={ProductCard} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
