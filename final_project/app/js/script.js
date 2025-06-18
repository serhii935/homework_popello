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