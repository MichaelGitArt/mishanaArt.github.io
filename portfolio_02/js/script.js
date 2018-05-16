'use strict'

// Анимация 

/*$(".works").animated("fadeInUpBig");*/



//Делегироване

/*while (target.className != "modal-form" ) {
 if (target.tagName == 'A') {
      // нашли элемент, который нас интересует!
      toggleMenu();
      return;
    }
    target = target.parentNode;
  }
*/



document.onclick = function(e){
  let target = e.target;
  while(target.tagName !== `BODY`){

    // Отслеживаем клик по сандвичу
    if(target.className === `sandwich`){
      toggleMobMenu();
    }



    target = target.parentNode;
  }
}





// Функция для активации меню
function toggleMobMenu(){
  let menu = document.querySelector('.navigation');
  console.log(menu);
  menu.classList.toggle('active');
}























/*//////////////////Anchor//////////////////*/
function slowScroll (id) {
 var offset = 60;
 
 $('html, body').animate ({
  scrollTop: $(id).offset ().top - offset
}, 500);
 return false;
}




























