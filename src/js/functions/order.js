import axios from "axios";
import { validateCart, rules1 } from "./validate-forms";
import {
  addedProducts,
  productsInCart,
  countProducts,
  countAddedProductsObject,
} from "../components/_cart";

const TOKEN = "8155615681:AAE5Tc1kgWGmSxgJK7dXTK8tYc_NJmUxGhE";
const CHAT_ID = "-4942066488";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;



function sendTelegramMessage(data, products) {
  const cityName = document.querySelector(".city-button__name").innerText;

  let message = `
<b>Новый заказ из города ${cityName}</b>
Имя: <b>${data.cartName}</b>
Телефон: <b>${data.cartPhone}</b>
Email: <b>${data.cartEmail}</b>
Товары:\n`;

  products.forEach((product) => {
    const productInfo = `
Модель: <b>${product.name}</b>
Цвет: <b>${product.color}</b>
Объем памяти: <b>${product.memory}</b>
Количество SIM-карт: <b>${product.sim}</b>\n`;
    message += productInfo;
  });

  return axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message.trim(),
  });
}



function clearCart() {
	productsInCart.innerHTML = "";
	countAddedProductsObject.count = 0;
	countProducts.style.display = "none";
	addedProducts.splice(0, addedProducts.length);
}

const cartForm = document.querySelector(".cart-form");

// Инициализируем валидацию заранее
let isValidationInitialized = false;

function initFormValidation() {
  if (isValidationInitialized) return;

  validateCart(".cart-form", rules1, () => {
    const formData = new FormData(cartForm);
    const data = Object.fromEntries(formData);

    sendTelegramMessage(data, addedProducts)
      .then((response) => {
        console.log("Сообщение успешно отправлено!", response.data);
				cartForm.reset();
      })
      .catch((error) => {
        console.error("Ошибка при отправке:", error);
      });

    clearCart();
  });

  isValidationInitialized = true;
}

// При открытии попапа / загрузке страницы
initFormValidation();

cartForm.addEventListener("submit", (e) => {
	console.log("click");
	
	e.preventDefault();
	

	if (!isValidationInitialized) {
		console.warn("Валидация ещё не готова");
		return;
	}
});