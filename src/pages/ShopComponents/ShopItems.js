import { Link } from "react-router-dom";

const ShopItems = ({products}) => {

  return (
    products.map(prod => (
      <Link
      className="shop__item"
      key={prod.id}
      to={{pathname:`shop/${prod.name}`,
      state:{img:prod.img, productData:{prod}}}}
      >
        <img className="shop__itemPhoto" src={prod.img} alt="tent"/>
        <div className="shop__namesWrapper">
          <p className="shop__itemName">{prod.name}</p>
          <p className="shop__itemPrice">Cena: ${prod.price}</p>
        </div>
      </Link>
    ))
   );
}
 
export default ShopItems;