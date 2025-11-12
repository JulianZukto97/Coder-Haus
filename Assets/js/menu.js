
// ----------menu.js - control menú hamburguesa----------
document.addEventListener('DOMContentLoaded', () => {
const btn = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// ----------Cierra el menú al hacer clic en un enlace----------
nav.addEventListener('click', e => {
    if (e.target.tagName === 'A') nav.classList.remove('open');
});
});