function validateSignup() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const errorText = document.getElementById('errorText');

    // Simple validation
    if (!username || !email || !password || !confirmPassword) {
        errorText.textContent = 'All fields are required.';
    } else if (password !== confirmPassword) {
        errorText.textContent = 'Passwords do not match.';
    } else {
        // Successful signup logic (you can replace this with your backend logic)
        errorText.textContent = 'Signup successful!';
        errorText.style.color = 'green';
        // Additional logic (e.g., sending data to the server)
        // ...

        // Redirect to the home page after a successful signup
        window.location.href = 'mainpage.html';
    }
}

// Additional functions remain unchanged
function clearForm() {
    document.getElementById('signupForm').reset();
    setTimeout(() => {
        document.getElementById('errorText').textContent = '';
    }, 3000);
}
