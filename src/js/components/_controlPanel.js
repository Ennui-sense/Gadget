// Создаем переменные под селекторы элементов, связанных с фильтрами, а также кнопку "Все товары"
const filters = document.querySelectorAll('.control-panel__button');
const filterAllProducts = document.querySelector('.control-panel__button-all');

// Создаем пустой массив для хранения активных фильтров
const activeFilters = [];

// Перебираем все кнопки, при нажатии на которые будут меняться активные фильтры
filters.forEach(filter => {
	filter.addEventListener('click', () => {
		// Создаем переменную под селекторы элементов, связанных с карточками товаров	
		const catalogCarts = document.querySelectorAll('.catalog-cart');

		// Получаем категорию фильтра и вешаем на него класс "active" при нажатии
		const filterCategory = filter.dataset.filter;
		filter.classList.toggle('active');
		
		// Если нажата кнопка "Все товары", то убираем все активные фильтры, очищаем массив активных фильтров, вешаем класс "active" на кнопку "Все товары" и показываем все карточки
		// В ином случае убираем класс "active" у кнопки "Все товары"
		if (filterCategory === 'all') {
			filters.forEach(btn => btn.classList.remove('active'));
			activeFilters.splice(0, activeFilters.length);

			filter.classList.add('active');
			showAllProducts(catalogCarts);
			return
		} 
		else {
			filterAllProducts.classList.remove('active');
		}

		// Если фильтр активен, то добавляем его категорию в массив активных фильтров
		// Иначе удаляем его из массива по индексу
		if (filter.classList.contains('active')) {
			activeFilters.push(filterCategory);
		}
		else {
			activeFilters.splice(activeFilters.indexOf(filterCategory), 1);
		}

		// Если массив активных фильтров пуст, то показываем все карточки
		if (activeFilters.length === 0) {
			filterAllProducts.classList.add('active');
			showAllProducts(catalogCarts);
			return
		}

		// Вызываем функицю для показа карточек согласно активным фильтрам
		showProducts(activeFilters, catalogCarts);
	})
});

// Функция для показа карточек согласно активным фильтрам в массиве
function showProducts(activeFilters, carts) {
	carts.forEach(cart => {
		const cartCategory = cart.dataset.category;

		if (activeFilters.includes(cartCategory)) {
			cart.style.display = "block";
		}
		else {
			cart.style.display = "none";
		}
	})
}

// Функция для показа всех карточек
function showAllProducts(carts) {	
	carts.forEach(cart => {
		cart.style.display = "block";
	});
}