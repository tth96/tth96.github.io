jQuery(function($){
	"use strict"
	$(document).ready(function(){
		var menutop = $('.menu-header').height();
		var page = $('.creative').position();
		var home = $('.header').position();
			$(window).scroll(function(){
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
		})
		// Click-menu
		$('.click-menu-box').click(function(){
			$('.click-menu-box').toggleClass('activemenu');
		})

	    // Tạo dropdown
			var psfix = $('.menu-header');
			var clickmenu = psfix.find('.click-menu-box');
			clickmenu.click(function(){
			 var ulmenu = psfix.find('#dropdown');
			 ulmenu.slideToggle('fast');

		// Về trang cần click
		$(".header .menu-header ul li #home").click(function(){
			$('body,html').animate({
					scrollTop: home.top
				})
		});
		$("#pages").click(function(){
			$('body,html').animate({
					scrollTop: page.top
				})
		});

		$('#all0').click(function(){
			$('.grid').isotope({ filter: '*' });
		});
		$('#home0').click(function(){
			$('.grid').isotope({ filter: '.home0' });
		});
		$('#business0').click(function(){
			$('.grid').isotope({ filter: '.business0' });
		});
		$('#marketing0').click(function(){
			$('.grid').isotope({ filter: '.marketing0' });
		});
		$('#portfolio0').click(function(){
			$('.grid').isotope({ filter: '.portfolio0' });
		});
		$('#blog0').click(function(){
			$('.grid').isotope({ filter: '.blog0' });
		});


		$('#home').click(function(){
			alert("Hê hê còn chạy")
			console.log('Alert')
		})


	});
});