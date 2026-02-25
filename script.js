document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const darkModeBtn = document.getElementById('darkModeBtn');

    if (!form) return; // safety check

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // NAME
        if (name === '') {
            alert('Name is required');
            return;
        }
        if (name.length < 3) {
            alert('Name must be at least 3 characters');
            return;
        }
        if (!/^[A-Za-z\s]+$/.test(name)) {
            alert('Name should contain only letters');
            return;
        }

        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (message.length < 10) {
            alert('Message must be at least 10 characters');
            return;
        }

        alert('Message sent successfully!');
        form.reset();
    });

    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem(
                'darkMode',
                document.body.classList.contains('dark-mode')
            );
        });
    }

    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});