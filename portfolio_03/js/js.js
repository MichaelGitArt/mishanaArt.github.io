'use strict'


// Portfolio HOVER

var works = document.querySelector(".works");
console.log(works);


// jQuery('.workBlock').hover(
//     setTimeout(function () {   }, 500);
//     setTimeout(function () { 		},);
// );

























//Contact
var contactBut = document.querySelector(".contact-info .button");

contactBut.addEventListener("click", function(){
	var allContacts = document.createElement("div");



	allContacts.innerHTML = "Мне лень писать модальное окно)\
	 <br> Пишите сюда: <a href='https://telegram.me/keyper' target='_blank'>Telegram</a>\
	 ли сюда: <a href='https://vk.com/mishana2002' target='_blank'>VK</a> ";
	allContacts.className = "modalWin";


	document.body.appendChild(allContacts);
	allContacts.addEventListener("click", function(){
		allContacts.parentNode.removeChild(allContacts);
	});
	return false;
});




// Mobile menu
var sandwich = document.getElementById("sandwich"),
menu = document.querySelector(".nav-menu"),
mobMenu = document.querySelector("#mobMenu"),
openedMenu = false;


menu.onclick = function(e){
	var target = e.target;
	if(target.tagName === "A"){
		toggleMenu();
	}
};
mobMenu.onclick = function(e){
	var target = e.target;
	if(target.tagName === "A"){
		toggleMenu();
	}
};
sandwich.onclick = function(){
	toggleMenu();
};

function toggleMenu(){
	mobMenu.classList.toggle("mobMenu-active");
	menu.classList.toggle("menu-active");
	sandwich.classList.toggle("active");
	return false;
}

















function slowScroll (id) {
	if(document.documentElement.clientWidth <= 550){
		var offset = 55;
	}else  var offset = 0;
	$('html, body').animate ({
		scrollTop: $(id).offset ().top - offset
	}, 500);
	return false;
}

function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}