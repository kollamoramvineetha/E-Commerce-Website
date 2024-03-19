import './index.css'

const EmptyCartList = () => (
  <div className="emptyCard">
    <img
      src="https://krosfitsports.com/public/empty-cart.gif"
      alt="empty"
      className="emptyimage"
    />
    <h1>
      <i>Looks Like You don&apos;t have no items in your cart</i>
    </h1>
  </div>
)
export default EmptyCartList
