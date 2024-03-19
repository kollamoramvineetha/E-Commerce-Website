import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'

import './index.css'

const Header = () => (
  <CartContext.Consumer>
    {value => {
      const {CartList} = value
      return (
        <nav>
          <div className="headerCard">
            <div className="LogoContainer">
              <Link to="/" style={{textDecoration: 'none'}}>
                <i className="headerE">My E-commerce</i>
              </Link>
            </div>
            <div className="productsHomeCard">
              <Link to="/" style={{textDecoration: 'none'}}>
                <h1 className="headerEn">
                  <i>Home</i>
                </h1>
              </Link>
              <Link to="/products" style={{textDecoration: 'none'}}>
                <h1 className="headerEn">
                  <i>Products</i>
                </h1>
              </Link>
              <Link to="/cart" style={{textDecoration: 'none'}}>
                <h1 className="headerEn">
                  <i>
                    Cart <sub>{CartList.length}</sub>
                  </i>
                </h1>
              </Link>
            </div>
          </div>
        </nav>
      )
    }}
  </CartContext.Consumer>
)

export default Header
