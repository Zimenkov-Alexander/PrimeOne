/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _js_modules_modal_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modules/modal-nav */ "./src/js/modules/modal-nav.js");
/* harmony import */ var _js_modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/modules/scroll */ "./src/js/modules/scroll.js");
/* harmony import */ var _js_modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _js_modules_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/modules/card */ "./src/js/modules/card.js");
/* harmony import */ var _js_modules_switch_language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/modules/switch-language */ "./src/js/modules/switch-language.js");







window.addEventListener('DOMContentLoaded', () => {

	Object(_js_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])('.main__list .list__item', '.modal.modal--page');
	Object(_js_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])('.view-menus', '.modal.modal--page');
	Object(_js_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])('.custom-online', '.modal.modal--page');
	Object(_js_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])('.btn--form', '.modal.modal--form');
	Object(_js_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])('.contacts__link--address', '.modal.modal--map');
	Object(_js_modules_scroll__WEBPACK_IMPORTED_MODULE_2__["default"])();
	Object(_js_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])();
	Object(_js_modules_modal_nav__WEBPACK_IMPORTED_MODULE_1__["default"])();
	Object(_js_modules_switch_language__WEBPACK_IMPORTED_MODULE_5__["default"]) ();
	Object(_js_modules_card__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

/***/ }),

/***/ "./src/js/modules/card.js":
/*!********************************!*\
  !*** ./src/js/modules/card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templateCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templateCard */ "./src/js/modules/templateCard.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");



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
			_templateCard__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(({scr, alt, title, descr}) => {
				new CreateCard(scr,alt,title,descr, '.card__list').render();
			});
			Object(_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('.view-menus', '.modal.modal--page');
			сheck = true;
		}
		
	});
}

/* harmony default export */ __webpack_exports__["default"] = (card);

/***/ }),

/***/ "./src/js/modules/modal-nav.js":
/*!*************************************!*\
  !*** ./src/js/modules/modal-nav.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (modalNav);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function scroll () {
	let animItems = document.querySelectorAll('._anim-items');
	
	if(animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		setTimeout(animOnScroll, 500);
	}
	
	function animOnScroll(){
	
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i],
				  animItemHeight = animItem.offsetHeight,
				  animItemOffset = offset(animItem).top,
				  animStart = 100;
	
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
	
			if (animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > animItemOffset - animItemPoint) &&
				pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('_active');
			}
		}
	}
	function offset(el){
		const rect = el.getBoundingClientRect(),
			  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
	}
}
/* harmony default export */ __webpack_exports__["default"] = (scroll);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider() {
	let $slides = document.querySelectorAll('.slide');
	let $controls = document.querySelectorAll('.slider__control');
	let numOfSlides = $slides.length;
	let slidingAT = 1300; 
	let slidingBlocked = false;
  
	[].slice.call($slides).forEach(function($el, index) {
	  let i = index + 1;
	  $el.classList.add('slide-' + i);
	  $el.dataset.slide = i;
	});
  
	[].slice.call($controls).forEach(function($el) {
	  $el.addEventListener('click', controlClickHandler);
	});
  
	function controlClickHandler() {
	  if (slidingBlocked) { return;}
	  slidingBlocked = true;
  
	  let $control = this;
	  let isRight = $control.classList.contains('m--right');
	  let $curActive = document.querySelector('.slide.s--active');
	  let index = +$curActive.dataset.slide;
	  (isRight) ? index++ : index--;
	  if (index < 1) {
		  index = numOfSlides;
	  }
	  if (index > numOfSlides) {
		  index = 1;
	  }
	  let $newActive = document.querySelector('.slide-' + index);
  
	  $control.classList.add('a--rotation');
	  $curActive.classList.remove('s--active', 's--active-prev');
	  document.querySelector('.slide.s--prev').classList.remove('s--prev');
	  
	  $newActive.classList.add('s--active');
	  if (!isRight) {
		  $newActive.classList.add('s--active-prev');
	  }
	  
  
	  let prevIndex = index - 1;
	  if (prevIndex < 1){
		  prevIndex = numOfSlides;
	  }
  
	  document.querySelector('.slide-' + prevIndex).classList.add('s--prev');
  
	  setTimeout(function() {
		$control.classList.remove('a--rotation');
		slidingBlocked = false;
	  }, slidingAT*0.75);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/switch-language.js":
/*!*******************************************!*\
  !*** ./src/js/modules/switch-language.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (switchLanguage);

/***/ }),

/***/ "./src/js/modules/templateCard.js":
/*!****************************************!*\
  !*** ./src/js/modules/templateCard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cardsTemblate = [
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

/* harmony default export */ __webpack_exports__["default"] = (cardsTemblate);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map