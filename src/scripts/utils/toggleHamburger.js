const toggleHamburger = (burger) => {
  const targetId = burger.dataset.target;
  const targetMenu = document.getElementById(targetId);
  burger.classList.toggle('is-active');
  targetMenu.classList.toggle('is-active');
};

const attachHamburgerClickListeners = () => {
  const navbarBurgers = [...document.getElementsByClassName('navbar-burger')];
  navbarBurgers.forEach((burger) => burger.addEventListener('click', toggleHamburger.bind(null, burger)));
};

export default attachHamburgerClickListeners;
