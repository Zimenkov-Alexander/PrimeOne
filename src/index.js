import modal from './js/modules/modal';
import modalNav from './js/modules/modal-nav';
import scroll from './js/modules/scroll';
import slider from './js/modules/slider';
import card from './js/modules/card';
import switchLanguage from './js/modules/switch-language';

window.addEventListener('DOMContentLoaded', () => {

	modal('.main__list .list__item', '.modal.modal--page');
	modal('.view-menus', '.modal.modal--page');
	modal('.custom-online', '.modal.modal--page');
	modal('.btn--form', '.modal.modal--form');
	modal('.contacts__link--address', '.modal.modal--map');
	scroll();
	slider();
	modalNav();
	switchLanguage ();
	card();
});