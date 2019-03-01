jQuery(function($){
	"use strict"
	var contentmenuu = 
	$(document).ready(function(){

		$('.item-menu').each(function(index, value){
			var itemmenu = $(value);
			var menuitem = itemmenu.find('.menu-item');
			menuitem.click(function(){
				var ulmenu = itemmenu.find('.ulmenu');
				ulmenu.slideToggle('fast');
			});
		});
		// $('.img-slide').slick({
		// 	slidesToShow: 3,
 	// 		dots: false,
 	// 		arrows: true,
		// });


		// $('#menu01').click(function(){
		// 	$('.ulmenu01').slideToggle("fast");
		// });
		// $('#menu02').click(function(){
		// 	$('.ulmenu02').slideToggle("fast");
		// });
		// $('#menu03').click(function(){
		// 	$('.ulmenu03').slideToggle("fast");
		// });
		// $('#menu04').click(function(){
		// 	$('.ulmenu04').slideToggle("fast");
		// });
		// $('#menu05').click(function(){
		// 	$('.ulmenu05').slideToggle("fast");
		// });
		// $('#menu06').click(function(){
		// 	$('.ulmenu06').slideToggle("fast");
		// });
	});
	$(window).on('load', function(){
	});
});
