import tentNormal from '../images/tentNormal.jpg';

const Cart = () => {
  return ( 
    <section className="cart">
      <div className="cart__items">
        <div className="cart__item">
          <img className="cart__itemPhoto" src={tentNormal} alt="tent"/>
          <div className="cart__namesWrapper">
          <p className="cart__itemName">Duap dupa</p>
          <p className="cart__itemPrice">dupa: $123</p>
          </div>
        </div>
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
 
export default Cart;