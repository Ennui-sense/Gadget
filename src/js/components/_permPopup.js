import { computePosition, offset } from "@floating-ui/dom";

const buttonOpenPermPopup = document.querySelector('.city-button');
const permPopup = document.querySelector('.perm-modal');
const buttonsClosePermPopup = document.querySelectorAll('.perm-modal__button');

// Функция открытия попапа
async function openPopup() {
	const pos = await computePosition(buttonOpenPermPopup, permPopup, {
		placement: 'bottom-start',
		middleware: [
			offset(10) // Добавляем отступ 10px сверху
		]
	});

	Object.assign(permPopup.style, {
		left: `${pos.x}px`,
		top: `${pos.y}px`,
		visibility: 'visible',
		opacity: '1'
	});
}

// Закрытие попапа
function closePopup() {
	permPopup.style.visibility = 'hidden';
	permPopup.style.opacity = '0';
}

buttonOpenPermPopup.addEventListener('click', openPopup);
buttonsClosePermPopup.forEach(button => {
	button.addEventListener('click', closePopup);
})

document.addEventListener('click', (event) => {
	if (!permPopup.contains(event.target) && !buttonOpenPermPopup.contains(event.target)) {
		closePopup();
	}
});