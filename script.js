function validateSignup() {
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const errorText = document.getElementById('errorText');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        errorText.textContent = 'Please enter a valid email address.';
        return;
    }

    if (usernameInput.value.trim() === '') {
        errorText.textContent = 'Please enter a username.';
        return;
    }

    if (passwordInput.value.length < 5) {
        errorText.textContent = 'Password must be at least 5 characters long.';
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        errorText.textContent = 'Passwords do not match.';
        return;
    }

    // If validation passes, you can proceed with signup logic

    // Redirect to another page (replace 'target-page.html' with your desired page)
    window.location.href = 'mainpage.html';
}

