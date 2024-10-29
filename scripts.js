// Navigation functionality
document.getElementById('navigation').addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-button')) {
        // Update active button
        document.querySelectorAll('.nav-button').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        // Show selected section
        const sectionId = e.target.dataset.section;
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }
});

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll button based on scroll position
window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-top');
    if (window.scrollY > 300) {
        scrollButton.style.display = 'flex';
    } else {
        scrollButton.style.display = 'none';
    }
});

// Initially hide scroll button
document.querySelector('.scroll-top').style.display = 'none';