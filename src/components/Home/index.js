import {Component} from 'react'
import {Loader} from 'react-loader-spinner'

import Products from '../Products'

import Header from '../Header'
import './index.css'

const apiStatusConst = {
  initial: 'INITIAL',
  inprogress: 'InPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {listItems: [], apiStatus: apiStatusConst.initial}

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({apiStatus: apiStatusConst.inprogress})
    const data = await fetch('https://fakestoreapi.com/products')
    const response = await data.json()
    if (data.ok) {
      const updatedData = response.map(each => ({
        id: each.id,
        title: each.title,
        price: each.price,
        category: each.category,
        description: each.description,
        image: each.image,
      }))
      this.setState({listItems: updatedData, apiStatus: apiStatusConst.success})
    } else {
      this.setState({apiStatus: apiStatusConst.failure})
    }
  }

  renderSuccessView = () => {
    const {listItems} = this.state
    return (
      <ul className="productsCard">
        {listItems.map(each => (
          <Products key={each.id} productData={each} />
        ))}
      </ul>
    )
  }

  renderFailureView = () => (
    <div>
      <h1>No Products Found</h1>
    </div>
  )

  progressView = () => (
    <div className="LoadingContainer">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConst.success:
        return this.renderSuccessView()
      case apiStatusConst.progress:
        return this.progressView()
      case apiStatusConst.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div>{this.renderStatus()}</div>
      </div>
    )
  }
}

export default Home
