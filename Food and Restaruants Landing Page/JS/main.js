// Scroll Navbar
let nav = document.querySelector(".navigation-wrap");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

// Navbar Hide

let navBar = document.querySelectorAll(".nav-link");

let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach((e) => {
  e.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});
