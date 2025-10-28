document.addEventListener("DOMContentLoaded", function () {
  // Define all parent selectors
  const animationParents = document.querySelectorAll(
    ".animation-card-parent-offers, \
     .animation-card-parent-just-booked, \
     .animation-card-parent-most-viewed, \
     .animation-card-parent, \
     .animation-card-parent-experience, \
     .animation-card-parent-our-community"
  );

  // Create IntersectionObserver
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Optional: remove this line if you want it to re-trigger on scroll out/in
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the section is visible
    }
  );

  // Observe each parent section
  animationParents.forEach((parent) => {
    observer.observe(parent);
  });
});
