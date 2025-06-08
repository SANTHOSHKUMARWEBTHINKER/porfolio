
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.our-navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
});
// navbar scroll effect end

//swiper section
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    }
  }
});
//swiper section end