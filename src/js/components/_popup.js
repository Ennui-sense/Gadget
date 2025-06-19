import { controlPopup } from "../functions/popup";

const buttonOpenCityPopup = document.querySelector('.perm-modal__button-decline');
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
// const buttonCloseFilterPopup = document.querySelector("")

buttonsCloseCityPopup.forEach(button => {
	controlPopup(buttonOpenCityPopup, cityPopup, button, 'bottom-start', buttonOpenPermPopup);
})

buttonsClosePermPopup.forEach(button => {
	controlPopup(buttonOpenPermPopup, permPopup, button, 'bottom-start');
})

buttonsCloseSortPopup.forEach(button => {
	controlPopup(buttonOpenSortPopup, sortPopup, button, 'bottom-start');
})

buttonsCloseSortPopup.forEach(button => {
	controlPopup(buttonOpenFilterPopup, filterPopup, button, 'bottom-end');
})




