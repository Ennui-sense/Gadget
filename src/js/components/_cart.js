let totalPrice = 0;
const cartPrice = document.querySelector('.cart__total');

const addedProducts = []
const productsInCart = document.querySelector('.cart__products');

window.addEventListener("click", (event) => {	
	if (event.target.classList.contains('catalog-cart__button-add')) {
		const item = new Object();		
		item.id = event.target.closest('.catalog__cart').getAttribute('id');
		item.name = event.target.closest('.catalog__cart').querySelector('.catalog-cart__title').textContent;
		item.price = event.target.closest('.catalog__cart').querySelector('.catalog-cart__price').textContent;
		item.img = event.target.closest('.catalog__cart').querySelector('.catalog-cart__image').getAttribute('src');
		item.color = event.target.closest('.catalog__cart').querySelector('.color-button.active').querySelector(".color-button__input").getAttribute('value');
		item.memory = event.target.closest('.catalog__cart').querySelector('.memory-button.active').querySelector(".memory-button__input").getAttribute('value');
		item.sim = event.target.closest('.catalog__cart').querySelector('.sim-button.active').querySelector(".sim-button__input").getAttribute('value');

		console.log(item.id + "\n" + item.name + "\n" + item.price + "\n" + item.img + "\n" + item.color + "\n" + item.memory + "\n" + item.sim);
		
		totalPrice += parseInt(item.price.replace(/[^\d]/g, ''), 10);
		cartPrice.innerText = `Итого: ${Math.floor(totalPrice / 1000)} ${totalPrice % 1000} ₽`;
		
		addedProducts.push(item);
		productsInCart.innerHTML = '';

		addedProducts.forEach(item => {
			const product = document.createElement('li')
			product.classList.add('cart__product')
			product.innerHTML = `
				<article class="cart__card cart-card" id="${item.id}">
					<img src="${item.img}" alt="" class="cart-card__image" width="96" height="172" loading="lazy">

					<div class="cart-card__content">
						<p class="cart-card__name">${item.name}</p>
						<div class="cart-card__options">
							<button type="button" class="cart-card__button memory-button memory-button__cart">${item.memory}</button>
							<button type="button" class="cart-card__button sim-button sim-button__cart">${item.sim}</button>
							<button type="button" class="cart-card__button color-button color-button__cart">
								<span class="color-button__color color-button__color--${item.color}"></span>
								<span class="visually-hidden">${item.color}</span>
							</button>
						</div>

						<button type="button" class="cart-card__delete-button">Удалить</button>
					</div>

					<p class="cart-card__price">${item.price} ₽</p>
				</article>
			`
			productsInCart.append(product)
		})

		const cartButton = document.querySelector('.header__cart');

		const countProducts = document.createElement('span');
		countProducts.classList.add('header__cart-count');
		countProducts.innerText = addedProducts.length;

		cartButton.append(countProducts);



		const deleteProduct = document.querySelectorAll('.cart-card__delete-button');
		console.log(deleteProduct.length);
		
		deleteProduct.forEach(button => {
			button.addEventListener('click', () => {
				const id = button.closest('.cart-card').getAttribute('id');
				const index = addedProducts.findIndex(item => item.id === id);

				if (deleteProduct.length-1 === 0) {
					cartPrice.innerText = "Итого 0 ₽";
				}
				else {
					totalPrice -= parseInt(addedProducts[index].price.replace(/[^\d]/g, ''), 10);
					cartPrice.innerText = `Итого: ${Math.floor(totalPrice / 1000)} ${totalPrice % 1000} ₽`;
				}

				addedProducts.splice(index, 1);
				button.closest('.cart-card').remove();
			})
		})
	}
})