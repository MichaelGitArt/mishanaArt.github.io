'use strict'


//Contact
var contactBut = document.querySelector(".contact-info .button");

contactBut.addEventListener("click", function(){
var allContacts = document.createElement("div");
allContacts.innerHTML = "<p>Ответ вы получите в течении 12 часов.</p><form class='modal-form' name='modal-form'><input class='modal-email' type='email' placeholder='Email'><input class='modal-name' type='text' placeholder='Имя'><textarea class='modal-message' rows='5' cols='15' name='messsage' placeholder='Ваше сообщение' ></textarea><input class='modal-button' type='button' value='Отправить'></form><div id='close' class='active'><div class='sw_top'></div><div class='sw_bottom'></div></div>";

	allContacts.className = 'modal-window';


	document.body.appendChild(allContacts);


	allContacts.addEventListener("click", function(e){
		var target = e.target;
		while (target.className != "modal-form" ) {
			if (target.id == 'close') {
      // нашли элемент, который нас интересует!
      allContacts.parentNode.removeChild(allContacts);
      return;
    }
    target = target.parentNode;
  }
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
















//functions
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