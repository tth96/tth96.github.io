

var MediaAudio = document.querySelectorAll('audio');
// var MediaVideo = document.querySelectorAll('video');
// console.log("MediaVideo")

	// for (var i = 0, totals = MediaVideo.length; i < totals; i++){
	// 	 new MediaElementPlayer(
	//  		MediaVideo[i], 
	//  	{
 //            features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen', 'airplay'],
 //        }
 //        );
	// }	
	 // new MediaElementPlayer('player1', {
  //           features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen', 'airplay'],
  //       });
	
	for (var i = 0, total = MediaAudio.length; i < total; i++) {
		new MediaElementPlayer(
			MediaAudio[i], 
			{
				//features: ['playpause', 'prevtrack' ,'nexttrack', 'current', 'progress', 'duration', 'volume', 'playlist', 'shuffle', 'loop', 'fullscreen'],
				features: ['playpause', 'current', 'progress', 'duration', 'loop' ,'volume' ],
			}
		);
	}

// var MediaVideo = document.querySelectorAll('iframe')
// function Playvideo (){
// 	MediaVideo.play();
// }
jQuery(function($){
	$(document).ready(function(){
		$('.mejs__container').addClass('customAudio');
		$('.mejs__controls').addClass('customControls');
		$('.mejs__time-rail').addClass('custom-time-rail');
		$('.mejs__button.mejs__volume-button.mejs__mute').mouseover(function(){
			$('.mejs__horizontal-volume-slider').css("opacity","1");
			$('.mejs__horizontal-volume-slider').css("pointer-events","auto");
		})
		$('.mejs__horizontal-volume-slider').mouseover(function(){
			$('.mejs__horizontal-volume-slider').css("opacity","1");
			$('.mejs__horizontal-volume-slider').css("pointer-events","auto");
		})
		$('.mejs__button.mejs__volume-button.mejs__mute').mouseout(function(){
			$('.mejs__horizontal-volume-slider').css("opacity","0");
			$('.mejs__horizontal-volume-slider').css("pointer-events","none");
		})
		$('.mejs__horizontal-volume-slider').mouseout(function(){
			$('.mejs__horizontal-volume-slider').css("opacity","0");
			$('.mejs__horizontal-volume-slider').css("pointer-events","none");
		})
		$('.customvideo01').click(function(){
			// $('.videocustom').play();
			$('#video01').css("display","none");
			$('#video02').css("display","none");
			$('.customvideo01').css("display","none");
			// video.
			var iframeSrc = $('#playvideo').attr('src');
			console.log(iframeSrc);
			$('#playvideo').attr('src', $('#playvideo').attr('src') + '?autoplay=1');
		})

	})
})