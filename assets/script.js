const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.site-nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false')}))}
const year=document.querySelector('#year');if(year)year.textContent=String(new Date().getFullYear());
