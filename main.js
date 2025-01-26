let stars = document.getElementById('stars');
let mountain3 = document.getElementById('mountain3');
let mountain4 = document.getElementById('mountain4');
let moon = document.getElementById('moon');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat');

window.onscroll=function(){
    let value = scrollY;
    stars.style.left=value + 'px';
    moon.style.top=value*3 + 'px';
    mountain3.style.top=value*2 + 'px';
    mountain4.style.top=value*1.5 + 'px';
    river.style.top=value + 'px';
    boat6.style.top=value + 'px';
    boat6.style.left=value*3 + 'px';
    if(scrollY >= 127){

        document.querySelector('.main').style.background='linear-gradient(rgb(152, 76, 242),rgb(158, 126, 219))'
    }else{
        document.querySelector('.main').style.background='linear-gradient(rgb(30, 2, 63),rgb(32, 3, 87))'

    }

}