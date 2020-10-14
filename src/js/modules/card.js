import cardsTemblate from './templateCard';
import modal from './modal';

function card (){

	const onlineOrdering = document.querySelector('.online-ordering');
	
	class CreateCard {
		constructor(scr, alt, title, descr, parentSelector){
			this.scr = scr;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.parent = document.querySelector(parentSelector);
		}
		render() {
			const div = document.createElement('div');
			div.innerHTML = `
			<div class="card__image">
				<img src="${this.scr}" alt="${this.alt}">
			</div>
			<div class="card__info"> 
				<h3 class="card__title">${this.title}</h3>
				<p class="card__desc">${this.descr}</p>
			</div>
			<div class="btns_card"> 
				<button class="btn__card btn btn--black view-menus">Get a quote</button>
				<p class="card__link">
					<a class="link view-menus" href="#">View menus</a>
				</p>
			</div>
			`;
			div.classList.add('card__item');
			this.parent.append(div);
		}
	}

	let сheck = false;
	
	let cardList = document.querySelector('.card__list');

	onlineOrdering.addEventListener('click', () => {
		onlineOrdering.classList.toggle('hide-cards');
		onlineOrdering.classList.toggle('show-cards');
	
		if (onlineOrdering.classList.contains('hide-cards')){
			document.querySelector('.advantages').style.marginTop = - cardList.clientHeight +'px';
		} else {
			document.querySelector('.advantages').style.marginTop = '0px';
		}

		if (!сheck){
			cardsTemblate.forEach(({scr, alt, title, descr}) => {
				new CreateCard(scr,alt,title,descr, '.card__list').render();
			});
			modal('.view-menus', '.modal.modal--page');
			сheck = true;
		}
		
	});
}

export default card;