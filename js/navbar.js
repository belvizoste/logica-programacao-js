const ancoras = [
    { "url": "/index.html", "texto": "Home" },
    { "url": "/html/classificacao-triangulo.html", "texto": "Exercício 1" },
    { "url": "/html/desconto-funcionarios.html", "texto": "Exercício 2" },
    { "url": "/html/placar-futebol.html", "texto": "Exercício 3" },
];
    
function criaAncora(url, texto){

    const ancora = document.createElement('a');
    ancora.setAttribute('href', url);
    ancora.innerHTML = texto; 

    return ancora; 
};
function criaLi(ancora) {
    
    const li = document.createElement('li');
    li.appendChild(ancora);
    
    return li;
};

function criaUlNav(ancoras){

    const ul = document.createElement('ul');

    ancoras.forEach(ancora => {
        const a = criaAncora(ancoras.url, ancora.texto);
        const li = criaLi(a); 
        ul.appendChild(li);
    });

    return ul;
};

// <nav> do menu
const nav = document.createElement('nav');
nav.classList.add('menu-navegacao');
nav.appendChild(criaUlNav(ancoras));

// Aqui segue de acordo com a solução do professor...

// <span>Desafios & Exercícios</span>
const spanLogo = document.createElement('span');
spanLogo.innerHTML = 'Exercícios';

// <div class="logo">
const divLogo = document.createElement('div');
divLogo.classList.add('logo');
divLogo.appendChild(spanLogo);

// <div class="logo-menu">
const divLogoMenu = document.createElement('div');
divLogoMenu.classList.add('logo-menu');
divLogoMenu.append(divLogo, nav);

// <header>
const header = document.createElement('header');
header.appendChild(divLogoMenu);

// document.body.insertBefore(nav, document.body.firstChild);
document.body.insertAdjacentElement('afterbegin', header);


// ** Estilos do Navbar **
const linkNavbar = document.createElement('link');
linkNavbar.setAttribute('rel', 'stylesheet');
linkNavbar.setAttribute('href', '/css/navbar.css');

document.querySelector('[href="/css/responsividade.css"]').insertAdjacentElement('beforebegin', linkNavbar);










// // comentário de criação de ul e li 
//<a> do Home
// const aHome = criaAncora ('/index.html'/ 'Home');

// // <li> do Home
// const liHome = document.createElement('li');
// liHome.appendChild(aHome);

// // <a> do exercício 1
// const aExercicio1 =criaAncora('/html/classificacao-triangulo.html', 'Exercicio 1');

// // <li> do exercício 1
// const liExercicio1 = document.createElement('li');
// liExercicio1.appendChild(aExercicio1);

// // <a> do exercício 3
// const aExercicio3 =criaAncora('/html/placar-futebol.html', 'Exercicio 3');


// // <li> do exercício 3
// const liExercicio3 = document.createElement('li');
// liExercicio3.appendChild(aExercicio3);

// // <ul> do menu
// const ulNav = document.createElement('ul');
// ulNav.append(liHome, liExercicio1, liExercicio3);

// <nav> do menu
