jQuery(function($){
	"use strict"
	$(document).ready(function(){	
		//Slick
		
		$('.slide').slick({
			slidesToShow: 1,
			autoplay: true,
 			autoplaySpeed:4000,
 			dots: true,
 			arrows: false,
		});
		$('.slide-box').slick({
			slidesToShow: 1,
			autoplay: true,
 			autoplaySpeed:4000,
 			dots: false,
 			arrows: false,
		});



		// Click chạy
			// $('.header .menu-header ul li').each(function(index){
			// 	var e = $(this);
			// 	$(this).click(function(){
			// 		if(e.find('#wrapper-01')){
			// 			var home = $('.header').position().top;
			// 			$('body,html').animate({
			// 				scrollTop: home
			// 			});
			// 		} else if(e.find('#wrapper-02')){
			// 			var page = $('.creative').position().top;
			// 			$('body,html').animate({
			// 				scrollTop: page
			// 			});
			// 		}
			// 	})
			// })
			
			$('#wrapper-01').click(function(){
				var home = $('.header').offset().top;
				$('body,html').animate({
					scrollTop: home
				},1000);
			});
			$('#wrapper-02').click(function(){
				var page = $('.creative').offset().top;
				$('body,html').animate({
					scrollTop: page
				},1000);
			});
			$('#wrapper-03').click(function(){
				var feature = $('.feature').offset().top;
				$('body,html').animate({
					scrollTop: feature
				},1000);
			});
			$('#wrapper-04').click(function(){
				var keyfeature = $('.key-feature').offset().top;
				$('body,html').animate({
					scrollTop: keyfeature
				},1000);
			});
			$('#wrapper-05').click(function(){
				var shortcodes = $('.shortcodes').offset().top;
				$('body,html').animate({
					scrollTop: shortcodes
				},1000);
			});
			$('#wrapper-06').click(function(){
				var footer = $('.footer').offset().top;
				$('body,html').animate({
					scrollTop: footer
				},1000);
			});


		// Thanh Menu Fixed
			$(window).scroll(function(){
				var menutop = $('.menu-header').height();
				var e = $(window).scrollTop();
				if ( e > menutop){
					$('.menu-header').addClass('ps-fix');
					$('.header .menu-header .input-icon').addClass('menu-hidden');
					$('.header .menu-header #download-theme').addClass('menu-hidden');
				}
				else{
					$('.menu-header').removeClass('ps-fix');
					$('.header .menu-header .input-icon').removeClass('menu-hidden');
					$('.header .menu-header #download-theme').removeClass('menu-hidden');
				}
			});	
			
		// Tạo nút xoay Menu 
			$('.op-menu').click(function(){
				$(this).toggleClass('clo-menu');
				$('body').toggleClass('overhd')
			})
		// dropdown menu
			$(".op-menu").click(function(){
				$("#dropdown-ul").slideToggle('fast');
			})
		// isotope
			
			$('.creative .crea-menu ul li').each(function(index,value){
				var isovalue = $(this);
				var isocp = $(this).find('#home0');
				var isobusiness = $(this).find('#business0');
				var isomarketing = $(this).find('#marketing0');
				var isoblog = $(this).find('#blog0');
				var isoportfolio = $(this).find('#portfolio0');
				var isoall = $(this).find('#all0')
				isoall.click(function(){
					$('.grid').isotope({ filter: '*' });
				})
				isocp.click(function(){
					$('.grid').isotope({ filter: '.coporateiso' });
				})
				isobusiness.click(function(){
					$('.grid').isotope({ filter: '.businessiso' });
				})
				isomarketing.click(function(){
					$('.grid').isotope({ filter: '.marketingiso' });
				})
				isoblog.click(function(){
					$('.grid').isotope({ filter: '.blogiso' });
				})
				isoportfolio.click(function(){
					$('.grid').isotope({ filter: '.portfolioiso' });
				}) 

			})
				// isocoporate.click(function(){
				// 	$('.grid').isotope({ filter: '.coporateiso' });
				// })
				// isobusiness.click(function(){
				// 	$('.grid').isotope({ filter: '.businessiso' });
				// })
				

		
	})
});