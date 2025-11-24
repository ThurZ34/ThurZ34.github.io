const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu a');

window.onscroll = () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    });
};

const menuToggle = document.querySelector('.menu-toggle');
const navWrapper = document.querySelector('.nav-wrapper');

menuToggle.addEventListener('click', () => {
    navWrapper.classList.toggle('active');

    const icon = menuToggle.querySelector('i');
    if (navWrapper.classList.contains('active')) {
        icon.classList.replace('ri-menu-3-line', 'ri-close-line');
    } else {
        icon.classList.replace('ri-close-line', 'ri-menu-3-line');
    }
});

const navLinksSidebar = document.querySelectorAll('.nav-wrapper a');

navLinksSidebar.forEach(link => {
    link.addEventListener('click', () => {
        navWrapper.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.replace('ri-close-line', 'ri-menu-3-line');
    });
});