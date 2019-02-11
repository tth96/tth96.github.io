jQuery(function ($) {
	"use strict";
	$(document).ready(function () {

		$('.grid-item').directionalHover({
			 overlay: "dh-overlay",
			 easing: "swing",
			 speed: 400

			});



		$('.comp-slider').slick({
			infinite: true,
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
		// $('.grid').isotope({
 	// 		itemSelector: '.grid-item',
 	// 		masonry:{
  //     		columnWidth: 100
 	// 		}
		// });
		$('[data-fancybox="gallery"]').fancybox({
			animationEffect: "zoom-in-out",
		});

		// $('.tab-a').mouseover(function(){
		// 	$('.tab-a').addClass("hover-a");
		// 	$('.tab-a').add("div","active-img");
		// })

	});
	var checkSlideResponsive = false; //Chua gan slick
	function runSlideResponsive() {
		var width = parseInt($('.slider-responsive').attr('data-width')),
			widthWindow = $(window).width();
		/*
		 Cannot read property 'add' of null. Slick khong cho phep khoi tao nhieu lan cho cung 1 phan tu.
		 Bo Slick trong if
		 Khi thay doi kich thuoc man hinh, function nay se duoc chay
		 Thay doi nhieu lan -> Chay nhieu lan -> Khoi tao slick nhieu lan cho mot phan tu -> Loi
		*/
		if (widthWindow <= width) {
			if(checkSlideResponsive === true) return;
			checkSlideResponsive = true; //Da gan mot lan roi
			$('.slider-responsive').slick({
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				responsive: [
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							arrows: false
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							arrows: false
						}
					}
				]
			})
		// } else {
		// 	$('.slider-responsive').slick('unslick');

		}
	}
	$(window).on('load', function(){
	//so sanh is not defined , undefined?
		runSlideResponsive();
	});
	
	$(window).on('resize', function () {

		runSlideResponsive();
		//console.log(document.getElementsByClassName("slider-responsive")[0].getAttribute("data-width"));


	});
});
//tranform-origin -> Tâm xoay //