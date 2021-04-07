import header from '../images/header.jpg';
import tentPremium from '../images/tentPremium.jpg';
import tentNormal from '../images/tentNormal.jpg';
import tentSimple from '../images/tentSimple.jpg';

const Main = () => {
  return ( 
    <>
    <header className="rain">
      <img alt="header background" className="rain__img" src={header}>
      </img>
      <h1 className="rain__title">Zobacz nasz najnowszy produkt!</h1>
      <button className="rain__button">Zobacz</button>
    </header>
    <section className="aboutUs">
      <div className="aboutUs__photo"></div>
      <div className="aboutUs__describe">
        <h3 className="aboutUs__title">About Us</h3>
        <p className="aboutUs__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias repellendus, quasi dignissimos porro consectetur et reiciendis laudantium sint dolorem velit quaerat voluptatibus ratione accusamus, obcaecati quos perspiciatis dolorum illo doloribus?
          <br/><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vero ullam incidunt sit consequuntur eveniet fugit dolor. Repellat veritatis alias repudiandae accusantium! Ratione commodi, vitae alias nisi aspernatur ipsum eveniet?
        </p>
      </div>
    </section>
    <section className="photos">
    <h3 className="title">Fan photos</h3>
    <hr className="photos__hr"/>
    <div className="swiper-container">
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <div className="swiper-zoom-container">
          <img src={tentPremium} alt="namiot premium" className="tentPremium"></img>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="swiper-zoom-container">
          <img src={tentNormal} alt="namiot zwykły" className="tentNormal"></img>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="swiper-zoom-container">
          <img src={tentSimple} alt="namiot prosty" className="tentSimple"></img>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="swiper-zoom-container">
          <img src={tentNormal} alt="namiot zwykły" className="tentNormal"></img>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="swiper-zoom-container">
          <img src={tentSimple} alt="namiot prosty" className="tentSimple"></img>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="swiper-zoom-container">
          <img src={tentNormal} alt="namiot zwykły" className="tentNormal"></img>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="swiper-zoom-container">
          <img src={tentSimple} alt="namiot prosty" className="tentSimple"></img>
        </div>
      </div>
    </div>
    <div className="swiper-button-prev"></div>
    <div className="swiper-button-next"></div>
    </div>
    </section>
    <section className="contact">
      <h3 className="title contact__title">Contact</h3>
      <hr className="contact__hr"/>
      <div className="contact__socials">
        <span className="contact__socialItem contact__socialItem-text">email: lorem@lorem.com</span>
        <span className="contact__socialItem fab fa-facebook-square"></span>
        <span className="contact__socialItem fab fa-instagram-square"></span>
      </div>
      <h4 className="contact__formTitle">Masz pytanie? Wyślij nam wiadomość</h4>
      <form className="contact__form">
        <label className="contact__label" for="email">email:</label><br/>
        <input className="contact__input" type="email" id="email" name="email"/><br/>
        <label className="contact__label" for="email">name:</label><br/>
        <input className="contact__input" type="name" id="name" name="name"/><br/>
        <label className="contact__label" for="email">wiadomość:</label><br/>
        <textarea className="contact__textArea" name="message" id="message"></textarea><br/>
        <button className="contact__submit" type="submit">Wyślij</button>
      </form>
    </section>
    </>
   );
}
 
export default Main;