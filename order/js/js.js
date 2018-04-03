'use strict'

/* Анимация */
$(".nav-menu").animated("fadeInUpBig");





document.body.onload = function(){
	setTimeout(function(){
		let preloader = document.getElementById('preloader');
		if( !preloader.classList.contains('done') ){
			preloader.classList.add('done')
		}
	},1000)









// while (target.className != "modal-form" ) {
//  if (target.tagName == 'A') {
//       // нашли элемент, который нас интересует!
//       toggleMenu();
//       return;
//     }
//     target = target.parentNode;
//   }








/*//////////////////Anchor//////////////////*/
function slowScroll (id) {
 var offset = 0;
 
 $('html, body').animate ({
  scrollTop: $(id).offset ().top - offset
}, 500);
 return false;
}















