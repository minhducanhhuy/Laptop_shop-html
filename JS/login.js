var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var rePassword = document.querySelector('#re-password');
var form = document.querySelector('form')
var adsImage = document.querySelector('.ads-img')
var nextLogin = document.querySelector('.login-button-link')

function showError(input, message) {
    let parent = input.parentElement
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerText = message;
}
function showSuccess(input) {
    let parent = input.parentElement
    let small = parent.querySelector('small');

    parent.classList.remove('error');
    small.innerText = '';
}
function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        if (!input.value.trim()) {
            isEmptyError = true;
            showError(input, `không được để trống`);
        } else {
            showSuccess(input);
        }
    });
    return isEmptyError;
}
function checkEmail(input) {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    input.value = input.value.trim();
    let isEmailError = !regexEmail.test(input.value);
    if (regexEmail.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, `Email Invalid`);
    }

    return isEmailError;
}
function checkLengthError(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `phải có ít nhất ${min} ký tự`);
        return true;
    }
    if (input.value.length > max) {
        showError(input, `chỉ được tối đa ${max} ký tự`);
        return true;
    }
    return false;
}
function checkMatchPasswordError(passwordInput, rePasswordInput) {
    if (passwordInput.value !== rePasswordInput.value) {
        showError(rePasswordInput, `mật khẩu không khớp`);
        return true;
    }
    return false;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isEmptyError = checkEmptyError([username, email, password, rePassword]);
    let isEmailError = checkEmail(email)

    let isUsernameLengthError = checkLengthError(username, 4, 20);
    let isPasswordLengthError = checkLengthError(password, 4, 15);
    let isMatchError = checkMatchPasswordError(password, rePassword);

    if (isEmptyError || isEmailError || isUsernameLengthError || isPasswordLengthError || isMatchError) {
    } else {
        alert('Đăng ký thành công');
        nextLogin.onclick(window.location.href = '../tab2/login2.html');
    }
})
