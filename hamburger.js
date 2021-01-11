const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.mobile-menu');
const hamburgerMenuLogo = document.querySelector('.mobile-menu-logo');
const app = document.querySelector('#content');




hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    hamburgerMenu.classList.toggle('is-active');
    hamburgerMenuLogo.classList.toggle('is-active');
    app.classList.toggle('no-scroll');
});


const navItem1 = document.querySelector('.mobile-home-about-container');
const navItem2 = document.querySelector('.mobile-home-portfolio-container');
const navItem3 = document.querySelector('.mobile-home-contact-container');


navItem1.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    hamburgerMenu.classList.toggle('is-active');
    hamburgerMenuLogo.classList.toggle('is-active');
    app.classList.toggle('no-scroll');
})


navItem2.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    hamburgerMenu.classList.toggle('is-active');
    hamburgerMenuLogo.classList.toggle('is-active');
    app.classList.toggle('no-scroll');
})

navItem3.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    hamburgerMenu.classList.toggle('is-active');
    hamburgerMenuLogo.classList.toggle('is-active');
    app.classList.toggle('no-scroll');
})

hamburgerMenuLogo.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    hamburgerMenu.classList.toggle('is-active');
    hamburgerMenuLogo.classList.toggle('is-active');
    app.classList.toggle('no-scroll');
})



