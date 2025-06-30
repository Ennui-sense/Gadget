document.querySelectorAll(".scroll-catalog-button").forEach((button) => {
	button.addEventListener("click", () => {
		window.scrollTo({
			top: document.querySelector(".catalog").offsetTop - 80,
			behavior: "smooth"
		})
	})
})