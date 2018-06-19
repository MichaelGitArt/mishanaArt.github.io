var preloader    = document.querySelector('.preloader'), // селектор прелоадера
    loader   = document.querySelector('.progres-filler'), // селектор прелоадера
    loaderTextPercent   = document.querySelector('.loader-text'), // селектор прелоадера
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
      }, 200);
    }
    setTimeout(function(){
     loaderTextPercent.textContent =  Math.floor(progress) + "%";
    }, progress + 100)


    loader.style.width = progress + "%"; 
  }




