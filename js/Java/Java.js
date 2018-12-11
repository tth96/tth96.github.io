jQuery(function($){
	"use strict";
	var InoxAnhTrang = window.InoxAnhTrang || {};

	InoxAnhTrang.MainSilder = function(){
		$('.main-slider').slick({
			slidesToShow: 1,
			// autoplay: true,
 			autoplaySpeed: 5000,
 			dots: true,
 			arrows: false,
 			

		});
	}
	$(document).ready(function(){
		InoxAnhTrang.MainSilder();

	});
	$(window).on('load', function(){
	});

});