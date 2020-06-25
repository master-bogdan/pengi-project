window.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');

    // When it active it stop window scroll
    hamburger.addEventListener('click', () => {
        if (hamburger.classList.contains('hamburger_active')) {
            menu.classList.remove('menu__active');
            hamburger.classList.remove('hamburger_active');
            document.body.style.overflow = '';
        } else {
            menu.classList.add('menu__active');
            hamburger.classList.add('hamburger_active');
            document.body.style.overflow = 'hidden';
        }
    });


});