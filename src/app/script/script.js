const toggleMenuBtn = document.querySelector('#menu-btn');
const toggleMenuImg = document.querySelector('#menu-btn img');
const toggledMenu = document.querySelector('#toggle-menu');
const menuLinks = document.querySelector('#main-nav ul a');

toggleMenuBtn.addEventListener('click', toggleNav);

function toggleNav() {
  toggledMenu.classList.toggle('-translate-y-full');

  if (toggledMenu.classList.contains('-translate-y-full')) {
    toggleMenuImg.setAttribute(
      'src',
      '../../../public/assets/icones/menuBar.svg'
    );
    toggleMenuBtn.setAttribute('aria-expanded', 'false');
  } else {
    toggleMenuImg.setAttribute(
      'src',
      '../../../public/assets/icones/x-mark.svg'
    );
    toggleMenuBtn.setAttribute('aria-expanded', 'true');
  }
}
