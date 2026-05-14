const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');
const navbar = document.getElementById('main-navbar');
const sections = document.querySelectorAll('section[id], header[id]');
const navItems = document.querySelectorAll('.nav-link-item:not(.nav-cta)');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target || !navbar) return;

        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });

        navLinks?.classList.remove('open');
        hamburgerBtn?.classList.remove('active');
    });
});

hamburgerBtn?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
    hamburgerBtn.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if (!navbar) return;

    const navHeight = navbar.offsetHeight;
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 40;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('href') === '#' + current);
    });
});