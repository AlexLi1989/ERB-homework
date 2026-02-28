function openLightbox() {
  document.getElementById("lightbox").style.display = "block";
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
function showSlide(n) {
  let slides = document.getElementsByClassName("slides");
  let slidesCaption = document.querySelectorAll(".slides .slides-image");
  let caption = document.getElementById("caption");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n - 1].style.display = "block";
  caption.innerHTML = slidesCaption[n - 1].alt;
}
