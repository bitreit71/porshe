$('.images').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
  
$(document).ready(function(){
  $(".header__burger-1").click(function(event) {
    $(".header__burger-1, .header__burger-2, .header, .header__menubar,.wrap,.content__container-2").toggleClass('active_1');
  }); 
});

$(document).ready(function(){
  $(".header__burger-2").click(function(event) {
    $(".header__burger-1, .images, .header__burger-2, .content__container-2").toggleClass('active_2');
  }); 
});

$(document).ready(function(){
  
  $(".fa-search").click(function(){
    $(".wrap, .input").toggleClass("active");
    $("input[type='text']").focus();
  });
  
});




