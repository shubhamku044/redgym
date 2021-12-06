const toggle_menu = document.querySelector('#toggle');
const navlist = document.querySelector('#navlist');

toggle_menu.addEventListener('click', () => {
	navlist.classList.toggle('active');
	toggle_menu.classList.toggle('active');
});
