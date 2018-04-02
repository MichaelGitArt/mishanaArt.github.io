'use strict'

/* Анимация */
//$(".nav-menu").animated("fadeInUpBig");

document.body.onload = function(){
	setTimeout(function(){
		let bodyChildren = document.body.children;
		bodyChildren[bodyChildren.length-1].style.display = 'none';


		let preloader = document.getElementById('page-preloader');
		if( !preloader.classList.contains('done') ){
			preloader.classList.add('done')
		}

	},1000)
}






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


/* Owm Animated-text*/

let animatedText = document.getElementsByClassName('animated-text')[0];
let bottomLine = document.getElementsByClassName('bottom-line')[0];
let resetAn = document.getElementsByClassName('reset-animation')[0];

let activated = false;

animatedText.onmouseover = function(){
	if(activated) return;
	activated = true;
  setTimeout(function(){
    activated = false;
	}, 2200)


  animatedText.classList.add('do');
  setTimeout(function(){
    bottomLine.classList.add('zero');
	}, 1800)
};

console.log(resetAn);
resetAn.onclick = function(){
	if(activated) return;
	activated = true;
	setTimeout(function(){
    activated = false;
	}, 2000)

	bottomLine.classList.remove('zero');
	animatedText.classList.remove('do');
};



























