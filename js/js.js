$(document).ready(function(){
  // Add smooth scrolling on all links inside the navbar
  $(".menu a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }  // End if
   
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