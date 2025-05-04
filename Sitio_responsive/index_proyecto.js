const menu = document.getElementById('menu');
const barra_lateral = document.getElementById('barra_lateral');
const main = document.getElementById('main');

menu.addEventListener('click',()=>{
	barra_lateral.classList.toggle('menu-toggle');
	menu.classList.toggle('menu-toggle');
	main.classList.toggle('menu-toggle');
});