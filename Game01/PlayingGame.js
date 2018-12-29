// var diem , diemkhichoi , playerdangchoi , gameplaying;
// document.querySelector(".btn-roll").addEventListener('click', function(){
	
// 		var dice01 = Math.floor(Math.random()*6) + 1;
// 		var dice02 = Math.floor(Math.random()*6) + 1;
// 		document.getElementById('dice-1').style.display = "block";
// 		document.getElementById('dice-2').style.display = "block";
// 		document.getElementById('dice-1').src = 'dice-' + dice01 + '.png';
// 		document.getElementById('dice-2').src = 'dice-' + dice02 + '.png';
// 		diemkhichoi = dice01 + dice02;
// 		document.querySelector('#current-0').textContent = diemkhichoi; 
		
	
// })
jQuery(function($){
	"use strict";
	var GameHTML = {};
	var roundscore,score;
	var winner;
	var checkplayer;
	GameHTML.NewGame = function(){
		$(".btn-new").click(function(){
			$("#dice-1").css("display","none");
			$("#dice-2").css("display","none");
			$(".player-current-score").text(0);
			$(".player-score").text(0);
			$(".player-0-panel").addClass("active");
			$(".player-1-panel").removeClass("active");
			$(".player-"+ checkplayer +"-panel").removeClass("winner");
			$("#name-0").text("PLAYER 1");
			$("#name-1").text("PLAYER 2");
			// $("#name-"+ checkplayer).css("padding-bottom","0px");
			$(".player-score").css("display","block");
			GameHTML.RollDice();
			GameHTML.Hold();

		});
	}
	GameHTML.RollDice = function(){
		$(".btn-roll").click(function(){
			var dice01 = Math.floor(Math.random()*6) + 1;
			var dice02 = Math.floor(Math.random()*6) + 1;
			$("#dice-1").css("display","block");
			$("#dice-2").css("display","block");
			$('#dice-1').attr('src', 'dice-' + dice01 + '.png');
			$('#dice-2').attr('src', 'dice-' + dice02 + '.png');
				roundscore = roundscore +(dice01 + dice02);
			if(dice01 !== 1 && dice02 !== 1){
				$("#current-" + checkplayer).text(roundscore);
			} else {
				GameHTML.nguoichoiketiep();
			}
		})
	}
	GameHTML.nguoichoiketiep = function(){
			if (checkplayer == 0){
				checkplayer = 1;
			} else{
				checkplayer = 0;
			}
			roundscore = 0;
			$("#current-0").text(roundscore);
			$("#current-1").text(roundscore);
			$(".player-0-panel").toggleClass("active");
			$(".player-1-panel").toggleClass("active");


		}
	// GameHTML.nguoichoiketiep = function(){
	// 	$(".player-0-panel").toggleClass("active");
	// 	$(".player-1-panel").toggleClass("active");
	// 	var so0orso1 = 0;
	// 	if(so0orso1 == 0){
	// 		so0orso1 = 1;
	// 	} else {
		// so0orso1 = 0;
	// }
	// }

	GameHTML.Hold = function(){
		$(".btn-hold").click(function(){
			if(checkplayer == 0){
				score[0] = score[0] + roundscore;
				$("#score-" + checkplayer).text(score[0]);
			} else {
				score[1] = score[1] + roundscore;
				$("#score-" + checkplayer).text(score[1]);
			}
			// score[$("#score-" + checkplayer).val()] = score[$("#score-" + checkplayer).val()] + roundscore;
			// score['checkplayer'] = score['checkplayer'] + roundscore;
			// score[$("#score-" + checkplayer)] = roundscore + score[$("#score-" + checkplayer)];
			var giatrinhanvao = $("input").val();
			if(giatrinhanvao){
				winner = giatrinhanvao;
			} else{
			winner = 100;
		}
		if(score >= winner){
			$(".player-"+ checkplayer +"-panel").addClass("winner");
			$(".player-"+ checkplayer +"-panel").removeClass("active");
			$("#dice-1").css("display","none");
			$("#dice-2").css("display","none");
			// $(".player-score").css("display","none");
			$("#name-"+ checkplayer).text("WINNER!");
			// $("#name-"+ checkplayer).css("padding-bottom","50px");
			$(".btn-roll").unbind('click');
			$(".btn-hold").unbind('click');
			
			} else {
			GameHTML.nguoichoiketiep();
		}
		});
	}
	GameHTML.Default = function(){
			$("#dice-1").css("display","none");
			$("#dice-2").css("display","none");
			$(".player-score").text('0');
			$(".player-current-score").text('0');
			$(".player-0-panel").addClass("active");
			$(".player-1-panel").removeClass("active");
			$(".player-0-panel").removeClass("winner");
			$(".player-1-panel").removeClass("winner");
			roundscore = 0;
			score = {0:0, 1:0};
			console.log(score);
	}
	// GameHTML.AfterWinner = function(){
	// 	if($(".player-"+ checkplayer +"-panel").addClass("winner")){
	// 		return GameHTML.RollDice() = false;
	// 		return GameHTML.Hold() = false;
	// 	}
	// }
	// GameHTML.Xulyclickwinner = function(){
	// 	if (score >= winner){
	// 	GameHTML.RollDice() = false;
	// 	}
	// }
	$(document).ready(function(){
		GameHTML.RollDice();
		GameHTML.Hold();
		GameHTML.nguoichoiketiep();
		// GameHTML.AfterWinner();
		GameHTML.NewGame();
		GameHTML.Default();
		// GameHTML.Xulyclickwinner();

	
	});
	$(window).on('load',function(){
	});
});