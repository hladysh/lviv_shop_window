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
        slidesToShow: 4,
        // autoplay: true,
        arrows: true,
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

      $('.slider_work_for_you').slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
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

      $('.slider_advice_news').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
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

      $('.slider_partners').slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        arrows: true,
        responsive: [{
          breakpoint: 1199,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }]
      });

      $('.nav_slide_button').click(function() {
        $('.pull').slideToggle();
      });
      $("#nav-toggle").click(function() {
        $(this).toggleClass("active");
      });
    });
    