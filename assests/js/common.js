
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
  loop: true,
  speed: 4000, // duration of transition (ms)
  autoplay: {
    delay: 1, // set to 1ms for continuous movement
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,
  freeModeSticky: false,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    }
  }
});
//swiper section end