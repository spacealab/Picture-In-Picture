const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// to select media stream, pass to video element, than play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch Error Here
        console.log('Whoops, error here:', error);
    }
}

button.addEventListener('click', async () => {
    //Disable Button
    button.disabled = true;
    //start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
})

// On Load
selectMediaStream();