// import { loadData } from "./loadData";
// import { renderProducts } from "./renderProducts";

// Список информации по магазинам в разных городах
const magazinInfo = [
  {
    city: "Пермь",
    address: `Улица Куйбышева, 16 <br>
							ТЦ Колизей Cinema  1 этаж`,
		footerAddress: `614000, Россия, Пермь<br>
										Улица Куйбышева, 16<br>
										ТЦ Колизей Cinema  1 этаж`,
		hours: `<time datetime="10:00">10:00</time> - <time datetime="21:00">21:00</time>`,
		phone: "+7 (982) 244-81-44",
		cartAddresss: "г. Пермь, улица Куйбышева, 16, ТЦ Колизей Cinema 1 этаж"
  },
  {
    city: "Екатеринбург",
    address: `улица Сулимова, 50 <br>
							ТЦ Парк Хаус 1 этаж`,
		footerAddress: `620137, Россия, Екатеринбург<br>
										улица Сулимова, 50<br>
										ТЦ Парк Хаус  1 этаж`,
		hours: `<time datetime="10:00">10:00</time> - <time datetime="22:00">22:00</time>`,
		phone: "111111111111",
		cartAddresss: "г. Екатеринбург, улица Сулимова, 50, ТЦ Парк Хаус 1 этаж"
  },
];
// Текущий город
let currentCity = 'Пермь';

// Создаем переменные для селекторов элементов, связанных с данными о городе на странице 
const cityName = document.querySelectorAll(".city-button__name");

const headerAddressField = document.querySelector(".header__magazine-address");
const footerAddressField = document.querySelector(".footer__magazine-address");
const menuAddress = document.querySelector(".menu-modal__magazine-address");
const cartAddress = document.querySelector(".cart-form__order-address");

const headerPhone = document.querySelector(".header__number-telephone");
const footerPhone = document.querySelector(".footer__contacts-phone");
const menuPhone = document.querySelector(".menu-modal__number-telephone");

const headerHours = document.querySelector(".header__magazine-time");
const footerHours = document.querySelector(".footer__magazine-time");
const menuHours = document.querySelector(".menu-modal__magazine-time");



// Функция для изменения города и загрузки данных по новому городу, а также обновления информации о магазине
export function changeCity(newCity) {
	// const data = await loadData();
	
	currentCity = newCity;
	// if (data[newCity]) {
		// 	currentCity = newCity;
		// 	renderProducts(data[newCity]);
		// }
	cityName.forEach(name => {
		name.innerText = newCity;

		// Меняем данные о местоположении магазина в шапке, подвале, меню и в корзине
		headerAddressField.innerHTML = magazinInfo.find((item) => item.city === name.innerText).address;
		footerAddressField.innerHTML = magazinInfo.find((item) => item.city === name.innerText).footerAddress;
		cartAddress.innerText = magazinInfo.find((item) => item.city === name.innerText).cartAddresss;
		menuAddress.innerHTML = magazinInfo.find((item) => item.city === name.innerText).address;

		// Меняем данные о телефоне магазина в шапке, подвале и в меню
		headerPhone.innerText = magazinInfo.find((item) => item.city === name.innerText).phone;
		footerPhone.innerText = magazinInfo.find((item) => item.city === name.innerText).phone;
		menuPhone.innerHTML = magazinInfo.find((item) => item.city === name.innerText).phone;

		// Меняем данные о часах работы магазина в шапке, подвале и в меню
		headerHours.innerHTML = magazinInfo.find((item) => item.city === name.innerText).hours;
		footerHours.innerHTML = magazinInfo.find((item) => item.city === name.innerText).hours;
		menuHours.innerHTML = magazinInfo.find((item) => item.city === name.innerText).hours;
	});
}