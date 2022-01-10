const showPassword = document.getElementById("show-password");
let password = document.getElementById("password");

showPassword.addEventListener('click', function (e) {
    if (showPassword.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
});