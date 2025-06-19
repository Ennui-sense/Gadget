const filters = document.querySelectorAll('.control-panel__button');
const filterAllProducts = document.querySelector('.control-panel__button-all');

filters.forEach(btn => {
	btn.addEventListener('click', () => {
		btn.classList.toggle('active');
		
		if (!btn.classList.contains('сontrol-panel__button-all')) {
			filterAllProducts.classList.remove('active');
		}
	})
});

filterAllProducts.addEventListener('click', () => {
	filters.forEach(btn => {
		btn.classList.remove('active')
	})

	filterAllProducts.classList.toggle('active');
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