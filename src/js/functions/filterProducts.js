import { getAllCards } from "./getAllCards";

// Функция для фильтрации карточек товаров, в которую мы передаем список активных фильтров моделей 
// Вариативно передаем диапазон цен (по умолчанию от 0 до 10000000)
export function filterProducts(activeModels, minPrice = "0", maxPrice = "10000000") {
	const catalogCards = document.querySelectorAll('.catalog-cart');
	
	// Перебираем карточки товаров и показываем их
	catalogCards.forEach((card) => card.style.display = "flex")

	// Преобразуем строки в числа
	const intMinPrice = parseInt(minPrice);
	const intMaxPrice = parseInt(maxPrice);

	// Перебираем карточки товаров и получаем цену товара
	catalogCards.forEach((card) => {		
		const priceProducts = parseInt(card.dataset.price);
		console.log(activeModels);
		

		// Скрываем карточку, если:
		// 1. Указанная цена товара не входит в диапазон цен, указанных в фильтре
		// 2. Указанная модель не входит в список активных моделей
		if (priceProducts > intMinPrice && priceProducts < intMaxPrice) {
			if (!activeModels.includes(card.dataset.model) && activeModels.length !== 0) {
				card.style.display = "none";
			}
		}
		else {
			card.style.display = "none";
		}
	})
}

// Функция для фильтрации карточек товаров после удаления фильтра
export function filterProductsAfterDelete() {
	const activeModels = [];
	const selectedFilters = document.querySelectorAll('.selected-filter');

	let minPrice = "0", maxPrice = "10000000"; 

	// Перебираем оставшиеся выбранные фильтры и добавляем активные модели в массив
	selectedFilters.forEach(filter => {
		if (!filter.classList.contains('selected-filter--price')) {
			activeModels.push(filter.dataset.model);
		}
		else {
			minPrice = filter.dataset.minPrice;
			maxPrice = filter.dataset.maxPrice;
		}
	})
	
	// Вызываем функцию фильтрации
	filterProducts(activeModels, minPrice, maxPrice);
}