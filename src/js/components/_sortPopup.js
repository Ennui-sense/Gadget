import { computePosition, offset } from "@floating-ui/dom";

const buttonOpenSortPopup = document.querySelector('.button-filter__sort');
const sortPopup = document.querySelector('.sort-modal');
const buttonsCloseSortPopup = document.querySelectorAll('.sort-modal__label');

// Функция открытия попапа
async function openPopup() {
	const pos = await computePosition(buttonOpenSortPopup, sortPopup, {
		placement: 'bottom-start',
		middleware: [
			offset(10) // Добавляем отступ 10px сверху
		]
	});

	Object.assign(sortPopup.style, {
		left: `${pos.x}px`,
		top: `${pos.y}px`,
		visibility: 'visible',
		opacity: '1'
	});
}

// Закрытие попапа
function closePopup() {
	sortPopup.style.visibility = 'hidden';
	sortPopup.style.opacity = '0';
}

buttonOpenSortPopup.addEventListener('click', openPopup);
buttonsCloseSortPopup.forEach(button => {
	button.addEventListener('click', closePopup);
})

document.addEventListener('click', (event) => {
	if (!sortPopup.contains(event.target) && !buttonOpenSortPopup.contains(event.target)) {
		closePopup();
	}
});



const sortField = document.querySelector('.catalog__sort');

buttonsCloseSortPopup.forEach(button => {
	button.addEventListener('click', () => {
		sortField.innerText = button.innerText + ' цены'
	});
})