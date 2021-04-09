import header from '../images/header.jpg';
import tentPremium from '../images/tentPremium.jpg';
import tentNormal from '../images/tentNormal.jpg';
import tentSimple from '../images/tentSimple.jpg';
import { useForm } from 'react-hook-form';
import { Swiper } from 'swiper';
import { useEffect } from 'react';

const Main = () => {

  
useEffect(() => {
  let x;
  window.innerWidth <= 1040 ? x=1 : x=2;

new Swiper('.swiper-container', {
  slidesPerView: x,
  zoom: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
}, [])

  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data, e) =>{
    console.log(data);
    alert("Wiadomość wysłana :-)");
    e.target.reset();
  }

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
      <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="contact__label" htmlFor="email">email:</label><br/>
        <input
        className="contact__input"
        type="email"
        name="email"
        {...register("Email", { required: true, minLength: 3, maxLength: 50 })}
        />
         {errors.Email && (<p>email is required</p>)}
        <br/>
        <label className="contact__label" htmlFor="email">name:</label><br/>
        <input
        className="contact__input"
        type="name"
        name="name"
        {...register("Name", { required: true, minLength:{value: 2, message:"Your name should have at least 2 and max 20 signs"}, maxLength:{value: 20, message:"Your name should have at least 2 and max 20 signs" }})}
        />
         {errors.Name && <p>{errors.Name.message}</p>}
        <br/>
        <label className="contact__label" htmlFor="email">wiadomość:</label><br/>
        <textarea
        className="contact__textArea"
        name="message"
        {...register("Message", { required: true, minLength: 20, maxLength: 300 })}
        >
          </textarea><br/>
        <input className="contact__submit" type="submit" value="Wyślij"/>
      </form>
    </section>
    </>
   );
}
 
export default Main;