const backBtn = document.querySelector('.back');
const nextBtn = document.querySelector('.next');
const imageContainer = document.querySelector('.image');
const imageFooter = document.querySelector('.img-footer');
const imageFooterItems = document.querySelectorAll('.thumbnail');


const imageUrls = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',
    './images/7.jpg',
    './images/8.jpg',
    './images/9.jpg',
    './images/10.jpg',
];

let currentIndex = 0;
let autoSlideInterval;

// Function to display the current image
function displayCurrentImage() {
    imageContainer.style.backgroundImage = `url(${imageUrls[currentIndex]})`;
    imageContainer.style.transition = 'background-image 0.5s ease-in-out';
    updateThumbnailSelection()
}


// Function to update the selected thumbnail
function updateThumbnailSelection() {
    imageFooterItems.forEach((thumbnail, index) => {
      if (index === currentIndex) {
        thumbnail.style.transform = 'scale(1.1)';
        thumbnail.style.border = '1px solid white'
      } else {
        thumbnail.style.transform = 'scale(1)'; 
         thumbnail.style.border = 'none'
      }
    });
  }


// Attach click event listeners to the buttons
backBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    displayCurrentImage();
    clearInterval(autoSlideInterval);
    startAutoSlide();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    displayCurrentImage();
    clearInterval(autoSlideInterval);
    startAutoSlide();
});

// Populate the image footer with the thumbnails
imageFooterItems.forEach((thumbnail, index) => {
    thumbnail.style.backgroundImage = `url(${imageUrls[index]})`;
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        displayCurrentImage();
        clearInterval(autoSlideInterval);
        startAutoSlide();
    });
   
});


function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        displayCurrentImage();
    }, 5000); // Change the interval time as needed
}

startAutoSlide();
