function showMenu() {
  document.querySelector('.main-portfolio').style.display = 'none';
  document.querySelector('#total-menu-mobile').style.display = 'block';
}

function hideMenu() {
  document.querySelector('.main-portfolio').style.display = 'block';
  document.querySelector('#total-menu-mobile').style.display = 'none';
}

const section = document.createElement('div');
section.id = 'total-menu-mobile';
const div = document.createElement('div');
div.id = 'menu-mobile';
const img = document.createElement('img');
img.id = 'close-button';
img.src = './assets/images/close-icon.svg';
img.alt = 'close button';
div.appendChild(img);
const innerdiv = document.createElement('div');
innerdiv.className = 'contain-menu-link';
const a1 = document.createElement('a');
a1.className = 'menu-link';
a1.href = '#my-recent-works';
const text1 = document.createTextNode('Portfolio');
a1.appendChild(text1);
innerdiv.appendChild(a1);
const a2 = document.createElement('a');
a2.className = 'menu-link';
a2.href = '#about-me';
const text2 = document.createTextNode('About');
a2.appendChild(text2);
innerdiv.appendChild(a2);
const a3 = document.createElement('a');
a3.className = 'menu-link';
a3.href = '#contact-form';
const text3 = document.createTextNode('Contact');
a3.appendChild(text3);
innerdiv.appendChild(a3);
div.appendChild(innerdiv);
section.appendChild(div);
const line = document.createElement('hr');
line.className = 'menu-black-line';
section.appendChild(line);
const body = document.querySelector('body');
body.appendChild(section);
document.querySelector('#total-menu-mobile').style.display = 'none';

document.querySelector('.mobile-menu').addEventListener('click', showMenu);
document.querySelector('#close-button').addEventListener('click', hideMenu);
const menuLinks = Array.from(document.querySelectorAll('.menu-link'));
for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', hideMenu);
}