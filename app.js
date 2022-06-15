const burger = document.querySelector('.burger')
const cancel = document.querySelector('.cancel')
const nav = document.querySelector('.nav-links')
const logo = document.querySelector('#log')
const ajc = document.querySelector('.ajc22')
const welcome = document.querySelector('.welcome')




burger.addEventListener('click',show)


function show() {
    nav.style.display = 'flex'
    nav.style.transform = 'translate(0%)'
    logo.style.opacity = '0'
    ajc.style.opacity = '0'
    burger.style.display = 'none'
    cancel.style.display = 'block'
    welcome.style.display = 'none'
} 


cancel.addEventListener('click', closes)

function closes() {
    nav.style.transform = 'translate(-100%)'
    cancel.style.display = 'none'
    burger.style.display = 'block'
    logo.style.opacity = '100'
    ajc.style.opacity = '100'
    welcome.style.display = 'block'
}
