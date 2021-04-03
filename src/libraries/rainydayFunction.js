import RainyDay from './rainyday'
window.addEventListener('load', () =>{
function rain () {
    const image = document.querySelector('.rain__img')
    image.onload = function(){
        const rainyDay = new RainyDay({
            image:this,
        })
        RainyDay.rain([
            [5,2,2]
        ],0)
}
image.src = "../images/header.jpg";
}
rain();
});