const header = document.querySelector('.header')
const menuModal = document.querySelector('.menu-modal')
const openMeniModalButton = document.querySelector('.header__burger-button')

openMeniModalButton.addEventListener('click', () => {
	header.classList.add('menu-modal-open')
})

document.addEventListener('click', (event) => {
	if (!menuModal.contains(event.target) && !openMeniModalButton.contains(event.target)) {
		document.querySelector(".header").classList.remove("menu-modal-open");
	}
});