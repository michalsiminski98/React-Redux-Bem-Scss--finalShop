import { connect } from "react-redux";
import { removeFromCart, adjustQty } from "../../actions/itemActions";

const CartItems = ({products, removeFromCart, adjustQty}) => {

  const handleOnChangeInput = (product, e) => {
    adjustQty(product.id, e.target.value);
    if(e.target.value > 10) e.target.value = 10;
    if(e.target.value < 1) e.target.value = 1;
  }

  return (
  products.map(product => (
    <div className="cart__item" key={product.id}>
    <img className="cart__itemPhoto" src={product.img} alt="tent"/>
    <div className="cart__namesWrapper">
      <p className="cart__itemName">{product.name}</p>
      <p className="cart__itemPrice">Cena: ${product.price}</p>
      <input value={product.qty} onChange={handleOnChangeInput.bind(this, product)} type="number" name="quantity" min="1" max="10" />
      <span onClick={() => removeFromCart(product.id)} className="far fa-trash-alt cart__delete"></span>
    </div>
  </div>
    ))
   );
}

const mapDispatchToProps = dispatch => ({
    removeFromCart: id => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  })
 
 
export default connect(null, mapDispatchToProps)(CartItems);