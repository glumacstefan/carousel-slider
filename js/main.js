window.onload = function () {
   const carousel = document.querySelector('.c-carousel__wrapper');
   const slides = document.querySelectorAll('.c-carousel__slide');
   const next = document.querySelector('.c-carousel__nav-arrow--right');
   const prev = document.querySelector('.c-carousel__nav-arrow--left');
   const slideWidth = slides[0].getBoundingClientRect().width;


    let currSlide = 0;
    let firstSlide = slides[0];
    let lastSlide = slides[slides.length - 1];

    prev.disabled = true;

    function slideLeft() {
       next.disabled = false;
       currSlide--;

       slides.forEach((slide) => {
          slide.style.transition = 'transform 0.2s linear';
          slide.style.transform = `translateX(-${currSlide * slideWidth}px)`;
       });

       if (firstSlide.getBoundingClientRect().left >= 0) {
          prev.disabled = true;
       }
    }

    function slideRight() {
       prev.disabled = false;
       currSlide++;

       slides.forEach((slide) => {
          slide.style.transition = 'transform 0.2s linear';
          slide.style.transform = `translateX(-${currSlide * slideWidth}px)`;
       });

       if (lastSlide.getBoundingClientRect().right <= carousel.getBoundingClientRect().right) {
          next.disabled = true;
       }
    }

    prev.addEventListener('click', slideLeft);
    next.addEventListener('click', slideRight);


    window.addEventListener('keydown', function (event) {
       let key = event.key;
       if (key === 'ArrowLeft' && prev.disabled !== true) {
          slideLeft();
       } else if (key === 'ArrowRight' && next.disabled !== true) {
          slideRight();
       }
    }); 
};
