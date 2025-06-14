// import { computePosition, offset } from "@floating-ui/dom";

// const buttonOpenSortPopup = document.querySelector('.button-filter__sort');
// const sortPopup = document.querySelector('.sort-modal__content');
// const buttonsCloseSortPopup = document.querySelectorAll('.sort-modal__label');

// buttonsCloseSortPopup.forEach(button => {
// 	workWithClicks(buttonOpenSortPopup, sortPopup, button);
// })

// const buttonOpenPermPopup = document.querySelector('.city-button');
// const PermPopup = document.querySelector('.city-modal__content');
// const buttonsClosePermPopup = document.querySelectorAll('.city-modal__button');

// buttonsClosePermPopup.forEach(button => {
// 	workWithClicks(buttonOpenPermPopup, PermPopup, button);
// })



// // Функция открытия попапа
// async function openPopup(openBtn, popup) {
//   const pos = await computePosition(openBtn, popup, {
//     placement: 'bottom-start',
//     middleware: [
//       offset(10) // Добавляем отступ 10px сверху
//     ]
//   });

//   Object.assign(popup.style, {
//     left: `${pos.x}px`,
//     top: `${pos.y}px`,
// 		visibility: 'visible',
// 		opacity: '1'
//   });
// }

// // Закрытие попапа
// function closePopup(popup) {
//   popup.style.visibility = 'hidden';
// 	popup.style.opacity = '0';
// }

// function workWithClicks(openBtn, popup, closeBtn) {
// 	openBtn.addEventListener('click', openPopup(openBtn, popup));
// 	closeBtn.addEventListener('click', closePopup(popup));

// 	document.addEventListener('click', (event) => {
// 		if (!popup.contains(event.target) && !openBtn.contains(event.target)) {
// 			closePopup(popup);
// 		}
// 	});
// }





// const sortField = document.querySelector('.catalog__sort');

// buttonsCloseSortPopup.forEach(button => {
// 	button.addEventListener('click', () => {
// 		sortField.innerText = button.innerText + ' цены'
// 	});
// })