$(function() {

	$('#toggle').click(function(){
		$(this).toggleClass('on');
		$('.menu ul').slideToggle();
	})

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
