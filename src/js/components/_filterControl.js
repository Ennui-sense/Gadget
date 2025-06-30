import { generateSelectedFilterModel, generateSelectedFilterPrice } from "../functions/generateSelectedFilters";
import { deleteFilters } from "../functions/deleteFilters";
import { filterProducts } from "../functions/filterProducts";
import { clearSelectedFilters } from "../functions/clearSelectedFilters";

// Создаем переменную под кнопки моделей в модальном окне фильтров
const modelButtons = document.querySelectorAll(".model-button");

// Перебираем все кнопки моделей и после клика на них добавляем класс "active" 
modelButtons.forEach((button) => {
	button.addEventListener("click", () => {
		if (button.querySelector('input[type="checkbox"]').checked) {
			button.classList.toggle("active");
		}
	})
});

// Создаем переменные под поля ввода цены в модальном окне по отдельности, а также переменную под все поля ввода цены
const minPrice = document.querySelector("#min-price");
const maxPrice = document.querySelector("#max-price");

const allInputs = document.querySelectorAll('input[type="number"]');

// Перебираем все поля ввода цены и после ввода в них задаем ограничения
allInputs.forEach((input) => {
	input.addEventListener("input", () => {
		if (minPrice.value < 0) {
			minPrice.value = 0;
		}
		else if (minPrice.value > 200000) {
			minPrice.value = 200000;
		}
		else if (maxPrice.value < 0) {
			maxPrice.value = 0;
		}
		else if (maxPrice.value > 200000) {
			maxPrice.value = 200000;
		}
			// else if (minPrice.value > maxPrice.value) {
			// 	minPrice.value = maxPrice.value;
			// }
	})
})

// Переменная для селектора обертки выбранных фильтров и кнопки "Сбросить фильтры"
const selectedFiltersWrapper = document.querySelector(".catalog__selected-filters");
const buttonReset = document.querySelector(".filter-modal-form__button-reset");

// При клике на кнопку "Сбросить фильтры" 
// 1. Убираем активность у фильтров моделей в модальном окне
// 2. Очищаем поля ввода цены
// 3. Вызываем функцию очистки выбранных фильтров
buttonReset.addEventListener("click", () => {
	minPrice.value = "";
	maxPrice.value = "";

	modelButtons.forEach((button) => {
		button.classList.remove("active");
	})

	clearSelectedFilters();
})

// Переменная для кнопки "Применить фильтры"
const buttonApply = document.querySelector(".filter-modal-form__button-apply");

// При клике на кнопку "Применить фильтры":
// 1. Создаем пустой список для хранения активных фильтров моделей
// 2. Очищаем обертку выбранных фильтров
// 3. Перебираем все активные фильтры моделей в модальном окне и получаем их модель, которую нужно добавить в список, а также название модели
// 4. Передаем название модели и модель в функцию генерации выбранных фильтров
// 5. Передаем список активных моделей в функцию для фильтрации карточек товаров
// 6. Если введены значения в поля ввода цены, то передаем их в функцию генерации выбранных фильтров
// 7. Вызываем функцию удаления выбранного фильтра
buttonApply.addEventListener("click", () => {
	const activeModels = []
	selectedFiltersWrapper.innerHTML = "";

	const activeModelButtons = document.querySelectorAll(".model-button.active");
	activeModelButtons.forEach((button) => {
		const model = button.dataset.model;
		const modelName = button.querySelector(".model-button__text").innerText; 
		
		activeModels.push(model);
		generateSelectedFilterModel(modelName, model);
	})


	if (minPrice.value !== "" && maxPrice.value !== "") {
		generateSelectedFilterPrice(minPrice.value, maxPrice.value);
		filterProducts(activeModels, minPrice.value, maxPrice.value);
	}
	else if (minPrice.value !== "" && maxPrice.value === "") {
		generateSelectedFilterPrice(minPrice.value, undefined);
		filterProducts(activeModels, minPrice.value, undefined);
	}
	else if (minPrice.value === "" && maxPrice.value !== "") {
		generateSelectedFilterPrice(undefined, maxPrice.value);
		filterProducts(activeModels, undefined, maxPrice.value);
	}
	else {
		filterProducts(activeModels);
	}

	deleteFilters();
})
