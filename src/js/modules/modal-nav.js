function modalNav() {
	const btn = document.querySelector('#burger-nav'),
	mainList = document.querySelectorAll('.main__list');

	btn.addEventListener('click', () => {
		btn.classList.toggle('burger--close');
		btn.classList.toggle('burger--active');

		mainList.forEach(list  => {
			list.classList.toggle('hide');
		});
	});
}

export default modalNav;