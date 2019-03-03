jQuery(function($){
	"use strict"

	$(document).ready(function(){
		// Tạo Dropdown
		$('Class Thằng Cha').each(function(index, value){
			var ThangCha = $(value);
			var TenThangDivTitleMenu = ThangCha.find('Class TenThangDivTitleMenu');
			TenThangDivTitleMenu.click(function(){
				var ThangBiDropdown = ThangCha.find('Class ThangBiDropdown');
				ThangBiDropdown.slideToggle('fast');
			});
		});

		// Tạo Nút Back to Top
		var TaoBacktoTop = function(){
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
			});
			}		
			}
		// 
	});
});