/* =====================================================
   MEDINFO PORTAL - ADMIN AUTHENTICATION
   File: js/admin.js
   ===================================================== */

const ADMIN_USERS_KEY = "medinfo_admin_users";
const CURRENT_ADMIN_KEY = "medinfo_current_admin";


/* =====================================================
   DEFAULT ADMIN
   ===================================================== */

const DEFAULT_ADMIN = {
    id: "admin_001",
    name: "Administrator",
    email: "admin@medinfo.com",
    password: "admin123",
    role: "admin",
    createdAt: new Date().toISOString()
};


/* =====================================================
   GET ADMIN USERS
   ===================================================== */

function getAdminUsers() {

    try {

        const admins =
            JSON.parse(
                localStorage.getItem(
                    ADMIN_USERS_KEY
                )
            );

        if (
            Array.isArray(admins) &&
            admins.length > 0
        ) {

            return admins;

        }

    } catch (error) {

        console.error(
            "Unable to load admin users:",
            error
        );

    }


    localStorage.setItem(
        ADMIN_USERS_KEY,
        JSON.stringify([
            DEFAULT_ADMIN
        ])
    );


    return [
        DEFAULT_ADMIN
    ];

}


/* =====================================================
   SAVE ADMIN USERS
   ===================================================== */

function saveAdminUsers(
    admins
) {

    localStorage.setItem(
        ADMIN_USERS_KEY,
        JSON.stringify(admins)
    );

}


/* =====================================================
   GET CURRENT ADMIN
   ===================================================== */

function getCurrentAdmin() {

    try {

        return JSON.parse(
            localStorage.getItem(
                CURRENT_ADMIN_KEY
            )
        );

    } catch (error) {

        return null;

    }

}


/* =====================================================
   CHECK ADMIN LOGIN
   ===================================================== */

function isAdminLoggedIn() {

    return (
        getCurrentAdmin() !== null
    );

}


/* =====================================================
   ADMIN LOGIN
   ===================================================== */

function adminLogin(
    email,
    password
) {

    email =
        String(email || "")
            .trim()
            .toLowerCase();

    password =
        String(password || "");


    if (!email || !password) {

        return {

            success: false,

            message:
                "Please enter email and password."

        };

    }


    const admins =
        getAdminUsers();


    const admin =
        admins.find(
            function (item) {

                return (
                    item.email
                        .toLowerCase() ===
                    email &&
                    item.password ===
                    password
                );

            }
        );


    if (!admin) {

        return {

            success: false,

            message:
                "Invalid admin email or password."

        };

    }


    const session = {

        id: admin.id,

        name: admin.name,

        email: admin.email,

        role: "admin"

    };


    localStorage.setItem(

        CURRENT_ADMIN_KEY,

        JSON.stringify(session)

    );


    return {

        success: true,

        message:
            "Admin login successful.",

        admin: session

    };

}


/* =====================================================
   ADMIN REGISTER
   ===================================================== */

function registerAdmin(
    name,
    email,
    password
) {

    name =
        String(name || "").trim();

    email =
        String(email || "")
            .trim()
            .toLowerCase();

    password =
        String(password || "");


    if (name.length < 2) {

        return {

            success: false,

            message:
                "Please enter a valid name."

        };

    }


    if (
        !email ||
        !email.includes("@")
    ) {

        return {

            success: false,

            message:
                "Please enter a valid email address."

        };

    }


    if (password.length < 6) {

        return {

            success: false,

            message:
                "Password must contain at least 6 characters."

        };

    }


    const admins =
        getAdminUsers();


    const exists =
        admins.some(
            function (admin) {

                return (
                    admin.email
                        .toLowerCase() ===
                    email
                );

            }
        );


    if (exists) {

        return {

            success: false,

            message:
                "An admin account with this email already exists."

        };

    }


    const newAdmin = {

        id:
            "admin_" +
            Date.now(),

        name: name,

        email: email,

        password: password,

        role: "admin",

        createdAt:
            new Date().toISOString()

    };


    admins.push(
        newAdmin
    );


    saveAdminUsers(
        admins
    );


    return {

        success: true,

        message:
            "Admin account created successfully.",

        admin: {

            id: newAdmin.id,

            name: newAdmin.name,

            email: newAdmin.email,

            role: newAdmin.role

        }

    };

}


/* =====================================================
   ADMIN LOGOUT
   ===================================================== */

function adminLogout() {

    localStorage.removeItem(
        CURRENT_ADMIN_KEY
    );


    window.location.href =
        "login.html";

}


/* =====================================================
   PROTECT ADMIN PAGE
   ===================================================== */

function requireAdmin() {

    if (!isAdminLoggedIn()) {

        window.location.href =
            "login.html";

        return false;

    }


    return true;

}


/* =====================================================
   REDIRECT LOGGED-IN ADMIN
   ===================================================== */

function redirectLoggedInAdmin() {

    if (isAdminLoggedIn()) {

        window.location.href =
            "dashboard.html";

    }

}


/* =====================================================
   ADMIN LOGIN FORM
   ===================================================== */

function setupAdminLoginForm() {

    const form =
        document.getElementById(
            "adminLoginForm"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "adminEmail"
                )?.value || "";


            const password =
                document.getElementById(
                    "adminPassword"
                )?.value || "";


            const messageBox =
                document.getElementById(
                    "adminLoginMessage"
                );


            const result =
                adminLogin(
                    email,
                    password
                );


            if (!result.success) {

                showAdminMessage(
                    messageBox,
                    result.message,
                    "danger"
                );

                return;

            }


            showAdminMessage(
                messageBox,
                result.message,
                "success"
            );


            setTimeout(
                function () {

                    window.location.href =
                        "dashboard.html";

                },
                700
            );

        }
    );

}


/* =====================================================
   ADMIN REGISTER FORM
   ===================================================== */

function setupAdminRegisterForm() {

    const form =
        document.getElementById(
            "adminRegisterForm"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "adminName"
                )?.value || "";


            const email =
                document.getElementById(
                    "adminEmail"
                )?.value || "";


            const password =
                document.getElementById(
                    "adminPassword"
                )?.value || "";


            const confirmPassword =
                document.getElementById(
                    "adminConfirmPassword"
                )?.value || "";


            const messageBox =
                document.getElementById(
                    "adminRegisterMessage"
                );


            if (
                password !==
                confirmPassword
            ) {

                showAdminMessage(
                    messageBox,
                    "Passwords do not match.",
                    "danger"
                );

                return;

            }


            const result =
                registerAdmin(
                    name,
                    email,
                    password
                );


            if (!result.success) {

                showAdminMessage(
                    messageBox,
                    result.message,
                    "danger"
                );

                return;

            }


            showAdminMessage(
                messageBox,
                result.message,
                "success"
            );


            form.reset();


            setTimeout(
                function () {

                    window.location.href =
                        "login.html";

                },
                1200
            );

        }
    );

}


/* =====================================================
   ADMIN UI
   ===================================================== */

function updateAdminUI() {

    const admin =
        getCurrentAdmin();


    if (!admin) {
        return;
    }


    document
        .querySelectorAll(
            "[data-admin-name]"
        )
        .forEach(
            function (element) {

                element.textContent =
                    admin.name;

            }
        );


    document
        .querySelectorAll(
            "[data-admin-email]"
        )
        .forEach(
            function (element) {

                element.textContent =
                    admin.email;

            }
        );


    document
        .querySelectorAll(
            "[data-admin-initial]"
        )
        .forEach(
            function (element) {

                element.textContent =
                    admin.name
                        .charAt(0)
                        .toUpperCase();

            }
        );

}


/* =====================================================
   ADMIN LOGOUT BUTTON
   ===================================================== */

function setupAdminLogout() {

    document
        .querySelectorAll(
            "[data-admin-logout]"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        adminLogout();

                    }
                );

            }
        );

}


/* =====================================================
   SHOW ADMIN MESSAGE
   ===================================================== */

function showAdminMessage(
    element,
    message,
    type = "success"
) {

    if (!element) {

        alert(message);

        return;

    }


    element.className =
        "alert alert-" + type;


    element.textContent =
        message;


    element.style.display =
        "block";

}


/* =====================================================
   ADMIN PAGE INITIALIZATION
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupAdminLoginForm();

        setupAdminRegisterForm();

        setupAdminLogout();

        updateAdminUI();

    }
);
