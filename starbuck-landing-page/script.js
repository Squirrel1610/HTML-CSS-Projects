const menuBtn = document.getElementById('menu-btn');
const mobileMenuNav = document.getElementById('menu');

function toggleMenu() {
  menuBtn.classList.toggle('open');
  mobileMenuNav.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
}

menuBtn.addEventListener('click', toggleMenu);