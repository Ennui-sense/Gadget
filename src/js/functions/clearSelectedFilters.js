// Функция для очистки выбранных фильтров при нажатии на кнопку "Сбросить фильтры"
export function clearSelectedFilters() {
	const selectedFiltersWrapper = document.querySelector('.catalog__selected-filters');
	const catalogCards = document.querySelectorAll('.catalog-cart');

	selectedFiltersWrapper.innerHTML = ""
	catalogCards.forEach((card) => card.style.display = "flex");
}