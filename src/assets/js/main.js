console.log('main.js loaded');

export function initBurgerMenu() {
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    console.log('Burger elements:', burger);
    console.log('Menu elements:', menu);

    if (burger.length && menu.length) {
        for (let i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (let j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (close.length) {
        for (let i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (let j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (let i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (let j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', initBurgerMenu);

const observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
        if (mutation.type === 'childList') {
            const burger = document.querySelector('.navbar-burger');
            if (burger) {
                console.log('Burger menu found');
                initBurgerMenu();
                observer.disconnect();
                break;
            }
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
