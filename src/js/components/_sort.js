import { sortProducts } from "../functions/sortProducts";

// Создаем переменные под селекторы элементов, связанных с сортировкой
const sort = document.querySelector(".catalog__sort");
const sortFields = document.querySelectorAll(".sort-modal__field");

// Перебираем все поля сортировки. В них обращаемся к инпутам и селекторам
sortFields.forEach(item => {
	const sortMethod = item.querySelector(".sort-modal__label");
	const sortButton = item.querySelector(".sort-modal__input");

	// При нажатии на радио-кнопку сортировки вызываем функцию сортировки, согласно id, а также обновляем текст в селекторе сортировки
	sortButton.addEventListener("click", () => {
		sortProducts(sortButton.getAttribute("id"));
		sort.innerText = sortMethod.innerText;
	})
})