const menuIcon = document.querySelector('.navbar__icon')
const navBar = document.querySelector('.navbar')
const navMenu = document.querySelector('.navbar__list')
const navLinks = document.querySelectorAll('.navbar__list-item')
const scrollSpySections = document.querySelectorAll('.section')

const changeMenuWidth = () => {
	if (window.scrollY > 20) {
		navBar.classList.add('navbar__active')
	} else {
		navBar.classList.remove('navbar__active')
	}
}

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = []

		scrollSpySections.forEach(section => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 103) {
				sections.push(section)
				const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)

				navLinks.forEach(item => item.classList.remove('navbar__list-item--active'))

				activeSection.classList.add('navbar__list-item--active')
			}
		})
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
window.addEventListener('scroll', handleScrollSpy)
