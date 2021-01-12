const mainContent = document.querySelector(".main");
const thumbnails = document.querySelector(".thumbnails-container");

function scrollEffect(e) {
  mainContent.classList.add("main-shrink");

  //   console.log(window.pageYOffset);
  //   window.scrollTo(0, document.body.scrollHeight);
}

function init() {
  document.addEventListener("scroll", scrollEffect);
}
init();
