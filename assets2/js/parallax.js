$('.parallax-image').tilt({
  perspective: 500,
  scale: 1
});


//Reveal Hidden Elements Initial

$('.revealEm').each(function(i) {
  var top_of_object = $(this).offset().top;
  var bottom_of_window = $(window).scrollTop() + $(window).height();
  if (bottom_of_window > top_of_object) {
    $(this).addClass("reveal");
  }
});


//Reveal Hidden Elements on Scroll

$(window).scroll(function() {
  $('.revealEm').each(function(i) {
    var top_of_object = $(this).offset().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > top_of_object) {
      $(this).addClass("reveal");
    }
  });
});