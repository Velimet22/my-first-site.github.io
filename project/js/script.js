'use strict'

const header = document.querySelector('.header')
const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = '#0E1D28'
    } else {
        header.style.background = 'inherit'
    }
})

burger.addEventListener('click', () => {
    menu.classList.toggle('header__menu_active')
    document.body.classList.toggle('unscroll')
})