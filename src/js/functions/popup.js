import { computePosition, offset } from "@floating-ui/dom";

// Функция управления попапом, в которую передаем
// 1. кнопку открытия попапа
// 2. попап
// 3. кнопку закрытия попапа
// 4. расположение попапа
// 5. относительно чего будет открываться попап (по умолчанию относительно кнопки открытия)
// 6. открытие попапа сразу после загрузки (по умолчанию false)
export function controlPopup(openButtons, popup, closeButtons, placement, position = openButtons[0], openAfterLoad = false) {
	// Функция открытия попапа с заданным расположением и относительно чего открывается
	const openPopup = async () => {
		const pos = await computePosition(position, popup, {
			placement: placement,
			middleware: [
				offset(10) // Добавляем отступ 10px сверху
			]
		});

		// Присваиваем попапу стили с новыми координатами и видимостью
		Object.assign(popup.style, {
			left: `${pos.x}px`,
			top: `${pos.y}px`,
			visibility: 'visible',
			opacity: '1'
		});
	}

	// Функция закрытия попапа, которая скрывает его
	const closePopup = () => {
		popup.style.visibility = 'hidden';
		popup.style.opacity = '0';
	}

	if (openAfterLoad) {
		openPopup();
	}
	else {
		openButtons.forEach(openButton => openButton.addEventListener('click', openPopup));
	}

	// Закрытие попапа по нажатию на кнопку закрытия
	closeButtons.forEach(closeButton => closeButton.addEventListener('click', closePopup));

	// Закрытие попапа по клику вне него
	document.addEventListener('click', (event) => {
		if (!popup.contains(event.target) && !Array.from(openButtons).some(btn => btn.contains(event.target))) {
			// document.querySelector(".header").classList.remove("menu-modal-open");
			closePopup();
		}
	});
}	
