const burger = $('.navbar-burger');
const menu = $('.navbar-menu');

function toggleNavbarState() {
  burger.toggleClass('is-active');
  menu.toggleClass('is-active');
}

function initNavbar() {
  burger.click(toggleNavbarState);
}

$(document).ready(initNavbar);
