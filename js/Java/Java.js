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
			if (e > 400) {
				$("#backtotop").show()
			} else {
				$("#backtotop").hide()
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