const hamburguer = document.querySelector(".header_hamburger");
const nav = document.querySelector(".header_nav");

hamburguer.addEventListener('click', () => nav.classList.toggle("active"));