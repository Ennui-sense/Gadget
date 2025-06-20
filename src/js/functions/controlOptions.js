export function resetOptions(allOptions, resetButton) {
	resetButton.addEventListener('click', () => {
		allOptions.forEach(option => {
			setTimeout(() => {
				option.classList.remove('active')
				option.removeAttribute('disabled')
			}, 100)
		})
	})
}

export function activeOption(options) {
	options.forEach(option => {
		option.addEventListener('click', () => {			
			options.forEach(option => {
				option.classList.remove('active')
				option.removeAttribute('disabled')
			})
		
			if (option.querySelector('input[type="radio"]').checked) {
        option.classList.add("active");
      }
			option.setAttribute('disabled', true)
		})
	})
}