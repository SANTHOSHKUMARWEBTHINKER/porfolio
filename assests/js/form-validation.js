

document.addEventListener('DOMContentLoaded', function () {
    const validationForm = document.querySelector('.validation-form');
    const validationFormtwo = document.querySelector('.validation-form-two');
    const validationFormthree = document.querySelector('.validation-form-three');
    const validationFormfinal = document.querySelector('.validation-form-final');
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const formWrapper = document.querySelector('.validation-form-wrapper'); // Add your form wrapper class or id here

    // Remove 'active' class when any input changes
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', function () {
            validationForm.classList.remove('active');
            validationFormtwo.classList.remove('active');
            validationFormthree.classList.remove('active');
            validationFormfinal.classList.remove('active');
        });
    });

    document.getElementById('button-click').addEventListener('click', function (e) {
        var avalue = nameInput.value;
        var bvalue = emailInput.value;
        var cvalue = messageInput.value;

        let hasError = false;
        let hasErrortwo = false;
        let hasErrorthree = false;

        if (avalue === "" || !isNaN(avalue)) {
            hasError = true;
        }
        if (bvalue === "" || !isNaN(bvalue)) {
            hasErrortwo = true;
        }
        if (cvalue === "" || !isNaN(cvalue)) {
            hasErrorthree = true;
        }

        if (hasError) {
            validationForm.classList.add('active');
            e.preventDefault();
        }
        if (hasErrortwo) {
            validationFormtwo.classList.add('active');
            e.preventDefault();
        }
        if (hasErrorthree) {
            validationFormthree.classList.add('active');
            e.preventDefault();
        }

        if (!hasError && !hasErrortwo && !hasErrorthree) {
            validationFormfinal.classList.add('active');
            e.preventDefault();

        }
    });
});