// Mobile nav
const menu = document.getElementById('menu');
const nav = document.querySelector('.nav');
if (menu) {
  menu.addEventListener('click', () => {
    const opened = nav.style.display === 'flex';
    nav.style.display = opened ? 'none' : 'flex';
  });
}

// Year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
