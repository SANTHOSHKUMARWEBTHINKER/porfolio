
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.our-navbar');
    
    if (window.scrollY > 0) {
      navbar.classList.add('active');
    } else {
      navbar.classList.remove('active');
    }
  });
  // navbar scroll effect end

