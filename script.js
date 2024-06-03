function openFullscreen(src) {
    // Function to open images and videos in fullscreen
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

window.onload = function() {
    const galleryContainer = document.querySelector('.gallery');

    // Generate image elements from 1 to 82
    for (let i = 1; i <= 82; i++) {
        const img = document.createElement('img');
        img.src = `Mah-IV (${i}).jpg`;
        img.alt = `Image ${i}`;
        img.className = 'gallery-item';
        img.setAttribute('onclick', `openFullscreen('${img.src}')`);

        // Add rotation class to a specific image
        // if (i === 2) {
        //     img.classList.add('rotate-upside-down'); // Example: rotate the 2nd image upside down
        // }

        galleryContainer.appendChild(img);
    }

    for (let i = 1; i <= 6; i++) {
        const video = document.createElement('video');
        video.src = `Mah-IV (${i}).mp4`; // Adjust video source accordingly
        video.type = 'video/mp4';
        video.className = 'gallery-item';
        video.setAttribute('controls', '');
        video.setAttribute('onclick', `openFullscreen('${video.src}')`);

        // Add rotation class to a specific video
        // if (i === 3) {
        //     video.classList.add('rotate-90'); // Example: rotate the 3rd video by 90 degrees
        // }

        galleryContainer.appendChild(video);
    }
};
