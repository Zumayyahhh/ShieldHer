document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const phone = document.getElementById('phone').value;
            const emergencyContacts = document.getElementById('emergency-contacts').value;
            const age = document.getElementById('age').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            // Simple client-side validation
            if (!phone || !age || !password || !confirmPassword) {
                alert('Please fill out all required fields.');
                return;
            }
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }
            if (age < 16) {
                alert('You must be at least 16 years old to register.');
                return;
            }

            // Simulate registration
            alert('Sign up successful! Please log in with your new credentials.');
            window.location.href = 'login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;

            // Simulate login
            if (phone === '9876543210' && password === 'password123') {
                alert('Login successful! Welcome to ShieldHer.');
                window.location.href = 'index.html';
            } else {
                alert('Login failed. Please check your phone number and password.');
            }
        });
    }
});