// Menu Toggler
let menuToggler = document.querySelector(".menu-toggle");
let body = document.querySelector("body");
menuToggler.onclick = function () {
    body.classList.toggle("open");
};