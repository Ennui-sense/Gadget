import { validateCardForm } from "./validate-forms";
import { activeOption, resetOptions } from "../functions/controlOptions"; 
import { sortProducts } from "./sortProducts";
// import { formatPrice } from "./formatPrice";
import { generateColorOptions, generateMemoryOptions } from "./generateOptions";
import { changePriceAndImage } from "./changePriceAndImage";


// Функция для создания и отображения карточек товаров
export function renderProducts(data) {
	// Создаем переменную под контейнер и сразу же очищаем ее (чтобы не дублировались карточки при смене города)
	const products = document.querySelector(".catalog__products");
	products.innerHTML = "";

	// Перебираем исходные данные, создаем карточки и добавляем их в контейнер 
	data.forEach((item) => {
		const product = document.createElement("li");
		product.classList.add("catalog__product");
		product.innerHTML = `
			<article class="catalog__cart catalog-cart" id="cart-${item.id}" data-category="${item.category}" data-price="${item.base_price}" data-model="${item.model}">
				<img src="${item.base_image}" alt="" width="330" height="355" loading="lazy" class="catalog-cart__image">

				<div class="catalog-cart__body">
					<div class="catalog-cart__info">
						<h3 class="catalog-cart__title">${item.name}</h3>
						<p class="catalog-cart__price">от <span class="catalog-cart__price-value">${item.base_price.toLocaleString("ru-RU")}</span> ₽</p>
					</div>

					<form action="" class="catalog-cart__form" id="form-${item.id}">
						<div class="catalog-cart__parameters">
							<div class="catalog-cart__color">
								<p class="catalog-cart__text">Цвет</p>
								<div class="catalog-cart__buttons" id="form-${item.id}__color-group">
								</div>
							</div>

							<div class="catalog-cart__memory">
								<p class="catalog-cart__text">Память</p>
								<div class="catalog-cart__buttons" id="form-${item.id}__memory-group">
								</div>
							</div>

							<div class="catalog-cart__sim">
								<p class="catalog-cart__text">Количество сим-карт</p>
								<div class="catalog-cart__buttons" id="form-${item.id}__sim-group">
									<label class="catalog-cart__button sim-button">
										<input type="radio" name="sim" value="sim + e-sim" class="sim-button__input" data-validate-field="sim">
										<span class="sim-button__text">sim + e-sim</span>
									</label>
									<label class="catalog-cart__button sim-button">
										<input type="radio" name="sim" value="e-sim" class="sim-button__input" data-validate-field="sim">
										<span class="sim-button__text">e-sim</span>
									</label>
									<label class="catalog-cart__button sim-button">
										<input type="radio" name="sim" value="sim" class="sim-button__input" data-validate-field="sim">
										<span class="sim-button__text">sim</span>
									</label>
								</div>
							</div>
						</div>
						
						
						<div class="catalog-cart__error"></div>
						<button type="submit" class="catalog-cart__button catalog-cart__button-add button">Добавить в корзину</button>
					</form>
				</div>
			</article>
			`;
		
			products.append(product);
			generateColorOptions(item);
			generateMemoryOptions(item);
			
			changePriceAndImage(item);
			validateCardForm(`#form-${item.id}`);
		// Добавляем валидацию для обязательного выбора всех опций
	});


	// Создаем переменную со всеми созданными ранее карточками
	const catalogCarts = document.querySelectorAll('.catalog-cart');
	
	// Проходимся по каждой карточке и запускаем функцию проверки активных опций и их сброса при добавлении к корзину
	catalogCarts.forEach(cart => {
		const colorButtons = cart.querySelectorAll('.color-button');
		const memoryButtons = cart.querySelectorAll('.memory-button');
		const simButtons = cart.querySelectorAll('.sim-button');

		const buttonAdd = cart.querySelector('.catalog-cart__button-add');
		const allOptions = cart.querySelectorAll('.catalog-cart__button');	

		resetOptions(allOptions, buttonAdd);

		activeOption(colorButtons);
		activeOption(memoryButtons);
		activeOption(simButtons);
	})

	// Вызываем функцию сортировки (по умолчанию - по возрастанию)
	sortProducts();
};