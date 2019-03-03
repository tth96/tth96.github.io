function(){
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
			})
		}		
	}