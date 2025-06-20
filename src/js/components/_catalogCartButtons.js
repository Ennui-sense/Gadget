import { activeOption, resetOptions } from "../functions/controlOptions"; 

setTimeout(() => {
	const catalogCarts = document.querySelectorAll('.catalog-cart');

	catalogCarts.forEach(cart => {
		const colorButtons = cart.querySelectorAll('.color-button');
		const memoryButtons = cart.querySelectorAll('.memory-button');
		const simButtons = cart.querySelectorAll('.sim-button');

		const buttonAdd = cart.querySelector('.catalog-cart__button-add');
		const allOptions = cart.querySelectorAll('.catalog-cart__button');	

		resetOptions(allOptions, buttonAdd);

		activeOption(colorButtons);
		activeOption(memoryButtons);
		activeOption(simButtons);
	})
}, 100);




// window.addEventListener("click", (event) => {
// 	console.log(event.target);
// });

