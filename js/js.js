'use strict'

/* Анимация */
//$(".nav-menu").animated("fadeInUpBig");






var menuWrap = document.getElementsByClassName('menu-wrap')[0];

window.onscroll = function(){
	if(window.pageYOffset > 1){
		menuWrap.classList.add('scrolled')
	}else{
		menuWrap.classList.remove('scrolled')
	}
}

if ($(window).scrollTop() >= $('#header').offset().top){
	$('.nav-menu').addClass('head');
	$('.nav-menu').removeClass('portfolio');
	$('.nav-menu').removeClass('contacts');
}
if ($(window).scrollTop() >= $('#portf').offset().top){
	$('.nav-menu').addClass('portfolio');
	$('.nav-menu').removeClass('contacts');
	$('.nav-menu').removeClass('head');
}
if ($(window).scrollTop() >= $('#contact').offset().top){
	$('.nav-menu').addClass('contacts');
	$('.nav-menu').removeClass('portfolio');
	$('.nav-menu').removeClass('head');
}

$(window).on("scroll", function() {
	if ($(window).scrollTop() >= $('#header').offset().top){
		$('.nav-menu').addClass('head');
		$('.nav-menu').removeClass('portfolio');
		$('.nav-menu').removeClass('contacts');
	}
});
$(window).on("scroll", function() {
	if ($(window).scrollTop() >= $('#portf').offset().top){
		$('.nav-menu').addClass('portfolio');
		$('.nav-menu').removeClass('contacts');
		$('.nav-menu').removeClass('head');
	}
});

$(window).on("scroll", function() {
	if ($(window).scrollTop() >= $('#contact').offset().top){
		$('.nav-menu').addClass('contacts');
		$('.nav-menu').removeClass('portfolio');
		$('.nav-menu').removeClass('head');
	}
});





/*//////////////////Anchor//////////////////*/
function slowScroll (id) {
 var offset = 0;
 
 $('html, body').animate ({
  scrollTop: $(id).offset ().top - offset
}, 500);
 return false;
}































