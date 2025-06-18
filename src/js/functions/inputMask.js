import IMask from "imask";

const inputPhone = document.querySelector('#cart-phone');
export const mask = IMask(inputPhone, {
		mask: '+{7} (000) 000-00-00',
})

// const inputPrice = document.querySelectorAll(".filter-modal-form__price-input")

// inputPrice.forEach(input => {
// 	const priceMask = IMask(input, {
// 		mask: "000 000 gegw"
// 	})
// })
