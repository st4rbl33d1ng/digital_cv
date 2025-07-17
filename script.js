function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Smooth scrolling for section links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation on load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.container section').forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        setTimeout(() => {
            section.style.transition = 'opacity 0.5s, transform 0.5s';
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }, 100);
    });
});
