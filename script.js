// Safe year (if footer exists)
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Hamburger top-sheet menu
const body = document.body;
const burger = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');

function toggleMenu(forceOpen){
  const open = forceOpen ?? !menu.classList.contains('active');
  menu.classList.toggle('active', open);
  burger.classList.toggle('active', open);
  burger.setAttribute('aria-expanded', String(open));
  body.style.overflow = open ? 'hidden' : '';
}
if (burger) burger.addEventListener('click', () => toggleMenu());
if (menu) menu.querySelectorAll('.menu-link').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

// About slider
const slides = document.querySelector('#aboutSlider .slides');
const slideEls = document.querySelectorAll('#aboutSlider .slide');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
let currentIndex = 0;
function showSlide(index){
  if(!slides) return;
  if (index < 0) index = slideEls.length - 1;
  if (index >= slideEls.length) index = 0;
  currentIndex = index;
  slides.style.transform = `translateX(-${index * 100}%)`;
}
if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
let startX = 0;
if (slides){
  slides.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  slides.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) showSlide(currentIndex - 1);
    if (startX - endX > 50) showSlide(currentIndex + 1);
  });
  showSlide(0);
}

// Video play/pause
const video = document.getElementById('reel');
const playBtn = document.getElementById('playBtn');
if(video && playBtn){
  playBtn.addEventListener('click',()=>{
    if(video.paused){ video.play(); playBtn.style.display="none"; }
    else{ video.pause(); playBtn.style.display="flex"; }
  });
}
