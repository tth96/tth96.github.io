jQuery(function($){
	"use strict";
		// var Menuopen = function Openmenu(){
		// $('.wrapper-menu-responsive').css("transform","translateX(0%)");
  // 		$('.click-menu-rs').css("left","60%");
  //  		$('.click-menu-rs').css("top","0");	
  //  		$(".icon-custom1").addClass('icon-custom1s');
  //  		$(".icon-custom2").addClass('icon-custom2s');
  //  		$(".icon-custom3").addClass('icon-custom3s');
  // 	};
  // 	var Menuclose = function Closemenu(){
  // 		$('.wrapper-menu-responsive').css("transform","translateX(-100%)");
  //   	$('.click-menu-rs').css("left","0%");
  //   	$('.click-menu-rs').css("top","50%");
  //   	$(".icon-custom1").removeClass('icon-custom1s');
	 //   	$(".icon-custom2").removeClass('icon-custom2s');
	 //   	$(".icon-custom3").removeClass('icon-custom3s');
  // 	};
	$(document).ready(function(){
		$('.slide').slick({
			slidesToShow: 1,
			autoplay: true,
 			autoplaySpeed:4000,
 			dots: true,
 			arrows: true,
 				responsive: [
 				 {
			      breakpoint: 768,
			      settings: {
			        arrows: false,
              dots: false,
			      }
			    },
           {
            breakpoint: 600,
            settings: {
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
            }
          }
			    ]
		});

    $('.silder-servies').slick({
       slidesToShow: 3,
       autoplaySpeed:4000,
       arrows: true,
       responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          }
        ]


    });

		$('.brand-silde').slick({
			slidesToShow: 6,
			autoplay: true,
 			autoplaySpeed:4000,
 			arrows: true,
 				responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1,
			        infinite: true,
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			        arrows: false,
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});
		$('#showmenu-1').click(function(){
            $('#menu-js-1').slideToggle("fast");
        });
        $('#showmenu-2').click(function(){
            $('#menu-js-2').slideToggle("fast");
        });
        $('#showmenu-3').click(function(){
            $('#menu-js-3').slideToggle("fast");
        });
		// $('.custom-icon-1').on('click',function(){
		// 	$(this).toggleClass("rotate-button");
		// 	return;	
		// })
     	$('.chat-online').click(function(){
     		alert('Chưa có bảng chat');
     	})

       //   $('.title-menu').click(function(){
		     // $('.menu-responsive').addClass(".dp-block");

       //   });
    //    	$("#toggle-menu-rs").focus(function(){
  		//
  		// })

   //      $("#toggle-menu-rs").focusin(function(){
   // 			$('.wrapper-menu-responsive').css("transform","translateX(0%)");
   // 			$('.click-menu-rs').css("left","60%");
   // 			$('.click-menu-rs').css("top","0");	
   // 			$('.icon-custom1').css({"top":"50%","left":"15%","transform":"rotate(45deg)"});	
   // 			$('.icon-custom2').css({"display":"none","left":"15%"});	
   // 			$('.icon-custom3').css({"top":"40%","left":"15%","transform":"rotate(-45deg)"});
   // 			// $('body').css({"background-color":"rgba(152,154,141,0.5)","z-index":"15","width":"100%","height":"100%"});
 		// });
 		$('#toggle-menu-rs').toggleClass('trs-click-menu');
  		$('#toggle-menu-rs').on('click',function(){
  			$('.wrapper-menu-responsive').toggleClass('hidden');
  			$('#toggle-menu-rs').hide();
  		// 	$('.icon-custom1').toggleClass('trs-icon1');
 			// $('.icon-custom2').toggleClass('trs-icon2');
 			// $('.icon-custom3').toggleClass('trs-icon3');
 			$('body').css('overflow','hidden');
      $('body').addClass('open-menu');
 

  		})
  		$('#click-close-menu').on('click',function(){
  			$('.wrapper-menu-responsive').toggleClass('hidden');
  			$('#toggle-menu-rs').show("slow");
  			$('body').css('overflow','auto');
        $('body').removeClass('open-menu');

  		})


  			
    		// $('.wrapper-menu-responsive').css("transform","translateX(-100%)");
    		// $('.click-menu-rs').css("left","0%");
    		// $('.click-menu-rs').css("top","50%");

    		// $('.icon-custom1').css({"top":"30%","transform":"rotate(0)"});	
   			// $('.icon-custom2').css({"top":"40%","transform":"rotate(0)","display":"block"});	
   			// $('.icon-custom3').css({"top":"60%","transform":"rotate(0)"});
  	// 	 $("#toggle-menu-rs").focusout(function(){
  	// 	 	$('.wrapper-menu-responsive').css("transform","translateX(-100%)");
  	// 	 	$('.click-menu-rs').css("left","0%");
   //  		$('.click-menu-rs').css("top","50%");
   //  		$('.icon-custom1').css({"top":"30%","transform":"rotate(0)"});	
   // 			$('.icon-custom2').css({"top":"40%","transform":"rotate(0)","display":"block"});	
   // 			$('.icon-custom3').css({"top":"60%","transform":"rotate(0)"});	
  	// 	 })
  		// $("#toggle-menu-rs").on('click',function(){
  		// 	if(function(focusin)){
	  	// 		$('.wrapper-menu-responsive').css("transform","translateX(-100%)");
	   //  		$('.click-menu-rs').css("left","0%");
	   //  		$('.click-menu-rs').css("top","50%");
  		// 	}
  		// })


	});
	$(window).on('load', function(){
	});
});