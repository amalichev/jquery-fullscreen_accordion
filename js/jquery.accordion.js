jQuery.fn.accordion = function() {
  var object = this;

  function widthSlide(slide) {
    var countItem        = slide.find('li').length,
        widthItemTitle   = slide.find('a').outerWidth(),
        widthWindow      = jQuery(window).width(),
        widthItemContent = Math.ceil(widthWindow - countItem * widthItemTitle);

    slide.find('section').width(0);

    slide.find('.active section').width(widthItemContent);
  }
  jQuery(window).resize(function() {
    widthSlide(object);
  });
  widthSlide(object);

  object.find('a').click(function(event) {
    object.find('li').removeClass('active');

    jQuery(this).parent().addClass('active');

    widthSlide(object);

    event.preventDefault();
  });
}
