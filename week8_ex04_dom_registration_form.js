// Get the form
const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Error divs
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const formMessage = document.getElementById("formMessage");

    // Clear previous errors
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    formMessage.textContent = "";

    let isValid = true;

    // Username validation
    if (username === "") {
        usernameError.textContent = "Username cannot be empty";
        isValid = false;
    }

    // Email validation
    if (email === "") {
        emailError.textContent = "Email cannot be empty";
        isValid = false;
    } else if (!email.includes("@")) {
        emailError.textContent = "Email must contain @";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        passwordError.textContent = "Password cannot be empty";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // Confirm password validation
    if (confirmPassword === "") {
        confirmPasswordError.textContent = "Confirm Password cannot be empty";
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
    }

    // Success message
    if (isValid) {
        formMessage.textContent = "Registration successful!";

        console.log("Username:", username);
        console.log("Email:", email);
    }
});