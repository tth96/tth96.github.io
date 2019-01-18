jQuery(function($){
	"use strict";

$(document).ready(function(){
	$('#button1').on('click',function(){
		$('.grid').isotope({
	   filter: '.metal'
		});
	})
	$('#button2').on('click',function(){
		$('.grid').isotope({
	   filter: '.post-transition'
		});
	})
	$('#button3').on('click',function(){
		$('.grid').isotope({
	   filter: '.lanthanoid'
		});
	})
	$('#button4').on('click',function(){
		$('.grid').isotope({
	   filter: '.halogen'
		});
	})
});
$(window).on('load', function(){
	});

});
// <div class="view-more">
// 				<button type="button" id="button1" class="col-3 col-sm-3 col-md-2 col-lg-1">
// 					Change 1
// 				</button>
// 			</div>
// 			<div class="view-more">
// 				<button type="button" id="button2" class="col-3 col-sm-3 col-md-2 col-lg-1">
// 					Change 2
// 				</button>
// 			</div>
// 			<div class="view-more">
// 				<button type="button" id="button3" class="col-3 col-sm-3 col-md-2 col-lg-1">
// 					Change 3
// 				</button>
// 			</div>
// 			<div class="view-more">
// 				<button type="button" id="button4" class="col-3 col-sm-3 col-md-2 col-lg-1">
// 					Change 4
// 				</button>
// 			</div>