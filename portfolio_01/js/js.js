var dwsSubmit = document.querySelector(".elem1 .dws-submit");

var elem = document.querySelector(".elem1");
elem.addEventListener("mouseover", function(){
	var newElem = document.createElement("div");
	newElem.className = "newDiv";
	document.body.appendChild(newElem);
	newElem.style.cssText = " \
	position: absolute;\
	width: 200px;\
	height: 80px;\
	background-color: white;\
	border-radius: 6px;\
	padding: 10px;\
	font: 16px Tahoma, sans-serif;"
	newElem.innerHTML = "Введите пожалуста свой  ник в поле ввода."
	var coords = getCoords(elem);
	newElem.style.top = coords.top - newElem.offsetHeight - 5 + "px";
	newElem.style.left = coords.left + "px";
});

elem.addEventListener("mouseout", function(){
	document.body.removeChild(document.querySelector(".newDiv"));

});


dwsSubmit.addEventListener("click", pressMe);

function pressMe(e){
	var elem = document.querySelector(".elem1 .input");
	if(elem.value === "") {
		console.log("The strig is empty");
		return;
	}
	 if(elem.value.length !== 10){
	  alert("Надо было писать ZIP cod. Идиот!");
	  document.querySelector(".elem1 p").innerHTML = "<a href='https://ru.wikipedia.org/wiki/ZIP-%D0%BA%D0%BE%D0%B4' target='_blank'>Что такое ZIP code</a>";
  	dwsSubmit.removeEventListener("click", pressMe);
	}else{
		alert("Красавчик! Наверное...")
	}
}


function getCoords(elem){
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}