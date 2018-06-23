'use strict'






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

let nav = document.querySelector('.nav');


document.onclick = function(e){
  let target = e.target;
  while(target.tagName !== 'BODY'){

    // Отслеживаем клик по сандвичу
    if(target.className === 'sandwich'){
      toggleMobMenu();
    }
    if(target.className === 'nav__item'){
      if(nav.classList.contains('nav_mobile-menu_active')){
        setTimeout(function(){
          toggleMobMenu();
        }, 10)        
      }
    }


    target = target.parentNode;
  }
}

// Функция для активации меню
function toggleMobMenu(){
  let menu = document.querySelector('.nav');
  console.log(menu);
  menu.classList.toggle('nav_mobile-menu_active');
}





















/*//////////////////Anchor//////////////////*/
function slowScroll (id) {
 var offset = 120; 
 $('html, body').animate ({
  scrollTop: $(id).offset ().top - offset
}, 1000);
 return false;
}


var lastId,
    navMenu = $(".nav"),
    navMenuHeight = navMenu.outerHeight()+80,
    // All list items
    menuItems = navMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-navMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 800);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+navMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("nav__item-wrap_highlighted")
         .end().filter("[href='#"+id+"']").parent().addClass("nav__item-wrap_highlighted");
   }                   
});



























