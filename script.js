document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const errorMessage = document.querySelector('.errorm');
    const submitButton = document.querySelector('button[type="submit"]');
    
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        const email = emailInput.value.trim();
        if (!validateEmail(email)) {
            errorMessage.style.display = 'flex';
            emailInput.style.borderColor = 'red';
            emailInput.style.backgroundColor = 'pink';
            emailInput.style.color = 'red';
        } else {
            errorMessage.style.display = 'none';
            emailInput.style.borderColor = '';
            emailInput.style.backgroundColor = '';
            emailInput.style.color = '';
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
