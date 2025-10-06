// Select the hamburger icon and the navigation links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add a click event listener to the hamburger
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the nav links to show/hide it
    navLinks.classList.toggle('active');
});