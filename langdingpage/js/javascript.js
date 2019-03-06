jQuery(function($){
	"use strict"
	$(document).ready(function(){
		var menutop = $('.menu-header').height();
		var page = $('.creative').position();
		var home = $('.menu-header').position();
			$(window).scroll(function(){
				var e = $(window).scrollTop();
				if ( e > menutop){
					$('.menu-header').addClass('ps-fix');
					$('.header .menu-header .input-icon').addClass('menu-hidden');
					$('.header .menu-header button').addClass('menu-hidden');
				}
				else{
					$('.menu-header').removeClass('ps-fix');
					$('.header .menu-header .input-icon').removeClass('menu-hidden');
					$('.header .menu-header button').removeClass('menu-hidden');
				}
			});
		$("#home").click(function(){
			$('body,html').animate({
					scrollTop: home.top
				})
		})	
		$("#pages").click(function(){
			$('body,html').animate({
					scrollTop: page.top
				})
		})

		$('#all0').click(function(){
			$('.grid').isotope({ filter: '*' });
		})
		$('#home0').click(function(){
			$('.grid').isotope({ filter: '.home0' });
		})
		$('#business0').click(function(){
			$('.grid').isotope({ filter: '.business0' });
		})
		$('#marketing0').click(function(){
			$('.grid').isotope({ filter: '.marketing0' });
		})
		$('#portfolio0').click(function(){
			$('.grid').isotope({ filter: '.portfolio0' });
		})
		$('#blog0').click(function(){
			$('.grid').isotope({ filter: '.blog0' });
		})		 
	});
});