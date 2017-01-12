    $(document).ready(function() {
      $('.slider_top').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
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
        autoplay: true,
        arrows: true

      });
      $('.slider_work_for_you').slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        arrows: true
      });



      $('.nav_slide_button').click(function() {
        $('.pull').slideToggle();
      });
      $("#nav-toggle").click(function() {
        $(this).toggleClass("active");
      });
    });
    