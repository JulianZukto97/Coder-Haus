document.addEventListener('DOMContentLoaded', () => { // ----------Control del menú hamburguesa----------
    const btn = document.querySelector('.menu-toggle');
    const nav = document.getElementById('main-nav');

    if (!btn || !nav) return;

    // ----------Abre / cierra menú----------
    btn.addEventListener('click', () => {
        nav.classList.toggle('open');

        const isOpen = nav.classList.contains('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        btn.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });

    // ----------Cierra el menú al tocar un enlace----------
    nav.addEventListener('click', e => {
        if (e.target.tagName === 'A') {
            nav.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
            btn.setAttribute('aria-label', 'Abrir menú');
        }
    });
});
