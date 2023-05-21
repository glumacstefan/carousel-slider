window.onload = function () {
   const carousel = document.querySelector('.c-carousel__wrapper');
   const slides = document.querySelectorAll('.c-carousel__slide');
   const next = document.querySelector('.c-carousel__nav-arrow--right');
   const prev = document.querySelector('.c-carousel__nav-arrow--left');
   const slideWidth = slides[0].getBoundingClientRect().width;


    let currSlide = 0;
    let firstSlide = slides[0];
    let lastSlide = slides[slides.length - 1];


};
