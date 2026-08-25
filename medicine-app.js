/* =========================================
   MEDICINE INFORMATION PORTAL
   DYNAMIC MEDICINE APPLICATION
========================================= */


/* =========================================
   GET MEDICINE LIST
========================================= */

function getMedicineList() {

    if (typeof medicineData === "undefined") {

        console.error("Medicine data file not loaded.");

        return [];

    }

    return medicineData;

}


/* =========================================
   CREATE MEDICINE CARD
========================================= */

function createMedicineCard(medicine) {

    return `
        <div class="col-md-6 col-lg-4 medicine-card">

            <div class="card h-100 shadow-sm border-0">

                <div class="card-body text-center p-4">

                    <div class="feature-icon mb-3">

                        <i class="bi bi-capsule"></i>

                    </div>

                    <h4 class="card-title">
                        ${medicine.name}
                    </h4>

                    <p class="text-primary fw-semibold">
                        ${medicine.category}
                    </p>

                    <p class="text-muted">
                        ${medicine.uses}
                    </p>

                    <a
                        href="medicine-details.html?medicine=${medicine.id}"
                        class="btn btn-outline-primary">

                        <i class="bi bi-eye"></i>

                        View Details

                    </a>

                </div>

            </div>

        </div>
    `;
}


/* =========================================
   DISPLAY ALL MEDICINES
========================================= */

function displayMedicines(list = getMedicineList()) {

    const container =
        document.getElementById("medicineContainer");

    const noMedicine =
        document.getElementById("noMedicine");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    if (list.length === 0) {

        if (noMedicine) {
            noMedicine.style.display = "block";
        }

        return;
    }


    list.forEach(function(medicine) {

        container.innerHTML +=
            createMedicineCard(medicine);

    });


    if (noMedicine) {
        noMedicine.style.display = "none";
    }

}


/* =========================================
   SEARCH MEDICINES
========================================= */

function searchMedicineList() {

    const searchBox =
        document.getElementById("medicineListSearch");


    if (!searchBox) {
        return;
    }


    const searchText =
        searchBox.value.toLowerCase().trim();


    const allMedicines =
        getMedicineList();


    const filteredMedicines =
        allMedicines.filter(function(medicine) {

            return (

                medicine.name
                    .toLowerCase()
                    .includes(searchText)

                ||

                medicine.category
                    .toLowerCase()
                    .includes(searchText)

                ||

                medicine.uses
                    .toLowerCase()
                    .includes(searchText)

            );

        });


    displayMedicines(filteredMedicines);

}


/* =========================================
   SEARCH ON ENTER KEY
========================================= */

function enableMedicineSearch() {

    const searchBox =
        document.getElementById("medicineListSearch");


    if (!searchBox) {
        return;
    }


    searchBox.addEventListener(
        "keyup",
        function(event) {

            if (event.key === "Enter") {

                searchMedicineList();

            }

        }
    );

}


/* =========================================
   LOAD MEDICINE DETAILS
========================================= */

function loadMedicineDetails() {

    const nameElement =
        document.getElementById("medicineName");


    if (!nameElement) {
        return;
    }


    const urlParams =
        new URLSearchParams(window.location.search);


    const medicineId =
        urlParams.get("medicine");


    if (!medicineId) {

        nameElement.textContent =
            "Medicine Not Found";

        return;

    }


    const medicine =
        getMedicineList().find(function(item) {

            return item.id === medicineId;

        });


    if (!medicine) {

        nameElement.textContent =
            "Medicine Not Found";

        return;

    }


    nameElement.textContent =
        medicine.name;


    const uses =
        document.getElementById("uses");

    const dosage =
        document.getElementById("dosage");

    const sideEffects =
        document.getElementById("sideEffects");

    const precautions =
        document.getElementById("precautions");

    const storage =
        document.getElementById("storage");


    if (uses) {
        uses.textContent =
            medicine.uses;
    }


    if (dosage) {
        dosage.textContent =
            medicine.dosage;
    }


    if (sideEffects) {
        sideEffects.textContent =
            medicine.sideEffects;
    }


    if (precautions) {
        precautions.textContent =
            medicine.precautions;
    }


    if (storage) {
        storage.textContent =
            medicine.storage;
    }

}


/* =========================================
   PAGE INITIALIZATION
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /*
         * Medicines page
         */

        if (
            document.getElementById(
                "medicineContainer"
            )
        ) {

            displayMedicines();

            enableMedicineSearch();

        }


        /*
         * Medicine details page
         */

        if (
            document.getElementById(
                "medicineName"
            )
        ) {

            loadMedicineDetails();

        }

    }
);
