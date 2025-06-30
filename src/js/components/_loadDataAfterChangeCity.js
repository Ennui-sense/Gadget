import { loadInitialData } from "./../functions/loadInitialData";
import { changeCity } from "./../functions/changeCity";

// Создаем переменную под все города в открываюшемся модальном окне
const citys = document.querySelectorAll(".city-modal__button-name");

// При загрузке страницы загружаем данные по первоначальному городу - Пермь
document.addEventListener('DOMContentLoaded', () => {
  loadInitialData();

	// При клике на город в модальном окне вызываем функцию changeCity
  citys.forEach((city) => {
		city.addEventListener("click", () => {
			changeCity(city.innerText);
		});
	});
});	