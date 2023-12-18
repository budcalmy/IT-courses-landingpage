document.querySelector(".menu-icon-wrapper").onclick = function () {
  document.querySelector(".menu-icon").classList.toggle("menu-icon-active");
  document.querySelector(".nav").classList.toggle("open");
};



let lastScroll = 0;
const defaultOffset = 300;
const header = document.querySelector("header");

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("hide");

window.addEventListener("scroll", () => {
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
  ) {
    //scroll down
    header.classList.add("hide");
    document.querySelector(".menu-icon").classList.remove("menu-icon-active");
    document.querySelector(".nav").classList.remove("open");
  } else if (scrollPosition() < lastScroll && containHide()) {
    //scroll up
    header.classList.remove("hide");
  }

  lastScroll = scrollPosition();
});

function scrollToTop() {
  window.scrollTo(0, 0);
}

