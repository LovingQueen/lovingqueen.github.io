// const slides = document.querySelectorAll('.slide');
// let index = 0;

// function prevSlide(){
//     slides[index].classList.remove('active');
//     index--;

//     if(index < 0)
//         index = slides.length -1;

//     slides[index].classList.add('active');      
// }

// document.querySelector('.prev').addEventListener('click', e => {
//     prevSlide();
// });

// function nextSlide(){
//     slides[index].classList.remove('active');
//     index++;

//     if(index > slides.length -1)
//         index = 0;

//     slides[index].classList.add('active');      
// }

// document.querySelector('.next').addEventListener('click', e => {
//     nextSlide();
// });

setTimeout(1000);
slide();

function slide(){
    document.getElementById('slide')
    setTimeout("slide1()", 3000);
}

function slide1(){
    document.getElementById('slide').style="background-image: url(assets/banners/spawn2.PNG);"
    setTimeout("slide2()", 3000);
}

function slide2(){
    document.getElementById('slide').style="background-image: url(assets/banners/spawn3.PNG);"
    setTimeout("slide3()", 3000);
}

function slide3(){
    document.getElementById('slide').style="background-image: url(assets/banners/spawn4.PNG);"
    setTimeout("slide1()", 3000);
}