// Simple JavaScript for Library Management System

// Confirm return action
document.addEventListener('DOMContentLoaded', function() {
    const returnLinks = document.querySelectorAll('a[href*="/return_book/"]');
    returnLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!confirm('Are you sure you want to return this book?')) {
                e.preventDefault();
            }
        });
    });
});