import GraphModal from "graph-modal";

import "graph-modal/src/graph-modal.css";

export function openModal(name, openButtonSelector) {
	const openButton = document.querySelector(openButtonSelector);

	openButton.addEventListener('click', () => {
		new GraphModal().open(name);
	});
}


