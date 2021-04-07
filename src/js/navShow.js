document.addEventListener("DOMContentLoaded", function(){

  const navigation = document.querySelector('.navigation');
  window.addEventListener('scroll', () => {
    if(window.pageYOffset > window.innerHeight && window.innerWidth > 767){
      navigation.style.backgroundColor = "rgba(100, 100, 100, 0.4)";
    } else {
      navigation.style.backgroundColor = "rgba(236, 236, 236, 0)";
    }
  });
});