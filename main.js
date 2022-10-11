////////////////////////////*  VARIABLES  *////////////////////////////

const menuEmail = document.querySelector('.navbar-email');  // SELECTS the navbar-email bc later it will be USED as a BUTTON for USER INFO.
const desktopMenu = document.querySelector('.desktop-menu');    // THIS IS THE MENU FOR QUICK USER INFO, it's a little window available only in DESKTOP WEB SITE.
const hamburguerIcon = document.querySelector('.hamburgerMenu');    // Query SELECTOR for hamburguer menu, this will be used later for enabling MOBILE MENU "categories".
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart'); // This querySelector will be used as a button for enabling the PRODUCT-DETAIL window.
const mobileMenu = document.querySelector('.mobile-menu');  // SHOWS Information for categories in the left-side of the web page.
const asideProductDetail = document.querySelector('.product-detail');    // querySelector for .product-detail window.
const cardsContainer = document.querySelector('.cards-container');  // SELECT the container where to INSERT cards objects.

menuEmail.addEventListener('click', toggleDesktopMenu); // eventListener for click to enable "Toggle Desktop Menu".
hamburguerIcon.addEventListener('click', toggleHamburguerMenu); // event Listener for click to enable "Toggle Hamburguer menu".
menuCarritoIcon.addEventListener('click', toggleCarritoAside);  // eventListener for click to enable "Toggle Carrito Aside".


////////////////////////////*  FUNCTIONS  *////////////////////////////

function toggleDesktopMenu() {
    const isCarritoIconInactive = asideProductDetail.classList.contains('inactive');

    if (!isCarritoIconInactive) {
        asideProductDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleHamburguerMenu() {
    /* const isMenuHamburguerInactive = hamburguerIcon.classList.contains('inactive'); */   // Not neccesary because what I want to get is if PRODUCT-DETAIL contains inactive, NOT THE HAMBURGUER MENU.
    const isProductDetailActive = asideProductDetail.classList.contains('inactive'); // Gets the status if PRODUCT-DETAIL is inactive or not.

    /* Checks if PRODUCT-DETAIL it's not inactive, then adds .inactive to aside -> "PRODUCT DETAIL" */
    if (!isProductDetailActive) {
        asideProductDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');    // TOGGLE .inactive to mobileMenu -> The menu that displays from Hamburguer Menu
}

function toggleCarritoAside() {
    const isMobileMenuInactive = mobileMenu.classList.contains('inactive');
    const isMenuDesktopInactive = desktopMenu.classList.contains('inactive');

    /* Checks if "Mobile Menu" it's not inactive, then adds .inactive to mobileMenu */
    if (!isMobileMenuInactive) {
        mobileMenu.classList.add('inactive');
    } else if (!isMenuDesktopInactive) {
        desktopMenu.classList.add('inactive');
    }
    
    asideProductDetail.classList.toggle('inactive'); // TOGGLE .inactive to aside -> Product Detail
}

function renderProducts(productList) { 
    for (product of productList) {
    
        /*  MODEL TO FOLLOW */
        
        /*
        <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            <div class="product-info">
                <div>
                    <p>$120,00</p>
                    <p>Bike</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        </div>
        */
    
    
        ///////////////////// PRODUCT MODEL:  product = {name, price, image} -> product.image /////////////////////
        
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        
        ///////////////////// PRODUCT IMAGE /////////////////////
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
    
        ///////////////////// DIV FOR PRODUCT INFO - DAD DIV /////////////////////
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
    
        ///////////////////// DIV FOR PRODUCT INFO PRICE&NAME /////////////////////
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;   // creates a text format $ + price from object product
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        ///////////////////// IMAGE BTN /////////////////////
        
        const productInfoFigure = document.createElement('figure');
        const productBtnImgCart = document.createElement('img');
        productBtnImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productBtnImgCart);
    
    
        ///////////////////// productInfoDiv & productInfoFigure -> productInfo /////////////////////
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
    
        ///////////////////// productImg & productInfo -> productCard /////////////////////
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
    
        ///////////////////// productCard -> cardsContainer /////////////////////
    
        cardsContainer.appendChild(productCard);
    
    }
}

// list of products
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: 510,
    image: 'https://www.tecnosmart.com.ec/wp-content/uploads/2022/03/MON0278.jpg',
});

productList.push({
    name: 'Mac',
    price: 1500,
    image: 'https://www.apple.com/v/mac-mini/p/images/overview/hero__x8ruukomx2au_large_2x.jpg',
});


renderProducts(productList);

