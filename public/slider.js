const slider = document.querySelector('.slider');
const prevSlideBtn = document.querySelector('.prev-slide');
const nextSlideBtn = document.querySelector('.next-slide');

prevSlideBtn.addEventListener('click', () => {
  slider.scrollBy({
    left: -slider.offsetWidth,
    behavior: 'smooth'
  });
});

nextSlideBtn.addEventListener('click', () => {
  slider.scrollBy({
    left: slider.offsetWidth,
    behavior: 'smooth'
  });
});
