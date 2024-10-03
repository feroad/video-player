 // Crear un script para administrar los botones del video.

 const $video = document.getElementById('video');
 const $play = document.querySelector('#play');
 const $pause = document.querySelector('#pause');
 const $forward = document.querySelector('#forward');
 const $backward = document.querySelector('#backward');
 const $range = document.querySelector('#range')

 $play.addEventListener('click', handlePlay)
 $pause.addEventListener('click', handlePause)
 $forward.addEventListener('click', handleForward)
 $backward.addEventListener('click', handleBackward)
 $video.addEventListener('loadedmetadata', handleMetadata)
 $video.addEventListener('timeupdate', handleTimeUpdates)
 $range.addEventListener('input', handleInput)

 function handleInput() {
    $video.currentTime = $range.value;
 }

 function handleTimeUpdates() {
    $range.value = $video.currentTime;
    if($video.currentTime === $video.duration) {
        $play.hidden = false;
        $pause.hidden = true;
        $range.value = 0;
        $video.currentTime = 0;
        $video.poster = './assets/images/poster.jpg';
    }
 }
 
 function handleMetadata() {
    if ($video.readyState > HTMLMediaElement.HAVE_CURRENT_DATA) {
        $range.max = Math.ceil($video.duration);
    }
    console.log('Value of range: ', $range.max)

}

 function handleForward() {
     $video.currentTime = $video.currentTime + 10
 }

 function handleBackward() {
     $video.currentTime = $video.currentTime - 10
 }

 function handlePlay() {
     $video.play()
     $play.hidden = true
     $pause.hidden = false
 }

 function handlePause() {
     $video.pause()
     $play.hidden = false
     $pause.hidden = true
 }