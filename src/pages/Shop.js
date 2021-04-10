import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Shop = ({products}) => {
  return ( 
    <main className="shop">
      <section className="shop__tents">
        <h3 className="shop__title">Namioty</h3>
        {products.map(prod => (
          <Link
          className="shop__item"
          key={prod.id}
          to={{pathname:`shop/${prod.name}`,
          state:{fromDashboard: true, img:prod.img, productData:{prod}}}}
          >
            <img className="shop__itemPhoto" src={prod.img} alt="tent"/>
            <div className="shop__namesWrapper">
              <p className="shop__itemName">{prod.name}</p>
              <p className="shop__itemPrice">Cena: ${prod.price}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
   );
}

const mapStateToProps = state => {
  return {
    products: state.shop.products
  }
}
export default connect(mapStateToProps)(Shop);