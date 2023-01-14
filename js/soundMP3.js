$(document).ready(function(){
    var howler_example = new Howl({
		src: ['./audio/song.mp3'],
		volume: 0.5
	});
    howler_example.play();
});