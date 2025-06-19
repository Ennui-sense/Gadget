export function resetOptions(allOptions, resetButton) {
	resetButton.addEventListener('click', () => {
		allOptions.forEach(option => {
			setTimeout(() => {
				option.classList.remove('active')
				option.removeAttribute('disabled'), 500	
			})
		})
	})
}

export function activeOption(options) {
	options.forEach(option => {
		option.addEventListener('click', () => {			
			option.classList.toggle('active')
			option.setAttribute('disabled', true)

			options.forEach(option => {
				option.classList.remove('active')
				option.removeAttribute('disabled')
			})
		})
	})
}