const video = document.getElementById('video');
const playVideoBtn = document.getElementById('play-video');
playVideoBtn.addEventListener('click', function () {
    video.play();
});

const pauseVideoBtn = document.getElementById('pause-video');
pauseVideoBtn.addEventListener('click', function () {
    video.pause()

});

const muteVideoBtn = document.getElementById('mute-video');
muteVideoBtn.addEventListener('click', function () {
    video.muted = !video.muted;
});

const voltaVideoBtn = document.getElementById('volta-video');
voltarVideoBtn.addEventListener('click', function () {
    video.currentTime -= 10;
});

const adiarVideoBtn = document.getElementById('adiar-video');
adiarVideoBtn.addEventListener('click', function () {
    video.currentTime += 10;
});

fullscreenVideoBtn.addEventListener('click', function () {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
});

const audio = document.getElementById('audio');
        const playAudioBtn = document.getElementById('play-audio');
        playAudioBtn.addEventListener('click', function(){
            audio.play();
        });

        const pauseAudioBtn = document.getElementById('pause-audio');
        pauseAudioBtn.addEventListener('click', function(){
            audio.pause()
        });

        const muteAudioBtn = document.getElementById('mute-audio');
        muteaudioBtn.addEventListener('click', function(){
            video.muted = !video.muted;
        });

        const voltaAudioBtn = document.getElementById('volta-audio');
        voltarAudioBtn.addEventListener('click', function(){
            audio.currentTime -= 10;
        });

        const adiarAudioBtn = document.getElementById('adiar-audio');
        adiarAudioBtn.addEventListener('click', function(){
            audio.currentTime += 10;
        });