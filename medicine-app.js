/* =====================================================
   MEDICINE INFORMATION PORTAL
   File: js/medicine-app.js
   ===================================================== */

let displayedMedicines = [];
let currentPage = 1;

const MEDICINES_PER_PAGE = 8;


/* =====================================================
   PAGE INITIALIZATION
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    initializeMedicinePage();

});


function initializeMedicinePage() {

    const medicineList =
        document.getElementById("medicineList");

    if (!medicineList) {
        return;
    }

    loadCategoryFilter();
    loadFormFilter();
    loadMedicines();

    setupSearch();
    setupFilters();

}


/* =====================================================
   LOAD MEDICINES
   ===================================================== */

function loadMedicines() {

    displayedMedicines =
        getMedicines();

    currentPage = 1;

    renderMedicines();

}


/* =====================================================
   RENDER MEDICINES
   ===================================================== */

function renderMedicines() {

    const container =
        document.getElementById("medicineList");

    if (!container) {
        return;
    }


    const start =
        (currentPage - 1) *
        MEDICINES_PER_PAGE;


    const end =
        start +
        MEDICINES_PER_PAGE;


    const medicines =
        displayedMedicines.slice(
            start,
            end
        );


    container.innerHTML = "";


    if (displayedMedicines.length === 0) {

        showNoMedicines(container);

        updateMedicineCount();

        renderPagination();

        return;
    }


    medicines.forEach(function (medicine) {

        container.insertAdjacentHTML(
            "beforeend",
            createMedicineCard(medicine)
        );

    });


    updateMedicineCount();
    renderPagination();

}


/* =====================================================
   MEDICINE CARD
   ===================================================== */

function createMedicineCard(medicine) {

    const prescriptionBadge =
        medicine.prescriptionRequired

            ? `
                <span class="badge bg-warning text-dark">
                    <i class="bi bi-prescription2 me-1"></i>
                    Prescription
                </span>
              `

            : `
                <span class="badge bg-success">
                    <i class="bi bi-check-circle me-1"></i>
                    General
                </span>
              `;


    const image =
        medicine.image ||
        "https://via.placeholder.com/600x400?text=Medicine";


    return `

        <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">

            <div class="card medicine-card h-100 border-0 shadow-sm">


                <div class="position-relative">

                    <img
                        src="${escapeHTML(image)}"
                        alt="${escapeHTML(medicine.name)}"
                        class="card-img-top medicine-card-image"
                        onerror="this.src='https://via.placeholder.com/600x400?text=Medicine';"
                    >


                    <span
                        class="badge bg-primary position-absolute top-0 start-0 m-3">

                        ${escapeHTML(medicine.category)}

                    </span>

                </div>


                <div class="card-body d-flex flex-column">


                    <h5 class="card-title fw-bold">

                        ${escapeHTML(medicine.name)}

                    </h5>


                    <p class="text-muted small mb-2">

                        ${escapeHTML(medicine.genericName)}

                    </p>


                    <div class="small text-secondary mb-3">

                        <div class="mb-1">

                            <i class="bi bi-capsule me-1"></i>

                            ${escapeHTML(medicine.form)}

                        </div>


                        <div>

                            <i class="bi bi-speedometer2 me-1"></i>

                            ${escapeHTML(medicine.strength)}

                        </div>

                    </div>


                    <div class="mb-3">

                        ${prescriptionBadge}

                    </div>


                    <p class="card-text text-muted small flex-grow-1">

                        ${escapeHTML(
                            medicine.description ||
                            "Medicine information available."
                        )}

                    </p>


                    <a
                        href="medicine-details.html?id=${encodeURIComponent(medicine.id)}"
                        class="btn btn-primary w-100">

                        <i class="bi bi-eye me-1"></i>

                        View Details

                    </a>

                </div>

            </div>

        </div>

    `;

}


/* =====================================================
   SEARCH
   ===================================================== */

function setupSearch() {

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
   FILTERS
   ===================================================== */

function setupFilters() {

    const category =
        document.getElementById(
            "medicineCategory"
        );


    const form =
        document.getElementById(
            "medicineForm"
        );


    if (category) {

        category.addEventListener(
            "change",
            filterMedicines
        );

    }


    if (form) {

        form.addEventListener(
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


    const categoryInput =
        document.getElementById(
            "medicineCategory"
        );


    const formInput =
        document.getElementById(
            "medicineForm"
        );


    const search =
        (
            searchInput?.value || ""
        )
        .trim()
        .toLowerCase();


    const category =
        (
            categoryInput?.value || ""
        )
        .trim()
        .toLowerCase();


    const form =
        (
            formInput?.value || ""
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

                    medicine.strength,

                    medicine.description

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


    currentPage = 1;

    renderMedicines();

}


/* =====================================================
   CATEGORY FILTER
   ===================================================== */

function loadCategoryFilter() {

    const select =
        document.getElementById(
            "medicineCategory"
        );


    if (!select) {
        return;
    }


    const categories =
        getMedicineCategories();


    select.innerHTML = `

        <option value="">
            All Categories
        </option>

    `;


    categories.forEach(
        function (category) {

            const option =
                document.createElement(
                    "option"
                );

            option.value =
                category;

            option.textContent =
                category;

            select.appendChild(
                option
            );

        }
    );

}


/* =====================================================
   FORM FILTER
   ===================================================== */

function loadFormFilter() {

    const select =
        document.getElementById(
            "medicineForm"
        );


    if (!select) {
        return;
    }


    const forms = [
        ...new Set(
            getMedicines()
                .map(
                    medicine =>
                        medicine.form
                )
                .filter(Boolean)
        )
    ].sort();


    select.innerHTML = `

        <option value="">
            All Forms
        </option>

    `;


    forms.forEach(
        function (form) {

            const option =
                document.createElement(
                    "option"
                );

            option.value =
                form;

            option.textContent =
                form;

            select.appendChild(
                option
            );

        }
    );

}


/* =====================================================
   MEDICINE COUNT
   ===================================================== */

function updateMedicineCount() {

    document
        .querySelectorAll(
            "[data-medicine-count]"
        )
        .forEach(
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


    pagination.innerHTML = "";


    const totalPages =
        Math.ceil(
            displayedMedicines.length /
            MEDICINES_PER_PAGE
        );


    if (totalPages <= 1) {
        return;
    }


    /* Previous */

    const previous =
        document.createElement(
            "li"
        );

    previous.className =
        "page-item " +
        (
            currentPage === 1
                ? "disabled"
                : ""
        );


    previous.innerHTML = `

        <button
            class="page-link"
            type="button">

            <i class="bi bi-chevron-left"></i>

        </button>

    `;


    previous
        .querySelector("button")
        .addEventListener(
            "click",
            function () {

                changePage(
                    currentPage - 1
                );

            }
        );


    pagination.appendChild(
        previous
    );


    /* Page Numbers */

    for (
        let page = 1;
        page <= totalPages;
        page++
    ) {

        const item =
            document.createElement(
                "li"
            );


        item.className =
            "page-item " +
            (
                page === currentPage
                    ? "active"
                    : ""
            );


        item.innerHTML = `

            <button
                class="page-link"
                type="button">

                ${page}

            </button>

        `;


        item
            .querySelector("button")
            .addEventListener(
                "click",
                function () {

                    changePage(page);

                }
            );


        pagination.appendChild(
            item
        );

    }


    /* Next */

    const next =
        document.createElement(
            "li"
        );


    next.className =
        "page-item " +
        (
            currentPage === totalPages
                ? "disabled"
                : ""
        );


    next.innerHTML = `

        <button
            class="page-link"
            type="button">

            <i class="bi bi-chevron-right"></i>

        </button>

    `;


    next
        .querySelector("button")
        .addEventListener(
            "click",
            function () {

                changePage(
                    currentPage + 1
                );

            }
        );


    pagination.appendChild(
        next
    );

}


/* =====================================================
   CHANGE PAGE
   ===================================================== */

function changePage(page) {

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


    currentPage =
        page;


    renderMedicines();


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =====================================================
   CLEAR FILTERS
   ===================================================== */

function clearMedicineFilters() {

    const search =
        document.getElementById(
            "medicineSearch"
        );


    const category =
        document.getElementById(
            "medicineCategory"
        );


    const form =
        document.getElementById(
            "medicineForm"
        );


    if (search) {
        search.value = "";
    }


    if (category) {
        category.value = "";
    }


    if (form) {
        form.value = "";
    }


    displayedMedicines =
        getMedicines();


    currentPage = 1;

    renderMedicines();

}


/* =====================================================
   NO RESULTS
   ===================================================== */

function showNoMedicines(
    container
) {

    container.innerHTML = `

        <div class="col-12">

            <div class="text-center py-5">

                <i
                    class="bi bi-search display-4 text-muted">
                </i>


                <h4 class="mt-3">

                    No medicines found

                </h4>


                <p class="text-muted">

                    Try another medicine name
                    or change the filters.

                </p>


                <button
                    type="button"
                    class="btn btn-outline-primary"
                    onclick="clearMedicineFilters()">

                    <i class="bi bi-arrow-counterclockwise me-1"></i>

                    Clear Filters

                </button>

            </div>

        </div>

    `;

}


/* =====================================================
   ESCAPE HTML
   ===================================================== */

function escapeHTML(value) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent =
        value ?? "";

    return div.innerHTML;

}
