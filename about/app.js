const burger = document.querySelector('.burger')
const cancel = document.querySelector('.cancel')
const nav = document.querySelector('.nav-links')
const logo = document.querySelector('#log')
const butt = document.querySelector('.join')
const ab = document.querySelector('.about')


burger.addEventListener('click',show)


function show() {
    nav.style.display = 'flex'
    nav.style.transform = 'translate(0%)'
    logo.style.opacity = '0'
    butt.style.display = 'none'
    burger.style.display = 'none'
    cancel.style.display = 'block'
    ab.style.transform = 'translate(-100%)'

}


cancel.addEventListener('click', closes)

function closes() {
    nav.style.transform = 'translate(-100%)'
    cancel.style.display = 'none'
    burger.style.display = 'block'
    logo.style.opacity = '100'
    butt.style.display = 'flex'
    ab.style.transform = 'translate(0%)'
}
