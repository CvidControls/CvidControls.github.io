const ready = 'Yes! I am always ready! Thank you for using our CvC 🤗. If you need help in the installation, check this file:///Volumes/KRISHAANG/custom_video_controls-API/installation.html';

var fontAwsome = document.createElement('link');
var css = document.createElement('link');
var js = document.createElement('script');
document.head.appendChild(fontAwsome);
document.head.appendChild(css);
document.head.appendChild(js);
fontAwsome.rel = 'stylesheet';
fontAwsome.href = 'https://use.fontawesome.com/releases/v5.14.0/css/all.css';
css.href = 'https://cvidcontrols.github.io/v/1.0.0/code/player.css';
css.rel = 'stylesheet';
js.src = 'https://cvidcontrols.github.io/v/1.0.0/code/player.js';
js.type = 'text/javascript';

function newCvC(anything) {
    // importing
    var cVideo = document.createElement('div');
    var video = document.createElement('video');
    var controls = document.createElement('div');
    var orangeBar = document.createElement('div');
    var juice = document.createElement('div');
    var btns = document.createElement('div');
    var playPauseBtn = document.createElement('button');

    // placeing
    document.querySelector(anything.append).appendChild(cVideo);
    cVideo.appendChild(video);
    cVideo.appendChild(controls);
    controls.appendChild(orangeBar);
    orangeBar.appendChild(juice);
    controls.appendChild(btns);
    btns.appendChild(playPauseBtn);

    // setting attributes
    video.src = anything.src;
    video.controls = false;
    video.autoplay = anything.autoplay;
    video.muted = anything.muted;
    cVideo.style.maxWidth = anything.Width;
    video.poster = anything.thumb;
    video.volume = + anything.vol;
    video.loop = anything.loop;


    // fullscreen
    var fullscreen = false;
    video.addEventListener('dblclick', () => {
        if(fullscreen){
            document.webkitExitFullscreen();
            fullscreen = false;
        }else{
                cVideo.webkitRequestFullscreen();
                fullscreen = true;
        }
    });

    // setting classes
    video.className = 'video ' + anything.class;
    cVideo.className = 'c-video';
    controls.className = 'controls';
    btns.className = 'buttons';
    orangeBar.className = 'orange-bar';
    juice.className = 'orange-juice';
    playPauseBtn.className = 'play-pause';

    // setting ids
    video.id = anything.id;

    // innerHTML & innerText setup
    playPauseBtn.innerHTML = anything.autoplay? '<i class="far fa-pause-circle"></i>': '<i class="far fa-play-circle"></i>';

    // keyboard
    window.addEventListener('keypress', (e) => {
        if(e.keyCode === 32){
            playPauseBtn.click();
        }else if(e.keyCode === 109){
            video.muted = video.muted? false: true;
        }else if(e.keyCode === 102){
            if(fullscreen){
                document.webkitExitFullscreen();
                fullscreen = false;
            }else{
                cVideo.webkitRequestFullscreen();
                fullscreen = true;
            }
        }
            console.log(e.keyCode)
    });

    // context
    if(anything.context === 'default'){
        var contextMenu = document.createElement('div');
        cVideo.appendChild(contextMenu);
        contextMenu.className = 'defaultContextMenu';
        var contextItem = {
            contextGroupA: {
                groupItemA: 'Loop'
            }
        };
    }
}