const countItems = document.querySelector('.header__cart-count');
const cartItems = document.querySelectorAll('.cart-card');

countItems.innerText = cartItems.length;
