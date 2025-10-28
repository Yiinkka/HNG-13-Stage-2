document.addEventListener("DOMContentLoaded", () => {
    const fullName = document.getElementById("full-name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const createAccountBtn = document.getElementById("create-account-btn");
    const successMessageContainer = document.querySelector(".success-message-container");

    // Hide success message at start
    successMessageContainer.style.display = "none";

    createAccountBtn.addEventListener("click", (e) => {
        e.preventDefault(); // prevent instant redirect

        let isValid = true;

        // Helper to show errors
        const showError = (input, message) => {
            const formField = input.parentElement;
            const errorP = formField.querySelector("p");
            errorP.textContent = message;
            errorP.style.display = "block";
            input.style.border = "2px solid red";
        };

        // Helper to clear errors
        const clearError = (input) => {
            const formField = input.parentElement;
            const errorP = formField.querySelector("p");
            errorP.textContent = "";
            errorP.style.display = "none";
            input.style.border = "2px solid #d1e5f9";
        };

        // Full name validation
        if (fullName.value.trim() === "") {
            showError(fullName, "Full name is required");
            isValid = false;
        } else {
            clearError(fullName);
        }

        // Email validation (basic regex)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === "") {
            showError(email, "Email address is required");
            isValid = false;
        } else if (!emailPattern.test(email.value)) {
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

        // Confirm password validation
        if (confirmPassword.value.trim() === "") {
            showError(confirmPassword, "Please confirm your password");
            isValid = false;
        } else if (confirmPassword.value !== password.value) {
            showError(confirmPassword, "Passwords do not match");
            isValid = false;
        } else {
            clearError(confirmPassword);
        }

        // If all validations pass
        if (isValid) {
            successMessageContainer.style.display = "flex";

            // Optional: auto-hide and redirect
            setTimeout(() => {
                successMessageContainer.style.display = "none";
                window.location.href = "login.html";
            }, 2500); // 2.5 seconds delay
        }
    });
});
