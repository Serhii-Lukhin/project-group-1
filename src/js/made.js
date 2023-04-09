jQuery(document).ready(function ($) {
  (function initPlayVideo() {
    var $videoCover = $(".made-cover");
    var $videoPlayerIframe = $(".made-video iframe");
    
    $videoCover.on("click", function () {
      $videoCover.fadeOut();
      $videoPlayerIframe[0].src += "&autoplay=1";
    });
  })();
});