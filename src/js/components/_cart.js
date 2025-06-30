
// Создаем переменные для хранения общей цены и селектора для отображения этой цены в корзине
// const cartPrice = document.querySelector('.cart__total');
// let totalPrice = 0;
let countAddedProducts = 0;

let countAddedProductsObject = {
	count: countAddedProducts
}
const countProducts = document.querySelector('.header__cart-count');
// Создаем массив для хранения добавленных товаров и селектора для отображения их в корзине
const addedProducts = []
const productsInCart = document.querySelector('.cart__products');

// Добавляем обработчик события клика на кнопку "Добавить в корзину"
window.addEventListener("click", (event) => {	
	if (event.target.classList.contains('catalog-cart__button-add')) {
		// Создаем объект для хранения информации о товаре с id, названием, ценой, изображением, цветом, объемом памяти и количеством SIM-карт
		const item = new Object();		
		item.id = event.target.closest('.catalog__cart').getAttribute('id');
		item.name = event.target.closest('.catalog__cart').querySelector('.catalog-cart__title').textContent;
		// item.price = event.target.closest('.catalog__cart').querySelector('.catalog-cart__price').textContent;
		item.img = event.target.closest('.catalog__cart').querySelector('.catalog-cart__image').getAttribute('src');
		item.color = event.target.closest('.catalog__cart').querySelector('.color-button.active').querySelector(".color-button__input").getAttribute('value');
		item.memory = event.target.closest('.catalog__cart').querySelector('.memory-button.active').querySelector(".memory-button__input").getAttribute('value');
		item.sim = event.target.closest('.catalog__cart').querySelector('.sim-button.active').querySelector(".sim-button__input").getAttribute('value');

		console.log(item.id + "\n" + item.name + "\n" + item.img + "\n" + item.color + "\n" + item.memory + "\n" + item.sim);
		
		// Добавляем товар в массив и обновляем общую цену
		// totalPrice += parseInt(item.price.replace(/[^\d]/g, ''), 10);
		
		// cartPrice.innerText = `Итого: ${Math.floor(totalPrice / 1000)} ${totalPrice % 1000} ₽`;
		
		addedProducts.push(item);
		countAddedProductsObject.count++;
		
		// Очищаем контейнер для отображения товаров и добавляем новые карточки (чтобы избежать дублирования карточек)
		productsInCart.innerHTML = '';

		// Перебираем массив и создаем новые карточки в корзине и добавляем их в контейнер
		addedProducts.forEach(item => {
			const product = document.createElement('li')
			product.classList.add('cart__product')
			product.innerHTML = `
				<article class="cart__card cart-card" id="${item.id}">
					<img src="${item.img}" alt="" class="cart-card__image" width="152" height="153" loading="lazy">

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
				</article>
			`
			productsInCart.append(product)	
		})

		// const countProducts = document.querySelector('.header__cart-count');
		countProducts.innerText = countAddedProductsObject.count;
		
		if (countAddedProductsObject.count === 0) {
			countProducts.style.display = "none";
		}
		else {
			countProducts.style.display = "block";
		}

		// const citys = document.querySelectorAll(".city-modal__button");
		// citys.forEach((city) => {
		// 	city.addEventListener("click", () => {
		// 		productsInCart.innerHTML = '';
		// 		countAddedProductsObject.count = 0;
		// 		countProducts.style.display = "none";
		// 		addedProducts.splice(0, addedProducts.length);	
		// 	});
		// });

		// Создаем переменную под все кнопки "УДдалить" в корзине, перебираем их и добавляем обработчик события клика
		const deleteProduct = document.querySelectorAll('.cart-card__delete-button');
		
		deleteProduct.forEach(button => {
			button.addEventListener('click', () => {
				// Создаем переменные под id товара и его индекс в массиве
				const id = button.closest('.cart-card').getAttribute('id');
				const index = addedProducts.findIndex(item => item.id === id);

				countAddedProductsObject.count--;
				countProducts.innerText = countAddedProductsObject.count;
				
				// Если количество товаров в корзине стало равно 0, удаляем счетчик и обнуляем общую цену. Иначе обновляем общую цену.
				if (countAddedProductsObject.count === 0) {
					countProducts.style.display = "none";
					// cartPrice.innerText = "Итого 0 ₽";
					// totalPrice = 0;
				}
				// else {
				// 	totalPrice -= parseInt(addedProducts[index].price.replace(/[^\d]/g, ''), 10);
				// 	cartPrice.innerText = `Итого: ${Math.floor(totalPrice / 1000)} ${totalPrice % 1000} ₽`;
				// }

				// Удаляем товар из массива и удаляем карточку из корзины
				addedProducts.splice(index, 1);
				button.closest('.cart-card').remove();
			})
		})
	}
})

export { addedProducts, productsInCart, countProducts,  countAddedProductsObject}