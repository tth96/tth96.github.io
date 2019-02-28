jQuery(function($){
	"use strict"

	$(document).ready(function(){
		$('Class Thằng Cha').each(function(index, value){
			var ThangCha = $(value);
			var TenThangDivTitleMenu = ThangCha.find('Class TenThangDivTitleMenu');
			TenThangDivTitleMenu.click(function(){
				var ThangBiDropdown = ThangCha.find('Class ThangBiDropdown');
				ThangBiDropdown.slideToggle('fast');
			});
		});
	});
});