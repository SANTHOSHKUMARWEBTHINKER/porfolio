//form validation
// This script validates a form with three fields: name, email, and message.
document.addEventListener('DOMContentLoaded', function () {
    const validationForm = document.querySelector('.validation-form');
    const validationFormtwo = document.querySelector('.validation-form-two');
    const validationFormthree = document.querySelector('.validation-form-three');
    const validationFormfinal = document.querySelector('.validation-form-final');
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Hide validation messages when user types
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', function () {
            validationForm.classList.remove('active');
            validationFormtwo.classList.remove('active');
            validationFormthree.classList.remove('active');
            validationFormfinal.classList.remove('active');
        });
    });

    document.getElementById('button-click').addEventListener('click', function (e) {
        const avalue = nameInput.value.trim();
        const bvalue = emailInput.value.trim();
        const cvalue = messageInput.value.trim();

        let hasError = false;

        // Reset previous errors
        validationForm.classList.remove('active');
        validationFormtwo.classList.remove('active');
        validationFormthree.classList.remove('active');
        validationFormfinal.classList.remove('active');

        // Validate Name
        if (avalue === "" || !isNaN(avalue)) {
            validationForm.classList.add('active');
            hasError = true;
        }

        // Validate Email
        if (bvalue === "" || !bvalue.includes('@')) {
            validationFormtwo.classList.add('active');
            hasError = true;
        }

        // Validate Message
        if (cvalue === "") {
            validationFormthree.classList.add('active');
            hasError = true;
        }

        // If there are errors, prevent form submission
        if (hasError) {
            e.preventDefault();
        } else {
            // Optionally show final success message before actual submit
            validationFormfinal.classList.add('active');
            // Let the form submit naturally
        }
    });
});
