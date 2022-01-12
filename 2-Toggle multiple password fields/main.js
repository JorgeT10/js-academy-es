// //V1 Using a variable for each password.
// const showPasswordToggle = document.getElementById("show-passwords");
// let currentPassword = document.getElementById("current-password");
// let newPassword = document.getElementById("new-password");

// showPasswordToggle.addEventListener('click', function (e) {
//     if (showPasswordToggle.checked) {
//         currentPassword.type = "text";
//         newPassword.type = "text";
//     } else {
//         currentPassword.type = "password";
//         newPassword.type = "password";
//        }
// });

//V2 Using querySelectorAll and Foreach loop
const showPasswordToggle = document.getElementById("show-passwords");
let passwords = document.querySelectorAll("input[type='password']");

showPasswordToggle.addEventListener('click', function (e) {
    passwords.forEach(function (password) {
        if (showPasswordToggle.checked) {
            password.type = "text";
        } else {
            password.type = "password";
        }
    });
});