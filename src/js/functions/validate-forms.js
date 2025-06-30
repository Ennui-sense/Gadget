import JustValidate from "just-validate";
import { addedProducts } from "../components/_cart";
import IMask from "imask";

// Функция валидации форм, в которую передаем селектор
export const validateCardForm = (selector) => {
  // Получаем форму и проверяем есть ли она
  const form = document.querySelector(selector);

  if (!form) {
    console.error("Нет такого селектора!");
    return false;
  }

  // Инициализируем валидацию по селектору, указывая классы и контейнер для вывода ошибок
  const validation = new JustValidate(selector, {
    errorFieldCssClass: ["invalid"],
    errorsContainer: form.querySelector(".catalog-cart__error"),
  });

  // Добавляем группы валидации по селектору и текст самой ошибки
  validation
    .addRequiredGroup(`${selector}__color-group`, "*Выберите все опции")
    .addRequiredGroup(`${selector}__memory-group`, "*Выберите все опции")
    .addRequiredGroup(`${selector}__sim-group`, "*Выберите все опции");

  // Добавляем обработчик события на отправку формы
  validation.onSuccess(() => {
    console.log("Форма успешно отправлена!");

    // Сбрасываем форму
    form.reset();

    // Уничтожаем текущий экземпляр валидации
    validation.destroy();

    // Перезапускаем валидацию, чтобы при следующем открытии формы она снова работала
    setTimeout(() => {
      validateCardForm(selector);
    }, 0);
  });
};




export const rules1 = [
  {
    ruleSelector: "[name='cartName']",
    rules: [
      {
        rule: "maxLength",
        value: 13,
        errorMessage: "Пожалуйста, заполните все поля",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Пожалуйста, заполните все поля",
      },
    ],
  },
  {
    ruleSelector: "[name='cartPhone']",
		tel: true,
		telError: 'Пожалуйста, заполните все поля корректно',
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Пожалуйста, заполните все поля",
      },
    ],
  },
  {
    ruleSelector: "[name='cartEmail']",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Пожалуйста, заполните все поля",
      },
      {
        rule: "email",
        errorMessage: "Пожалуйста, заполните все поля корректно",
      },
    ],
  },
];

export const validateCart = (selector, rules, onSuccessCallback) => {
  const form = document.querySelector(selector);
	const telSelector = form.querySelector('input[type="tel"]');
	

  if (!form) {
    console.error("Нет такого селектора!");
    return false;
  }

	if (telSelector) {
		// Добавляем маску телефона
		const mask = IMask(telSelector, {
				mask: '+7 (000) 000-00-00',
		})

		for (let item of rules) {
			if (item.tel) {
				item.rules.push({
					rule: 'function',
					validator: function () {
						const phone = mask.unmaskedValue;
						return phone.length === 10;
					},
					errorMessage: item.telError
				})
			}
		}
	}

  const validation = new JustValidate(selector, {
    errorFieldCssClass: ["invalid"],
    errorsContainer: form.querySelector(".cart-form__error"),
  });

  for (let item of rules) {
    validation.addField(item.ruleSelector, item.rules);
  }

	validation.onValidate(() => {
		if (document.querySelector(".just-validate-error-label[data-count]")) {
			document.querySelector(".just-validate-error-label[data-count]").remove();
		}
	})

	const openCart = document.querySelector(".header__cart");
	openCart.addEventListener("click", () => {
		if (document.querySelector(".just-validate-error-label[data-count]")) {
			document.querySelector(".just-validate-error-label[data-count]").remove();
		}
	})

  // Добавляем обработчик события на отправку формы
  validation.onSuccess((event) => {
		if (addedProducts.length === 0) {
			document.querySelector(".cart-form__error").innerHTML = 
				`<div class="just-validate-error-label" style="color: rgb(184, 17, 17);" data-count>Добавьте хотя бы один товар</div>`
			event.preventDefault();
			return;
		}

    if (onSuccessCallback && typeof onSuccessCallback === "function") {
      onSuccessCallback();
    }

    form.reset();
    validation.destroy();

    setTimeout(() => {
      validateCart(selector, rules, onSuccessCallback);
    }, 0);
  });
};
