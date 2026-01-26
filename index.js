const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.fade').forEach(el => observer.observe(el));

const glow = document.querySelector('.glow');

window.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    glow.style.setProperty('--x', x + '%');
    glow.style.setProperty('--y', y + '%');
});

const navButtons = document.querySelectorAll('.navbar button');

window.addEventListener('mousemove', (e) => {
    navButtons.forEach(btn => {
        const rect = btn.getBoundingClientRect();
        const bx = rect.left + rect.width / 2;
        const by = rect.top + rect.height / 2;

        const dx = e.clientX - bx;
        const dy = e.clientY - by;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const maxDistance = 450; // smaller = sharper fade
        const opacity = Math.max(0.1, 1 - distance / maxDistance);

        btn.style.opacity = opacity;
    });
});

document.querySelectorAll('.card').forEach(card => {
    let timer;

    card.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        card.classList.remove('flicker');
        card.classList.add('hov');
    });

    card.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
        card.classList.remove('hov');
        card.classList.add('flicker');
        }, 300);
    });
});
