import { getProductsByCity } from "../functions/getProductsByCity";
import { validateForms } from "../functions/validate-forms";

const products = document.querySelector(".catalog__products");

const magazinInfo = [
  {
    city: "Пермь",
    address: `Улица Куйбышева, 16 <br>
							ТЦ Колизей Cinema  1 этаж`,
  },
  {
    city: "Екатеринбург",
    address: `улица Сулимова, 50 <br>
							ТЦ Парк Хаус 1 этаж`,
  },
];

const rules = [
  {
    ruleSelector: '#color',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Пожалуйста, укажите цвет'
      }
    ]
  },
  {
    ruleSelector: '#memory',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Пожалуйста, укажите количество памяти'
      }
    ]
  },
  {
    ruleSelector: '#sim',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Пожалуйста, укажите тип sim-карт'
      }
    ]
  },
];

const citys = document.querySelectorAll(".city-modal__button-name");
const cityName = document.querySelector(".city-button__name");

const addressField = document.querySelector(".header__magazine-address");

citys.forEach((city) => {
  city.addEventListener("click", () => {
    addressField.innerHTML = magazinInfo.find((item) => item.city === city.innerText).address;
    cityName.innerText = city.innerText;
		products.innerHTML = "";

    (async () => {
      const data = await getProductsByCity(cityName.innerText);

      console.log(`Товары из ${cityName.innerText}:`, data);

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
										<div class="catalog-cart__buttons">
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
										<div class="catalog-cart__buttons">
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
										<div class="catalog-cart__buttons">
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

								<div class="just-validate-error-messages"></div>

								<div class="catalog-cart__add button">
									<input type="button" class="catalog-cart__button catalog-cart__button-add" value="Добавить в корзину">
								</div>
							</form>
						</div>
					</article>
					`;

        products.append(product);
				validateForms(product.querySelector(".catalog-cart__form"), rules);
      });
    })();
  });
});



window.addEventListener("click", (event) => {
  console.log(event.target);
});

// document.querySelectorAll('.catalog-cart__button-add').forEach(button => {
//   button.addEventListener('click', function(event) {
//     const form = this.closest('form');
//     if (!form.checkValidity()) {
//       event.preventDefault(); // Предотвращаем отправку формы
//       console.log('Форма не прошла валидацию!');
//     }
//   });
// });
