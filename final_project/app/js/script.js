jQuery(function ($) {


  $('.js-slider, .js-slider-about').each(function () {
    const $slider = $(this);
    const isAbout = $slider.hasClass('js-slider-about');

    $slider.slick({
      infinite: true,
      dots: true,
      arrows: false,
      dotsClass: 'slider__dots',
      slidesToShow: isAbout ? 4 : 1,
      slidesToScroll: isAbout ? 2 : 1,
      responsive: isAbout ? [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ] : []
    });
  });



  if ($('.js-header').length) {
    window.addEventListener('resize', function () {
      mainMenuAll();
      mobileHeader()
    }, { passive: true });
  };

  if ($('.js-open-mobile-menu').length) {
    mainMenuMobile()
  };

  //-----------------------

  function mainMenuAll() {
    var w = $(window).width();
    if (w <= 767) {
      if ($('body').data('menu-orientation') == 1) return;
      $('body').data('menu-orientation', 1);
    } else {
      if ($('body').data('menu-orientation') == 2) return;
      $('.js-open-mobile-menu, .js-mask-mobile-menu').mainMenuMobileClose();
      $('body').data('menu-orientation', 2);
      $(window).trigger('scroll');
    }
  }

  function mainMenuMobile() {
    $('.js-open-mobile-menu, .js-mask-mobile-menu').on('click', function () {
      if ($('.js-open-mobile-menu').hasClass('active')) {
        $(this).mainMenuMobileClose();
      }
      else {
        $(this).mainMenuMobileOpen();
      }
    });
  }

  $.fn.mainMenuMobileClose = function () {
    $('.js-open-mobile-menu').removeClass('active');
    $('.js-header').css({
      'overflow': 'hidden',
    });
    $('.js-mask-mobile-menu').hide();
    $('.js-mobile-drop-menu').animate({
      right: "-110%"
    }, {
      duration: 300,
      specialEasing: {
        width: "easeInQuad",
      }
    });
    $('body').css({
      'height': 'auto',
      'width': 'auto',
      'overflow': 'scroll',
      'position': 'static'
    });
  }

  $.fn.mainMenuMobileOpen = function () {
    $('.js-open-mobile-menu').addClass('active');
    $('.js-header').css({
      'overflow': 'visible',
    });
    $('.js-mask-mobile-menu').show();
    $('.js-mobile-drop-menu').animate({
      right: -15,
      top: 91,
      left: -15,
    }, {
      duration: 300,
      specialEasing: {
        width: "easeInQuad",
      }
    });
    $('body').css({
      'height': '100%',
      'width': '100%',
      'overflow': 'hidden',
      'position': 'fixed'
    });
  }
});