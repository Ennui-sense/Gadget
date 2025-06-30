export function changePriceAndImage(product) {
  const form = document.querySelector(`#form-${product.id}`);
  const card = form.closest(".catalog-cart");
  const priceElement = card.querySelector(".catalog-cart__price-value");
  const imageElement = card.querySelector(".catalog-cart__image");

  // Функция для обновления цены и изображения
  const updatePriceAndImage = () => {
    // Даем время на добавление класса active
    setTimeout(() => {
      const activeColorInput = form.querySelector(".color-button.active .color-button__input");
      const activeMemoryInput = form.querySelector(".memory-button.active .memory-button__input");

      // Проверяем, что оба параметра выбраны
      if (!activeColorInput || !activeMemoryInput) return;

      const activeColor = activeColorInput.value;
      const activeMemory = activeMemoryInput.value;

      const matchingVariant = product.variants.find((variant) =>
          variant.color === activeColor && variant.memory === activeMemory
      );

      if (matchingVariant) {
        priceElement.textContent = matchingVariant.price.toLocaleString("ru-RU");
        imageElement.src = matchingVariant.image;
      }
    }, 10); // Небольшая задержка
  };

  // Вешаем обработчики на обе группы кнопок
  form.querySelectorAll(".color-button, .memory-button").forEach((button) => {
    button.addEventListener("click", updatePriceAndImage);
  });

  // Инициализация при загрузке
	priceElement.textContent = product.base_price.toLocaleString("ru-RU");
	imageElement.src = product.base_image;
}
