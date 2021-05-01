import { connect } from "react-redux";
import { addToCart } from "../actions/itemActions";

const Item = (props) => {
  // destructurization
  const { addToCart } = props;
  // getting data of current item from shop.js
  const {
    id,
    name,
    img,
    price,
    describe,
  } = props.location.state.productData.prod;

  const handleAddingItem = () => {
    addToCart(id);
    alert("Dodano do koszyka");
  };

  return (
    <section className="item">
      <h3 className="item__title">{name}</h3>
      <img src={img} alt="namiot normalny" className="item__img" />
      <div className="item__describes">
        <p className="item__describe">Cena: ${price}</p>
        <p className="item__describe item__describe-grey">Opis: {describe}</p>
        <button onClick={handleAddingItem} className="item__add">
          Dodaj
        </button>
      </div>
    </section>
  );
};

// add product to cart
const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(addToCart(id)),
});

export default connect(null, mapDispatchToProps)(Item);
