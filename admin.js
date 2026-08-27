/* =========================================
   MEDINFO PORTAL - ADMIN AUTHENTICATION
========================================= */


/* =========================================
   GET ADMINS
========================================= */

function getAdmins() {

    return JSON.parse(
        localStorage.getItem("medicinePortalAdmins")
    ) || [];

}


/* =========================================
   SAVE ADMINS
========================================= */

function saveAdmins(admins) {

    localStorage.setItem(
        "medicinePortalAdmins",
        JSON.stringify(admins)
    );

}


/* =========================================
   SHOW ADMIN MESSAGE
========================================= */

function showAdminMessage(
    message,
    type,
    elementId
) {

    const messageBox =
        document.getElementById(elementId);

    if (!messageBox) {
        return;
    }

    messageBox.className =
        "alert alert-" + type;

    messageBox.textContent =
        message;

    messageBox.style.display =
        "block";

}


/* =========================================
   PASSWORD VISIBILITY
========================================= */

function toggleAdminPassword(
    inputId,
    button
) {

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
   ADMIN REGISTER
========================================= */

function registerAdmin(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "adminName"
        ).value.trim();


    const email =
        document.getElementById(
            "adminEmail"
        ).value.trim().toLowerCase();


    const password =
        document.getElementById(
            "adminPassword"
        ).value;


    const confirmPassword =
        document.getElementById(
            "adminConfirmPassword"
        ).value;


    /* Empty field validation */

    if (
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {

        showAdminMessage(
            "Please fill in all fields.",
            "danger",
            "adminRegisterMessage"
        );

        return;

    }


    /* Password length */

    if (password.length < 6) {

        showAdminMessage(
            "Password must contain at least 6 characters.",
            "danger",
            "adminRegisterMessage"
        );

        return;

    }


    /* Password match */

    if (password !== confirmPassword) {

        showAdminMessage(
            "Passwords do not match.",
            "danger",
            "adminRegisterMessage"
        );

        return;

    }


    /* Get existing admins */

    const admins =
        getAdmins();


    /* Check duplicate email */

    const existingAdmin =
        admins.find(function(admin) {

            return admin.email === email;

        });


    if (existingAdmin) {

        showAdminMessage(
            "An admin account with this email already exists.",
            "warning",
            "adminRegisterMessage"
        );

        return;

    }


    /* Create admin */

    const newAdmin = {

        id: Date.now(),

        name: name,

        email: email,

        password: password,

        role: "admin",

        createdAt:
            new Date().toISOString()

    };


    admins.push(newAdmin);


    saveAdmins(admins);


    showAdminMessage(
        "Admin account created successfully! Redirecting to login...",
        "success",
        "adminRegisterMessage"
    );


    document
        .getElementById(
            "adminRegisterForm"
        )
        .reset();


    setTimeout(function() {

        window.location.href =
            "login.html";

    }, 1500);

}


/* =========================================
   ADMIN LOGIN
========================================= */

function loginAdmin(event) {

    event
