/* =========================================
   MEDICINE INFORMATION PORTAL
   JAVASCRIPT
========================================= */


/* =========================================
   SEARCH MEDICINE
========================================= */

function searchMedicine() {

    const searchInput = document.getElementById("medicineSearch");

    if (!searchInput) {
        return;
    }

    const medicineName = searchInput.value.trim();

    if (medicineName === "") {

        alert("Please enter a medicine name.");

        searchInput.focus();

        return;
    }

    /*
        Redirect the user to the Medicines page
        with the medicine name in the URL.
    */

    window.location.href =
        "medicines.html?search=" +
        encodeURIComponent(medicineName);
}


/* =========================================
   SEARCH USING ENTER KEY
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput =
        document.getElementById("medicineSearch");

    if (searchInput) {

        searchInput.addEventListener("keypress", function (event) {

            if (event.key === "Enter") {

                searchMedicine();

            }

        });

    }

});


/* =========================================
   SMOOTH SCROLL
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (targetId !== "#") {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });

});


/* =========================================
   CURRENT YEAR IN FOOTER
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const yearElements =
        document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });

});
