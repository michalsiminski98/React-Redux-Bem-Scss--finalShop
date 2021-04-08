import tentNormal from '../images/tentNormal.jpg';

const Item = () => {
  return ( 
    <section className="item">
      <h3 className="item__title">Namiot normalny</h3>
      <img src={tentNormal} alt="namiot normalny" className="item__img"/>
      <div className="item__describes">
        <p className="item__describe">Cena: $20</p>
        <p className="item__describe item__describe-grey">Opis:</p>
        <button className="item__add">Dodaj</button>
      </div>
    </section>
   );
}
 
export default Item;