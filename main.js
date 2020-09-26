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
let allLinks = document.querySelectorAll(".links a");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px ";
  mouseCursor.style.left = e.pageX + "px";
  // console.log(e);
}

allLinks.forEach(link => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
});


// // type writer

// const TypeWriter = function (txtElement, words, wait = 1000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = "";
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 20);
//   this.type();
//   this.isDeleting = false;
// };

// // type method
// TypeWriter.prototype.type = function () {
//   const current = this.wordIndex % this.words.length;
//   const fullTxt = this.words[current];

//   //   console.log(fullTxt);
//   // check if deleting
//   if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   // insert text into element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   // init type speed
//   let typeSpeed = 120;

//   if (this.isDeleting) {
//     typeSpeed /= 2;
//   }

//   if (!this.isDeleting && this.txt === fullTxt) {
//     typeSpeed = this.wait;
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     this.isDeleting = false;
//     this.wordIndex++;

//     typeSpeed = 300;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// };

// //  Init on DOM Load
// document.addEventListener("DOMContentLoaded", init);

// // init App
// function init() {
//   const txtElement = document.querySelector(".txt-type");
//   const words = JSON.parse(txtElement.getAttribute("data-words"));
//   const wait = txtElement.getAttribute("data-wait");
//   // init Typewriter
//   new TypeWriter(txtElement, words, wait);
// }
//  end of type writer

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

  .typeString('I <span style="color: #0df2d4;">Love</span> Design')
  .pauseFor(1500)
  .deleteChars(24)

  .typeString('I Code <span style="color: #0df2d4;">Modern</span> Design')
  .pauseFor(1500)
  .deleteChars(26)

  .start();