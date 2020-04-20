$(document).ready(function () {
    $(".content").hide()
})

$(".header").click(function () {
    $(".header").hide()
    $(".content").show()
})

slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  slides = document.getElementsByClassName("slide-container-1");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}