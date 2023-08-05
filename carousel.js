var slidesImg = document.getElementsByClassName("slideImg");
var slidesTxt = document.getElementsByClassName("slideTxt");
let index = 0;

function prevSlide() {
    slidesImg[index].classList.remove('active');
    slidesTxt[index].classList.remove('active');
    index--;

    if (index < 0)
        index = slidesImg.length - 1;

    slidesImg[index].classList.add('active');
    slidesTxt[index].classList.add('active');
}

function nextSlide() {
    slidesImg[index].classList.remove('active');
    slidesTxt[index].classList.remove('active');
    index++;

    if (index > slidesImg.length - 1)
        index = 0;

    slidesImg[index].classList.add('active');
    slidesTxt[index].classList.add('active');
}

function startCarousel() {
    setInterval(nextSlide, 4000); // Change slide every 3 seconds (adjust as needed)
}

startCarousel(); // Start the automatic carousel movement
