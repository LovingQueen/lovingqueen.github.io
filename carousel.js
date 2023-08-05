var slides = document.getElementsByClassName("slide");
let index = 0;

function prevSlide() {
    slides[index].classList.remove('active');
    index--;

    if (index < 0)
        index = slides.length - 1;

    slides[index].classList.add('active');
}

function nextSlide() {
    slides[index].classList.remove('active');
    index++;

    if (index > slides.length - 1)
        index = 0;

    slides[index].classList.add('active');
}

function startCarousel() {
    setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
}

startCarousel(); // Start the automatic carousel movement
