var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 46.474, lng: 30.731},
    zoom: 16
  });
}
// 46.474665, 30.731917


$(function() {
	$(".reviews-container").on('click', '.reviews-item', function(){
		let newSrc = $(this).find('.reviews-img').attr('src').replace('.jpg', '-big.jpg')
		console.log(newSrc);

		$('.zoom-modal').addClass('on').find('img').attr('src', newSrc);

	});

	$('.close').click(function(){
		$(this).parent().parent().removeClass('on')
	})
	$('.zoom-modal').click(function(e){
		if(e.target.classList.contains('zoom-modal')){
			$(this).removeClass('on')
		}
	})

$('.reviews-container').slick({
  spead: 1500,
   slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-arrow slick-arrow-prev"><i class="far fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-arrow slick-arrow-next"><i class="far fa-angle-right"></i></button>'
 });





	});