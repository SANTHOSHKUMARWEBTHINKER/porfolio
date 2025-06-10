
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
  reverseDirection: true, // Add this line to make it run right side
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
      slidesPerView: 3,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
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

//form validation
// document.addEventListener('DOMContentLoaded', function () {
//     const validationForm = document.querySelector('.validation-form');
//     const validationFormtwo = document.querySelector('.validation-form-two');
//     const validationFormthree = document.querySelector('.validation-form-three');
//     const validationFormfinal = document.querySelector('.validation-form-final');
//     const nameInput = document.getElementById("name");
//     const emailInput = document.getElementById("email");
//     const messageInput = document.getElementById("message");

//     // Remove 'active' class when any input changes
//     [nameInput, emailInput, messageInput].forEach(input => {
//         input.addEventListener('input', function () {
//             validationForm.classList.remove('active');
//             validationFormtwo.classList.remove('active');
//             validationFormthree.classList.remove('active');
//             validationFormfinal.classList.remove('active');
//         });
//     });

//     document.getElementById('button-click').addEventListener('click', function (e) {
//         var avalue = nameInput.value;
//         var bvalue = emailInput.value;
//         var cvalue = messageInput.value;

//         let hasError = false;
//         let hasErrortwo = false;
//         let hasErrorthree = false;

//         if (avalue === "" || !isNaN(avalue)) {
//             hasError = true;
//         }
//         if (bvalue === "" || !isNaN(bvalue)) {
//             hasErrortwo = true;
//         }
//         if (cvalue === "" || !isNaN(cvalue)) {
//             hasErrorthree = true;
//         }

//         if (hasError) {
//             validationForm.classList.add('active');
//             e.preventDefault();
//         }
//         if (hasErrortwo) {
//             validationFormtwo.classList.add('active');
//             e.preventDefault();
//         }
//         if (hasErrorthree) {
//             validationFormthree.classList.add('active');
//             e.preventDefault();
//         }

//         if (!hasError && !hasErrortwo && !hasErrorthree) {
//             alert("your mail is successfully submitted thanks for visiting");
//             validationFormfinal.classList.add('active');
//             e.preventDefault();
//         }
//     });
// });