/* =========================================================
   ADMIN DASHBOARD
   Medicine Information Portal
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    loadDashboard();

});


/* =========================================================
   LOAD DASHBOARD
   ========================================================= */

function loadDashboard() {

    const medicines = getStorageArray("medicines");
    const users = getStorageArray("users");
    const feedback = getStorageArray("feedback");

    updateNumber(
        "dashboardMedicines",
        medicines.length
    );

    updateNumber(
        "dashboardUsers",
        users.length
    );

    updateNumber(
        "dashboardFeedback",
        feedback.length
    );

    updateNumber(
        "dashboardCategories",
        getCategoryCount(medicines)
    );

    loadRecentMedicines(medicines);

    loadAdminInformation();

}


/* =========================================================
   GET LOCAL STORAGE ARRAY
   ========================================================= */

function getStorageArray(key) {

    try {

        const data = localStorage.getItem(key);

        if (!data) {
            return [];
        }

        const parsed = JSON.parse(data);

        return Array.isArray(parsed)
            ? parsed
            : [];

    } catch (error) {

        console.error(
            "Error reading " + key,
            error
        );

        return [];

    }

}


/* =========================================================
   UPDATE NUMBER
   ========================================================= */

function updateNumber(id, value) {

    const element =
        document.getElementById(id);

    if (!element) {
        return;
    }

    element.textContent =
        Number(value) || 0;

}


/* =========================================================
   CATEGORY COUNT
   ========================================================= */

function getCategoryCount(medicines) {

    const categories = new Set();

    medicines.forEach(function (medicine) {

        if (
            medicine.category &&
            String(medicine.category).trim()
        ) {

            categories.add(
                String(
                    medicine.category
                ).trim().toLowerCase()
            );

        }

    });

    return categories.size;

}


/* =========================================================
   RECENT MEDICINES
   ========================================================= */

function loadRecentMedicines(medicines) {

    const tbody =
        document.getElementById(
            "recentMedicinesBody"
        );

    const empty =
        document.getElementById(
            "noRecentMedicines"
        );


    if (!tbody) {
        return;
    }


    tbody.innerHTML = "";


    if (!medicines.length) {

        if (empty) {
            empty.classList.remove("d-none");
        }

        return;

    }


    if (empty) {
        empty.classList.add("d-none");
    }


    const sortedMedicines =
        [...medicines].sort(
            function (a, b) {

                return (
                    getDateValue(b) -
                    getDateValue(a)
                );

            }
        );


    const recent =
        sortedMedicines.slice(0, 5);


    recent.forEach(
        function (medicine) {

            const row =
                document.createElement("tr");


            const name =
                medicine.name ||
                "Unknown Medicine";


            const category =
                medicine.category ||
                "Other";


            const manufacturer =
                medicine.manufacturer ||
                "Not available";


            row.innerHTML = `

                <td>

                    <div
                        class="d-flex
                               align-items-center
                               gap-3">

                        <div
                            class="medicine-mini-icon">

                            <i
                                class="bi bi-capsule">
                            </i>

                        </div>

                        <div>

                            <strong
                                class="d-block">

                                ${escapeHTML(name)}

                            </strong>

                            <small
                                class="text-muted">

                                ${escapeHTML(
                                    medicine.genericName ||
                                    "Medicine"
                                )}

                            </small>

                        </div>

                    </div>

                </td>


                <td>

                    <span
                        class="badge
                               bg-primary-subtle
                               text-primary">

                        ${escapeHTML(category)}

                    </span>

                </td>


                <td>

                    <small>

                        ${escapeHTML(
                            manufacturer
                        )}

                    </small>

                </td>


                <td>

                    <small
                        class="text-muted">

                        ${formatDate(
                            medicine.createdAt ||
                            medicine.updatedAt
                        )}

                    </small>

                </td>

            `;


            tbody.appendChild(row);

        }
    );

}


/* =========================================================
   ADMIN INFORMATION
   ========================================================= */

function loadAdminInformation() {

    let admin = null;


    try {

        const storedAdmin =
            localStorage.getItem(
                "adminUser"
            );


        if (storedAdmin) {

            admin =
                JSON.parse(
                    storedAdmin
                );

        }

    } catch (error) {

        console.error(
            "Admin information error:",
            error
        );

    }


    /*
     * Support different storage names
     */

    if (!admin) {

        try {

            const currentAdmin =
                localStorage.getItem(
                    "currentAdmin"
                );


            if (currentAdmin) {

                admin =
                    JSON.parse(
                        currentAdmin
                    );

            }

        } catch (error) {

            console.error(error);

        }

    }


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

}


/* =========================================================
   DATE VALUE
   ========================================================= */

function getDateValue(medicine) {

    if (!medicine) {
        return 0;
    }


    const date =
        medicine.createdAt ||
        medicine.updatedAt ||
        medicine.date;


    if (!date) {
        return 0;
    }


    const time =
        new Date(date).getTime();


    return Number.isNaN(time)
        ? 0
        : time;

}


/* =========================================================
   FORMAT DATE
   ========================================================= */

function formatDate(value) {

    if (!value) {
        return "Recently";
    }


    const date =
        new Date(value);


    if (Number.isNaN(
        date.getTime()
    )) {

        return "Recently";

    }


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent =
        value ?? "";

    return div.innerHTML;

}
