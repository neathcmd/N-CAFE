// Scroll-to-Top Button Functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  // Show the button after scrolling 200px
  if (window.scrollY > 200) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Responsive Navigation Toggle
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

navToggle.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// Hero Section Animation
window.addEventListener("DOMContentLoaded", () => {
  const tagline = document.querySelector(".tagline");
  tagline.style.opacity = "0";
  tagline.style.transform = "translateY(20px)";
  setTimeout(() => {
    tagline.style.transition = "opacity 1s ease, transform 1s ease";
    tagline.style.opacity = "1";
    tagline.style.transform = "translateY(0)";
  }, 500);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth", // Smooth scroll animation
        block: "start", // Align the section to the top of the viewport
      });
    }
  });
});
