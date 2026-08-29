/* =====================================================
   MEDINFO PORTAL - AUTHENTICATION
   File: js/auth.js
   ===================================================== */


/* =====================================================
   STORAGE KEYS
   ===================================================== */

const AUTH_USERS_KEY = "medinfo_users";
const CURRENT_USER_KEY = "medinfo_current_user";


/* =====================================================
   GET USERS
   ===================================================== */

function getUsers() {

    try {

        return JSON.parse(
            localStorage.getItem(AUTH_USERS_KEY)
        ) || [];

    } catch (error) {

        console.error("Unable to load users:", error);

        return [];

    }
}


/* =====================================================
   SAVE USERS
   ===================================================== */

function saveUsers(users) {

    localStorage.setItem(
        AUTH_USERS_KEY,
        JSON.stringify(users)
    );

}


/* =====================================================
   GET CURRENT USER
   ===================================================== */

function getCurrentUser() {

    try {

        return JSON.parse(
            localStorage.getItem(CURRENT_USER_KEY)
        );

    } catch (error) {

        return null;

    }
}


/* =====================================================
   CHECK LOGIN
   ===================================================== */

function isLoggedIn() {

    return getCurrentUser() !== null;

}


/* =====================================================
   REGISTER USER
   ===================================================== */

function registerUser(name, email, password) {

    name = String(name || "").trim();
    email = String(email || "").trim().toLowerCase();
    password = String(password || "");


    if (name.length < 2) {

        return {
            success: false,
            message: "Please enter a valid name."
        };

    }


    if (!email || !email.includes("@")) {

        return {
            success: false,
            message: "Please enter a valid email address."
        };

    }


    if (password.length < 6) {

        return {
            success: false,
            message: "Password must contain at least 6 characters."
        };

    }


    const users = getUsers();


    const existingUser =
        users.find(
            user => user.email === email
        );


    if (existingUser) {

        return {
            success: false,
            message: "An account with this email already exists."
        };

    }


    const newUser = {

        id:
            "user_" +
            Date.now(),

        name: name,

        email: email,

        password: password,

        role: "user",

        createdAt:
            new Date().toISOString()

    };


    users.push(newUser);

    saveUsers(users);


    return {

        success: true,

        message:
            "Registration successful! You can now login.",

        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role
        }

    };

}


/* =====================================================
   LOGIN USER
   ===================================================== */

function loginUser(email, password) {

    email =
        String(email || "")
            .trim()
            .toLowerCase();

    password =
        String(password || "");


    const users = getUsers();


    const user =
        users.find(
            item =>
                item.email === email &&
                item.password === password
        );


    if (!user) {

        return {

            success: false,

            message:
                "Invalid email or password."

        };

    }


    const sessionUser = {

        id: user.id,

        name: user.name,

        email: user.email,

        role: user.role

    };


    localStorage.setItem(

        CURRENT_USER_KEY,

        JSON.stringify(sessionUser)

    );


    return {

        success: true,

        message: "Login successful.",

        user: sessionUser

    };

}


/* =====================================================
   LOGOUT
   ===================================================== */

function logoutUser() {

    localStorage.removeItem(
        CURRENT_USER_KEY
    );


    window.location.href =
        "index.html";

}


/* =====================================================
   REQUIRE LOGIN
   ===================================================== */

function requireLogin() {

    if (!isLoggedIn()) {

        window.location.href =
            "login.html";

        return false;

    }

    return true;

}


/* =====================================================
   REDIRECT IF ALREADY LOGGED IN
   ===================================================== */

function redirectIfLoggedIn() {

    if (isLoggedIn()) {

        window.location.href =
            "profile.html";

    }

}


/* =====================================================
   SHOW USER INFORMATION
   ===================================================== */

function updateUserUI() {

    const user = getCurrentUser();


    if (!user) {
        return;
    }


    const userNameElements =
        document.querySelectorAll(
            "[data-user-name]"
        );


    userNameElements.forEach(
        element => {

            element.textContent =
                user.name;

        }
    );


    const userEmailElements =
        document.querySelectorAll(
            "[data-user-email]"
        );


    userEmailElements.forEach(
        element => {

            element.textContent =
                user.email;

        }
    );


    const userInitialElements =
        document.querySelectorAll(
            "[data-user-initial]"
        );


    userInitialElements.forEach(
        element => {

            element.textContent =
                user.name
                    .charAt(0)
                    .toUpperCase();

        }
    );

}


/* =====================================================
   PROTECT USER PAGES
   ===================================================== */

function protectPage() {

    const protectedPage =
        document.body.dataset.protected;


    if (
        protectedPage === "true" &&
        !isLoggedIn()
    ) {

        window.location.href =
            "login.html";

    }

}


/* =====================================================
   AUTO LOGIN UI
   ===================================================== */

function setupAuthUI() {

    const user =
        getCurrentUser();


    const loginButtons =
        document.querySelectorAll(
            "[data-login-button]"
        );


    const logoutButtons =
        document.querySelectorAll(
            "[data-logout-button]"
        );


    if (user) {

        loginButtons.forEach(
            button => {

                button.textContent =
                    "Profile";

                button.href =
                    "profile.html";

            }
        );


        logoutButtons.forEach(
            button => {

                button.style.display =
                    "inline-block";

            }
        );

    } else {

        logoutButtons.forEach(
            button => {

                button.style.display =
                    "none";

            }
        );

    }

}


/* =====================================================
   REGISTER FORM
   ===================================================== */

function setupRegisterForm() {

    const form =
        document.getElementById(
            "registerForm"
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
                    "name"
                )?.value;


            const email =
                document.getElementById(
                    "email"
                )?.value;


            const password =
                document.getElementById(
                    "password"
                )?.value;


            const confirmPassword =
                document.getElementById(
                    "confirmPassword"
                )?.value;


            const messageBox =
                document.getElementById(
                    "registerMessage"
                );


            if (
                confirmPassword !==
                password
            ) {

                showAuthMessage(
                    messageBox,
                    "Passwords do not match.",
                    "danger"
                );

                return;

            }


            const result =
                registerUser(
                    name,
                    email,
                    password
                );


            if (!result.success) {

                showAuthMessage(
                    messageBox,
                    result.message,
                    "danger"
                );

                return;

            }


            showAuthMessage(
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
   LOGIN FORM
   ===================================================== */

function setupLoginForm() {

    const form =
        document.getElementById(
            "loginForm"
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
                    "email"
                )?.value;


            const password =
                document.getElementById(
                    "password"
                )?.value;


            const messageBox =
                document.getElementById(
                    "loginMessage"
                );


            const result =
                loginUser(
                    email,
                    password
                );


            if (!result.success) {

                showAuthMessage(
                    messageBox,
                    result.message,
                    "danger"
                );

                return;

            }


            showAuthMessage(
                messageBox,
                result.message,
                "success"
            );


            setTimeout(
                function () {

                    window.location.href =
                        "profile.html";

                },
                700
            );

        }
    );

}


/* =====================================================
   AUTH MESSAGE
   ===================================================== */

function showAuthMessage(
    element,
    message,
    type
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
   LOGOUT BUTTONS
   ===================================================== */

function setupLogoutButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-logout-button]"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    logoutUser();

                }
            );

        }
    );

}


/* =====================================================
   PROFILE DATA
   ===================================================== */

function loadProfileData() {

    const user =
        getCurrentUser();


    if (!user) {
        return;
    }


    const name =
        document.getElementById(
            "profileName"
        );


    const email =
        document.getElementById(
            "profileEmail"
        );


    const role =
        document.getElementById(
            "profileRole"
        );


    const initial =
        document.getElementById(
            "profileInitial"
        );


    if (name) {

        name.textContent =
            user.name;

    }


    if (email) {

        email.textContent =
            user.email;

    }


    if (role) {

        role.textContent =
            user.role === "admin"
                ? "Administrator"
                : "User";

    }


    if (initial) {

        initial.textContent =
            user.name
                .charAt(0)
                .toUpperCase();

    }

}


/* =====================================================
   PAGE INITIALIZATION
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        protectPage();

        setupRegisterForm();

        setupLoginForm();

        setupLogoutButtons();

        updateUserUI();

        setupAuthUI();

        loadProfileData();

    }
);
