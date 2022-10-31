// Menu

const toggleMenu = () => {
  menuElement.classList.toggle('header__menu--closed');
}

const toggleElement = document.querySelector('.header__toggle');
const menuElement = document.querySelector('.header__menu');

toggleElement.addEventListener('click', toggleMenu);