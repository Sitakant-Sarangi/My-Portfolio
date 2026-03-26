
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('#projects .project-card');
    projectCards.forEach((card) => {
        const details = card.querySelector('.project-details');
        const button = card.querySelector('.show-details-btn');

        if (!details || !button) return;

        button.addEventListener('click', function() {
            const open = details.style.display === 'block';
            details.style.display = open ? 'none' : 'block';
            button.textContent = open ? 'Show Details' : 'Hide Details';
        });
    });
});


function validateContactForm() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return false;
    }
    if (message.trim() === '') {
        alert('Please enter a message.');
        return false;
    }
    alert('Thank you for your message!');
    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateContactForm()) {
            
                contactForm.reset();
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    toggleButton.id = 'dark-mode-toggle';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '10px';
    toggleButton.style.right = '10px';
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});