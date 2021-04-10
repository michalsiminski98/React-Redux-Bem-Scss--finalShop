import { connect } from 'react-redux';

const Cart = ({products}) => {
  return ( 
    <section className="cart">
      <div className="cart__items">
        {products.map(item => (
          <div className="cart__item">
          <img className="cart__itemPhoto" src={item.img} alt="tent"/>
          <div className="cart__namesWrapper">
          <p className="cart__itemName">{item.name}</p>
          <p className="cart__itemPrice">Cena: ${item.price}</p>
          <input value={item.qty} type="number" name="quantity" min="1" max="10"/>
          <button>Usuń</button>
          </div>
        </div>
        ))}
      </div>
      <div className="cart__sumPlace">
        <div className="cart__sum">
          <h4 className="cart__sumTitle">Podsumowanie</h4>
          <p className="cart__sumtext">Ilość: <span className="cart__count"></span></p>
          <p className="cart__sumtext">Cena: <span className="cart__price"></span></p>
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