
    const video = document.getElementById('video-player');
    const pauseCount = document.getElementById('pause-counter');

    let pauseCounter = 0;
    video.addEventListener('pause', () => {
      pauseCounter++;
      pauseCount.textContent = pauseCounter;
    });

    function playPause() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }

    function stop() {
      video.pause();
      video.currentTime = 0;
    }

    function skip(seconds) {
      video.currentTime += seconds;
    }
    function setVolume(volume) {
        const validVolume = Math.min(1, Math.max(0, volume / 10));
        video.volume = validVolume;
    }