const signInBtnLink = document.querySelector('.signinBtn-link');
        const signUpBtnLink = document.querySelector('.signupBtn-link');
        const wrapper = document.querySelector('.wrapper');

        signUpBtnLink.addEventListener('click', () => {
            wrapper.classList.toggle('active');
        });
        signInBtnLink.addEventListener('click', () => {
            wrapper.classList.toggle('active');
        });