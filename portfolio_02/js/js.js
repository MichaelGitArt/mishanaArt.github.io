'use strict'
var mobMenu = document.getElementById("sandwich"),
menu = document.querySelector(".menu-section"),
openMobMenu = false;

menu.onclick = function(e){
	var target = e.target;
	var	winWidth = document.documentElement.clientWidth - menu.offsetWidth;
	if(target.tagName === "A" && document.documentElement.clientWidth < 600){
		toggleMenu(winWidth);
	}
}

mobMenu.onclick = function(){
	var winWidth = document.documentElement.clientWidth - menu.offsetWidth;
	toggleMenu(winWidth);
};



















function toggleMenu(winWidth){
	if(openMobMenu){
		for (var i = 0; i < document.querySelectorAll("#sandwich > *").length; i++) {
			document.querySelectorAll("#sandwich > *")[i].style.right = "-85%";
		}
		menu.style.left = "-320px";
		mobMenu.className = "";
		mobMenu.style.right = 0;
		openMobMenu = false;
		mobMenu.style.width = "100%";
	}else{
		for (var i = 0; i < document.querySelectorAll("#sandwich > *").length; i++) {
			document.querySelectorAll("#sandwich > *")[i].style.right = "0%";
		}
		mobMenu.style.width = "70px";
		menu.style.left = "0";
		mobMenu.className = "active";
		mobMenu.style.right = winWidth + "px";
		openMobMenu = true;
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