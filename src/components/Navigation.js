import { TweenMax } from "gsap/all";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {

  const [isNavActive, setNavActive] = useState(false);

  const handleNavActive = () => {
    setNavActive(!isNavActive);
    if (isNavActive) {
      TweenMax.to('.navigation__list-mobile', { duration: 1.3, x: (- window.innerWidth) });
    } else {
      TweenMax.to('.navigation__list-mobile', { duration: 1.6, x: 0, ease: "bounce.out" });
  }
  };

  return ( 
    <>
    <ul className="navigation__list-mobile">
        <li className="navigation__item-mobile">
          <NavLink
          onClick={handleNavActive}
          className="navigation__link-mobile"
          to='/'
          >
            Strona główna
          </NavLink>
        </li>
        <li className="navigation__item-mobile">
          <NavLink
          onClick={handleNavActive}
          className="navigation__link-mobile"
          to='/shop'
          >
            Sklep
          </NavLink>
        </li>
        <li className="navigation__item-mobile">
          <NavLink
          onClick={handleNavActive}
          className="navigation__link-mobile"
          to='/cart'
          >
            Koszyk
          </NavLink>
        </li>
    </ul>
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink className="navigation__link" to='/'>
            Strona główna
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__link" to='/shop'>
            Sklep
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__link" to='/cart'>
            Koszyk
          </NavLink>
        </li>
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