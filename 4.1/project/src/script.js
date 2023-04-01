var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
const bgm = document.getElementById('bgm');
const musicBtn = document.getElementById('music-btn');
musicBtn.addEventListener('click', function() {
  if (bgm.paused) {
    bgm.play();
    musicBtn.classList.add('play');
  } else {
    bgm.pause();
    musicBtn.classList.remove('play');
  }
});
