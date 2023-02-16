const navbarr = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    navbarr.classList.replace("bg-transparent", "nav-color");
  } else if (window.scrollY <= 0) {
    navbarr.classList.replace("nav-color", "bg-transparent");
  }
});
