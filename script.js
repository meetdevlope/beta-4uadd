const icon = document.querySelector('.icon')
const hamburger = document.querySelector('.hamburger')
const mobileMenuIcons = document.querySelector('.mobile-menu-icons')

icon.addEventListener('click', () => {
    mobileMenuIcons.classList.toggle('active')
})



icon.addEventListener('click', () => {
    hamburger.classList.toggle('active')
})