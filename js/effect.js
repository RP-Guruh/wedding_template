$(document).ready(function(){

  $('.rotating').css('animation-play-state', 'paused');
  var btnMusic = document.getElementById("playPauseMusic");
  btnMusic.setAttribute("data-active", 1);
  var sound = new Howl({
  	src: ['./audio/song.mp3'],
  	volume: 1,
      loop:true
  });



  $("#playPauseMusic").click(function() {
    if (btnMusic.getAttribute("data-active") == 1) {
      $('.rotating').css('animation-play-state', 'paused');
        sound.pause();
        btnMusic.setAttribute("data-active", 0);
    } else {
      $('.rotating').css('animation-play-state', 'running');
        sound.play();
        btnMusic.setAttribute("data-active", 1);
    }
});


  $("#flipGift").click(function(){
    $(".panelGift1").slideToggle("1000");
    $(".panelGift2").slideToggle("1000");
  });

  $("#bukaUndangan").click(function(){
    $(".section-landing").slideDown("2000");
    $(".bg_list_pengantin").slideDown("2000");
    $(".bg-card").slideDown("2000");
    $("#bukaUndangan").css("color", "white");
    $('.rotating').css('animation-play-state', 'running');
    sound.play();
  });


  $("#paste1").click(function() {
    var temp = $("<input>");
    $("body").append(temp);
    temp.val($('.norek1').text()).select();
    document.execCommand("copy");
    temp.remove();
    $("#paste1").text("Tersalin").css("color", "white");
  });

  $("#paste2").click(function() {
    var temp = $("<input>");
    $("body").append(temp);
    temp.val($('.norek2').text()).select();
    document.execCommand("copy");
    temp.remove();
    $("#paste2").text("Tersalin").css("color", "white");
  });

  $('.pilihKehadiran').change(function() {
    if ($(this).val() == 'Hadir') {
      $(".jumlahTamu").slideDown("2000");
    }    
    else {
      $(".jumlahTamu").slideUp("2000");
    }     
});
});