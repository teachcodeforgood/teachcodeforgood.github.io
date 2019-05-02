/*
  Opens and closes the hamburger menu.
  Done because the native Bulma implementation was not working.
*/

const navbarMenu = document.querySelector('#navbar-menu-opened');
const navbarBurger = document.querySelector('#navbar-burger-trigger');

const openNavbarMenu = () => {
  navbarMenu.classList.toggle('is-active');
  navbarBurger.classList.toggle('is-active');
};

navbarBurger.addEventListener('click', openNavbarMenu);

/*
  Adds an event listener to the chevron on the landing page.
  It scrolls one section down.
*/

const bottomChevron = document.querySelector('#scroll-indicator');

const scrollDown = () => {
  window.location.href = '#about';
};

bottomChevron.addEventListener('click', scrollDown);
