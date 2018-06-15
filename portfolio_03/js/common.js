jQuery(function() {

$('.section-head h2, .section-head p').animated('fadeInRight')

$('.section-head h3').animated('fadeInDown')


$('.info-item-wrap').animated('slideInUp')

$('.slider').animated('rollIn')




  $('.s2-item-wrap').waypoint(function(){
    $('.s2-item-wrap').each(function(index){
      let ths = $(this);
      setTimeout(function(){
        ths.addClass('s2-item-wrap-on');
      },200 * index + 500) 
    });
    this.destroy()
  },{ 
    offset: '80%'
  });

  $('.s8-items').waypoint(function(){
    $('.s8-item').each(function(index){
      let ths = $(this);
      setTimeout(function(){
        ths.addClass('s8-item-on');
      },200 * index + 500) 
    });
    this.destroy()
  },{ 
    offset: '80%'
  });

  $('.section_8 .forms').animated('fadeInRight')

	$('.toggle-mnu').on('click', function(){
		$(this).toggleClass('on');
		$(".main-mnu").slideToggle();
	});

  $('.main-footer .toggle-mnu').on('click', function(){
    if($(this).hasClass('on')){
      $('html, body').animate({
         scrollTop: $('footer').offset().top
         //scrollTop: $('#your-id').offset().top
         //scrollTop: $('.your-class').offset().top
      }, 'slow');
    }
  });

  $('.arrow-bottom').on('click', function(){
      $('html, body').animate({
         scrollTop: $('.section_1').offset().top
         //scrollTop: $('#your-id').offset().top
         //scrollTop: $('.your-class').offset().top
      }, 'slow');    
  });

  $('.top').on('click', function(){
      $('html, body').animate({
         scrollTop: $('header').offset().top
         //scrollTop: $('#your-id').offset().top
         //scrollTop: $('.your-class').offset().top
      }, 'slow');
    
  });





  $('.p').animated('fadeInLeft')

  $('.section_4').waypoint(function(){
    $('.card').each(function(index){
      let ths = $(this);
      setTimeout(function(){
        ths.removeClass('card-off');
      },150 * index) 
    });
    this.destroy()
  },{ 
    offset: '50%'
  });

  $('.section_6').waypoint(function(){
    $('.team').each(function(index){
      let ths = $(this);
      setTimeout(function(){
        ths.removeClass('team-off');
      },150 * index) 
    });
    this.destroy()
  },{ 
    offset: '50%'
  });

  $('.forms .buttons').click(function(e){
    alert('Форма польностью рабочая')
  })


$('.section-bottom .buttons').click(function(){
  $('.form-modal-wrap').addClass('active')
})
$('.forms .close').click(function(){
  $('.form-modal-wrap').removeClass('active')
})
$(document).mouseup(function (e){ // событие клика по веб-документу
  var div = $(".form-modal"); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
    $(".form-modal-wrap").removeClass('active');
  }
});





  $('.triangles-container').waypoint(function(){ 
    $('.tc-item').each(function(index){
      let ths = $(this);
      setTimeout(function(){
        ths.removeClass("")
        let myAnimation = new DrawFillSVG({
         elementId: "tc-svg-" + index
        });
        ths.removeClass('tc-item-off');
      },750 * index);
    });

    this.destroy()
  },{
    offset: '80%'
  }
  );






  $.fn.equivalent = function (){
    //запишем значение jQuery выборки к которой будет применена эта функция в локальную переменную $blocks
    let $blocks = $(this),
     //примем за максимальную высоту - высоту первого блока в выборке и запишем ее в переменную maxH
     maxH    = $blocks.eq(0).height();
    //делаем сравнение высоты каждого блока с максимальной
    $blocks.each(function(){
      maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
        /*
        Этот блок можно записать так:
        if ( $(this).height() > maxH ) {
            maxH = $(this).height();
        }
        */
      });
      $blocks.height(maxH);
  }
  $('.section_1 .info-item').equivalent();


$('.slider').slick({
  spead: 1500,
  dots: true,
  customPaging : function(slider, i) {
    let thumb = $(slider.$slides[i]).data('thumb');
    return '<label><div class="sl-dot"></label>';
  },
  prevArrow: '<button type="button" class="slick-arrow slick-arrow-prev"><i class="far fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-arrow slick-arrow-next"><i class="far fa-angle-right"></i></button>'
 });






});