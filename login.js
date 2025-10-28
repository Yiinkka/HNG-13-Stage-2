document.addEventListener("DOMContentLoaded", () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const loginBtn = document.getElementById("login-btn");
    const successMessageContainer = document.querySelector(".success-message-container");

    // Hide success message by default
    successMessageContainer.style.display = "none";

    // Helper functions
    const showError = (input, message) => {
        const field = input.parentElement;
        const errorP = field.querySelector("p");
        errorP.textContent = message;
        errorP.style.display = "block";
        input.style.border = "2px solid red";
    };

    const clearError = (input) => {
        const field = input.parentElement;
        const errorP = field.querySelector("p");
        errorP.textContent = "";
        errorP.style.display = "none";
        input.style.border = "2px solid #d1e5f9";
    };

    loginBtn.addEventListener("click", (e) => {
        e.preventDefault(); // prevent instant navigation

        let isValid = true;

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === "") {
            showError(email, "Email address is required");
            isValid = false;
        } else if (!emailPattern.test(email.value.trim())) {
            showError(email, "Enter a valid email address");
            isValid = false;
        } else {
            clearError(email);
        }

        // Password validation
        if (password.value.trim() === "") {
            showError(password, "Password is required");
            isValid = false;
        } else if (password.value.length < 6) {
            showError(password, "Password must be at least 6 characters");
            isValid = false;
        } else {
            clearError(password);
        }

        // If all good → show success message, then redirect
        if (isValid) {
            successMessageContainer.style.display = "flex";

            // Hide message + redirect after delay
            setTimeout(() => {
                successMessageContainer.style.display = "none";
                window.location.href = "Dashboard.html";
            }, 2000); // 2 seconds delay
        }
    });
});
