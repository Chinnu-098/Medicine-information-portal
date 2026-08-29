/* =====================================================
   MEDINFO PORTAL - MEDICINE APP
   File: js/medicine-app.js
   ===================================================== */


/* =====================================================
   GLOBAL STATE
   ===================================================== */

let displayedMedicines = [];
let currentMedicinePage = 1;

const MEDICINES_PER_PAGE = 8;


/* =====================================================
   DOM READY
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    initializeMedicinePage();

});


/* =====================================================
   INITIALIZE MEDICINE PAGE
   ===================================================== */

function initializeMedicinePage() {

    const medicineContainer =
        document.getElementById(
            "medicineList"
        );


    /*
     * If medicineList doesn't exist,
     * this script is probably being used
     * on another page.
     */

    if (!medicineContainer) {
        return;
    }


    loadMedicineCategories();

    loadMedicines();

    setupMedicineSearch();

    setupMedicineFilters();

}


/* =====================================================
   LOAD MEDICINES
   ===================================================== */

function loadMedicines(
    medicines = null
) {

    const allMedicines =
        medicines || getMedicines();


    displayedMedicines =
        [...allMedicines];


    currentMedicinePage = 1;


    renderMedicines();

}


/* =====================================================
   RENDER MEDICINES
   ===================================================== */

function renderMedicines() {

    const container =
        document.getElementById(
            "medicineList"
        );


    if (!container) {
        return;
    }


    const startIndex =
        (
            currentMedicinePage -
            1
        ) *
        MEDICINES_PER_PAGE;


    const endIndex =
        startIndex +
        MEDICINES_PER_PAGE;


    const pageMedicines =
        displayedMedicines.slice(
            startIndex,
            endIndex
        );


    container.innerHTML = "";


    if (
        displayedMedicines.length === 0
    ) {

        renderNoMedicines(
            container
        );

        updateMedicineCount();

        renderPagination();

        return;

    }


    pageMedicines.forEach(
        function (medicine) {

            container.insertAdjacentHTML(
                "beforeend",
                createMedicineCard(
                    medicine
                )
            );

        }
    );


    updateMedicineCount();

    renderPagination();

}


/* =====================================================
   CREATE MEDICINE CARD
   ===================================================== */

function createMedicineCard(
    medicine
) {

    const medicineId =
        encodeURIComponent(
            medicine.id
        );


    const category =
        escapeMedicineHTML(
            medicine.category
        );


    const name =
        escapeMedicineHTML(
            medicine.name
        );


    const genericName =
        escapeMedicineHTML(
            medicine.genericName
        );


    const form =
        escapeMedicineHTML(
            medicine.form
        );


    const strength =
        escapeMedicineHTML(
            medicine.strength
        );


    const prescriptionBadge =
        medicine.prescriptionRequired
            ? `
                <span class="badge bg-warning text-dark">
                    <i class="bi bi-prescription2"></i>
                    Prescription
                </span>
              `
            : `
                <span class="badge bg-success">
                    <i class="bi bi-check-circle"></i>
                    General
                </span>
              `;


    return `

        <div class="col-md-6 col-lg-4 col-xl-3">

            <div class="medicine-card h-100">

                <div class="medicine-card-icon">

                    <i class="bi bi-capsule"></i>

                </div>


                <div class="medicine-card-body">

                    <div class="d-flex justify-content-between align-items-start mb-2">

                        <span class="badge bg-light text-primary">

                            ${category}

                        </span>

                    </div>


                    <h5 class="medicine-name">

                        ${name}

                    </h5>


                    <p class="medicine-generic">

                        ${genericName}

                    </p>


                    <div class="medicine-meta">

                        <span>

                            <i class="bi bi-box"></i>

                            ${form}

                        </span>


                        <span>

                            <i class="bi bi-speedometer2"></i>

                            ${strength}

                        </span>

                    </div>


                    <div class="mt-3">

                        ${prescriptionBadge}

                    </div>


                    <a
                        href="medicine-details.html?id=${medicineId}"
                        class="btn btn-primary w-100 mt-3"
                    >

                        View Details

                        <i class="bi bi-arrow-right ms-1"></i>

                    </a>

                </div>

            </div>

        </div>

    `;

}


/* =====================================================
   NO MEDICINES
   ===================================================== */

function renderNoMedicines(
    container
) {

    container.innerHTML = `

        <div class="col-12">

            <div class="text-center py-5">

                <div class="mb-3">

                    <i
                        class="bi bi-search"
                        style="font-size: 3rem; color: #94a3b8;"
                    ></i>

                </div>


                <h4>
                    No medicines found
                </h4>


                <p class="text-muted">

                    Try changing your search
                    or category filter.

                </p>


                <button
                    type="button"
                    class="btn btn-outline-primary"
                    onclick="clearMedicineFilters()"
                >

                    Clear Filters

                </button>

            </div>

        </div>

    `;

}


/* =====================================================
   SEARCH
   ===================================================== */

function setupMedicineSearch() {

    const searchInput =
        document.getElementById(
            "medicineSearch"
        );


    if (!searchInput) {
        return;
    }


    searchInput.addEventListener(
        "input",
        function () {

            filterMedicines();

        }
    );

}


/* =====================================================
   FILTER SETUP
   ===================================================== */

function setupMedicineFilters() {

    const categorySelect =
        document.getElementById(
            "medicineCategory"
        );


    const formSelect =
        document.getElementById(
            "medicineForm"
        );


    if (categorySelect) {

        categorySelect.addEventListener(
            "change",
            filterMedicines
        );

    }


    if (formSelect) {

        formSelect.addEventListener(
            "change",
            filterMedicines
        );

    }

}


/* =====================================================
   FILTER MEDICINES
   ===================================================== */

function filterMedicines() {

    const searchInput =
        document.getElementById(
            "medicineSearch"
        );


    const categorySelect =
        document.getElementById(
            "medicineCategory"
        );


    const formSelect =
        document.getElementById(
            "medicineForm"
        );


    const search =
        String(
            searchInput?.value || ""
        )
        .trim()
        .toLowerCase();


    const category =
        String(
            categorySelect?.value || ""
        )
        .trim()
        .toLowerCase();


    const form =
        String(
            formSelect?.value || ""
        )
        .trim()
        .toLowerCase();


    const allMedicines =
        getMedicines();


    displayedMedicines =
        allMedicines.filter(
            function (medicine) {

                const searchableText = [

                    medicine.name,

                    medicine.genericName,

                    medicine.category,

                    medicine.form,

                    medicine.strength

                ]
                .join(" ")
                .toLowerCase();


                const matchesSearch =
                    !search ||
                    searchableText.includes(
                        search
                    );


                const matchesCategory =
                    !category ||
                    medicine.category
                        .toLowerCase() ===
                    category;


                const matchesForm =
                    !form ||
                    medicine.form
                        .toLowerCase() ===
                    form;


                return (
                    matchesSearch &&
                    matchesCategory &&
                    matchesForm
                );

            }
        );


    currentMedicinePage = 1;

    renderMedicines();

}


/* =====================================================
   LOAD CATEGORIES
   ===================================================== */

function loadMedicineCategories() {

    const select =
        document.getElementById(
            "medicineCategory"
        );


    if (!select) {
        return;
    }


    const categories =
        getMedicineCategories();


    /*
     * Keep the first/default option.
     */

    select.innerHTML = `

        <option value="">
            All Categories
        </option>

    `;


    categories.forEach(
        function (category) {

            select.insertAdjacentHTML(
                "beforeend",

                `
                    <option value="${escapeMedicineHTML(category)}">

                        ${escapeMedicineHTML(category)}

                    </option>
                `

            );

        }
    );

}


/* =====================================================
   LOAD MEDICINE FORMS
   ===================================================== */

function loadMedicineForms() {

    const select =
        document.getElementById(
            "medicineForm"
        );


    if (!select) {
        return;
    }


    const medicines =
        getMedicines();


    const forms = [
        ...new Set(
            medicines.map(
                function (medicine) {

                    return medicine.form;

                }
            )
        )
    ].sort();


    select.innerHTML = `

        <option value="">
            All Forms
        </option>

    `;


    forms.forEach(
        function (form) {

            select.insertAdjacentHTML(
                "beforeend",

                `
                    <option value="${escapeMedicineHTML(form)}">

                        ${escapeMedicineHTML(form)}

                    </option>
                `

            );

        }
    );

}


/* =====================================================
   MEDICINE COUNT
   ===================================================== */

function updateMedicineCount() {

    const elements =
        document.querySelectorAll(
            "[data-medicine-count]"
        );


    elements.forEach(
        function (element) {

            element.textContent =
                displayedMedicines.length;

        }
    );

}


/* =====================================================
   PAGINATION
   ===================================================== */

function renderPagination() {

    const pagination =
        document.getElementById(
            "medicinePagination"
        );


    if (!pagination) {
        return;
    }


    const totalPages =
        Math.ceil(
            displayedMedicines.length /
            MEDICINES_PER_PAGE
        );


    pagination.innerHTML = "";


    if (totalPages <= 1) {
        return;
    }


    /* Previous */

    pagination.insertAdjacentHTML(
        "beforeend",

        `
            <li class="page-item ${
                currentMedicinePage === 1
                    ? "disabled"
                    : ""
            }">

                <button
                    class="page-link"
                    type="button"
                    onclick="changeMedicinePage(${currentMedicinePage - 1})"
                >

                    <i class="bi bi-chevron-left"></i>

                </button>

            </li>
        `

    );


    /* Page numbers */

    for (
        let page = 1;
        page <= totalPages;
        page++
    ) {

        pagination.insertAdjacentHTML(
            "beforeend",

            `
                <li class="page-item ${
                    page === currentMedicinePage
                        ? "active"
                        : ""
                }">

                    <button
                        class="page-link"
                        type="button"
                        onclick="changeMedicinePage(${page})"
                    >

                        ${page}

                    </button>

                </li>
            `

        );

    }


    /* Next */

    pagination.insertAdjacentHTML(
        "beforeend",

        `
            <li class="page-item ${
                currentMedicinePage === totalPages
                    ? "disabled"
                    : ""
            }">

                <button
                    class="page-link"
                    type="button"
                    onclick="changeMedicinePage(${currentMedicinePage + 1})"
                >

                    <i class="bi bi-chevron-right"></i>

                </button>

            </li>
        `

    );

}


/* =====================================================
   CHANGE PAGE
   ===================================================== */

function changeMedicinePage(
    page
) {

    const totalPages =
        Math.ceil(
            displayedMedicines.length /
            MEDICINES_PER_PAGE
        );


    if (
        page < 1 ||
        page > totalPages
    ) {

        return;

    }


    currentMedicinePage =
        page;


    renderMedicines();


    const list =
        document.getElementById(
            "medicineList"
        );


    if (list) {

        list.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}


/* =====================================================
   CLEAR FILTERS
   ===================================================== */

function clearMedicineFilters() {

    const searchInput =
        document.getElementById(
            "medicineSearch"
        );


    const categorySelect =
        document.getElementById(
            "medicineCategory"
        );


    const formSelect =
        document.getElementById(
            "medicineForm"
        );


    if (searchInput) {

        searchInput.value = "";

    }


    if (categorySelect) {

        categorySelect.value = "";

    }


    if (formSelect) {

        formSelect.value = "";

    }


    loadMedicines();

}


/* =====================================================
   ESCAPE HTML
   ===================================================== */

function escapeMedicineHTML(
    value
) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        String(value ?? "");


    return div.innerHTML;

}


/* =====================================================
   INITIALIZE FORM FILTER
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadMedicineForms();

    }
);
