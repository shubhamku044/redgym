console.log('hello world');

const toggle_menu = document.querySelector('.toggle_menu');
const navlist = document.querySelector('.navlist');

toggle_menu.addEventListener('click', () => {
	if (!navlist.classList.contains('active')) {
		navlist.classList.add('active');
		toggle_menu.classList.add('active');
	} else {
		navlist.classList.remove('active');
		toggle_menu.classList.remove('active');
	}
});
