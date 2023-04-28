const images = document.querySelectorAll('.gallery img');
const fullScreen = document.getElementById('fullScreen');
const fullScreenImage = document.getElementById('fullScreenImage');

// Add click event listener to each image
images.forEach(image => {
  image.addEventListener('click', () => {
    // Show the full-screen overlay
    fullScreen.style.display = 'flex';

    // Set the source of the full-screen image to the clicked image
    fullScreenImage.src = image.src;
  });
});

// Add click event listener to the full-screen overlay to hide it
fullScreen.addEventListener('click', () => {
  fullScreen.style.display = 'none';
});
