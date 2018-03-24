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


window.onscroll = function(){
    if(window.pageYOffset >= 700){
        menu.classList.add('fMenu')
    }else menu.classList.remove('fMenu');

    if(window.pageYOffset >= 800){
        menu.classList.add('fMenu1')
    }else menu.classList.remove('fMenu1');

    if(window.pageYOffset >= 900){
        menu.classList.add('fixMenu')
    }else menu.classList.remove('fixMenu');
}








/*//////////////////Anchor//////////////////*/
function slowScroll (id) {
    if(id == '#goods'){
     var offset = 0;
    }else{
     var offset = 60;
    }
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



/*//////////////////Progres Bar /////////////////////*/
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



/*//////////////////Portfolio/////////////////////*/
var option = document.getElementsByClassName('portfolio-options')[0];
option.onclick = function(e){
  var target = e.target;
  if(target.tagName != 'P') return;
  sortPotrfolio(target);
}

function sortPotrfolio(target){
  var thisOption = target.getAttribute('data-option');
  changeAct(target, thisOption);
  var works = document.getElementsByClassName('gal-items');

  if(thisOption === 'all'){
    for (var i = 0; i < works.length; i++) {
      works[i].style.display = 'inline-flex';
    }
    return;
  }

  for (var i = 0; i < works.length; i++) {
    if(works[i].getAttribute('data-chapter').indexOf(thisOption) != -1){
      works[i].style.display = 'inline-flex';
    }else{
      works[i].style.display = 'none';
    }
  }
}

function changeAct(target, trueOption){
  var parent = target.parentNode;
  var elems = parent.children;

  for (var i = 0; i < elems.length; i++) {
    if(elems[i].getAttribute('data-option') != trueOption){
      elems[i].classList.remove('active');
    }else{
      elems[i].classList.add('active');
    }
  }
}






































