import IMask from "imask";

const inputPhone = document.querySelector('#cart-phone');
export const mask = IMask(inputPhone, {
		mask: '+{7} (000) 000-00-00',
})