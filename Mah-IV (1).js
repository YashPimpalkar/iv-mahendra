document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("image-container");

    // Assuming you have an array of URLs for your HEIC images
    const imageUrls = [
        "IMG_8777.JPG",
        "IMG_1750.HEIC",
        // Add all your image URLs here
    ];

    // Function to create image elements and append to the container
    function createImageElements(imageUrls) {
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
            container.appendChild(img);
        });
    }

    // Load images
    createImageElements(imageUrls);
});
