const filters = document.querySelectorAll('.catalog__filter');
const filtersWrapper = document.querySelector('.catalog__filters');

filters.forEach(filter => {
	const deleteButton = filter.querySelector('.cross-button');
	const deleteButtonIcon = filter.querySelectorAll('.catalog__filter-icon *');

	deleteButton.addEventListener('click', () => {
		filter.style.backgroundColor = "#E13434";
		filter.style.color = "#fff";
		filter.style.opacity = 1;

		deleteButtonIcon.forEach(line => {
			line.style.stroke = "#fff";
			line.style.fill = "#fff";
		})

		setTimeout(() => {
			filter.style.opacity = 0;
		}, 300)

		const filtersLeft = document.querySelectorAll('.catalog__filter');

		if (filtersLeft.length === 0) {
			filtersWrapper.style.marginBottom = "0px";
		}
	})
});