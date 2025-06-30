// Функция сортировки товаров (по умолчанию - по возрастанию)
export function sortProducts(order = "asc") {
	// Создаем переменные под контейнер товаров и сами товары
	const productsContainer = document.querySelector(".catalog__products");
	const products = Array.from(productsContainer.querySelectorAll(".catalog-cart"));
	
	// Сортируем список товаров по цене, которая указана в атрибуте data-price
	products.sort((a, b) => {
		const priceA = parseInt(a.dataset.price);
		const priceB = parseInt(b.dataset.price);

		if (order === "asc") {
			return priceA - priceB;
		} else {
			return priceB - priceA;
		}
	})

	// Очищаем контейнер и добавляем отсортированные товары
	productsContainer.innerHTML = "";
	products.forEach(item => {
		productsContainer.append(item);
	})
}