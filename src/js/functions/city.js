import { renderProducts } from "./../components/_products";

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

let city = "Пермь";
// const citys = document.querySelectorAll(".city-modal__button-name");
// const cityName = document.querySelector(".city-button__name");

// const addressField = document.querySelector(".header__magazine-address");

// function changeCity() {
// 	citys.forEach((city) => {
// 		city.addEventListener("click", () => {
// 			addressField.innerHTML = magazinInfo.find((item) => item.city === city.innerText).address;
// 			cityName.innerText = city.innerText;
// 		});
// 	});
// }

renderProducts(city);