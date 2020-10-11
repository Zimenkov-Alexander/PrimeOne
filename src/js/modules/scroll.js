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
export default scroll;