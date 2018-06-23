'use strict'



var up = document.getElementsByClassName('up')[0];

window.onscroll = function(){
    if(window.pageYOffset >= 1000){
        up.classList.add('active')
    }else up.classList.remove('active');

}

document.body.onload = function(){
	setTimeout(function(){
		var preloader = document.getElementById('page-preloader');
		if( !preloader.classList.contains('done') )
		{
			preloader.classList.add('done')
		}
	},1000)
}




	/*//////////////////Menu/////////////////////*/

var mobMenu = document.getElementsByClassName('mobMenu')[0],
sandwich = document.getElementById('sandwich'),
menu = document.getElementsByClassName('menu-section')[0];


menu.onclick = function(e){
	var target = e.target;
	while (target.className != "menu-section" ) {
			if (target.tagName == 'A') {
      // нашли элемент, который нас интересует!
      toggleMenu();
      return;
  }
    target = target.parentNode;
  }
}


mobMenu.onclick = function(){
	toggleMenu();
}



function toggleMenu(){
	menu.classList.toggle('active');
	sandwich.classList.toggle('active');
	mobMenu.classList.toggle('active');
}























	/*//////////////////Header slider/////////////////////*/


var headerSwitch = document.getElementsByClassName('header-switch')[0],
visible = 0,
working = false;
headerSwitch.onclick = function(e){
	if(working) return;
	working = true;
	var target = e.target;
	while (target.className != "header-switch" ) {
		if (target.getAttribute('data-option')) {
	      // нашли элемент, который нас интересует!
	      var thisOption = target.getAttribute('data-option'),
	      slider = document.getElementsByClassName('desk-wrap')[0];

	      changeAct(target, thisOption);
	      showMember(thisOption, slider);
	      return;
	    }
	    target = target.parentNode;
	  }
	}
	function showMember(option, slider){
		var parts = slider.children,
		newVisible;
		for (var i = 0; i < parts.length; i++) {
			if(parts[i].getAttribute('data-option') === option){
				newVisible = i;
				break;
			}
		}
		parts[visible].classList.add('op');
		setTimeout(function(){
			parts[visible].classList.add('hid');
			parts[newVisible].classList.remove('hid');
			setTimeout(function(){
				parts[newVisible].classList.remove('op');
				visible = newVisible;
				setTimeout(function(){
					working = false;
				},150);
			},20);
		},250);
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





	/*//////////////////Team slider/////////////////////*/


	var peopleSlider = document.getElementsByClassName('slider')[0],
	workingSlider = false,
	act = 2,
	oldAct = 2;

	peopleSlider.onclick = function(e){
		if(workingSlider) return;
		workingSlider = true;
		var target = e.target;
		if(target.hasAttribute('data-option')) {
			newShowPeoplePart(target);
		}
		while (target.className != "slider" ) {
			if (target.classList.contains('back') || target.classList.contains('forward')){
	      // нашли элемент, который нас интересует!
	      var thisOption = target.className,
	      images = document.getElementsByClassName('slider-images')[0],
	      slider = document.getElementsByClassName('says-wrap')[0];
	      peopleChangeAct(images, thisOption);
	      return;
	    }
	    target = target.parentNode;
	  }
	}

	function showPeoplePart(option){
		var slider = document.getElementsByClassName('says-wrap')[0],
		parts = slider.children;

		parts[oldAct].classList.add('op');
		setTimeout(function(){
			parts[oldAct].classList.add('hid');
			parts[option].classList.remove('hid');
			setTimeout(function(){
				parts[option].classList.remove('op');
				setTimeout(function(){
					workingSlider = false;
					oldAct = act;

				},200);
			},20);
		},250);
	}

	function peopleChangeAct(images, option){
		var elements = images.children;
		for (var i = 0; i < elements.length; i++){
			if(i === act){
				elements[i].classList.add('sm');    
			}
		}
		oldAct = act;
		if(option === "back") act--;
		if(option === "forward") act++;
		if(act > 4) act = 0;
		if(act < 0) act = 4;
		elements[act].classList.remove('sm'); 
		showPeoplePart(act)
	}
	function newShowPeoplePart(target){
		var option = target.getAttribute('data-option') - 1;
		console.log(oldAct);


		var images = document.getElementsByClassName('slider-images')[0];
		var elements = images.children;
		elements[oldAct].classList.add('sm'); 
		elements[option].classList.remove('sm'); 
		act = option;
		showPeoplePart(act)
	}





































// var sandwich = document.getElementById("sandwich"),
// dark = document.getElementsByClassName('dark')[0];







 /*//////////////////Anchor//////////////////*/
function slowScroll (id) {

     var offset = 0;

	$('html, body').animate ({
		scrollTop: $(id).offset ().top - offset
	}, 500);
	return false;
}

// function getCoords(elem) { // кроме IE8-
//   var box = elem.getBoundingClientRect();

//   return {
//     top: box.top + pageYOffset,
//     left: box.left + pageXOffset
//   };
// }









 /*//////////////////Team slider/////////////////////*/
// var people = document.getElementsByClassName('people')[0],
// teamSwitch = document.getElementsByClassName('switch')[0];
// var visible = 0;

// teamSwitch.onclick = function(e){
//   var target = e.target;
//   while (target.className != "switch" ) {
//     if (target.classList.contains('member')) {
//       var option = target.getAttribute('data-option');
//       changeAct(target, option);
//       showMember(option);
//       return;
//     }
//     target = target.parentNode;
//   }
// }

// function showMember(option){
//   var members = people.children;
//   var newVisible;

//   for (var i = 0; i < members.length; i++) {
//     if(members[i].classList.contains(option)){
//       newVisible = i;
//       break;
//     }
//   }

//   members[visible].classList.add('op');
//   setTimeout(function(){
//     members[visible].classList.add('hid');
//     members[newVisible].classList.remove('hid');
//     setTimeout(function(){
//      members[newVisible].classList.remove('op');
//       visible = newVisible;
//     },10);

//   },1000);


// }



























