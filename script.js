// ------------------------------
// HEADER SIZE EQUALS WINDOW SIZE
// ------------------------------
$(document).ready(function(){
  $( window ).resize(function() {
    $('#header').height($(window).height());
  });
});
                  
// -----------                  
// MENU TOGGLE
// -----------
$(document).ready(function(){
 $('#myNavbar .menuBtn').on('click', function(e){
   e.preventDefault();
   $('#myNavbar ul').toggleClass('menuToggle');
  }); 
  $('#myNavbar ul li a').on('click', function(e){
   e.preventDefault();
   $('#myNavbar ul').toggleClass('menuToggle');
  });                  
});

// -------------
// SMOOTH SCROLL 
// -------------
$(document).ready(function($){
  var sections = [];
  var id = false;
  var $navbar = $('#myNavbar ul li a');
  
  $navbar.click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top},1000);
    hash($(this).attr('href'));
  });    

// ----------
// SCROLL SPY
// ----------
  $navbar.each(function(){
    $('#myNavbar ul li:first-child a~hr').addClass('current');
    sections.push($($(this).attr('href')));
  });
  $(window).scroll(function(e){
    var scrollTop = $(this).scrollTop() + ($(window).height()/2);
    for (var i in sections){
      var section = sections[i];
      if (scrollTop > section.offset().top){
        var scrolled_id = section.attr('id');
      }
      
    }
    if (scrolled_id !== id) {
      id = scrolled_id;
      $('#myNavbar ul li a~hr').removeClass('current');
      $('#myNavbar ul li a[href="#' + id + '"]~hr').addClass('current');
    }
  });
});

hash = function(h){
  if (history.pushState){
    history.pushState(null, null, h);
  }else{
    location.hash = h;
  }
}



$(document).ready(function(){
  $('a.gallery').featherlightGallery({
    gallery: {
        previous: '«',
        next: '»',
        fadeIn: 300
    },
    openSpeed: 300
  });
});
