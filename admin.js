/* =====================================================
   MEDICINE INFORMATION PORTAL
   File: js/admin.js
   ===================================================== */

const ADMIN_USERS_KEY = "medinfo_admin_users";
const ADMIN_SESSION_KEY = "medinfo_admin_session";


/* =====================================================
   DEFAULT ADMIN
   ===================================================== */

const DEFAULT_ADMIN = {
    id: "ADMIN001",
    name: "Portal Admin",
    email: "admin@medicineportal.com",
    password: "admin123",
    role: "admin",
    createdAt: new Date().toISOString()
};


/* =====================================================
   INITIALIZE ADMIN SYSTEM
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    initializeAdminSystem();

});


function initializeAdminSystem() {

    let admins = [];

    try {

        admins =
            JSON.parse(
                localStorage.getItem(
                    ADMIN_USERS_KEY
                )
            );

    } catch (error) {

        admins = [];

    }


    if (
        !Array.isArray(admins) ||
        admins.length === 0
    ) {

        localStorage.setItem(
            ADMIN_USERS_KEY,
            JSON.stringify([
                DEFAULT_ADMIN
            ])
        );

    }

}


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

        return Array.isArray(admins)
            ? admins
            : [];

    } catch (error) {

        return [];

    }

}


/* =====================================================
   SAVE ADMIN USERS
   ===================================================== */

function saveAdminUsers(admins) {

    localStorage.setItem(
        ADMIN_USERS_KEY,
        JSON.stringify(admins)
    );

}


/* =====================================================
   REGISTER ADMIN
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


    if (!name) {

        return {
            success: false,
            message: "Please enter admin name."
        };

    }


    if (!email) {

        return {
            success: false,
            message: "Please enter email address."
        };

    }


    if (!isValidEmail(email)) {

        return {
            success: false,
            message: "Please enter a valid email address."
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
            admin =>
                admin.email === email
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
            "ADMIN" +
            Date.now(),

        name:
            name,

        email:
            email,

        password:
            password,

        role:
            "admin",

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

        admin:
            newAdmin

    };

}


/* =====================================================
   ADMIN LOGIN
   ===================================================== */

function loginAdmin(
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
            user =>
                user.email === email &&
                user.password === password
        );


    if (!admin) {

        return {

            success: false,

            message:
                "Invalid admin email or password."

        };

    }


    const session = {

        id:
            admin.id,

        name:
            admin.name,

        email:
            admin.email,

        role:
            admin.role,

        loginTime:
            new Date().toISOString()

    };


    localStorage.setItem(
        ADMIN_SESSION_KEY,
        JSON.stringify(session)
    );


    return {

        success: true,

        message:
            "Login successful.",

        admin:
            session

    };

}


/* =====================================================
   GET CURRENT ADMIN
   ===================================================== */

function getCurrentAdmin() {

    try {

        return JSON.parse(
            localStorage.getItem(
                ADMIN_SESSION_KEY
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

    const admin =
        getCurrentAdmin();


    return !!(
        admin &&
        admin.id &&
        admin.role === "admin"
    );

}


/* =====================================================
   REQUIRE ADMIN LOGIN
   ===================================================== */

function requireAdminLogin() {

    if (!isAdminLoggedIn()) {

        window.location.href =
            "login.html";

        return false;

    }


    return true;

}


/* =====================================================
   REQUIRE ADMIN LOGIN
   FOR ADMIN FOLDER
   ===================================================== */

function requireAdminAuth() {

    if (!isAdminLoggedIn()) {

        window.location.href =
            "login.html";

        return false;

    }


    return true;

}


/* =====================================================
   LOGOUT
   ===================================================== */

function logoutAdmin() {

    localStorage.removeItem(
        ADMIN_SESSION_KEY
    );


    window.location.href =
        "login.html";

}


/* =====================================================
   ADMIN REGISTER PAGE HELPER
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
                )?.value;


            const email =
                document.getElementById(
                    "adminEmail"
                )?.value;


            const password =
                document.getElementById(
                    "adminPassword"
                )?.value;


            const confirmPassword =
                document.getElementById(
                    "adminConfirmPassword"
                )?.value;


            if (
                password !==
                confirmPassword
            ) {

                showAdminMessage(
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


            showAdminMessage(
                result.message,
                result.success
                    ? "success"
                    : "danger"
            );


            if (result.success) {

                form.reset();


                setTimeout(
                    function () {

                        window.location.href =
                            "login.html";

                    },
                    1200
                );

            }

        }
    );

}


/* =====================================================
   ADMIN LOGIN PAGE HELPER
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
                )?.value;


            const password =
                document.getElementById(
                    "adminPassword"
                )?.value;


            const result =
                loginAdmin(
                    email,
                    password
                );


            showAdminMessage(
                result.message,
                result.success
                    ? "success"
                    : "danger"
            );


            if (result.success) {

                setTimeout(
                    function () {

                        window.location.href =
                            "dashboard.html";

                    },
                    500
                );

            }

        }
    );

}


/* =====================================================
   ADMIN MESSAGE
   ===================================================== */

function showAdminMessage(
    message,
    type = "info"
) {

    let box =
        document.getElementById(
            "adminMessage"
        );


    if (!box) {

        box =
            document.createElement(
                "div"
            );

        box.id =
            "adminMessage";

        box.className =
            "alert mt-3";


        const form =
            document.querySelector(
                "form"
            );


        if (form) {

            form.parentNode.insertBefore(
                box,
                form.nextSibling
            );

        } else {

            document.body.prepend(
                box
            );

        }

    }


    box.className =
        "alert alert-" +
        type +
        " mt-3";


    box.textContent =
        message;


    box.style.display =
        "block";

}


/* =====================================================
   UPDATE ADMIN UI
   ===================================================== */

function updateAdminUI() {

    const admin =
        getCurrentAdmin();


    document
        .querySelectorAll(
            "[data-admin-name]"
        )
        .forEach(
            function (element) {

                element.textContent =
                    admin?.name ||
                    "Admin";

            }
        );


    document
        .querySelectorAll(
            "[data-admin-email]"
        )
        .forEach(
            function (element) {

                element.textContent =
                    admin?.email ||
                    "";

            }
        );

}


/* =====================================================
   EMAIL VALIDATION
   ===================================================== */

function isValidEmail(
    email
) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}


/* =====================================================
   DELETE ADMIN
   ===================================================== */

function deleteAdmin(
    adminId
) {

    const currentAdmin =
        getCurrentAdmin();


    if (
        currentAdmin &&
        currentAdmin.id === adminId
    ) {

        return {

            success: false,

            message:
                "You cannot delete the currently logged-in admin."

        };

    }


    const admins =
        getAdminUsers();


    const updated =
        admins.filter(
            admin =>
                admin.id !== adminId
        );


    if (
        updated.length ===
        admins.length
    ) {

        return {

            success: false,

            message:
                "Admin not found."

        };

    }


    saveAdminUsers(
        updated
    );


    return {

        success: true,

        message:
            "Admin deleted successfully."

    };

}


/* =====================================================
   INITIALIZE PAGE HELPERS
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupAdminLoginForm();

        setupAdminRegisterForm();

        updateAdminUI();

    }
);
