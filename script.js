// ===================================
// CODE EDITOR TYPING ANIMATION
// ===================================
const codeLines = [
    '{',
    '  <span class="code-key">"name"</span>: <span class="code-string">"Abdullah Alshehri"</span>,',
    '  <span class="code-key">"role"</span>: <span class="code-string">"Full-Stack Developer"</span>,',
    '  <span class="code-key">"stack"</span>: [<span class="code-string">"React"</span>, <span class="code-string">"Laravel"</span>, <span class="code-string">"Python"</span>],',
    '  <span class="code-key">"education"</span>: <span class="code-string">"BSc Computer Science"</span>,',
    '  <span class="code-key">"location"</span>: <span class="code-string">"Saudi Arabia 🇸🇦"</span>,',
    '  <span class="code-key">"hireable"</span>: <span class="code-bool">true</span>',
    '}'
];

function typeCode() {
    const codeEl = document.querySelector('#codeContent code');
    if (!codeEl) return;

    let lineIndex = 0;
    let charIndex = 0;
    let currentDisplay = '';

    // Plain text versions for character-by-character typing
    const plainLines = [
        '{',
        '  "name": "Abdullah Alshehri",',
        '  "role": "Full-Stack Developer",',
        '  "stack": ["React", "Laravel", "Python"],',
        '  "education": "BSc Computer Science",',
        '  "location": "Saudi Arabia 🇸🇦",',
        '  "hireable": true',
        '}'
    ];

    function addChar() {
        if (lineIndex >= plainLines.length) {
            // Done typing — show final with cursor
            codeEl.innerHTML = codeLines.join('\n') + '<span class="code-cursor"></span>';
            return;
        }

        const currentPlainLine = plainLines[lineIndex];

        if (charIndex <= currentPlainLine.length) {
            // Build display: completed lines (with syntax) + current typing line (plain)
            const completedHtml = codeLines.slice(0, lineIndex).join('\n');
            const typingText = currentPlainLine.substring(0, charIndex);
            const cursor = '<span class="code-cursor"></span>';

            if (lineIndex > 0) {
                codeEl.innerHTML = completedHtml + '\n' + typingText + cursor;
            } else {
                codeEl.innerHTML = typingText + cursor;
            }

            charIndex++;
            // Vary speed: faster for spaces/brackets, slower for letters
            const currentChar = currentPlainLine[charIndex - 1];
            let delay = 28;
            if (currentChar === ' ') delay = 15;
            else if (currentChar === '{' || currentChar === '}' || currentChar === ',') delay = 40;

            setTimeout(addChar, delay);
        } else {
            // Line complete — move to next
            lineIndex++;
            charIndex = 0;
            setTimeout(addChar, 80);
        }
    }

    // Start after a short delay
    setTimeout(addChar, 600);
}

// ===================================
// NAVIGATION
// ===================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ===================================
// SMOOTH SCROLL
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===================================
// ACTIVE NAV LINK ON SCROLL
// ===================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ===================================
// SCROLL REVEAL
// ===================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// ===================================
// INIT
// ===================================
typeCode();
