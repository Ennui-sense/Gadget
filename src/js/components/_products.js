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
				<article class="catalog__cart catalog-cart">
					<img src="${item.img}" alt="" width="253" height="355" loading="lazy" class="catalog-cart__image">

					<div class="catalog-cart__body">
						<div class="catalog-cart__info">
							<h3 class="catalog-cart__title">${item.name}</h3>
							<p class="catalog-cart__price">${item.price}</p>
						</div>

						<div class="catalog-cart__color">
							<p class="catalog-cart__text">Цвет</p>
							<div class="catalog-cart__buttons">
								<button type="button" class="catalog-cart__button color-button">
									<span class="color-button__color color-button__color--white"></span>
									<span class="visually-hidden">Белый</span>
								</button>
								<button type="button" class="catalog-cart__button color-button">
									<span class="color-button__color color-button__color--black"></span>
									<span class="visually-hidden">Черный</span>
								</button>
								<button type="button" class="catalog-cart__button color-button">
									<span class="color-button__color color-button__color--pink"></span>
									<span class="visually-hidden">Розовый</span>
								</button>
								<button type="button" class="catalog-cart__button color-button">
									<span class="color-button__color color-button__color--blue"></span>
									<span class="visually-hidden">Голубой</span>
								</button>
							</div>
						</div>

						<div class="catalog-cart__memory">
							<p class="catalog-cart__text">Память</p>
							<div class="catalog-cart__buttons">
								<button type="button" class="catalog-cart__button memory-button">64 GB</button>
								<button type="button" class="catalog-cart__button memory-button">128 GB</button>
								<button type="button" class="catalog-cart__button memory-button">256 GB</button>
								<button type="button" class="catalog-cart__button memory-button">512 GB</button>
								<button type="button" class="catalog-cart__button memory-button">1 TB</button>
							</div>
						</div>

						<div class="catalog-cart__sim">
							<p class="catalog-cart__text">Количество сим-карт</p>
							<div class="catalog-cart__buttons">
								<button type="button" class="catalog-cart__button sim-button">sim + e-sim</button>
								<button type="button" class="catalog-cart__button sim-button">e-sim</button>
								<button type="button" class="catalog-cart__button sim-button">2 sim</button>
							</div>
						</div>
					</div>

					<button type="button" class="catalog-cart__button catalog-cart__button-add button">
						<span class="button__text">Добавить в корзину</span>
					</button>
				</article>
	`
	products.append(product)
})
