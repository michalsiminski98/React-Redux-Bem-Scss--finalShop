import { connect } from 'react-redux';
import CartItems from './CartComponents/CartItems';
  
const Cart = ({products}) => {

  // counters of total price and total products quantity
  let itemsSummary = 0;
  let priceSummary = 0;
  const totalItemsSummary = products.map(item => {
      itemsSummary += item.qty;
      if(isNaN(itemsSummary)) itemsSummary = 0; 
      return(itemsSummary)
  });
  const totalPriceSummary = products.map(item => {
      priceSummary += item.price * item.qty;
      if(isNaN(priceSummary)) priceSummary = 0; 
      return(priceSummary)
  });

  return ( 

  <section className="cart">
    <div className="cart__items"> 
      <CartItems
      products={products}
      />
    </div>
    <div className="cart__sumPlace">
      <div className="cart__sum">
        <h4 className="cart__sumTitle">Podsumowanie</h4>
        <p className="cart__sumtext">Ilość: {totalItemsSummary}<span className="cart__count"></span></p>
        <p className="cart__sumtext">Cena: {totalPriceSummary}zł<span className="cart__price"></span></p>
      <button className="cart__buyButton">Kup</button>
      </div>
    </div>
  </section>
   );
}

const mapStateToProps = state => {
  return{
    products: state.shop.cart,
  }
}
 
export default connect(mapStateToProps)(Cart);