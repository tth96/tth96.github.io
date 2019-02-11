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
			// autoplay: true,
 			autoplaySpeed:4000,
 			dots: true,
 			arrows: true,
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
  			$('#toggle-menu-rs').toggleClass('trs-click-menu');
  			$('.icon-custom1').toggleClass('trs-icon1');
 			$('.icon-custom2').toggleClass('trs-icon2');
 			$('.icon-custom3').toggleClass('trs-icon3');
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