// menu.js - control menú hamburguesa (puro JS, accesible)
document.addEventListener('DOMContentLoaded', function () {
const toggleButtons = document.querySelectorAll('.menu-toggle');

toggleButtons.forEach(btn => {
const nav = document.getElementById('main-nav');

btn.addEventListener('click', function () {
    // alternar clase en <nav>
    if (!nav) return;

    const isOpen = nav.classList.toggle('open');

    // actualizar atributos aria para accesibilidad
    btn.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
    btn.setAttribute('aria-label', 'Cerrar menú');
    // focus first link (mejor UX)
    const firstLink = nav.querySelector('a');
    if (firstLink) firstLink.focus();
    } else {
    btn.setAttribute('aria-label', 'Abrir menú');
    }
});
});

// Cerrar menú si se hace click en un enlace (útil en mobile)
document.addEventListener('click', function (e) {
const nav = document.getElementById('main-nav');
const target = e.target;
if (!nav) return;

if (nav.classList.contains('open') && target.tagName === 'A' && target.closest('nav')) {
    nav.classList.remove('open');
    // actualizar todos los toggles si hay varios header (páginas internas)
    document.querySelectorAll('.menu-toggle').forEach(t => t.setAttribute('aria-expanded', 'false'));
    document.querySelectorAll('.menu-toggle').forEach(t => t.setAttribute('aria-label', 'Abrir menú'));
}
});
});
