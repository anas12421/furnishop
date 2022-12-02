$(function () {

  "use strick"

  // backtotop js

  $(".backtotop i").on('click', function () {
    $("html,body").animate({
      scrollTop: 0
    }, 1200)
  })


  $(window).on('scroll', function () {
    let scrolling = $(this).scrollTop()

    if (scrolling > 20) {
      $(".backtotop i").fadeIn(500)
    } else {
      $(".backtotop i").fadeOut(500)
    }

    if (scrolling > 50) {
      $(".menu").addClass("menu_ex")
    } else(
      $(".menu").removeClass("menu_ex")
    )
  })



  $('.bnr_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    vertical:true,
    nextArrow: '<i class="fa-solid fa-angle-up bn_n"></i>',
    prevArrow: '<i class="fa-solid fa-angle-down bn_p"></i>'
  });




  $('.banner_main_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows:false,
    // infinite:true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });



  
$('.client_slider_main').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1700,
  nextArrow:'<i class="fa-solid fa-arrow-right client_na"></i>',
  prevArrow:'<i class="fa-solid fa-arrow-left client_pa"></i>',
});









})