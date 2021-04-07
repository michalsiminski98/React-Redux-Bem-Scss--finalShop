import Swiper from 'swiper/bundle';

window.addEventListener('DOMContentLoaded', () =>{
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  zoom: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
});