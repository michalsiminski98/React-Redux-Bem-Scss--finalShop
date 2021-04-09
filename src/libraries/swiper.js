import Swiper from 'swiper/bundle';

window.addEventListener('DOMContentLoaded', () =>{

  let x;
  if(window.innerWidth <= 1040) x=1;
  else x=2;

new Swiper('.swiper-container', {
  slidesPerView: x,
  zoom: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
});