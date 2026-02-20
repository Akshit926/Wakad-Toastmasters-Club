
function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));

   
    if (!isOpen) {
        item.classList.add('open');
    }
}

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.transition = 'transform 0.3s ease';
    } else {
       
        navbar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});


const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = '#772432'; // maroon
        }
    });
});


document.querySelector('.contact-form button').addEventListener('click', () => {
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
            input.style.borderColor = '#772432';
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    if (allFilled) {
        alert('Thank you! Your message has been sent. We will get back to you soon.');
        inputs.forEach(input => input.value = '');
    } else {
        alert('Please fill in all fields before sending.');
    }
});
