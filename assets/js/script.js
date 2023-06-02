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

let sections = document.querySelectorAll('section');
let navLi = document.querySelectorAll('.linked');

window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    
    if (scrollY >= sectionTop ) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
      console.log('harusnya ganti si')
    }
  });
};
