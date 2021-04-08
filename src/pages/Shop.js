import tentPremium from '../images/tentPremium.jpg';
import tentNormal from '../images/tentNormal.jpg';
import tentSimple from '../images/tentSimple.jpg';
import { Link } from 'react-router-dom';

const Shop = () => {
  return ( 
    <main className="shop">
      <section className="shop__tents">
        <h3 className="shop__title">Namioty</h3>
        <Link
        className="shop__item"
        to={{pathname:`shop/item1`}}
        >
          <img className="shop__itemPhoto" src={tentNormal} alt="tent"/>
          <div className="shop__namesWrapper">
            <p className="shop__itemName">Duap dupa</p>
            <p className="shop__itemPrice">dupa: $123</p>
          </div>
        </Link>
        <div className="shop__item">
          <img className="shop__itemPhoto" src={tentPremium} alt="tent"/>
          <div className="shop__namesWrapper">
            <p className="shop__itemName">Duap dupa</p>
            <p className="shop__itemPrice">dupa: $123</p>
          </div>
        </div>
        <div className="shop__item">
          <img className="shop__itemPhoto" src={tentSimple} alt="tent"/>
          <div className="shop__namesWrapper">
            <p className="shop__itemName">Duap dupa</p>
            <p className="shop__itemPrice">dupa: $123</p>
          </div>
        </div>
        <div className="shop__item">
          <img className="shop__itemPhoto" src={tentNormal} alt="tent"/>
          <div className="shop__namesWrapper">
            <p className="shop__itemName">Duap dupa</p>
            <p className="shop__itemPrice">dupa: $123</p>
          </div>
        </div>
        <div className="shop__item">
          <img className="shop__itemPhoto" src={tentNormal} alt="tent"/>
          <div className="shop__namesWrapper">
            <p className="shop__itemName">Duap dupa</p>
            <p className="shop__itemPrice">dupa: $123</p>
          </div>
        </div>
        <div className="shop__item">
          <img className="shop__itemPhoto" src={tentPremium} alt="tent"/>
          <div className="shop__namesWrapper">
            <p className="shop__itemName">Duap dupa</p>
            <p className="shop__itemPrice">dupa: $123</p>
          </div>
        </div>
      </section>
    </main>
   );
}
 
export default Shop;