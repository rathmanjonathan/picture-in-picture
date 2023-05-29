const video = document.querySelector('.video');
const btn = document.querySelector('.btn');

// Prompt user to select media stream, pass to video element, play
const selectMediaStream = async () => {
    try {
        // store media stream data, wait for user to select screen or video
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
            video.play();
        }
    } catch (err) {
        console.log('something went wrong:', err);
    }
}
btn.addEventListener('click', async () => {
    // Disable button on click
    btn.disabled = true;
    // Start picture in picture
    await video.requestPictureInPicture();
    // Reset button
    btn.disabled =false;
});

selectMediaStream();