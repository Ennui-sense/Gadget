import { activeOption, resetOptions } from "../functions/controlOptions"; 

const catalogCarts = document.querySelectorAll('.catalog-cart');

catalogCarts.forEach(cart => {
	const colorButtons = cart.querySelectorAll('.color-button__input');
	const memoryButtons = cart.querySelectorAll('.memory-button__input');
	const simButtons = cart.querySelectorAll('.sim-button__input');

	const buttonAdd = cart.querySelector('.catalog-cart__button-add');
	const allOptions = cart.querySelectorAll('input');	

	resetOptions(allOptions, buttonAdd);

	activeOption(colorButtons);
	activeOption(memoryButtons);
	activeOption(simButtons);
})

