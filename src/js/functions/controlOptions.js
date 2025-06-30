// Функция для сброса всех активных опций при нажатии на кнопку добавления в корзину 
export function resetOptions(allOptions, resetButton) {
	resetButton.addEventListener('click', () => {
		allOptions.forEach(option => {
			// Добавляем класс active и убираем disabled после 100 мс задержки (время на создание карточек)
			setTimeout(() => {
				option.classList.remove('active')
			}, 100)
			option.disabled = false
			option.style.cursor = 'pointer'
		})
	})
}

// Функция для активации опции при нажатии на нее
export function activeOption(options) {
	options.forEach(option => {
		option.addEventListener('click', () => {			
			// При нажатии на опцию со всех других опций убираем класс active и убираем атрибут disabled, а выбранной добавляем класс active и добавляем атрибут disabled
			options.forEach(option => {
				option.classList.remove('active')
				option.disabled = false
				option.style.cursor = 'pointer'
			})
		
			if (option.querySelector('input[type="radio"]').checked) {
        option.classList.add("active");
				option.disabled = true;
				option.style.cursor = 'default';
      }
		})
	})
}