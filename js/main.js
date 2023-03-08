const menuIcon = document.querySelector('.navbar__icon')
const navBar = document.querySelector('.navbar')
const navMenu = document.querySelector('.navbar__list')
const navLinks = document.querySelectorAll('.navbar__list-item')

const changeMenuWidth = () => {
	if (window.scrollY > 20) {
		navBar.classList.add('navbar__active')
	} else {
		navBar.classList.remove('navbar__active')
	}
}

menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('fa-times')
	menuIcon.classList.toggle('fa-bars')
	navMenu.classList.toggle('navbar__list-active')
})

navLinks.forEach(n =>
	n.addEventListener('click', () => {
		menuIcon.classList.remove('fa-times')
		menuIcon.classList.toggle('fa-bars')
		navMenu.classList.remove('navbar__list-active')
	})
)

window.addEventListener('scroll', changeMenuWidth)
