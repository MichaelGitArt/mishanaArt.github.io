$(function() {


  /** Изменения активных пунктов меню и скрол до якорей **/

  let lastId,
  topMenu = $(".menu"),
  topMenuHeight = 65,
  // All list items
  menuItems = topMenu.find("ul a"),
  // Anchors corresponding to menu items

  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));

    if (item.length) {
      return item;
    }
  });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e) {
    let href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
      scrollTop: offsetTop + 5
    }, 300);
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function() {
    // Get container scroll position
    let fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    let cur = scrollItems.map(function() {
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    let id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
      .parent().removeClass("active")
      .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });



  /** Показ фиксированного меню  **/
   $(window).scroll(function() {
      if($(window).scrollTop() >= 160) {
        $('.fixed-menu').slideDown(300);
      } else {
        $('.fixed-menu').slideUp(300);
      };
  });﻿


  /** Деактивация санвича меню при нажатии на пункт меню **/
  $('.menu').on('click', 'a', function(){
    $('.toggleMenu').removeClass('on');
    if($(window).width() < 1200){
      $('.menu ul').slideUp();
    }
    return false;
  });

  /** Переключения сандвича **/
	$('.toggleMenu').click(function(){
		$(this).toggleClass('on');
		$(this).parent().children('ul').slideToggle();
    return false;
	})

  /** Скролл при нажатии на Мышку **/
  $('.mouse').click(function(){
      $('html, body').animate({ scrollTop: $('#about').offset().top - 60 }, 500);
  });

  /** Активируем слайдер в первом табе **/
	$('.tabs-box_1').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: false,
    arrows: true,
    spead: 1500,
    dots: true,
    customPaging : function(slider, i) {
      let thumb = $(slider.$slides[i]).data('thumb');
      return '';
    },
    prevArrow: '<div class="slick-arrow slick-arrow-prev"><div class="arrow-form"></div></i></div>',
    nextArrow: '<div class="slick-arrow slick-arrow-next"><div class="arrow-form"></div></div>',
    responsive: [
    {
      breakpoint: 991, 
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767, 
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480, 
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });

  /** Переключение между табами **/
  $('.pr-tabs').on('click', '.pr-tab a', function(){
    let index = $(this).attr('href').substring(5);
    $('.pr-tab').removeClass('active');
    $(this).parent().addClass('active');

    $('.tabs-box').addClass('hidden');
    $('.tabs-box_' + index).removeClass('hidden');

    if(! $('.tabs-box_' + index).hasClass('slick-initialized')){
      $('.tabs-box_' + index).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: false,
        arrows: true,
        spead: 1500,
        dots: true,
        customPaging : function(slider, i) {
          let thumb = $(slider.$slides[i]).data('thumb');
          return '';
        },
        prevArrow: '<div class="slick-arrow slick-arrow-prev"><div class="arrow-form"></div></i></div>',
        nextArrow: '<div class="slick-arrow slick-arrow-next"><div class="arrow-form"></div></div>',
        responsive: [
        {
          breakpoint: 991, 
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 767, 
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480, 
          settings: {
            slidesToShow: 1,
          }
        }
        ]
      });
    }
    return false;
  });
});


  /** Всплываючее окно продукта **/
  $('.products .more').fancybox();

  $('.products').on('click', '.more', function(){
    let item = $(this).parent().parent();

    $('.products-modal-text').empty();
    $('.products-modal .image').empty();
    // Добавляем фотографию в модальное окно
    item.find('.tab-image-wrap img').clone().appendTo('.products-modal .image').attr('class', '');
    // Добавляем основной текст
    item.find('.tab-hidden-content').clone().appendTo('.products-modal-text');
    // Добавляем заголовок
    $('.products-modal .tab-hidden-content').prepend(item.find('.tab-title').clone())

  });


