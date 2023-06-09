//add smooth scrolling to navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click, e =>')
    e.preventDefault();
    const targetsection = document.querySelector(link.getAttribute('href'));
    targetsection.scrollIntoView({
        behavior: "smooth"
    });
});