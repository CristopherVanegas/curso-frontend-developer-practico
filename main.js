
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerIcon = document.querySelector('.hamburgerMenu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburguerIcon.addEventListener('click', toggleHamburguerMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleHamburguerMenu() {
    mobileMenu.classList.toggle('inactive');
}


function toggleCarritoAside() {
    aside.classList.toggle('inactive');

    if (mobileMenu.classList.contains('inactive')) {

    }
}
