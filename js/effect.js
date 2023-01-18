$(document).ready(function(){
  $(window).scroll(function () {
  var myPosition = $(document).scrollTop();
  console.log(myPosition);

  if (myPosition > 1051 && myPosition < 1200) {
    $("#animasi_satu").addClass("animate__animated animate__fadeInUp");
  }
  if (myPosition > 1681 && myPosition < 1720) {
    $("#animasi_dua").addClass("animate__animated animate__fadeInUp");
    $("#animasi_tiga").addClass("animate__animated animate__fadeInUp");
  }
  if (myPosition > 2295 && myPosition < 2382) {
    $("#animasi_empat").addClass("animate__animated animate__fadeInUp");
    $("#animasi_lima").addClass("animate__animated animate__fadeInUp");
  }
  if (myPosition > 2784 && myPosition < 3006) {
   
    $("#animasi_tujuh").addClass("animate__animated animate__fadeInRight");
  
  }
  if (myPosition > 3403 && myPosition < 4048) {
    $("#animasi_sembilan").addClass("animate__animated animate__fadeInUp");
  }
  if (myPosition > 4200) {
    $("#animasi_sepuluh").addClass("animate__animated animate__fadeInDown");
    $("#animasi_sebelas").addClass("animate__animated animate__fadeInUp");
    $("#animasi_duabelas").addClass("animate__animated animate__fadeInLeft");
  }
  if (myPosition > 5952 && myPosition < 6135) {
    $("#animasi_tigabelas").addClass("animate__animated animate__fadeInDown");
    $("#animasi_empatbelas").addClass("animate__animated animate__fadeInUp");
    $("#animasi_limabelas").addClass("animate__animated animate__fadeInUp");
  }
  if (myPosition > 6450) {
    $("#animasi_enambelas").addClass("animate__animated animate__fadeInDown");
    $("#animasi_tujuhbelas").addClass("animate__animated animate__fadeInUp");
  }
  if (myPosition > 6897 && myPosition < 7137) {
    $("#animasi_sembilanbelas").addClass(
      "animate__animated animate__fadeInUp"
    );
    $("#animasi_duapuluh").addClass("animate__animated animate__fadeInUp");
  }
  if (myPosition > 6897 && myPosition < 7137) {
    $("#animasi_sembilanbelas").addClass(
      "animate__animated animate__fadeInUp"
    );
    $("#animasi_duapuluh").addClass("animate__animated animate__fadeInUp");
  }
  if (myPosition > 7413 && myPosition < 7660) {
    $("#animasi_duapuluhdua").addClass("animate__animated animate__fadeInUp");
    $("#animasi_duapuluhtiga").addClass(
      "animate__animated animate__fadeInUp"
    );
    $("#animasi_duapuluhempat").addClass(
      "animate__animated animate__fadeInUp"
    );
  }
  if (myPosition > 4604 && myPosition < 4800) {
    $("#animasi_duapuluhdelapan").addClass(
      "animate__animated animate__zoomIn"
    );
  }
  if (myPosition > 4832 && myPosition < 4900) {
    $("#animasi_duapuluhsembilan").addClass(
      "animate__animated animate__zoomIn"
    );
  }
  if (myPosition > 4811 && myPosition < 4936) {
    $("#animasi_tigapuluh").addClass("animate__animated animate__zoomIn");
  }
  if (myPosition > 4955 && myPosition < 5134) {
    $("#animasi_tigapuluhsatu").addClass("animate__animated animate__zoomIn");
  }
  if (myPosition > 5145 && myPosition < 5341) {
    $("#animasi_tigapuluhdua").addClass("animate__animated animate__zoomIn");
  }
  if (myPosition > 5353 && myPosition < 5544) {
    $("#animasi_tigapuluhtiga").addClass("animate__animated animate__zoomIn");
  }
  if (myPosition > 5557 && myPosition < 5782) {
    $("#animasi_tigapuluhempat").addClass(
      "animate__animated animate__zoomIn"
    );
  }
});

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
  $(".section-landing").show();
  $(".bg_list_pengantin").show();
  $(".bg-card").show();
  $("#bukaUndangan").hide();
  $('.rotating').css('animation-play-state', 'running');
  $('html, body').animate({
      scrollTop: $(".section-landing").offset().top
  }, 2000);
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

$('.pop').click(function() {
$('.imagepreview').attr('src', $(this).find('img').attr('src'));
$('#imagemodal').modal('show');   
});
});