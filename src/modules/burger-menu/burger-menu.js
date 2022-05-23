let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".hamburger__nav__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
