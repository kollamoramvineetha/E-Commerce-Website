import {Link} from 'react-router-dom'
import './index.css'

const Products = props => {
  const {productData} = props
  const {id, title, price, category, image} = productData
  return (
    <li className="listCard">
      <Link to={`/products/${id}`} style={{textDecoration: 'none'}}>
        <div>
          <img src={image} alt={title} className="listCardImage" />
        </div>
        <div className="detailsCard">
          <p className="listPara">{title}</p>
          <p className="listPara">{price} Rs</p>
          <p className="listPara">Category: {category}</p>
        </div>
      </Link>
    </li>
  )
}

export default Products
