import Swiper from 'swiper/bundle';

window.addEventListener('DOMContentLoaded', () =>{
new Swiper('.swiper-container', {
  slidesPerView: 2,
  zoom: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
});