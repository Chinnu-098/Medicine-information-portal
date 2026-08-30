/* =========================================================
   ADMIN MEDICINE LIST
   Medicine Information Portal
   ========================================================= */

let selectedMedicineId = null;


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadMedicineList();


        const searchInput =
            document.getElementById(
                "medicineSearch"
            );


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                applyMedicineFilters
            );

        }


        const categoryFilter =
            document.getElementById(
                "categoryFilter"
            );


        if (categoryFilter) {

            categoryFilter.addEventListener(
                "change",
                applyMedicineFilters
            );

        }


        const deleteButton =
            document.getElementById(
                "confirmDeleteMedicine"
            );


        if (deleteButton) {

            deleteButton.addEventListener(
                "click",
                deleteSelectedMedicine
            );

        }

    }
);


/* =========================================================
   GET MEDICINES
   ========================================================= */

function getAdminMedicines() {

    try {

        const data =
            localStorage.getItem(
                "medicines"
            );


        if (!data) {

            return [];

        }


        const medicines =
            JSON.parse(data);


        return Array.isArray(medicines)
            ? medicines
            : [];

    }
    catch (error) {

        console.error(
            "Error loading medicines:",
            error
        );


        return [];

    }

}


/* =========================================================
   LOAD MEDICINE LIST
   ========================================================= */

function loadMedicineList() {

    const medicines =
        getAdminMedicines();


    updateMedicineStats(
        medicines
    );


    populateCategories(
        medicines
    );


    renderMedicineList(
        medicines
    );

}


/* =========================================================
   UPDATE STATISTICS
   ========================================================= */

function updateMedicineStats(
    medicines
) {


    const total =
        document.getElementById(
            "totalMedicines"
        );


    const categories =
        document.getElementById(
            "totalCategories"
        );


    const latest =
        document.getElementById(
            "latestMedicine"
        );


    if (total) {

        total.textContent =
            medicines.length;

    }


    const categorySet =
        new Set();


    medicines.forEach(
        function (medicine) {

            if (medicine.category) {

                categorySet.add(
                    medicine.category
                );

            }

        }
    );


    if (categories) {

        categories.textContent =
            categorySet.size;

    }


    if (latest) {

        if (medicines.length === 0) {

            latest.textContent =
                "No medicines";

            return;

        }


        const sorted =
            [...medicines].sort(
                function (a, b) {

                    return (
                        getMedicineTime(b) -
                        getMedicineTime(a)
                    );

                }
            );


        latest.textContent =
            sorted[0].name ||
            "Medicine";

    }

}


/* =========================================================
   POPULATE CATEGORY FILTER
   ========================================================= */

function populateCategories(
    medicines
) {


    const select =
        document.getElementById(
            "categoryFilter"
        );


    if (!select) {

        return;

    }


    const currentValue =
        select.value;


    const categories =
        new Set();


    medicines.forEach(
        function (medicine) {

            if (medicine.category) {

                categories.add(
                    medicine.category
                );

            }

        }
    );


    select.innerHTML = `

        <option value="">
            All Categories
        </option>

    `;


    [...categories]
        .sort()
        .forEach(
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


    if (
        [...categories].includes(
            currentValue
        )
    ) {

        select.value =
            currentValue;

    }

}


/* =========================================================
   APPLY SEARCH + FILTER
   ========================================================= */

function applyMedicineFilters() {


    const medicines =
        getAdminMedicines();


    const searchInput =
        document.getElementById(
            "medicineSearch"
        );


    const categoryFilter =
        document.getElementById(
            "categoryFilter"
        );


    const search =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    const category =
        categoryFilter
            ? categoryFilter.value
            : "";


    const filtered =
        medicines.filter(
            function (medicine) {

                const name =
                    String(
                        medicine.name ||
                        ""
                    ).toLowerCase();


                const generic =
                    String(
                        medicine.genericName ||
                        ""
                    ).toLowerCase();


                const manufacturer =
                    String(
                        medicine.manufacturer ||
                        ""
                    ).toLowerCase();


                const medicineCategory =
                    String(
                        medicine.category ||
                        ""
                    );


                const matchesSearch =
                    !search ||
                    name.includes(search) ||
                    generic.includes(search) ||
                    manufacturer.includes(search);


                const matchesCategory =
                    !category ||
                    medicineCategory === category;


                return (
                    matchesSearch &&
                    matchesCategory
                );

            }
        );


    renderMedicineList(
        filtered
    );

}


/* =========================================================
   RENDER TABLE
   ========================================================= */

function renderMedicineList(
    medicines
) {


    const tbody =
        document.getElementById(
            "medicinesTableBody"
        );


    const empty =
        document.getElementById(
            "emptyMedicines"
        );


    if (!tbody) {

        return;

    }


    tbody.innerHTML = "";


    if (medicines.length === 0) {

        if (empty) {

            empty.classList.remove(
                "d-none"
            );

        }


        return;

    }


    if (empty) {

        empty.classList.add(
            "d-none"
        );

    }


    medicines.forEach(
        function (medicine, index) {

            tbody.appendChild(
                createMedicineRow(
                    medicine,
                    index
                )
            );

        }
    );

}


/* =========================================================
   CREATE TABLE ROW
   ========================================================= */

function createMedicineRow(
    medicine,
    index
) {


    const row =
        document.createElement(
            "tr"
        );


    const id =
        medicine.id ||
        `MED-${index + 1}`;


    const image =
        medicine.image ||
        getDefaultMedicineImage();


    const name =
        medicine.name ||
        "Unnamed Medicine";


    const generic =
        medicine.genericName ||
        "Generic name not available";


    const category =
        medicine.category ||
        "Other";


    const form =
        medicine.form ||
        "N/A";


    const strength =
        medicine.strength ||
        "N/A";


    row.innerHTML = `

        <td>

            <span
                class="fw-semibold">

                ${index + 1}

            </span>

        </td>


        <td>

            <div
                class="d-flex
                       align-items-center
                       gap-3">


                <img
                    src="${escapeAttribute(image)}"
                    alt="${escapeAttribute(name)}"
                    class="medicine-table-image"
                    onerror="this.src='${getDefaultMedicineImage()}'">


                <div>

                    <strong
                        class="d-block">

                        ${escapeHTML(name)}

                    </strong>


                    <small
                        class="text-muted">

                        ${escapeHTML(generic)}

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

            ${escapeHTML(form)}

        </td>


        <td>

            ${escapeHTML(strength)}

        </td>


        <td class="text-end">

            <div
                class="d-flex
                       justify-content-end
                       gap-1">


                <button
                    type="button"
                    class="btn btn-sm btn-outline-primary"
                    title="View Medicine"
                    onclick="viewMedicine('${escapeAttribute(id)}')">

                    <i class="bi bi-eye"></i>

                </button>


                <button
                    type="button"
                    class="btn btn-sm btn-outline-success"
                    title="Edit Medicine"
                    onclick="editMedicine('${escapeAttribute(id)}')">

                    <i class="bi bi-pencil"></i>

                </button>


                <button
                    type="button"
                    class="btn btn-sm btn-outline-danger"
                    title="Delete Medicine"
                    onclick="askDeleteMedicine('${escapeAttribute(id)}')">

                    <i class="bi bi-trash"></i>

                </button>


            </div>

        </td>

    `;


    return row;

}


/* =========================================================
   VIEW MEDICINE
   ========================================================= */

function viewMedicine(
    medicineId
) {


    const medicines =
        getAdminMedicines();


    const medicine =
        medicines.find(
            function (item) {

                return String(
                    item.id
                ) === String(
                    medicineId
                );

            }
        );


    if (!medicine) {

        showMedicineMessage(
            "Medicine not found.",
            "danger"
        );

        return;

    }


    /*
     * If details modal exists,
     * fill it.
     */

    setText(
        "modalMedicineName",
        medicine.name || "N/A"
    );


    setText(
        "modalMedicineGeneric",
        medicine.genericName || "N/A"
    );


    setText(
        "modalMedicineCategory",
        medicine.category || "N/A"
    );


    setText(
        "modalMedicineForm",
        medicine.form || "N/A"
    );


    setText(
        "modalMedicineStrength",
        medicine.strength || "N/A"
    );


    setText(
        "modalMedicineManufacturer",
        medicine.manufacturer || "N/A"
    );


    setText(
        "modalMedicineUses",
        medicine.uses || "N/A"
    );


    setText(
        "modalMedicineDosage",
        medicine.dosage || "N/A"
    );


    setText(
        "modalMedicineSideEffects",
        medicine.sideEffects || "N/A"
    );


    setText(
        "modalMedicinePrecautions",
        medicine.precautions || "N/A"
    );


    setText(
        "modalMedicineStorage",
        medicine.storage || "N/A"
    );


    const image =
        document.getElementById(
            "modalMedicineImage"
        );


    if (image) {

        image.src =
            medicine.image ||
            getDefaultMedicineImage();

        image.onerror =
            function () {

                this.src =
                    getDefaultMedicineImage();

            };

    }


    const modalElement =
        document.getElementById(
            "medicineDetailsModal"
        );


    if (
        modalElement &&
        typeof bootstrap !== "undefined"
    ) {

        const modal =
            bootstrap.Modal.getOrCreateInstance(
                modalElement
            );


        modal.show();

    }
    else {

        /*
         * Fallback:
         * Open public medicine details page.
         */

        window.location.href =
            "../medicine-details.html?id=" +
            encodeURIComponent(
                medicineId
            );

    }

}


/* =========================================================
   EDIT MEDICINE
   ========================================================= */

function editMedicine(
    medicineId
) {


    window.location.href =
        "edit-medicine.html?id=" +
        encodeURIComponent(
            medicineId
        );

}


/* =========================================================
   ASK DELETE
   ========================================================= */

function askDeleteMedicine(
    medicineId
) {


    selectedMedicineId =
        medicineId;


    const modalElement =
        document.getElementById(
            "deleteMedicineModal"
        );


    if (
        modalElement &&
        typeof bootstrap !== "undefined"
    ) {

        const modal =
            bootstrap.Modal.getOrCreateInstance(
                modalElement
            );


        modal.show();

    }
    else {

        const confirmed =
            confirm(
                "Are you sure you want to delete this medicine?"
            );


        if (confirmed) {

            deleteSelectedMedicine();

        }

    }

}


/* =========================================================
   DELETE MEDICINE
   ========================================================= */

function deleteSelectedMedicine() {


    if (!selectedMedicineId) {

        return;

    }


    const medicines =
        getAdminMedicines();


    const updatedMedicines =
        medicines.filter(
            function (medicine) {

                return String(
                    medicine.id
                ) !== String(
                    selectedMedicineId
                );

            }
        );


    if (
        updatedMedicines.length ===
        medicines.length
    ) {

        showMedicineMessage(
            "Medicine not found.",
            "danger"
        );


        return;

    }


    try {

        localStorage.setItem(
            "medicines",
            JSON.stringify(
                updatedMedicines
            )
        );

    }
    catch (error) {

        console.error(
            "Delete error:",
            error
        );


        showMedicineMessage(
            "Unable to delete medicine.",
            "danger"
        );


        return;

    }


    /*
     * Close modal
     */

    const modalElement =
        document.getElementById(
            "deleteMedicineModal"
        );


    if (
        modalElement &&
        typeof bootstrap !== "undefined"
    ) {

        const modal =
            bootstrap.Modal.getInstance(
                modalElement
            );


        if (modal) {

            modal.hide();

        }

    }


    selectedMedicineId =
        null;


    /*
     * Refresh
     */

    loadMedicineList();


    showMedicineMessage(
        "Medicine deleted successfully.",
        "success"
    );

}


/* =========================================================
   DEFAULT IMAGE
   ========================================================= */

function getDefaultMedicineImage() {

    return "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80";

}


/* =========================================================
   GET MEDICINE TIME
   ========================================================= */

function getMedicineTime(
    medicine
) {


    const value =
        medicine.createdAt ||
        medicine.updatedAt;


    if (!value) {

        return 0;

    }


    const time =
        new Date(value).getTime();


    return Number.isNaN(time)
        ? 0
        : time;

}


/* =========================================================
   SET TEXT
   ========================================================= */

function setText(
    id,
    value
) {


    const element =
        document.getElementById(id);


    if (element) {

        element.textContent =
            value ?? "";

    }

}


/* =========================================================
   SHOW MESSAGE
   ========================================================= */

function showMedicineMessage(
    message,
    type = "info"
) {


    const box =
        document.getElementById(
            "pageMessage"
        );


    if (!box) {

        alert(message);

        return;

    }


    box.className =
        "alert alert-" +
        type;


    box.innerHTML = `

        <i
            class="bi bi-info-circle-fill me-2">
        </i>

        ${escapeHTML(message)}

    `;


    box.classList.remove(
        "d-none"
    );


    setTimeout(
        function () {

            box.classList.add(
                "d-none"
            );

        },
        3000
    );

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(
    value
) {


    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        value ?? "";


    return div.innerHTML;

}


/* =========================================================
   ESCAPE ATTRIBUTE
   ========================================================= */

function escapeAttribute(
    value
) {


    return String(
        value ?? ""
    )
    .replace(
        /&/g,
        "&amp;"
    )
    .replace(
        /"/g,
        "&quot;"
    )
    .replace(
        /'/g,
        "&#039;"
    )
    .replace(
        /</g,
        "&lt;"
    )
    .replace(
        />/g,
        "&gt;"
    );

}
