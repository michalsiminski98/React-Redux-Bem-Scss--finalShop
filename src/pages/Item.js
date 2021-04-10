const Item = (props) => {

  const prod = props.location.state.productData.prod;

  return ( 
    <section className="item">
      <h3 className="item__title">{prod.name}</h3>
      <img src={prod.img} alt="namiot normalny" className="item__img"/>
      <div className="item__describes">
        <p className="item__describe">Cena: ${prod.price}</p>
        <p className="item__describe item__describe-grey">Opis: {prod.describe}</p>
        <button className="item__add">Dodaj</button>
      </div>
    </section>
   );
}
 
export default Item;