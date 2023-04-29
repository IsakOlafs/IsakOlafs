const images = document.querySelectorAll('.gallery img');
const fullScreen = document.getElementById('fullScreen');
const fullScreenImage = document.getElementById('fullScreenImage');
const galleryLinks = document.querySelectorAll('.dropdown-content a');

// Add click event listener to each image
images.forEach(image => {
  image.addEventListener('click', () => {
    // Show the full-screen overlay
    fullScreen.style.display = 'flex';

    // Set the source of the full-screen image to the clicked image
    fullScreenImage.src = image.querySelector('img').src;
  });
});

// Add click event listener to the full-screen overlay to hide it
fullScreen.addEventListener('click', () => {
  fullScreen.style.display = 'none';
});

// Add click event listener to gallery links
galleryLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Get the selected category
    const category = link.getAttribute('data-category');

    // Filter the images based on the selected category
    images.forEach(image => {
      if (category === 'all' || image.getAttribute('data-category') === category) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  });
});


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

