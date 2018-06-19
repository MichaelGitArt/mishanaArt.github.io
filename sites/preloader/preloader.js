var preloader    = document.querySelector('.preloader'), // селектор прелоадера
    loader   = document.querySelector('.progres-filler'), // селектор прелоадера
    loaderTextPercent   = document.querySelector('.loader-text span'), // селектор прелоадера
    imagesCount  = document.querySelectorAll('img').length, // количество изображений
    dBody        = document.querySelector('body'), //обращаемся к body
    percent      = 100 / imagesCount, // количество % на одну картинку
    progress     = 0, // точка отсчета
    loadedImg    = 0; // счетчик загрузки картинок

    dBody.style.overflow = 'hidden';


  for (var i = 0; i < imagesCount; i++) { // создаем клоны изображений
    var img_copy        = new Image();
    img_copy.src        = document.images[i].src;
    img_copy.onload     = img_load;
    img_copy.onerror    = img_load;
  }

  function img_load () {
    progress += percent;    
    loadedImg++;

    if (progress >= 100 || loadedImg == imagesCount) { // загрузка картинок закончена    
      setTimeout(function(){
        dBody.style.overflow = 'visible';
        preloader.style.opacity = 0;
        setTimeout(function(){
          preloader.style.display = 'none';
        }, 1800);
      }, 2000000);
    }

    // setTimeout(function(){
      number_to(loaderTextPercent,Math.floor(progress - percent), Math.floor(progress) , 900);
    // }, progress / percent * 600)



    loader.style.width = progress + "%";

  }

// Переменная для остановки множества setTimeout в запущенных number_to;
var progressComleted = false;

/**
*inc - увеличение либо уменьшение
*shift - на сколько изменяется значение
**/
function number_to(element,from,to,duration){
  var start = new Date().getTime();
  if(progressComleted) return;
  setTimeout(function() {
    if(progressComleted) return;
    if(progress >= 100 || loadedImg == imagesCount){
      numberToFinish(loaderTextPercent,Math.floor(100 - (percent * 2)),100 , 800);
      progressComleted = true;
      return;
    }

    var now = (new Date().getTime()) - start;
    var progress = now / duration;
    var result = Math.floor((to - from) * progress + from);
    element.innerHTML = progress < 1 ? result : to;
    if (progress < 1) setTimeout(arguments.callee, 10);
  }, 10);
}

function numberToFinish(element,from,to,duration){
  var start = new Date().getTime();
  setTimeout(function() {
    var now = (new Date().getTime()) - start;
    var progress = now / duration;
    var result = Math.floor((to - from) * progress + from);
    element.innerHTML = progress < 1 ? result : to;
    if (progress < 1) setTimeout(arguments.callee, 10);
  }, 10);
}



