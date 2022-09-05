
const menuEmail = document.querySelector('.navbar-right');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerIcon = document.querySelector('.hamburgerMenu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburguerIcon.addEventListener('click', toggleHamburguerMenu);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    // console.log("Click!");
}

function toggleHamburguerMenu() {
    mobileMenu.classList.toggle('inactive');
}

// console.log('JS working...');

