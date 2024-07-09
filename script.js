const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const volume = document.querySelector('[name="volume"]');
const playbackSpeed = document.querySelector('[name="playbackSpeed"]');
const rewind = document.querySelector('.rewind');
const forward = document.querySelector('.forward');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function skip(seconds) {
  video.currentTime += seconds;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
volume.addEventListener('change', handleRangeUpdate);
volume.addEventListener('mousemove', handleRangeUpdate);
playbackSpeed.addEventListener('change', handleRangeUpdate);
playbackSpeed.addEventListener('mousemove', handleRangeUpdate);
rewind.addEventListener('click', () => skip(-10));
forward.addEventListener('click', () => skip(25));

progress.addEventListener('click', (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
});