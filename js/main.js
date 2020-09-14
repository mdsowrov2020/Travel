$(document).ready(function () {
  $('.slider_container').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    fade: true,
    autoplay: true,
    prevArrow:
      '<span class="prev_arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
    nextArrow:
      '<span class="next_arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
    autoplaySpeed: 4000,
    cssEase: 'linear',
  });

  // =================
  $('#datepicker').datepicker();
});
