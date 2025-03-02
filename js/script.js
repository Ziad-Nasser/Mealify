// Handle active navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav .container ul li a');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
    
    // Dark mode toggle
    const darkModeToggle = document.querySelector('.fa-moon');
    
    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.classList.remove('fa-moon');
        darkModeToggle.classList.add('fa-sun');
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            // Switch to light mode
            document.body.classList.remove('dark-mode');
            this.classList.remove('fa-sun');
            this.classList.add('fa-moon');
            localStorage.setItem('darkMode', 'disabled');
        } else {
            // Switch to dark mode
            document.body.classList.add('dark-mode');
            this.classList.remove('fa-moon');
            this.classList.add('fa-sun');
            localStorage.setItem('darkMode', 'enabled');
        }
    });
});