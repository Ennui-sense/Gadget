import JustValidate from "just-validate"

const validateForms = (selector) => {
	const form = document.querySelector(selector);

	if (!form) {
		console.error('Нет такого селектора!');
		return false;
	}

	// это нужно, когда много полей для ввода с разными правилами
	// if (!rules) {
	// 	console.error('Вы не передали правила валидации!');
	// 	return false;
	// }

	const validation = new JustValidate(selector, {
		errorFieldCssClass: ['invalid'],
		// errorLabelCssClass: ['just-validate-error-messages'],
		errorsContainer: document.querySelector('.just-validate-error-messages'),
	});

	// это нужно, когда много полей для ввода с разными правилами
	// for (let item of rules) {
	// 	validation.addField(item.ruleSelector, item.rules);
	// }

	// вот эта волшебная строчка
	validation.addRequiredGroup('#form-1_memory_group', 'Пожалуйста, укажите количество памяти')

	validation.onSuccess(ev => {
		console.log('success');
	})
};

// это нужно, когда много полей для ввода с разными правилами
// const rules1 = [
// {
// 	ruleSelector: 'input[name="color"]',
// 	rules: [
// 		{
// 			rule: 'required',
// 			value: true,
// 			errorMessage: 'Пожалуйста, укажите цвет'
// 		}
// 	]
// }
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
// ];

validateForms("#form-1");
