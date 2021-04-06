document.addEventListener("DOMContentLoaded", function(){
  const navigation = document.querySelector('.navigation');
  window.addEventListener('scroll', () => {
    if(window.pageYOffset > window.innerHeight){
      navigation.style.backgroundColor = "rgba(236, 236, 236, 0.6)";
    } else {
      navigation.style.backgroundColor = "rgba(236, 236, 236, 0)";
    }
  });
});