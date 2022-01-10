addEventListener('click', function (e) {
    const showPass = document.getElementById("show-password");
    let password = document.getElementById("password");

    if (showPass.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
});