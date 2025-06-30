import { controlPopup } from "../functions/popup";

// Создаем переменные под селекторы элементов, связанных с попапами, а именно кнопки, которые открывают и закрывают их и сам попап
const buttonsOpenCityPopup = document.querySelectorAll('.open-city-modal');
const cityPopup = document.querySelector('.city-modal');
const buttonsCloseCityPopup = document.querySelectorAll('.city-modal__button');



const buttonOpenPermPopup = document.querySelector('.city-button');
const permPopup = document.querySelector('.perm-modal');
const buttonsClosePermPopup = document.querySelectorAll('.perm-modal__button');



const buttonOpenSortPopup = document.querySelector('.button-filter__sort');
const sortPopup = document.querySelector('.sort-modal');
const buttonsCloseSortPopup = document.querySelectorAll('.sort-modal__label');



const buttonOpenFilterPopup = document.querySelector(".button-filter__filter");
const filterPopup = document.querySelector(".filter-modal")
const buttonsCloseFilterPopup = document.querySelectorAll(".filter-modal-form__button")



const buttonOpenMenuPopup = document.querySelector('.header__burger-button');
const menuPopup = document.querySelector('.menu-modal');



// Перебираем все кнопки, при нажатии на которые будет закрываться попап, после чего вызываем функцию, которая управляет попапом 



const tabletWidthMediaQuery = window.matchMedia('(max-width: 1279px) and (min-width: 768px)');
const mobileWidthMediaQuery = window.matchMedia('(max-width: 767px)');
let location = 'bottom-start';
let position = buttonsOpenCityPopup[0];

function tabletControl(isTabletSize) {
	if (isTabletSize) {
		location = "bottom-end";
		console.log('конец');
		
	}
	else {
		location = "bottom-start";
		console.log('начало');
	}

	controlPopup([buttonOpenSortPopup], sortPopup, buttonsCloseSortPopup, location);
	controlPopup([buttonOpenFilterPopup], filterPopup, buttonsCloseFilterPopup, location);
}

function mobileControl(isMobileSize) {
	if (isMobileSize) {
		position = buttonsOpenCityPopup[2];
		console.log('я в меню');
		
	}
	else {
		position = buttonsOpenCityPopup[0];
		console.log('я в хедере');
	}

	controlPopup(buttonsOpenCityPopup, cityPopup, buttonsCloseCityPopup, "bottom-center", position);
}



tabletControl(tabletWidthMediaQuery.matches);
mobileControl(mobileWidthMediaQuery.matches);


tabletWidthMediaQuery.addEventListener('change', function (event) {
	tabletControl(event.matches)
})

mobileWidthMediaQuery.addEventListener('change', function (event) {
	mobileControl(event.matches)
})

controlPopup([buttonOpenMenuPopup], menuPopup, buttonsCloseCityPopup, 'bottom-end');
controlPopup([buttonOpenPermPopup], permPopup, buttonsClosePermPopup, 'bottom-start', buttonOpenPermPopup, true);

