import RainyDay from './rainyday'
window.addEventListener('DOMContentLoaded', () =>{
function rain () {
    const image = document.querySelector('.rain__img')
    image.onload = function(){
        const rainyDay = new RainyDay({
            image:this,
        })
        rainyDay.rain([
            [5,2,3]
        ],0)
}
image.src = "../images/header.jpg";
}
rain();
});