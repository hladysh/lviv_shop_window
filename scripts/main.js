    $(document).ready(function() {
      $('.slider_top').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        arrows: false

      });
    });

    $('.slider_offer').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [{
        breakpoint: 1024,
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



    $('.nav_slide_button').click(function() {
      $('.pull').slideToggle();
    });
    $("#nav-toggle").click(function() {
      $(this).toggleClass("active");
    });
    