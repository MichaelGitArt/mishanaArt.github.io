var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 46.474, lng: 30.731},
    zoom: 16
  });
}

$(function() {

	$(".reviews-container").on('click', '.reviews-item', function(){
		let newSrc = $(this).find('.reviews-img').attr('src').replace('.jpg', '-big.jpg')
		$('.zoom-modal').addClass('on').find('img').attr('src', newSrc);
	});

	$('.zoom-modal').click(function(e){
		if(e.target.classList.contains('zoom-modal')){
			$(this).removeClass('on')
		}
	})
	$('body').on('click', '.close', function(){
		$(this).parent().parent().removeClass('on')
		$(this).parent().removeClass('on')
	})


$('.staff .team-btn').click(function(){
	let element = $(this).closest('.staff-item').clone();
	console.log(element);
	$('.team-modal').empty().append(element).addClass('on')
	$('.close').clone().appendTo('.team-modal .staff-item').addClass('close_circle');
	return false;
})

	$('.team-modal').click(function(e){
		if(e.target.classList.contains('team-modal')){
			$(this).removeClass('on')
		}
	})

	$("body").on('click', '.crt-item', function(){
		console.log($(this));
		let newSrc = $(this).find('img').attr('src').replace('.jpg', '-big.jpg')
		$('.zoom-modal').addClass('on').find('img').attr('src', newSrc);
	});

// Кнопка записаться
$(".btn-form").on('click', function(){
		$('.signUp-modal-wrap').addClass('on');
	});

	$('.signUp-modal-wrap').click(function(e){
		if(e.target.classList.contains('signUp-modal-wrap')){
			$(this).removeClass('on')
		}
	})


// Для акодиона

$('.accordion').on('click', '.accordion-item', function(e){
	if(e.target.classList.contains('accordion-arrow') || e.target.classList.contains('accordion-item'))
	$(this).toggleClass('on');
})

// навигация по странице

$('.pr-nav').on('click', 'a', function(){
	let scroll_el = $(this).attr('href'); 
      if ($(scroll_el).length != 0) { 
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
      }
    return false;
});







// Для табов

$('.reasons-tabs-wrap').on('click', '.reasons-btn', function(){
	let index = $('.reasons-btn').index(this);

	$('.reasons-btn').removeClass('on');
	$(this).addClass('on')


	$('.reasons-tabs').removeClass('on');
	$('.reasons-tabs:eq(' + index + ')').addClass('on');

});

// Цены
$('.price').on('click', '.price-item', function(){
	$(this).parent().toggleClass('on').children('.price-sub').slideToggle("normal", 'linear');
});


$('.reviews-container').slick({
  spead: 1500,
   slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-arrow slick-arrow-prev"><i class="far fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-arrow slick-arrow-next"><i class="far fa-angle-right"></i></button>'
 });

$('.main_staff').slick({
  spead: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-arrow slick-arrow-prev"><i class="far fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-arrow slick-arrow-next"><i class="far fa-angle-right"></i></button>'
 });


$('.main-head').slick({
	 slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
	spead: 1500,
  dots: true,
  customPaging : function(slider, i) {
    let thumb = $(slider.$slides[i]).data('thumb');
    return '';
  }
})








});