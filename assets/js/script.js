// Add event on element
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// Navbar toggle
const nav = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  nav.classList.toggle("active");
  navToggler.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

// Close navbar
const closeNavbar = function () {
  nav.classList.remove("active");
  navToggler.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

// Active header when window scroll down to 100px
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", activeElemOnScroll);

// Dynamic Copyright
const date = new Date().getFullYear();
document.querySelector(".cpy").innerText = date;
