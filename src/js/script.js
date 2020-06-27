window.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');

    // When it active it stop window scroll
    hamburger.addEventListener('click', showHideMenu);

    function showHideMenu() {
        if (hamburger.classList.contains('hamburger_active')) {
            menu.classList.remove('menu__active');
            hamburger.classList.remove('hamburger_active');
            document.body.style.overflow = '';
        } else {
            menu.classList.add('menu__active');
            hamburger.classList.add('hamburger_active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Slider
    const slides = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('[data-target="Indicators"]');
    let currentSlide = 0;
    let slideInterval = setInterval(slide, 5000);

    function slide() {
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('i_active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('i_active');
    }


    // Modal
    const btn = document.querySelectorAll('.btn');
    const modalClose = document.querySelector('#modal_close');
    const modal = document.querySelector('.overlay');

    btn.forEach((item) => {
        item.addEventListener('click', showHideModal);
    });

    function showHideModal() {
        modal.classList.add('overlay_active');
        document.body.style.overflow = 'hidden';

        modalClose.addEventListener('click', () => {
            modal.classList.remove('overlay_active');
            document.body.style.overflow = '';
        });
    }

    // Animations
    const withUsBlocks = document.querySelectorAll('.withus__block-item');
    const textShow = document.querySelectorAll('.advantages__item-descr');

    function isVisible(elem) {
        return elem.getBoundingClientRect().top;
    }

    window.addEventListener('scroll', () => {
        withUsBlocks.forEach(item => {
            if (isVisible(item) <= 450) {
                item.classList.add('fromLeft');
            }
        });

        textShow.forEach(item => {
            if (isVisible(item) <= 450) {
                item.classList.add('text_show');
            }
        });
    });
});