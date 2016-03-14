(function($){
  //detect the width on page load
  $(document).ready(function(){
    var current_width = $(window).width();
    var current_height = $(window).height();
    $(".width-value").text(current_width);
    $(".height-value").text(current_height);
  });

  //update the width value when the browser is resized
  $(window).resize(function(){
    /**
     *
     * Here you could do width calculations such as
     * adding a "smallest" body class when the width
     * reaches below 400px.
     * 
     **/
    ar current_width = $(window).width();
    var current_height = $(window).height();
    $(".width-value").text(current_width);
    $(".height-value").text(current_height);
  });

})(jQuery);
