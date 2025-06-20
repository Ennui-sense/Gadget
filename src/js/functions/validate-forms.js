import JustValidate from "just-validate"

export const validateForms = (selector) => {
	const form = document.querySelector(selector);
	
	if (!form) {
		console.error('Нет такого селектора!');
		return false;
	}

	const validation = new JustValidate(selector, {
		errorFieldCssClass: ['invalid'],
		errorsContainer: form.querySelector('.catalog-cart__error'),
	});

	validation
	.addRequiredGroup(`${selector}__color-group`, '*Выберите все опции')
	.addRequiredGroup(`${selector}__memory-group`, '*Выберите все опции')
	.addRequiredGroup(`${selector}__sim-group1`, '*Выберите все опции')

	validation.onSuccess(() => {
		console.log('success');
	})
};