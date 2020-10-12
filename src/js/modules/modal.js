function modal (openBtn, pageModal) {

	const openPageBtn = document.querySelectorAll(openBtn),
		  modalPage = document.querySelector(pageModal);
	
	const divClose = modalPage.querySelector('.modal__close'),
		  btnsClose = modalPage.querySelectorAll('.btn--modal');	

	openPageBtn.forEach(item => {
		item.addEventListener('click', (evt)=> {
			evt.preventDefault();
			openModal();
			
			divClose.addEventListener('click', closeModal);
			btnsClose.forEach(btn => {
				btn.addEventListener('click', closeModal);
			});

			if (modalPage.classList.contains('modal--form')){
				setTimeout(closeModal, 4000);
			}

		});
		window.document.addEventListener('keydown', (evt) => {
			if (evt.key == 'Escape'){
				closeModal();
			}
		});
	});

	function openModal() {
		const btn = document.querySelector('#burger-nav');
		if (btn.classList.contains('burger--active')){

			btn.classList.toggle('burger--close');
			btn.classList.toggle('burger--active');
		
			document.querySelectorAll('.main__list').forEach(list  => {
				list.classList.toggle('hide');
			});
		}
		modalPage.classList.remove('hide');
		modalPage.classList.add('show');
		document.body.style.overflow = 'hidden';
	}
	function closeModal () {
		modalPage.classList.remove('show');
		modalPage.classList.add('hide');
		document.body.style.overflow = '';

	}	
}

export default modal;