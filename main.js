const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header .container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});



// cursor
let mouseCursor = document.querySelector(".cursor");
let mouseCursor2 = document.querySelector(".cursor2");
let allLinks = document.querySelectorAll(".links");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = mouseCursor2.style.top = e.pageY + "px ";
  mouseCursor.style.left = mouseCursor2.style.left = e.pageX + "px";
}

allLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
});



// type writer

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(500)
  .typeString('I Code <span style="color: #0df2d4;">Cool</span> Website')
  .pauseFor(1500)
  .deleteChars(24)

  .typeString('Coding is <span style="color: #0df2d4;">Life</span>')
  .pauseFor(1500)
  .deleteChars(24)

  .typeString('I Code <span style="color: #0df2d4;">Modern</span> Design')
  .pauseFor(1500)
  .deleteChars(26)

  .start();