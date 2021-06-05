const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')
const playButton = videoPlayer.querySelector('.play-button')
const volume = videoPlayer.querySelector('.volume')
const currentTimeElement = videoPlayer.querySelector('.current')
const durationTimeElement = videoPlayer.querySelector('.duration')
const progress = videoPlayer.querySelector('.video-progress')
const progressBar = videoPlayer.querySelector('.video-progress-filled')


//Play and Pause button
playButton.addEventListener('click', (e) => {
  if (video.paused) {
    video.play()
    e.target.textContent = '❚ ❚'
  } else {
    video.pause()
    e.target.textContent = '►'
  }
})

var vid = document.getElementById("video");
vid.onpause = function autopause() {
  ppbutton.textContent = '►'
  console.log('Pause detected, Applied pause function');

};

vid.onplay = function autoplay() {
  ppbutton.textContent = '❚ ❚'
  console.log('Play detected, applied play function')
};

//volume
volume.addEventListener('mousemove', (e) => {
  video.volume = e.target.value
})

//current time and duration
const currentTime = () => {
  let currentMinutes = Math.floor(video.currentTime / 60)
  let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
  currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`

}

video.addEventListener('timeupdate', currentTime)

//reset on end
video.addEventListener('ended', (e) => {
  console.log('Video ended')
  var elem = document.getElementById('ppbutton');
  elem.innerHTML = '►'
  console.log('Marked as ended');
})

vid.onclick = function autoplay() {
  if (video.paused) {
    video.play();
    ppbutton.textContent = '❚ ❚'
    console.log('Play detected, applied play function')
  } else {
    video.pause();
    ppbutton.textContent = '►'
  }
};