import { computePosition, offset } from "@floating-ui/dom";

const buttonOpenCityPopup = document.querySelector('.perm-modal__button-decline');
const cityPopup = document.querySelector('.city-modal');
const buttonsCloseCityPopup = document.querySelectorAll('.city-modal__button');

const buttonOpenPermPopup = document.querySelector('.city-button');

// Функция открытия попапа
async function openPopup() {
	const pos = await computePosition(buttonOpenPermPopup, cityPopup, {
		placement: 'bottom-start',
		middleware: [
			offset(10) // Добавляем отступ 10px сверху
		]
	});

	Object.assign(cityPopup.style, {
		left: `${pos.x}px`,
		top: `${pos.y}px`,
		visibility: 'visible',
		opacity: '1'
	});
}

// Закрытие попапа
function closePopup() {
	cityPopup.style.visibility = 'hidden';
	cityPopup.style.opacity = '0';
}

buttonOpenCityPopup.addEventListener('click', openPopup);
buttonsCloseCityPopup.forEach(button => {
	button.addEventListener('click', closePopup);
})

document.addEventListener('click', (event) => {
	if (!cityPopup.contains(event.target) && !buttonOpenCityPopup.contains(event.target)) {
		closePopup();
	}
});



const citys = document.querySelectorAll('.city-modal__button-name');
const cityName = document.querySelector('.city-button__name');

citys.forEach(city => {
	city.addEventListener('click', () => {
		cityName.innerText = city.innerText;
	});
})