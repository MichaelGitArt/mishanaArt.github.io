var submit = document.querySelectorAll("input[type='submit']");

for (var i = 0; i <  submit.length; i++) {
	submit[i].onclick= function(){return false;}
}
/*var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49.54357181, lng: 25.6},
    zoom: 16
  });
}*/

function initMap() {
  var uluru = {lat: 49.54357181, lng: 25.6};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}


var mapOpen = document.getElementsByClassName("map-open")[0],
mapHide = document.getElementsByClassName("map-hide")[0],
mapCircle = document.getElementsByClassName("map-circle")[0];

//mapOpen.parentNode.style.display = "none";

mapOpen.onclick = function(){
	mapCircle.style.display = "none";
	mapHide.style.display = "block";
};
mapHide.onclick = function(){
	mapCircle.style.display = "block";
	mapHide.style.display = "none";
};