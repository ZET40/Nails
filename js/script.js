
document.addEventListener('DOMContentLoaded', () => {
    // Slider otomatis
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    function showSlide() {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        index = (index + 1) % slides.length;
    }

    setInterval(showSlide, 3000);
    showSlide();

    // Smooth scroll untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
