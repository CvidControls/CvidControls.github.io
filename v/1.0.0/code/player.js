var video = document.querySelector('.video');
var juice = document.querySelector('.orange-juice');
var btn = document.querySelector('.play-pause');

function togglePlayPause() {
    if(video.paused){
        btn.innerHTML = '<i class="far fa-pause-circle"></i>';
        video.play();
    }else{
        btn.innerHTML = '<i class="far fa-play-circle"></i>';
        video.pause();
    }
}

btn.addEventListener('click', () => {
    togglePlayPause();
});

video.addEventListener('timeupdate', function(){
    var juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + '%';
    if(video.ended){
        btn.innerHTML = '<i class="fas fa-redo-alt"></i>';
    }
});

video.addEventListener('click', () => {
    togglePlayPause();
});