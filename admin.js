/* =========================================================
   ADMIN.JS
   Medicine Information Portal
   Admin Authentication & Common Functions
   ========================================================= */


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    checkAdminAccess();

    loadAdminProfile();

});


/* =========================================================
   CHECK ADMIN ACCESS
   ========================================================= */

function checkAdminAccess() {

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    /*
     * Login and register pages should be accessible
     * without admin login.
     */

    const publicPages = [
        "login.html",
        "register.html",
        "admin.html"
    ];


    if (
        publicPages.includes(currentPage) ||
        currentPage === ""
    ) {

        return;

    }


    const adminLoggedIn =
        localStorage.getItem(
            "adminLoggedIn"
        );


    if (
        adminLoggedIn !== "true"
    ) {

        /*
         * Prevent redirect loop
         */

        if (
            !window.location.pathname
                .includes("/admin/")
        ) {

            return;

        }


        window.location.href =
            "login.html";

    }

}


/* =========================================================
   GET CURRENT ADMIN
   ========================================================= */

function getCurrentAdmin() {

    try {

        const data =
            localStorage.getItem(
                "adminUser"
            );


        if (!data) {

            return null;

        }


        return JSON.parse(data);

    }
    catch (error) {

        console.error(
            "Unable to read admin data:",
            error
        );


        return null;

    }

}


/* =========================================================
   LOAD ADMIN PROFILE
   ========================================================= */

function loadAdminProfile() {

    const admin =
        getCurrentAdmin();


    if (!admin) {

        return;

    }


    const name =
        admin.name ||
        admin.fullName ||
        admin.username ||
        "Admin";


    const email =
        admin.email ||
        "admin@medicineportal.com";


    /*
     * Elements using data attributes
     */

    document
        .querySelectorAll(
            "[data-admin-name]"
        )
        .forEach(
            function (element) {

                element.textContent =
                    name;

            }
        );


    document
        .querySelectorAll(
            "[data-admin-email]"
        )
        .forEach(
            function (element) {

                element.textContent =
                    email;

            }
        );


    /*
     * Normal ID based elements
     */

    const adminName =
        document.getElementById(
            "adminName"
        );


    if (adminName) {

        adminName.textContent =
            name;

    }


    const adminEmail =
        document.getElementById(
            "adminEmail"
        );


    if (adminEmail) {

        adminEmail.textContent =
            email;

    }

}


/* =========================================================
   ADMIN LOGIN
   ========================================================= */

function loginAdmin(
    email,
    password
) {

    const admins =
        getAdmins();


    const admin =
        admins.find(
            function (item) {

                return (
                    String(
                        item.email || ""
                    )
                    .toLowerCase()
                    ===
                    String(
                        email || ""
                    )
                    .trim()
                    .toLowerCase()
                    &&
                    String(
                        item.password || ""
                    )
                    ===
                    String(
                        password || ""
                    )
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


    localStorage.setItem(
        "adminLoggedIn",
        "true"
    );


    localStorage.setItem(
        "adminUser",
        JSON.stringify(admin)
    );


    localStorage.setItem(
        "currentAdmin",
        JSON.stringify(admin)
    );


    return {
        success: true,
        admin: admin
    };

}


/* =========================================================
   GET ADMINS
   ========================================================= */

function getAdmins() {

    try {

        const data =
            localStorage.getItem(
                "admins"
            );


        if (!data) {

            /*
             * Demo admin account
             */

            const demoAdmin = {

                id: "ADMIN-001",

                name: "Portal Admin",

                email:
                    "admin@medicineportal.com",

                password: "admin123",

                role: "admin",

                createdAt:
                    new Date().toISOString()

            };


            localStorage.setItem(
                "admins",
                JSON.stringify([
                    demoAdmin
                ])
            );


            return [
                demoAdmin
            ];

        }


        const admins =
            JSON.parse(data);


        return Array.isArray(admins)
            ? admins
            : [];

    }
    catch (error) {

        console.error(
            "Error loading admins:",
            error
        );


        return [];

    }

}


/* =========================================================
   ADMIN LOGOUT
   ========================================================= */

function logoutAdmin() {

    const confirmed =
        confirm(
            "Are you sure you want to logout?"
        );


    if (!confirmed) {

        return;

    }


    localStorage.removeItem(
        "adminLoggedIn"
    );


    localStorage.removeItem(
        "adminUser"
    );


    localStorage.removeItem(
        "currentAdmin"
    );


    window.location.href =
        "login.html";

}


/* =========================================================
   CREATE ADMIN
   ========================================================= */

function registerAdmin(
    name,
    email,
    password
) {

    const admins =
        getAdmins();


    const cleanName =
        String(
            name || ""
        ).trim();


    const cleanEmail =
        String(
            email || ""
        )
        .trim()
        .toLowerCase();


    const cleanPassword =
        String(
            password || ""
        );


    if (
        !cleanName ||
        !cleanEmail ||
        !cleanPassword
    ) {

        return {
            success: false,
            message:
                "Please fill all required fields."
        };

    }


    const exists =
        admins.some(
            function (admin) {

                return (
                    String(
                        admin.email || ""
                    )
                    .toLowerCase()
                    ===
                    cleanEmail
                );

            }
        );


    if (exists) {

        return {
            success: false,
            message:
                "An admin with this email already exists."
        };

    }


    const newAdmin = {

        id:
            "ADMIN-" +
            Date.now(),

        name:
            cleanName,

        email:
            cleanEmail,

        password:
            cleanPassword,

        role:
            "admin",

        createdAt:
            new Date().toISOString()

    };


    admins.push(
        newAdmin
    );


    localStorage.setItem(
        "admins",
        JSON.stringify(
            admins
        )
    );


    return {
        success: true,
        admin: newAdmin
    };

}


/* =========================================================
   ADMIN STATUS
   ========================================================= */

function isAdminLoggedIn() {

    return (
        localStorage.getItem(
            "adminLoggedIn"
        ) === "true"
    );

}


/* =========================================================
   GET ADMIN NAME
   ========================================================= */

function getAdminName() {

    const admin =
        getCurrentAdmin();


    if (!admin) {

        return "Admin";

    }


    return (
        admin.name ||
        admin.fullName ||
        admin.username ||
        "Admin"
    );

}


/* =========================================================
   DASHBOARD STATISTICS
   ========================================================= */

function getAdminStatistics() {

    const medicines =
        getArrayFromStorage(
            "medicines"
        );


    const users =
        getArrayFromStorage(
            "users"
        );


    const feedback =
        getArrayFromStorage(
            "feedback"
        );


    const categories =
        new Set();


    medicines.forEach(
        function (medicine) {

            if (medicine.category) {

                categories.add(
                    String(
                        medicine.category
                    )
                    .trim()
                    .toLowerCase()
                );

            }

        }
    );


    return {

        medicines:
            medicines.length,

        users:
            users.length,

        feedback:
            feedback.length,

        categories:
            categories.size

    };

}


/* =========================================================
   GENERIC STORAGE ARRAY
   ========================================================= */

function getArrayFromStorage(
    key
) {

    try {

        const data =
            localStorage.getItem(
                key
            );


        if (!data) {

            return [];

        }


        const parsed =
            JSON.parse(data);


        return Array.isArray(parsed)
            ? parsed
            : [];

    }
    catch (error) {

        console.error(
            "Storage error:",
            key,
            error
        );


        return [];

    }

}


/* =========================================================
   SHOW ADMIN MESSAGE
   ========================================================= */

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
            "alert";


        document.body.prepend(
            box
        );

    }


    box.className =
        "alert alert-" +
        type;


    box.textContent =
        message;


    box.style.position =
        "fixed";


    box.style.top =
        "20px";


    box.style.right =
        "20px";


    box.style.zIndex =
        "99999";


    box.style.minWidth =
        "280px";


    setTimeout(
        function () {

            if (box) {

                box.remove();

            }

        },
        3500
    );

}


/* =========================================================
   INITIALIZE DEMO ADMIN
   ========================================================= */

(function initializeDemoAdmin() {

    try {

        const admins =
            localStorage.getItem(
                "admins"
            );


        if (!admins) {

            const demoAdmin = {

                id: "ADMIN-001",

                name: "Portal Admin",

                email:
                    "admin@medicineportal.com",

                password:
                    "admin123",

                role:
                    "admin",

                createdAt:
                    new Date().toISOString()

            };


            localStorage.setItem(
                "admins",
                JSON.stringify([
                    demoAdmin
                ])
            );

        }

    }
    catch (error) {

        console.error(
            "Demo admin initialization failed:",
            error
        );

    }

})();
