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
jQuery(function ($) {
	"use strict";
	var GameHTML = {};
	var roundscore, score;
	var winner;
	var checkplayer;
	swal("Luật chơi!", "Xoay xuc sac. Nguoi choi mac dinh la nguoi choi dau tien", "info");
	GameHTML.NewGame = function () {
		$(".btn-new").click(function () {
			//debugger;
			GameHTML.Default();
			$(".player-score").css("display", "block");
		});
	}
	GameHTML.Default = function () {
		//debugger;
		$("#dice-1").css("display", "none");
		$("#dice-2").css("display", "none");
		$(".player-score").text('0');
		$(".player-current-score").text('0');
		$(".player-0-panel").addClass("active");
		$(".player-1-panel").removeClass("active");
		$(".player-0-panel").removeClass("winner");
		$(".player-1-panel").removeClass("winner");
		$("#name-0").text("PLAYER 1");
		$("#name-1").text("PLAYER 2");
		winner = null;
		checkplayer = 0;
		roundscore = 0;
		score = [0, 0]
	}
	GameHTML.RollDice = function () {
		$(".btn-roll").click(function () {
			//debugger;
			if(winner !== null) return;
			//if(winner) return;
			var dice01 = Math.floor(Math.random() * 6) + 1;
			var dice02 = Math.floor(Math.random() * 6) + 1;
			$("#dice-1").css("display", "block");
			$("#dice-2").css("display", "block");
			$('#dice-1').attr('src', 'dice-' + dice01 + '.png');
			$('#dice-2').attr('src', 'dice-' + dice02 + '.png');
			roundscore = roundscore + (dice01 + dice02);
			if (dice01 !== 1 && dice02 !== 1) {
				$("#current-" + checkplayer).text(roundscore);
			} else {
				swal("Tieu de!", `Nguoi choi so ${checkplayer + 1} xoay phai xuc sac so 1. Doi luot choi`, "info");
				GameHTML.nguoichoiketiep();
			}
		})
	}
	GameHTML.nguoichoiketiep = function () {
		//debugger;
		// if (checkplayer == 0) {
		// 	checkplayer = 1;
		// } else {
		// 	checkplayer = 0;
		// }
		checkplayer === 1 ? checkplayer = 0 : checkplayer = 1;
		roundscore = 0;
		$("#current-0").text(0);
		$("#current-1").text(0);
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

	GameHTML.Hold = function () {
		$(".btn-hold").click(function () {
			//debugger;
			if(winner !== null) return;

			score[checkplayer] = score[checkplayer] + roundscore;
			$("#score-" + checkplayer).text(score[checkplayer]);

			// score[$("#score-" + checkplayer).val()] = score[$("#score-" + checkplayer).val()] + roundscore;
			// score['checkplayer'] = score['checkplayer'] + roundscore;
			// score[$("#score-" + checkplayer)] = roundscore + score[$("#score-" + checkplayer)];
			var giatrinhanvao = $("input").val();
			// if (giatrinhanvao) {
			// 	giatrinhanvao = parseInt(giatrinhanvao);
			// } else {
			// 	giatrinhanvao = 100;
			// }
			giatrinhanvao =  giatrinhanvao ? parseInt(giatrinhanvao) : 100;

			if (score[checkplayer] >= giatrinhanvao) {
				winner = checkplayer;
				$(".player-" + checkplayer + "-panel").addClass("winner");
				$(".player-" + checkplayer + "-panel").removeClass("active");
				$("[id='dice-']").css("display", "none");
				// $(".player-score").css("display","none");
				$("#name-" + checkplayer).text("WINNER!");

				// $("#name-"+ checkplayer).css("padding-bottom","50px");
			} else {
				GameHTML.nguoichoiketiep();
			}
		});
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
	$(document).ready(function () {
		GameHTML.RollDice();
		GameHTML.Hold();
		//GameHTML.nguoichoiketiep();
		// GameHTML.AfterWinner();
		GameHTML.NewGame();
		GameHTML.Default();
		// GameHTML.Xulyclickwinner();


	});
	$(window).on('load', function () {
	});
});