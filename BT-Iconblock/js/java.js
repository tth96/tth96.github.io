jQuery(function($){
	"use strict";
	$(document).ready(function(){
		$('.iconblock').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
			slidesToShow: 2,
	       	slidesToScroll: 1,
			}
		},
		{
			breakpoint: 600,
			settings: {
			slidesToShow: 1,
       		slidesToScroll: 1,
       		arrows: false
			}
		},
		{
			breakpoint: 480,
			settings: {
			slidesToShow: 1,
       		slidesToScroll: 1,
       		arrows: false
			}
		}
		]

		});

	});
	$(window).on('load', function(){
	});
});