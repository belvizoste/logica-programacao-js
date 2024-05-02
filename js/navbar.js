// Ancora do ex 1: 

const aExercicio1 = document.createElement('a');
aExercicio1.setAttribute('href', '/index.html'); 
aExercicio1.innerHTML = 'HOME';

const liExercicio1 = document.createElement('li');
liExercicio1.appendChild(aExercicio1); 

const ulNav = document.createElement('ul');
ulNav.appendChild(liExercicio1); 

const nav = document.createElement('nav');
nav.classList.add('menu-navegação');
nav.appendChild(ulNav); 

const divLogoMenu = document.createElement('div');
divLogoMenu.classList.add('logo-menu');
divLogoMenu.appendChild(nav);

const header = document.createElement('header');
header.appendChild(divLogoMenu);


document.body.insertBefore(nav, document.body.firstChild); 
document.body.insertAdjacentElement('afterbegin', nav); 


const linkNavbar = document.createElement('link');
linkNavbar.setAttribute('rel', 'stylesheet');
linkNavbar.setAttribute('href', '/css/navbar.css');

document.head.appendChild(linkNavbar); 

