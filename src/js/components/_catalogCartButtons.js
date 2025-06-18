const catalogCarts = document.querySelectorAll('.catalog-cart');

catalogCarts.forEach(cart => {
	const colorButtons = cart.querySelectorAll('.color-button__input');
	const memoryButtons = cart.querySelectorAll('.memory-button__input');
	const simButtons = cart.querySelectorAll('.sim-button__input');

	const cartButton = cart.querySelector('.catalog-cart__button-add');
	const allParameters = cart.querySelectorAll('input');
	console.log(allParameters.length);
	
	

	cartButton.addEventListener('click', () => {
		allParameters.forEach(parameter => {
			setTimeout(() => {
				parameter.classList.remove('active')
				parameter.removeAttribute('disabled'), 500	
			})
		})
	})

	activeButton(colorButtons);
	activeButton(memoryButtons);
	activeButton(simButtons);
})

function activeButton(allButtons) {
	allButtons.forEach(button => {
		button.addEventListener('click', () => {
			allButtons.forEach(button => {
				button.classList.remove('active')
				button.removeAttribute('disabled')
			})
			
			button.classList.toggle('active')
			button.setAttribute('disabled', true)
		})
	})
}