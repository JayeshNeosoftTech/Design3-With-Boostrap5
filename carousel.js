$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots:false,
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed:1500,
        autoplayHoverPause:true,
        addClassActive:true,
        responsive:{
          0:{
            items:1,nav: true,
          },
          600:{
            items:2,nav: true,
          },
          1000:{
            items:3,nav: true,
          }
        },
      });
      $( ".owl-prev").html('<img src="Icon feather-arrow-left-circle.png" alt="left" style="height:50px;width:50px;">');
      $( ".owl-next").html('<img src="Icon feather-arrow-right-circle.png" alt="right" style="height:50px;width:50px;">');
});