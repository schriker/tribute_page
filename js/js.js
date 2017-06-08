$(document).ready(function(){
  $(".menu a").on('click', function(event) { 
    if (this.hash !== "") {
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }  
  });
  $('#navbar').on('activate.bs.scrollspy', function () {
    var pos_a = ($(".active a").position().top)+5;
    $(".color-progres").css("height",pos_a);
  });
});

$(window).on("load", function(){
  var pos_a = ($(".active a").position().top)+5;
  $(".color-progres").css("height",pos_a);
});