const videoCover = document.querySelector('.made-cover');
const videoPlayerIframe = document.querySelector('#made-player');
const mySrc = videoPlayerIframe.getAttribute('src');

videoCover.addEventListener('click', function () {
  videoCover.setAttribute('style', 'opacity: 0; pointer-events: none;');
  videoPlayerIframe.setAttribute('src', mySrc + '&autoplay=1');
});
