const images = [
    'tabouli-featured-img.webp',
    'woman-eating-mediterranean-soup-with-bread-close-up.webp',
    'food-with-high-content-of-omega-3-fats.webp'
];
let currentImageIndex = 0;

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    const image = document.getElementById('image');
    image.src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const image = document.getElementById('image');
    image.src = images[currentImageIndex];
}

setInterval(nextImage, 5000, images.length); // Cycle images every 5 seconds
