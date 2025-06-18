// import JustValidate from "just-validate"
import JustValidate from "./../../../node_modules/just-validate"

const data = [
	{
		id: 1,
		name: 'Apple iPhone 14',
		img: '../img/phone-example.png',
		price: '107 553 ₽',
	},
	{
		id: 2,
		name: 'Apple Mac 14',
		img: '../img/phone-example.png',
		price: '107 553 ₽',
	},
	{
		id: 3,
		name: 'Apple iPhone 14',
		img: '../img/phone-example.png',
		price: '107 553 ₽',
	},
	{
		id: 4,
		name: 'Apple iPhone 14',
		img: '../img/phone-example.png',
		price: '107 553 ₽',
	},
	{
		id: 5,
		name: 'Apple iPhone 14',
		img: '../img/phone-example.png',
		price: '107 553 ₽',
	},
	{
		id: 6,
		name: 'Apple iPhone 14',
		img: '../img/phone-example.png',
		price: '107 553 ₽',
	},
	{
		id: 7,
		name: 'Apple iPhone 14',
		img: '../img/phone-example.png',
		price: '107 553 ₽',
	},
	{
		id: 8,
		name: 'Apple iPhone 14',
		img: '../img/phone-example.png',
		price: '107 553 ₽',
	},
]

const products = document.querySelector('.catalog__products')

data.forEach(item => {
	const product = document.createElement('li')
	product.classList.add('catalog__product')
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
								<div type="button" class="catalog-cart__button color-button">
									<input type="button" class="color-button__input" data-value="white">
									<span class="color-button__color color-button__color--white"></span>
								</div>
								<div type="button" class="catalog-cart__button color-button">
									<input type="button" class="color-button__input" data-value="black">
									<span class="color-button__color color-button__color--black"></span>
								</div>
								<div type="button" class="catalog-cart__button color-button">
									<input type="button" class="color-button__input" data-value="pink">
									<span class="color-button__color color-button__color--pink"></span>
								</div>
								<div type="button" class="catalog-cart__button color-button">
									<input type="button" class="color-button__input" data-value="blue">
									<span class="color-button__color color-button__color--blue"></span>
								</div>
							</div>
						</div>

						<div class="catalog-cart__memory">
							<p class="catalog-cart__text">Память</p>
							<div class="catalog-cart__buttons">
								<label class="catalog-cart__button memory-button">
									<input type="radio" name="memory" value="64 GB" class="memory-button__input">
									<span class="memory-button__text">64 GB</span>
								</label>
								<label class="catalog-cart__button memory-button">
									<input type="radio" name="memory" value="128 GB" class="memory-button__input">
									<span class="memory-button__text">128 GB</span>
								</label>
								<label class="catalog-cart__button memory-button">
									<input type="radio" name="memory" value="256 GB" class="memory-button__input">
									<span class="memory-button__text">256 GB</span>
								</label>
								<label class="catalog-cart__button memory-button">
									<input type="radio" name="memory" value="512 GB" class="memory-button__input">
									<span class="memory-button__text">512 GB</span>
								</label>
								<label class="catalog-cart__button memory-button">
									<input type="radio" name="memory" value="1 TB" class="memory-button__input">
									<span class="memory-button__text">1 TB</span>
								</label>
							</div>
						</div>

						<div class="catalog-cart__sim">
							<p class="catalog-cart__text">Количество сим-карт</p>
							<div class="catalog-cart__buttons">
								<label class="catalog-cart__button sim-button">
									<input type="radio" name="sim" value="sim + e-sim" class="sim-button__input" required>
									<span class="sim-button__text">sim + e-sim</span>
								</label>
								<label class="catalog-cart__button sim-button">
									<input type="radio" name="sim" value="e-sim" class="sim-button__input" required>
									<span class="sim-button__text">e-sim</span>
								</label>
								<label class="catalog-cart__button sim-button">
									<input type="radio" name="sim" value="sim" class="sim-button__input" required>
									<span class="sim-button__text">sim</span>
								</label>
							</div>
						</div>
					</div>

					<div class="just-validate-error-messages"></div>

					<div class="catalog-cart__add button">
						<input type="submit" class="catalog-cart__button catalog-cart__button-add" value="Добавить в корзину">
					</div>
				</form>
			</div>
		</article>
	`

	
	products.append(product)
})

for (let i = 1; i <= data.length; i++) {
	const formSelector = `#form-${i}`;
  const form = document.querySelector(formSelector);

  if (!form) {
    console.error(`Форма с селектором ${formSelector} не найдена!`);
    continue;
  } else {
		console.log("uspeh");
		
	}

	new JustValidate(`#form-${i}`, {
		rules: {
			memory: {
				required: true,
				rule: 'required'
			},
			sim: {
				required: true,
				rule: 'required'
			}
		},
		messages: {
			memory: {
				required: 'Выберите объем памяти'
			},
			sim: {
				required: 'Выберите количество сим-карт'
			}
		},
		showErrors: true,
    errorsContainer: function(form) {
      return form.querySelector('.just-validate-error-messages');
    }
	})
}


// document.querySelectorAll('.catalog-cart__button-add').forEach(button => {
//   button.addEventListener('click', function(event) {
//     const form = this.closest('form');
//     if (!form.checkValidity()) {
//       event.preventDefault(); // Предотвращаем отправку формы
//       console.log('Форма не прошла валидацию!');
//     }
//   });
// });
