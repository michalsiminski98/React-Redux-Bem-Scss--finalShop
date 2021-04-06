import { TweenMax } from "gsap/all";
import { useState } from "react";

const Navigation = () => {

  const [isNavActive, setNavActive] = useState(false);

  const handleNavActive = () => {
    setNavActive(!isNavActive);
    if (isNavActive) {
      TweenMax.to('.navigation__list-mobile', { duration: 1.3, x: (window.innerWidth) });
    } else {
      TweenMax.to('.navigation__list-mobile', { duration: 1.6, x: 0, ease: "bounce.out" });
  }
  };

  return ( 
    <>
    <ul className="navigation__list-mobile">
      <div
      className= {isNavActive ? 'navigation__btn navigation__btn-in open' : 'navigation__btn navigation__btn-in'}
      onClick={handleNavActive}>
      <div className="navigation__burger"></div>
      </div>
        <li className="navigation__item-mobile">Strona główna</li>
        <li className="navigation__item-mobile">Sklep</li>
        <li className="navigation__item-mobile">Koszyk</li>
    </ul>
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">Strona główna</li>
        <li className="navigation__item">Sklep</li>
        <li className="navigation__item">Koszyk</li>
      </ul>
      <div className="navigation__logo"></div>
      <div
      className= {isNavActive ? 'navigation__btn open' : 'navigation__btn'}
      onClick={handleNavActive}>
      <div className="navigation__burger"></div>
      </div>
    </nav>
    </>
   );
}
 
export default Navigation;