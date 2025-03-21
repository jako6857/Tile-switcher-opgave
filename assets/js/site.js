// Select all the small images
let smallImages = document.querySelectorAll("#favoriteParent img:not(#mainImage)");

// Add click event listeners to each small image
smallImages.forEach((img) => {
  img.addEventListener("click", function () {
    // Swap the src of the main image with the clicked image
    let tempSrc = mainImage.src;
    mainImage.src = this.src;
    this.src = tempSrc;
  });
});
