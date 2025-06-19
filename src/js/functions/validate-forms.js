import JustValidate from "just-validate"

document.addEventListener('DOMContentLoaded', () => {
	const validateForms = (selector, rules) => {
		const form = document.querySelector(selector);
		console.log(form);
		
	
		if (!form) {
			console.error('Нет такого селектора!');
			return false;
		}
	
		if (!rules) {
			console.error('Вы не передали правила валидации!');
			return false;
		}
	
		// const validation = new JustValidate(selector)
	
		const validation = new JustValidate(selector, {
		  errorFieldCssClass: ['invalid'],
		  errorLabelCssClass: ['just-validate-error-messages'],
		  focusInvalidField: true
		});
	
		for (let item of rules) {
			validation.addField(item.ruleSelector, item.rules);
		}
	};

	const rules1 = [
		{
			ruleSelector: 'input[name="color"]',
			rules: [
				{
					rule: 'required',
					value: true,
					errorMessage: 'Пожалуйста, укажите цвет'
				}
			]
		}
		// {
		// 	ruleSelector: '#memory',
		// 	rules: [
		// 		{
		// 			rule: 'required',
		// 			value: true,
		// 			errorMessage: 'Пожалуйста, укажите количество памяти'
		// 		}
		// 	]
		// },
		// {
		// 	ruleSelector: '#sim',
		// 	rules: [
		// 		{
		// 			rule: 'required',
		// 			value: true,
		// 			errorMessage: 'Пожалуйста, укажите тип sim-карт'
		// 		}
		// 	]
		// },
	];

	validateForms("#form-1", rules1);
})


