let year = document.querySelector('#currentyear')
let lastModified = document.querySelector('#lastModified')
let today = new Date();
year.innerHTML = today.getFullYear()
console.log(today)

lastModified.innerHTML = document.lastModified

/* Menu */
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('ul')

hamburger.addEventListener('click', mobileMenu)

function mobileMenu(){
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
}