import { computePosition, offset } from "@floating-ui/dom";

const buttonOpenFilterPopup = document.querySelector(".button-filter__filter");
const filterPopup = document.querySelector(".filter-modal")
// const buttonCloseFilterPopup = document.querySelector("")s

async function openPopup() {
	const pos = await computePosition(buttonOpenFilterPopup, filterPopup, {
		placement: "bottom-end",
		middleware: [offset(10)]
	});

	Object.assign(filterPopup.style, {
		left: `${pos.x}px`,
		top: `${pos.y}px`,
		visibility: "visible",
		opacity: "1"
	})
} 

function closePopup() {
	filterPopup.style.visibility = "hidden";
	filterPopup.style.opacity = "0";
}

buttonOpenFilterPopup.addEventListener("click", openPopup);
// buttonCloseFilterPopup.addEventListener("click", closePopup);

document.addEventListener("click", (event) => {
	if (!filterPopup.contains(event.target) && !buttonOpenFilterPopup.contains(event.target)) {
		closePopup();
	}
})

// window.addEventListener("click", (event) => {
// 	console.log(event.target);
// })