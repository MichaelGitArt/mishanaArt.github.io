'use strict'
var sandwich = document.getElementById("sandwich"),
menu = document.querySelector(".menu-section"),
opensandwich = false,
dark = document.getElementsByClassName('dark')[0];


menu.onclick = function(e){
	var target = e.target;
	while (target.className != "modal-form" ) {
			if (target.tagName == 'A') {
      // нашли элемент, который нас интересует!
      toggleMenu();
      return;
  }
    target = target.parentNode;
  }
}
sandwich.onclick = function(){
	toggleMenu();
};
dark.onclick = function(){
	toggleMenu();
};
function toggleMenu(){
sandwich.classList.toggle('active');
menu.classList.toggle('active');
dark.classList.toggle('active');
console.log(dark);
document.getElementsByClassName('mobMenu')[0].classList.toggle('active');
}











var header = new Headhesive('.menu-section',{offset: 500});

function slowScroll (id) {

		var offset = 60;

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




$(document).ready(function () {
    var pie1 = $('.pie-1'),
        pie2 = $('.pie-2'),
        pie3 = $('.pie-3');
    progressBarUpdate(40, 100, pie1,'%');
    progressBarUpdate(75, 100, pie2, '%');
    progressBarUpdate(90, 100, pie3, '%');
});






function rotate(element, degree) {
    element.css({
        '-webkit-transform': 'rotate(' + degree + 'deg)',
            '-moz-transform': 'rotate(' + degree + 'deg)',
            '-ms-transform': 'rotate(' + degree + 'deg)',
            '-o-transform': 'rotate(' + degree + 'deg)',
            'transform': 'rotate(' + degree + 'deg)',
            'zoom': 1
    });
}

function progressBarUpdate(x, outOf, elem,type) {
    var firstHalfAngle = 180;
    var secondHalfAngle = 0;

    // caluclate the angle
    var drawAngle = x / outOf * 360;

    // calculate the angle to be displayed if each half
    if (drawAngle <= 180) {
        firstHalfAngle = drawAngle;
    } else {
        secondHalfAngle = drawAngle - 180;
    }

    // set the transition
    rotate(elem.find(".slice1"), firstHalfAngle);
    rotate(elem.find(".slice2"), secondHalfAngle);

    // set the values on the text
    elem.find(".status").html(x + "<span>"+type+"</span>");
}