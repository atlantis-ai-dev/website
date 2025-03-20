document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;
    
    // Clear previous error messages
    document.getElementById("nameError").textContent = '';
    document.getElementById("emailError").textContent = '';
    document.getElementById("messageError").textContent = '';
    document.getElementById("captchaError").textContent = '';

    // Name validation
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    }

    // Email validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        valid = false;
    }

    // Message validation
    const message = document.getElementById("message").value.trim();
    if (message === "") {
        document.getElementById("messageError").textContent = "Message cannot be empty.";
        valid = false;
    }

    // CAPTCHA validation
    const captcha = document.getElementById("captcha").value.trim();
    if (captcha !== "7") {
        document.getElementById("captchaError").textContent = "Incorrect captcha answer.";
        valid = false;
    }

    // If the form is valid, submit it
    if (valid) {
        document.getElementById("contactForm").submit();
    }

    this.submit();
});
