document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('front_video');
    var audio = new Audio('../../video/facebook.mp3');
    var scriptExecuted = sessionStorage.getItem('scriptExecuted');

    if (!scriptExecuted) {
      setTimeout(function () {
        video.play();
        audio.play();
        sessionStorage.setItem('scriptExecuted', true);
      }, 1000);
    } else {
      video.play();
      audio.play();
    }
  });