$(document).ready(function(){
    $("#flipGift").click(function(){
      $(".panelGift1").slideDown("1000");
      $(".panelGift2").slideDown("1000");
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
    })
});