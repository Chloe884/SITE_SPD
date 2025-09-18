let index = 0;
const gallery = document.getElementById('gallery');
const items = gallery.querySelectorAll('.item');
const visible = 4; // nombre d’images visibles
const total = items.length;

function showImage() {
  const slideWidth = items[0].clientWidth + 20; // largeur + gap
  gallery.style.transform = `translateX(-${index * slideWidth}px)`;
}

function next() {
  if (index < total - visible) {
    index++;
    showImage();
  }
}

function prev() {
  if (index > 0) {
    index--;
    showImage();
  }
}

