/* =========================================
   MEDICINE INFORMATION PORTAL
   USER AUTHENTICATION
========================================= */


/* =========================================
   GET USERS
========================================= */

function getUsers() {

    return JSON.parse(
        localStorage.getItem("medicinePortalUsers")
    ) || [];

}


/* =========================================
   SAVE USERS
========================================= */

function saveUsers(users) {

    localStorage.setItem(
        "medicinePortalUsers",
        JSON.stringify(users)
    );

}


/* =========================================
   PASSWORD VISIBILITY
========================================= */

function togglePassword(inputId, button) {

    const input =
        document.getElementById(inputId);

    if (!input) {
        return;
    }


    if (input.type === "password") {

        input.type = "text";

        button.innerHTML =
            '<i class="bi bi-eye-slash"></i>';

    } else {

        input.type = "password";

        button.innerHTML =
            '<i class="bi bi-eye"></i>';

    }

}


/* =========================================
   SHOW MESSAGE
========================================= */

function showAuthMessage(
    elementId,
    message,
    type
) {

    const element =
        document.getElementById(elementId);

    if (!element) {
        return;
    }


    element.className =
        "alert alert-" + type;

    element.textContent =
        message;

    element.style.display =
        "block";

}


/* =========================================
   REGISTER USER
========================================= */

function registerUser(event) {

    event.preventDefault();


    const name =
        document.getElementById("name")
            .value.trim();

    const email =
        document.getElementById("email")
            .value.trim()
            .toLowerCase();

    const password =
        document.getElementById("password")
            .value;

    const confirmPassword =
        document.getElementById("confirmPassword")
            .value;


    /* Basic validation */

    if (
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {

        showAuthMessage(
            "registerMessage",
            "Please fill in all fields.",
            "danger"
        );

        return;

    }


    /* Password length */

    if (password.length < 6) {

        showAuthMessage(
            "registerMessage",
            "Password must contain at least 6 characters.",
            "danger"
        );

        return;

    }


    /* Confirm password */

    if (password !== confirmPassword) {

        showAuthMessage(
            "registerMessage",
            "Passwords do not match.",
            "danger"
        );

        return;

    }


    /* Get existing users */

    const users =
        getUsers();


    /* Check duplicate email */

    const existingUser =
        users.find(function(user) {

            return user.email === email;

        });


    if (existingUser) {

        showAuthMessage(
            "registerMessage",
            "An account with this email already exists.",
            "warning"
        );

        return;

    }


    /* Create new user */

    const newUser = {

        id: Date.now(),

        name: name,

        email: email,

        password: password,

        createdAt:
            new Date().toISOString()

    };


    users.push(newUser);


    saveUsers(users);


    /* Success */

    showAuthMessage(
        "registerMessage",
        "Account created successfully! Redirecting to login...",
        "success"
    );


    document
        .getElementById("registerForm")
        .reset();


    setTimeout(function() {

        window.location.href =
            "login.html";

    }, 1500);

}


/* =========================================
   USER LOGIN
========================================= */

function loginUser(event) {

    event.preventDefault();


    const email =
        document.getElementById("email")
            .value.trim()
            .toLowerCase();

    const password =
        document.getElementById("password")
            .value;


    if (
        email === "" ||
        password === ""
    ) {

        showAuthMessage(
            "loginMessage",
            "Please enter your email and password.",
            "danger"
        );

        return;

    }


    const users =
        getUsers();


    /* Find matching user */

    const user =
        users.find(function(item) {

            return (
                item.email === email &&
                item.password === password
            );

        });


    if (!user) {

        showAuthMessage(
            "login
