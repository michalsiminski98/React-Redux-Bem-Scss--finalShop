document.addEventListener("DOMContentLoaded", function(){

  const navigation = document.querySelector('.navigation');
  const texts = document.querySelectorAll('.navigation__link');
  window.addEventListener('scroll', () => {
    // under 768px there is a different navigation
    if(window.pageYOffset > window.innerHeight && window.innerWidth > 767){
      navigation.style.backgroundColor = "rgba(240, 240, 240, 0.9)";
      texts.forEach(element => element.style.color = "rgb(40, 40, 40)");
    } else {
      navigation.style.backgroundColor = "rgba(240, 240, 240, 0.55)";
      texts.forEach(element => element.style.color = "rgb(40, 40, 40)");
    }
  });
});