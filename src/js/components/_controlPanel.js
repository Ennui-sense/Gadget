const controlPanelButtons = document.querySelectorAll('.control-panel__button');
const controlPanelButtonAll = document.querySelector('.control-panel__button-all');

controlPanelButtons.forEach(btn => {
	btn.addEventListener('click', () => {
		console.log('test');
		btn.classList.toggle('active');
		
		if (!btn.classList.contains('сontrol-panel__button-all')) {
			controlPanelButtonAll.classList.remove('active');
		}
	})
});

controlPanelButtonAll.addEventListener('click', () => {
	controlPanelButtons.forEach(btn => {
		btn.classList.remove('active')
	})

	controlPanelButtonAll.classList.toggle('active');
});


	// 	if (filter.classList.contains('active')) {
	// 		const catalogCarts = document.querySelectorAll('.catalog-cart');
	// 		catalogCarts.forEach(cart => {
	// 			let cartName = cart.querySelector(".catalog-cart__title");
			
	// 			if (cartName.innerText.includes(filter.innerText)) {
	// 				cart.style.display = "block";
	// 			}	
	// 			else {
	// 				cart.style.display = "none";
	// 			}
	// 		})
	// 	}