
$('.bannerHeader').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:1500,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        }

    }
})



$('.imgAbout').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:1500,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        }

    }
})


$('.secImg').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:1500,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },

    }
})


$(document).ready(function(){
    $(".openMenu").click(function(){
      $(".myNav").addClass("active");
    });
    $(".hideMe").click(function(){
        $(".myNav").removeClass("active");
      });

    
  });
