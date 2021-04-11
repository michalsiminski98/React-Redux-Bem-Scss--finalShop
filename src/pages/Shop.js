import { connect } from 'react-redux';
import ShopItems from './ShopComponents/ShopItems';

const Shop = ({products}) => {
  return ( 
    <main className="shop">
      <section className="shop__tents">
        <h3 className="shop__title">Namioty</h3>
        <ShopItems
        products={products}
        />
      </section>
    </main>
   );
}

const mapStateToProps = state => ({
    products: state.shop.products
  })
  
export default connect(mapStateToProps)(Shop);