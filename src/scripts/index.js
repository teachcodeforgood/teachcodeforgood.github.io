import attachHamburgerClickListeners from './utils/toggleHamburger';

const bottomChevron = document.getElementById('scroll-indicator');

const scrollDown = () => {
  window.location.href = '#about';
};

document.addEventListener('DOMContentLoaded', () => {
  attachHamburgerClickListeners();
  bottomChevron.addEventListener('click', scrollDown);
});
