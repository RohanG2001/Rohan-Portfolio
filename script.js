let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


var typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Frontend Developer", "Frontend Developer "],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 100,
  loop: true
})

