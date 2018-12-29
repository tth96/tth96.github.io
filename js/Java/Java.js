jQuery(function($){
	"use strict";
	var InoxAnhTrang = {};

	InoxAnhTrang.MainSilder = function(){
		$('.main-slider').slick({
			slidesToShow: 1,
			autoplay: true,
 			autoplaySpeed:4000,
 			dots: true,
 			arrows: false,


		});
	}
	InoxAnhTrang.BackToTop = function(){
    	if($("#backtotop").length > 0){
			$(window).scroll(function () {
				var e = $(window).scrollTop();
				var height = $(window).height();
				console.log(e ,"       ", height);
				if (e > height) {
					//$("#backtotop").show()
					document.querySelector("#backtotop").style.display = 'block';
				} else {
					//$("#backtotop").hide()
					document.querySelector("#backtotop").style.display = 'none';
				}
			});
			$("#backtotop").click(function () {
				$('body,html').animate({
					scrollTop: 0
				})
			})
		}		
	}
	$(document).ready(function(){
		InoxAnhTrang.MainSilder();
		InoxAnhTrang.BackToTop();

	});
	$(window).on('load', function(){
	});

});