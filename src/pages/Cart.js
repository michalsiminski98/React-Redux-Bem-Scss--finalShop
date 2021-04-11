import { useEffect } from 'react';
import { connect } from 'react-redux';
import CartItems from './CartComponents/CartItems';
  
const Cart = ({products}) => {

  // counters of total price and total products quantity
  let itemsSummary = 0;
  let priceSummary = 0;
  const totalItemsSummary = products.map(item => {
      itemsSummary += item.qty;
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
        <p className="cart__sumtext">Ilość: {itemsSummary}<span className="cart__count"></span></p>
        <p className="cart__sumtext">Cena: {priceSummary}zł<span className="cart__price"></span></p>
      <button className="cart__buyButton">Kup</button>
      </div>
    </div>
  </section>
   );
}

const mapStateToProps = state => ({
    products: state.shop.cart,
  })
 
export default connect(mapStateToProps)(Cart);