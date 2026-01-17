// Create floating particles
const floatingParticles = document.getElementById('floatingParticles');
for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';

    // ✅ faster animation
    particle.style.animationDuration = (Math.random() * 5 + 3) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';

    floatingParticles.appendChild(particle);
}


// Initialize EmailJS
(function () {
    emailjs.init("bpTelCk-xRxIz6NkM");
})();

// Modal Functions
function showModal(message) {
    document.getElementById('modalMessage').textContent = message;
    document.getElementById('successModal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
document.getElementById('successModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

// Section Navigation
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.main-section');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const sectionNav = document.getElementById('sectionNav');

// Function to switch sections
function switchSection(targetId) {
    navButtons.forEach(btn => btn.classList.remove('active'));
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === targetId) {
            section.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // Set active nav button
    document.querySelector(`[data-target="${targetId}"]`).classList.add('active');

    // Close mobile menu if open
    if (window.innerWidth <= 768) {
        sectionNav.classList.remove('mobile-open');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = 'auto';
    }
}

navButtons.forEach(button => {
    button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        switchSection(targetId);
    });
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', function () {
    sectionNav.classList.toggle('mobile-open');
    this.innerHTML = sectionNav.classList.contains('mobile-open')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

    // Toggle body scroll
    if (sectionNav.classList.contains('mobile-open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function (event) {
    if (window.innerWidth <= 768) {
        if (!sectionNav.contains(event.target) &&
            !mobileMenuBtn.contains(event.target) &&
            sectionNav.classList.contains('mobile-open')) {

            sectionNav.classList.remove('mobile-open');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = 'auto';
        }
    }
});

// Handle window resize
function handleResize() {
    if (window.innerWidth > 768) {
        // Desktop - ensure menu is visible
        sectionNav.classList.remove('mobile-open');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = 'auto';
    }
}

// Hire Me Button
document.getElementById('hireBtn').addEventListener('click', function () {
    switchSection('feedback');

    setTimeout(() => {
        document.getElementById('commentType').value = "hire";
        document.getElementById('name').focus();
    }, 500);
});

// Download CV Button
// document.getElementById('downloadCvBtn').addEventListener('click', function () {
//     const cvUrl = 'https://drive.google.com/file/d/15NKie18DTkEjWV9bcna1w-NRAZcjd3dV/view?usp=sharing';

//     const link = document.createElement('a');
//     link.href = cvUrl;
//     link.download = 'Rajnish_Rajan_Full_Stack_Developer_CV.pdf';
//     link.target = '_blank';
//     link.rel = 'noopener noreferrer';

//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);

//     showStatus('✅ CV download started! Check your downloads folder.', 'success');

//     setTimeout(() => {
//         showModal('Your CV has been downloaded! For best results, open the PDF with Adobe Acrobat Reader.');
//     }, 1000);
// });

// Send Review Function
function sendReview() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const commentType = document.getElementById("commentType").value;
    const review = document.getElementById("review").value;

    // Validation
    if (!name || !email || !commentType || !review) {
        showStatus("Please fill in all fields", "error");
        return;
    }

    if (!validateEmail(email)) {
        showStatus("Please enter a valid email address", "error");
        return;
    }

    // Prepare email parameters
    const templateParams = {
        name: name,
        email: email,
        review: review,
        comment_type: getCommentTypeText(commentType),
        timestamp: new Date().toLocaleString()
    };

    // Show sending status
    showStatus("Sending your message...", "success");

    // Send email
    emailjs.send("service_inb12sv", "template_t7p7vuj", templateParams)
        .then(function (response) {

            // Show success modal
            showModal(`Thank you ${name}! Your message has been received. I will get back to you at ${email} within 24 hours.`);

            // Show status
            showStatus("✅ Message sent successfully! Check your email for confirmation.", "success");

            // Reset form
            document.getElementById("commentForm").reset();

            // Celebration effect
            createCelebration();

        }, function (error) {
            showModal("Sorry, there was an error sending your message. Please try again or email me directly.");
            showStatus("❌ Failed to send message. Please try again.", "error");
        });
}

function getCommentTypeText(type) {
    const types = {
        'hire': 'Hiring Inquiry',
        'project': 'Project Proposal',
        'collab': 'Collaboration',
        'question': 'Technical Question',
        'other': 'Other'
    };
    return types[type] || 'General Inquiry';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showStatus(message, type) {
    const statusEl = document.getElementById("status");
    statusEl.textContent = message;
    statusEl.className = type;
    statusEl.style.display = "block";

    setTimeout(() => {
        statusEl.style.display = "none";
    }, 5000);
}

function createCelebration() {
    const colors = ['#2563eb', '#4f46e5', '#0ea5e9', '#60a5fa', '#8b5cf6'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;

            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 5000);
        }, i * 50);
    }

    // Add confetti animation
    if (!document.querySelector('#confetti-animation')) {
        const style = document.createElement('style');
        style.id = 'confetti-animation';
        style.innerHTML = `
                    @keyframes confettiFall {
                        0% {
                            transform: translateY(0) rotate(0deg);
                            opacity: 1;
                        }
                        100% {
                            transform: translateY(100vh) rotate(720deg);
                            opacity: 0;
                        }
                    }
                `;
        document.head.appendChild(style);
    }
}

// Initialize page
window.addEventListener('DOMContentLoaded', function () {

    // Add event listeners
    window.addEventListener('resize', handleResize);

    // Prevent zoom on double-tap for mobile
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // Improve touch scrolling
    document.addEventListener('touchmove', function (event) {
        // Only prevent if user is actually pinch-zooming
        if (event.touches && event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });


    // Add CSS for mobile menu state
    const style = document.createElement('style');
    style.innerHTML = `
                @media (max-width: 768px) {
                    .section-nav.mobile-open {
                        transform: translateY(0);
                        height: 100vh;
                        overflow-y: auto;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                        padding-top: 80px;
                    }
                    
                    .section-nav.mobile-open .nav-btn {
                        width: 90%;
                        max-width: 300px;
                        margin-bottom: 15px;
                        justify-content: center;
                    }
                }
            `;
    document.head.appendChild(style);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});