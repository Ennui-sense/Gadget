	// Переменная для селектора обертки выбранных фильтров
const selectedFilters = document.querySelector(".catalog__selected-filters");

// Функция для генерации выбранных фильтров моделей телефонов
export function generateSelectedFilterModel(modelName, model) {
	// Создаем элемент выбранного фильтра модели и добавляем его в обертку
	const filter = document.createElement("div");
	filter.className = "catalog__selected-filter selected-filter active";
	filter.dataset.model = model;
	filter.innerHTML = `
				<p class="selected-filter__text">${modelName}</p>
				<button type="button" class="selected-filter__button cross-button">
					<svg class="catalog__filter-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 1L11 11" stroke="#2A2A2A"/>
						<path d="M11 1L0.999999 11" stroke="#2A2A2A"/>
					</svg>

					<span class="visually-hidden">Удалить фильтр</span>
				</button>
				`;

	selectedFilters.appendChild(filter);	
}

// Функция для генерации выбранного фильтра цены
export function generateSelectedFilterPrice(minPrice = "0", maxPrice = "1000000") {
	// Создаем элемент выбранного фильтра цены и добавляем его в обертку
	const filter = document.createElement("div");
	filter.className = "catalog__selected-filter selected-filter selected-filter--price active";
	filter.dataset.minPrice = minPrice;
	filter.dataset.maxPrice = maxPrice;

	let selectedFilterText;
	if (minPrice === "0" && maxPrice !== "1000000") {
		selectedFilterText = `до ${maxPrice.toLocaleString("ru-RU")} ₽`;
	}
	else if (minPrice !== "0" && maxPrice === "1000000") {
		selectedFilterText = `от ${minPrice.toLocaleString("ru-RU")} ₽`;
	}
	else {
		selectedFilterText = `${minPrice.toLocaleString("ru-RU")} - ${maxPrice.toLocaleString("ru-RU")} ₽`;
	}

	filter.innerHTML = `
				<p class="selected-filter__text">${selectedFilterText}</p>
				<button type="button" class="selected-filter__button cross-button">
					<svg class="catalog__filter-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 1L11 11" stroke="#2A2A2A"/>
						<path d="M11 1L0.999999 11" stroke="#2A2A2A"/>
					</svg>

					<span class="visually-hidden">Удалить фильтр</span>
				</button>
				`;

	selectedFilters.appendChild(filter);	
}

