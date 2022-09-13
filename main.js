////////////////////////////*  VARIABLES  *////////////////////////////

const menuEmail = document.querySelector('.navbar-email');  // SELECTS the navbar-email bc later it will be USED as a BUTTON for USER INFO.
const desktopMenu = document.querySelector('.desktop-menu');    // THIS IS THE MENU FOR QUICK USER INFO, it's a little window available only in DESKTOP WEB SITE.
const hamburguerIcon = document.querySelector('.hamburgerMenu');    // Query SELECTOR for hamburguer menu, this will be used later for enabling MOBILE MENU "categories".
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart'); // This querySelector will be used as a button for enabling the PRODUCT-DETAIL window.
const mobileMenu = document.querySelector('.mobile-menu');  // SHOWS Information for categories in the left-side of the web page.
const aside = document.querySelector('.product-detail');    // querySelector for .product-detail window.

menuEmail.addEventListener('click', toggleDesktopMenu); // eventListener for click to enable "Toggle Desktop Menu".
hamburguerIcon.addEventListener('click', toggleHamburguerMenu); // event Listener for click to enable "Toggle Hamburguer menu".
menuCarritoIcon.addEventListener('click', toggleCarritoAside);  // eventListener for click to enable "Toggle Carrito Aside".


////////////////////////////*  FUNCTIONS  *////////////////////////////

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleHamburguerMenu() {
    /* const isMenuHamburguerInactive = hamburguerIcon.classList.contains('inactive'); */   // Not neccesary because what I want to get is if PRODUCT-DETAIL contains inactive, NOT THE HAMBURGUER MENU.
    const isProductDetailActive = aside.classList.contains('inactive'); // Gets the status if PRODUCT-DETAIL is inactive or not.

    /* Checks if PRODUCT-DETAIL it's not inactive, then adds .inactive to aside -> "PRODUCT DETAIL" */
    if (!isProductDetailActive) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');    // TOGGLE .inactive to mobileMenu -> The menu that displays from Hamburguer Menu
}


function toggleCarritoAside() {
    const isMobileMenuInactive = mobileMenu.classList.contains('inactive');

    /* Checks if "Mobile Menu" it's not inactive, then adds .inactive to mobileMenu */
    if (!isMobileMenuInactive) {
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive'); // TOGGLE .inactive to aside -> Product Detail
}
