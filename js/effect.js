$(document).ready(function(){
  $("#flipGift").click(function(){
    $(".panelGift1").slideToggle("1000");
    $(".panelGift2").slideToggle("1000");
  });

  $("#bukaUndangan").click(function(){
    $(".section-landing").slideDown("2000");
    $(".bg_list_pengantin").slideDown("2000");
    $(".bg-card").slideDown("2000");
    $("#bukaUndangan").css("color", "white");
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