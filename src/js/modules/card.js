// import cardsTemblate from 'templateCard';

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
			<h3 class="card__title">${this.title}</h3>
			<p class="card__desc">${this.descr}</p>
			<button class="btn__card btn btn--black">Get a quote</button>
			<p class="card__link">
				<a class="link" href="#">View menus</a>
			</p>
			`;
			div.classList.add('card__item');
			this.parent.append(div);
		}
	}
	
	const cards = [
		{
			scr: 'img/menu/1.jpg',
			alt: 'CardImage',
			title: 'Corporate catering',
			descr: 'We are able to serve events from 2 to 2000 guests and always reasonable prices.',
		},
		{
			scr: 'img/menu/2.jpg',
			alt: 'CardImage',
			title: 'Private catering',
			descr: 'We are able to serve events from 2 to 2000 guests and always reasonable prices.',
		},
		{
			scr: 'img/menu/3.jpg',
			alt: 'CardImage',
			title: 'Wedding catering',
			descr: 'We are able to serve events from 2 to 2000 guests and always reasonable prices.',
		},
		{
			scr: 'img/menu/4.jpg',
			alt: 'CardImage',
			title: 'Online Ordering',
			descr: 'We are able to serve events from 2 to 2000 guests and always reasonable prices.',
		},
	];
	
	let сheck = false;
	
	onlineOrdering.addEventListener('click', () => {
		onlineOrdering.classList.toggle('hide-cards');
		onlineOrdering.classList.toggle('show-cards');
	
		if (!сheck){
			cards.forEach(({scr, alt, title, descr}) => {
				new CreateCard(scr,alt,title,descr, '.card__list').render();
			});
			сheck = true;
		}
		
	});
}

card ();


// export default card;