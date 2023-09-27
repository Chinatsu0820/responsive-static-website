const menuContainer = document.querySelector('.hamburger-button');
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');

const hamMenu = document.querySelector('.header-menu-mobile');

menuContainer.addEventListener('click', () => {
    menuOpen.classList.toggle('active');
    menuClose.classList.toggle('active');
    hamMenu.classList.toggle('active');
});