const navbarr = document.getElementsByTagName("nav")[0]; // Carikan Elemen pertama (0) nav
// navbarr menyimpan element html pertama
// console.log(document.getElementsByTagName("nav")[0])

window.addEventListener("scroll", function () { // saat window di scroll jalankan fungsi
  if (window.scrollY > 1) { //
    navbarr.classList.replace("bg-transparent", "nav-color");
  } else if (window.scrollY <= 0) {
    navbarr.classList.replace("nav-color", "bg-transparent");
  }
});
