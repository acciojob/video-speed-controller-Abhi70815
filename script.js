const video = document.getElementById('video');
const playerButton = document.getElementById('player__button');
const progress = document.getElementById('progress');
const progressBarFilled = document.getElementById('progress-filled');
const skipButtons = document.querySelectorAll('.skip');
const volumeInput = document.getElementById('volume');
const playbackSpeedInput = document.getElementById('playbackSpeed');

let isPlaying = false;

playerButton.addEventListener('click', () => {
    if (isPlaying) {
        video.pause();
        playerButton.textContent = '►';
        isPlaying = false;
    } else {
        video.play();
        playerButton.textContent = '❚ ❚';
        isPlaying = true;
    }
});

video.addEventListener('timeupdate', () => {
    const progressPercent = (video.currentTime / video.duration) * 100;
    progressBarFilled.style.width = `${progressPercent}%`;
});

progress.addEventListener('input', () => {
    video.currentTime = (progress.value / 100) * video.duration;
});

skipButtons.forEach(button => {
    button.addEventListener('click', () => {
        video.currentTime += parseInt(button.dataset.skip);
    });
});

volumeInput.addEventListener('input', () => {
    video.volume = volumeInput.value / 100;
});

playbackSpeedInput.addEventListener('input', () => {
    video.playbackRate = playbackSpeedInput.value;
});