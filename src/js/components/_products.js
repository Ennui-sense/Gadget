import { getProductsByCity } from "../functions/getProductsByCity";
import { validateForms } from "../functions/validate-forms";



export const renderProducts = (async (city) => {
	const products = document.querySelector(".catalog__products");
	const data = await getProductsByCity(city);

	data.forEach((item) => {
		const product = document.createElement("li");
		product.classList.add("catalog__product");
		product.innerHTML = `
			<article class="catalog__cart catalog-cart" id="cart-${item.id}">
				<img src="${item.img}" alt="" width="253" height="355" loading="lazy" class="catalog-cart__image">

				<div class="catalog-cart__body">
					<div class="catalog-cart__info">
						<h3 class="catalog-cart__title">${item.name}</h3>
						<p class="catalog-cart__price">${item.price}</p>
					</div>

					<form action="" class="catalog-cart__form" id="form-${item.id}">
						<div class="catalog-cart__parameters">
							<div class="catalog-cart__color">
								<p class="catalog-cart__text">Цвет</p>
								<div class="catalog-cart__buttons" id="form-${item.id}__color-group">
									<label class="catalog-cart__button color-button">
										<input type="radio" name="color" class="color-button__input" value="white" data-validate-field="color">
										<span class="color-button__color color-button__color--white"></span>
									</label>
									<label class="catalog-cart__button color-button">
										<input type="radio" name="color" class="color-button__input" value="black" data-validate-field="color">
										<span class="color-button__color color-button__color--black"></span>
									</label>
									<label class="catalog-cart__button color-button">
										<input type="radio" name="color" class="color-button__input" value="pink" data-validate-field="color">
										<span class="color-button__color color-button__color--pink"></span>
									</label>
									<label class="catalog-cart__button color-button">
										<input type="radio" name="color" class="color-button__input" value="blue" data-validate-field="color">
										<span class="color-button__color color-button__color--blue"></span>
									</label>
								</div>
							</div>

							<div class="catalog-cart__memory">
								<p class="catalog-cart__text">Память</p>
								<div class="catalog-cart__buttons" id="form-${item.id}__memory-group">
									<label class="catalog-cart__button memory-button">
										<input type="radio" name="memory" value="64 GB" class="memory-button__input" data-validate-field="memory">
										<span class="memory-button__text">64 GB</span>
									</label>
									<label class="catalog-cart__button memory-button">
										<input type="radio" name="memory" value="128 GB" class="memory-button__input" data-validate-field="memory">
										<span class="memory-button__text">128 GB</span>
									</label>
									<label class="catalog-cart__button memory-button">
										<input type="radio" name="memory" value="256 GB" class="memory-button__input" data-validate-field="memory">
										<span class="memory-button__text">256 GB</span>
									</label>
									<label class="catalog-cart__button memory-button">
										<input type="radio" name="memory" value="512 GB" class="memory-button__input" data-validate-field="memory">
										<span class="memory-button__text">512 GB</span>
									</label>
									<label class="catalog-cart__button memory-button">
										<input type="radio" name="memory" value="1 TB" class="memory-button__input" data-validate-field="memory">
										<span class="memory-button__text">1 TB</span>
									</label>
								</div>
							</div>

							<div class="catalog-cart__sim">
								<p class="catalog-cart__text">Количество сим-карт</p>
								<div class="catalog-cart__buttons" id="form-${item.id}__sim-group1">
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

						<div class="catalog-cart__add button">
							<button type="submit" class="catalog-cart__button catalog-cart__button-add">Добавить в корзину</button>
						</div>
					</form>
				</div>
			</article>
			`;

		products.append(product);
		setTimeout(() => {
			validateForms(`#form-${item.id}`);
		}, 100);
	});
})();