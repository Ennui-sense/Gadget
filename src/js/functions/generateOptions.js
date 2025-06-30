export function generateColorOptions(product) {
	const colorGroup = document.querySelector(`#form-${product.id}__color-group`);
	
	product.colors.forEach(color => {
		const colorButton = document.createElement('label');
		colorButton.classList.add('catalog-cart__button', 'color-button');
		colorButton.innerHTML = `
			<input type="radio" name="color" class="color-button__input" value="${color}" data-validate-field="color">
			<span class="color-button__color color-button__color--${color}"></span>
		`;

		colorGroup.append(colorButton);
	});

	const activeColors = colorGroup.closest('.catalog__cart').querySelectorAll(`.color-button__color`);
	activeColors.forEach(color => {
		if (color.classList.contains(`color-button__color--${product.base_color}`)) {
			color.closest('.color-button').classList.add('active')
			color.closest('.color-button').querySelector('input[type="radio"]').checked = true
		}
	})
}

export function generateMemoryOptions(product) {
	const memoryGroup = document.querySelector(`#form-${product.id}__memory-group`);
	
	product.memories.forEach(memory => {
		if (memory == 1024) {
			memory = '1 TB';
		}
		else {
			memory = `${memory} GB`;
		}
		const memoryButton = document.createElement('label');
		memoryButton.classList.add('catalog-cart__button', 'memory-button');
		memoryButton.innerHTML = `
			<input type="radio" name="memory" value="${memory}" class="memory-button__input" data-validate-field="memory">
			<span class="memory-button__text">${memory}</span>
		`;
		memoryGroup.append(memoryButton);
	});

	const activeMemories = memoryGroup.closest('.catalog__cart').querySelectorAll(`.memory-button__input`);
	activeMemories.forEach(memory => {
		if (memory.value === (product.memories[0] + ' GB')) {
			memory.closest('.memory-button').classList.add('active')
			memory.closest('.memory-button').querySelector('input[type="radio"]').checked = true
		}
	})
}