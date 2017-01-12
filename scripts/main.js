    $(document).ready(function() {
      $('.slider_top').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        // autoplay: true,
        arrows: false

      });


    $('.slider_offer').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });






      $('.slider_our_work').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        // autoplay: true,
        arrows: true

      });
      $('.slider_work_for_you').slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        arrows: true
      });
      

      $('.slider_advice_news').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        arrows: false
      });


       $('.slider_partners').slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        arrows: true
      });


    $('.nav_slide_button').click(function() {
      $('.pull').slideToggle();
    });
    $("#nav-toggle").click(function() {
      $(this).toggleClass("active");
    });


    initialize();
});

	function initialize() {
    var haightAshbury = new google.maps.LatLng(49.8340064,23.9780386);
    var mapOptions = {
        zoom: 15,
        center: haightAshbury,
        // mapTypeId: google.maps.MapTypeId.TERRAIN,
        scrollwheel: false,
	    navigationControl: false,
	    mapTypeControl: false,
	    scaleControl: false,
	    // draggable: false
    };    
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
    google.maps.event.addListener(map, 'click', function (event) {
        addMarker(event.latLng);
    });//добавляем событие нажание мышки
}