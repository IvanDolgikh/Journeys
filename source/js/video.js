let video = document.querySelector('.hero__video');
let button = document.querySelector('.hero__button');

function onPlayVideo() {
  if (video.paused) {
    video.play();
    button.style.display = 'none';
  } else {
    video.pause();
  }
}

function onPauseVideo() {
  video.pause();
  button.style.display = 'block';
}

if (video !== null) {
  button.addEventListener('click', onPlayVideo);
  video.addEventListener('click', onPauseVideo);
}
