document.addEventListener('DOMContentLoaded', function() {
  const photos = [ 
    'images/photo1.jpg', 
    'images/photo2.jpg', 
    'images/photo3.jpg', 
    'images/photo4.jpg', 
    'images/photo5.jpg', 
    'images/photo6.jpg', 
    'images/photo7.jpg', 
    'images/photo8.jpg', 
];
  const slidesContainer = document.getElementById('slides');

  photos.forEach(src => { 
    const img = document.createElement('img'); 
    img.src = src; 
    slidesContainer.appendChild(img); 
  });

  let index = 0;
  const total = photos.length;
  function showSlide(i){
    slidesContainer.style.transform = `translateX(-${i * 100}%)`;
  }

  setInterval(() => {
    index = (index + 1) % total;
    showSlide(index);
  }, 3000);

  let startX = 0;
  let isDragging = false;

  slidesContainer.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.pageX;
  });

  slidesContainer.addEventListener('mousemove', e => {
    if(!isDragging) return;
  });

  slidesContainer.addEventListener('mouseup', e => {
    if(!isDragging) return;
    const diff = e.pageX - startX;
    if(diff > 50) { index = (index - 1 + total) % total; } 
    if(diff < -50) { index = (index + 1) % total; } 
    showSlide(index); 
    isDragging = false;
  });

  slidesContainer.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  slidesContainer.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX; 
    const diff = endX - startX; 
    if(diff > 50) { index = (index - 1 + total) % total; } 
    if(diff < -50) { index = (index + 1) % total; } 
    showSlide(index);
  });
});
