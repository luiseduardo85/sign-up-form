document.querySelector('.btn-claim').addEventListener('click', function() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        const errorMessage = input.nextElementSibling;
        if (input.value.trim() === '') {
            input.classList.add('icon-error');
            errorMessage.style.display = 'block';
        } else {
            input.classList.remove('icon-error');
            errorMessage.style.display = 'none';
        }

        if (input.type === 'email') {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(input.value)) {
                input.classList.add('icon-error');
                errorMessage.style.display = 'block';
                errorMessage.textContent = 'Looks like this is not an email';
            } else {
                input.classList.remove('icon-error');
                errorMessage.style.display = 'none';
            }
        }
    });
});
