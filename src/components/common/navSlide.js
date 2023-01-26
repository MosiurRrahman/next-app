const navSlide = () => {
  const burger = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".main-nav-js");
  const navLinks = document.querySelectorAll(
    ".main-nav-js .menu-list .menu-item"
  );

  const menuClose = document.querySelector(".menu-close-btn");

  burger.addEventListener("click", () => {
    nav.classList.add("show-menu");

    navLinks.forEach((link, index) => {
      if (link.classList) {
        link.classList.add("nav-animate");
      } else {
        link.classList.remove("nav-animate");
      }
    });
    // burger.classList.toggle("toggle");
  });

  menuClose.addEventListener("click", () => {
    nav.classList.remove("show-menu");

    navLinks.forEach((link, index) => {
      if (link.classList) {
        link.classList.remove("nav-animate");
      } else {
        link.classList.add("nav-animate");
      }
    });

    // burger.classList.toggle("toggle");
  });
};

export default navSlide;
