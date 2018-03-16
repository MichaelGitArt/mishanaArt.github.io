'use strict'

// Mobile menu
var sandwich = document.getElementById("sandwich"),
menu = document.querySelector(".nav-menu"),
mobMenu = document.querySelector(".mobMenu"),
opensandwich = false;
console.log(mobMenu);

menu.onclick = function(e){
	var target = e.target;
	if(target.tagName === "A"){
		toggleMenu(winWidth);
	}
}
sandwich.onclick = function(){
	sandwich.className = "active";
	toggleMenu();
};



//Contact
var contactBut = document.querySelector(".contact-info .button");



contactBut.addEventListener("click", function(){
	console.log("msdkljfg");
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

















function toggleMenu(){
	if(opensandwich){
		menu.style.left = "-320px";
		sandwich.className = "";
		sandwich.style.right = 0;
		opensandwich = false;
		mobMenu.style.width = "100%"
		mobMenu.style.left = "0px"
		document.documentElement.style.filter = "none";
	}else{
		sandwich.style.width = "70px";
		menu.style.left = "0";
		sandwich.className = "active";
		opensandwich = true;
		mobMenu.style.width = "70px"
		mobMenu.style.left = "240px"
		document.documentElement.style.filter = "grayscale(100%)";
	}
}

function slowScroll (id) {
	if(document.documentElement.clientWidth <= 600){
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