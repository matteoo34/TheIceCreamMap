// Parallax effect on the carousel
const carousel = document.querySelector(".carousel-container");
window.addEventListener("scroll", function(e) {
	carousel.style.top = `${this.scrollY / 1.5}px`
})