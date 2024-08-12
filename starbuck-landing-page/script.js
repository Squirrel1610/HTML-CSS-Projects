const btn = document.getElementById('menu-btn');

function toggleMenu() {
  btn.classList.toggle('open');
}

btn.addEventListener('click', toggleMenu);