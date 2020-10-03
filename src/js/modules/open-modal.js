"use strict";

function openModal () {

	const btn = document.querySelector('#burger'),
		  mainList = document.querySelectorAll('.main__list');

	btn.addEventListener('click', () => {
		btn.classList.toggle('burger--close');
		btn.classList.toggle('burger--active');

		mainList.forEach(list  => {
			list.classList.toggle('hide');
		});
	});
}

openModal();


// export default openModal;