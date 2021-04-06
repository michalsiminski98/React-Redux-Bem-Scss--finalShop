import { useState } from "react";

const Navigation = () => {

  const [isNavActive, setNavActive] = useState(false);

  const handleToggleActive = () => {
    setNavActive(!isNavActive);
  };

  return ( 
    <>
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">Strona główna</li>
        <li className="navigation__item">Sklep</li>
        <li className="navigation__item">Koszyk</li>
      </ul>
      <div className="navigation__logo"></div>
      <div
      className= {isNavActive ? 'navigation__btn open' : 'navigation__btn'}
      onClick={handleToggleActive}>
      <div className="navigation__burger"></div>
      </div>
      <ul className="navigation__list-mobile">
        <li className="navigation__item-mobile">Strona główna</li>
        <li className="navigation__item-mobile">Sklep</li>
        <li className="navigation__item-mobile">Koszyk</li>
      </ul>
    </nav>
    </>
   );
}
 
export default Navigation;