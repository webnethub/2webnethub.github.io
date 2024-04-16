const imagePicker = document.getElementById('image-picker');
const galleryContainer = document.getElementById('gallery-container');
const currentImage = document.getElementById('current-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let selectedImages = [];
let currentImageIndex = 0;


// me
document.addEventListener('contextmenu', (event) => event.preventDefault());


imagePicker.addEventListener('change', function(event) {
  selectedImages = Array.from(event.target.files);

  // Clear the gallery
  currentImage.src = "";

  if (!selectedImages.length) {
    return;
  }


  // Update buttons based on image count
  prevButton.disabled = true;
  nextButton.disabled = selectedImages.length <= 1;

  // Display the first image
  currentImage.src = URL.createObjectURL(selectedImages[currentImageIndex]);

  // Add event listeners for navigation buttons
  prevButton.addEventListener('click', handlePrevious);
  nextButton.addEventListener('click', handleNext);
});

function handlePrevious() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    currentImage.src = URL.createObjectURL(selectedImages[currentImageIndex]);
    nextButton.disabled = false;
    if (currentImageIndex === 0) {
      prevButton.disabled = true;
    }
  }
}

function handleNext() {
  if (currentImageIndex < selectedImages.length - 1) {
    currentImageIndex++;
    currentImage.src = URL.createObjectURL(selectedImages[currentImageIndex]);
    prevButton.disabled = false;
    if (currentImageIndex === selectedImages.length - 1) {
      nextButton.disabled = true;
    }
  }
  document.getElementById("file-picker-container").style.display = 'none'; //me
}
