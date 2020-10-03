"use strict";

function switchLanguage () {
	
	const languages = document.querySelectorAll('.custom-list .list__item');
	const languageList = document.querySelector('.custom-list');

	languageList.addEventListener('click', (evt) => {
		languages.forEach(item => {
				if (evt.toElement.nodeName === 'LI' || evt.toElement.nodeName === 'A'){
					item.classList.remove('active');
				}

				if (evt.target.innerText === item.id){
					item.classList.add('active');
				}
		});
	});
}

switchLanguage ();

// export default switchLanguage;