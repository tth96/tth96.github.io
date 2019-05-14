jQuery(function($){
	"use strict"
// 	// $(document).ready(function(){
// 	// 	$('#nhap').click(function(){
// 	// 		// var songaunhien = document.querySelectorAll(".randomso");
// 	// 		$(".randomso").each(function(index,value){
// 	// 			var mang = $("#so" + index).val(Math.floor((Math.random()*61)-30));
			
// 	// 			console.log(typeof mang.val(parseInt()));
// 	// 			$('#nhapx').click(function(){
// 	// 				var X = $("#x").val(Math.floor((Math.random()*61)-30));
// 	// 			})
// 	// 		});
// 	// 		// $(Mangso).val();
// 	// 		// console.log($(Mangso[2]).val());
// 	// 		// for(var i = 0 ; i < Mangso.lenght; i++){
// 	// 		// 	console.log(Mangso[i]);
// 	// 		// }
// 	// 	})
// 	// })
// })
// var Mang = [10,-10,30,21,11,-21,-14,-5,40];
	$(document).ready(function(){
		$('#nhap').click(function(){
			var Mang = [];
			for(var i = 0 ; i < 10; i++){
				Mang[i] = Math.floor((Math.random()*81)-40);
			}
			$(".randomso").each(function(index,value){
				$("#so" + index).val(Mang[index]);
			
				$('#nhapx').click(function(){
					var x = $("#x").val(Math.floor((Math.random()*61)-30));
					var X = parseInt(x.val());
					var max = Mang[0]
					var min = Mang[0]
				for (var i = 1 ; i <= Mang.length; i++){
						if(max < Mang[i]){
							max = Mang[i];
						}
						if(min > Mang[i]){
							min = Mang[i];
						}
					}
					if(X>=0){
						var giatrimax = max - X;
						var	giatrimin = (min - X)*(-1);
						if(giatrimax>giatrimin){
							$("#giatrixaX").val(giatrimax)
							$(".max").val(max)
						} else{
							$("#giatrixaX").val(giatrimax)
							$(".min").val(min)
						}
					} else {
						giatrimax = max + (X*(-1));
						giatrimin = (min + X)*(-1);
						if(giatrimax>giatrimin){
							$("#giatrixaX").val(giatrimax)
							$(".max").val(max)
						} else{
							$("#giatrixaX").val(giatrimax)
							$(".min").val(min)
						}
					}
				})
			})	  		
			});			
	});
});
// var x = prompt('');
// var X = parseInt(x);
// // var max = Math.max.apply(Math, Mang);
// // var min = Math.min.apply(Math, Mang);
// // console.log(max,min);
// var max = Mang[0];
// var min = Mang[0];
// // console.log(max);
// for (var i = 1 ; i <= Mang.length; i++){
//   	if(max < Mang[i]){
// 		   max = Mang[i];
// 	   }
// 	if(min > Mang[i]){
// 		min = Mang[i];
// 	}
// }
// if(X>=0){
// 	var giatrimax = max - X;
// 	var	giatrimin = (min - X)*(-1);
// 	if(giatrimax>giatrimin){
// 		alert("Gia Tri Xa X nhat là: "+ giatrimax + " Thuộc: "+ max)
// 	} else{
// 		alert("Gia Tri Xa X nhat là: " + giatrimin + " Thuộc: " + min)
// 	}
// } else {
// 	giatrimax = max + (X*(-1));
// 	giatrixanhat = (min + X)*(-1);
// 	if(giatrimax>giatrimin){
// 		alert("Gia Tri Xa X nhat là: " + giatrimax + " Thuộc: " + max)
// 	} else{
// 		alert("Gia Tri Xa X nhat là: " + giatrimin + " Thuộc: " + min)
// 	}
// }
