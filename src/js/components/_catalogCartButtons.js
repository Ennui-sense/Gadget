const catalogCarts = document.querySelectorAll('.catalog-cart');

catalogCarts.forEach(cart => {
	const colorButtons = cart.querySelectorAll('.color-button');
	const memoryButtons = cart.querySelectorAll('.memory-button');
	const simButtons = cart.querySelectorAll('.sim-button');

	const cartButton = cart.querySelector('.catalog-cart__button-add');
	const allParameters = cart.querySelectorAll('.catalog-cart__button');

	cartButton.addEventListener('click', () => {
		allParameters.forEach(parameter => {
			if (parameter.classList.contains('active')) {
				console.log(parameter.innerText);
				
			}

			parameter.classList.remove('active')
			parameter.removeAttribute('disabled')
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