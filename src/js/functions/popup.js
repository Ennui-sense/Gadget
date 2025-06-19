import { computePosition, offset } from "@floating-ui/dom";

export function controlPopup(openButton, popup, closeButton, placement, position = openButton) {
	const openPopup = async () => {
		const pos = await computePosition(position, popup, {
			placement: placement,
			middleware: [
				offset(10) // Добавляем отступ 10px сверху
			]
		});

		Object.assign(popup.style, {
			left: `${pos.x}px`,
			top: `${pos.y}px`,
			visibility: 'visible',
			opacity: '1'
		});
	}

	const closePopup = () => {
		popup.style.visibility = 'hidden';
		popup.style.opacity = '0';
	}

	openButton.addEventListener('click', openPopup);
	closeButton.addEventListener('click', closePopup);

	document.addEventListener('click', (event) => {
		if (!popup.contains(event.target) && !openButton.contains(event.target)) {
			closePopup();
		}
	});
}