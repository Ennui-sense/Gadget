import { filterProductsAfterDelete } from "./filterProducts";

// Переменная для селектора обертки выбранных фильтров
const selectedFiltersWrapper = document.querySelector(".catalog__selected-filters");

// Функция для удаления выбранных фильтров
export function deleteFilters() {
	// Создаем переменные для карточек товаров, выбранных фильтров и количества выбранных фильтров
	const catalogCards = document.querySelectorAll(".catalog-cart");
	const selectedFilters = document.querySelectorAll('.selected-filter');
	const selectedFiltersOfModel = document.querySelectorAll('.selected-filter:not(.selected-filter--price)');
	const priceInputs = document.querySelectorAll('.filter-modal-form__price-input');
	let countSelectedFilters = selectedFilters.length;

	// Если количество выбранных фильтров не равно нулю, то добавляем отступ
	if (countSelectedFilters !== 0) {
		selectedFiltersWrapper.style.marginBottom = "20px";
	}

	// Перебираем выбранные фильтры и в каждом из них находим кнопку удаления
	selectedFilters.forEach(filter => {
		const deleteButton = filter.querySelector('.cross-button');

		// При нажатии на кнопку удаления: 
		// 1. Уменьшеаем количество выбранных фильтров
		// 2. Находим модель выбранного фильтра
		// 3. Перебираем карточки товаров и проверяем модель карточки с выбранной моделью, если совпадают, то скрываем карточку
		// 4. Если количество выбранных фильтров равно нулю, то убираем отступ и показываем все карточки
		// 5. Удаляем выбранный фильтр
		deleteButton.addEventListener('click', () => {
			countSelectedFilters--;
			const deleteModel = deleteButton.closest('.selected-filter').dataset.model;
			const modelButtons = document.querySelectorAll('.model-button');

			modelButtons.forEach((button) => {
				if (button.dataset.model === deleteModel) {
					button.querySelector('input[type="checkbox"]').checked = false;
					button.classList.remove('active');
				}
			})

			catalogCards.forEach((card) => {
				if (card.dataset.model === deleteModel) {
					card.style.display = "none";
				}

				if (deleteButton.closest('.selected-filter').classList.contains('selected-filter--price')) {
					catalogCards.forEach((card) => card.style.display = "flex");
					priceInputs.forEach((input) => input.value = "");
				}
			})
			
			if (selectedFiltersOfModel.length === 0) {
				catalogCards.forEach((card) => card.style.display = "flex");
			}

			if (countSelectedFilters === 0) {
				selectedFiltersWrapper.style.marginBottom = "0px";
				catalogCards.forEach((card) => card.style.display = "flex");
			} 

			// Удаляем выбранный фильтр и вызываем функцию фильтрации по оставшимся выбранным фильтрам
			filter.remove();
			filterProductsAfterDelete();
		})
	})
}

