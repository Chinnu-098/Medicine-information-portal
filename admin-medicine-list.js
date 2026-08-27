/* =========================================
   MEDINFO PORTAL
   ADMIN MEDICINE LIST
========================================= */


/* =========================================
   GET MEDICINES
========================================= */

function getAdminMedicines() {

    return JSON.parse(
        localStorage.getItem(
            "medicinePortalMedicines"
        )
    ) || [];

}


/* =========================================
   SAVE MEDICINES
========================================= */

function saveAdminMedicines(medicines) {

    localStorage.setItem(
        "medicinePortalMedicines",
        JSON.stringify(medicines)
    );

}


/* =========================================
   DISPLAY MEDICINES
========================================= */

function displayMedicines() {

    const tableBody =
        document.getElementById(
            "medicineTableBody"
        );

    const emptyState =
        document.getElementById(
            "emptyMedicineState"
        );

    const medicines =
        getAdminMedicines();


    if (!tableBody) {
        return;
    }


    tableBody.innerHTML = "";


    /* Update count */

    const count =
        document.getElementById(
            "medicineCount"
        );

    if (count) {

        count.textContent =
            medicines.length;

    }


    /* Empty state */

    if (medicines.length === 0) {

        if (emptyState) {

            emptyState.style.display =
                "block";

        }

        return;

    }


    if (emptyState) {

        emptyState.style.display =
            "none";

    }


    medicines.forEach(
        function(medicine, index) {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td class="px-3">
                    ${index + 1}
                </td>

                <td>

                    <strong>
                        ${escapeHTML(medicine.name)}
                    </strong>

                </td>

                <td>

                    <span class="badge bg-primary">

                        ${escapeHTML(medicine.category)}

                    </span>

                </td>

                <td>

                    ${escapeHTML(
                        medicine.genericName || "-"
                    )}

                </td>

                <td>

                    ${escapeHTML(
                        medicine.form || "-"
                    )}

                </td>

                <td>

                    <small>
                        ${escapeHTML(
                            medicine.createdAt || "-"
                        )}
                    </small>

                </td>

                <td>

                    <div class="d-flex
                                justify-content-center
                                gap-1">

                        <button
                            class="btn btn-sm btn-info text-white"
                            onclick="viewMedicine(${medicine.id})"
                            title="View">

                            <i class="bi bi-eye"></i>

                        </button>


                        <button
                            class="btn btn-sm btn-warning"
                            onclick="editMedicine(${medicine.id})"
                            title="Edit">

                            <i class="bi bi-pencil"></i>

                        </button>


                        <button
                            class="btn btn-sm btn-danger"
                            onclick="openDeleteModal(${medicine.id})"
                            title="Delete">

                            <i class="bi bi-trash"></i>

                        </button>

                    </div>

                </td>

            `;


            tableBody.appendChild(row);

        }
    );

}


/* =========================================
   FILTER MEDICINES
========================================= */

function filterMedicines() {

    const searchInput =
        document.getElementById(
            "medicineSearch"
        );


    const categoryInput =
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
        categoryInput
            ? categoryInput.value
            : "all";


    const medicines =
        getAdminMedicines();


    const filtered =
        medicines.filter(
            function(medicine) {

                const matchesSearch =

                    medicine.name
                        .toLowerCase()
                        .includes(search)

                    ||

                    (medicine.genericName || "")
                        .toLowerCase()
                        .includes(search)

                    ||

                    (medicine.brandName || "")
                        .toLowerCase()
                        .includes(search);


                const matchesCategory =

                    category === "all"

                    ||

                    medicine.category ===
                    category;


                return (
                    matchesSearch &&
                    matchesCategory
                );

            }
        );


    displayFilteredMedicines(
        filtered
    );

}


/* =========================================
   DISPLAY FILTERED
========================================= */

function displayFilteredMedicines(
    medicines
) {

    const tableBody =
        document.getElementById(
            "medicineTableBody"
        );


    const emptyState =
        document.getElementById(
            "emptyMedicineState"
        );


    if (!tableBody) {
        return;
    }


    tableBody.innerHTML = "";


    if (medicines.length === 0) {

        if (emptyState) {

            emptyState.style.display =
                "block";

        }

        return;

    }


    if (emptyState) {

        emptyState.style.display =
            "none";

    }


    medicines.forEach(
        function(medicine, index) {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td class="px-3">
                    ${index + 1}
                </td>

                <td>
                    <strong>
                        ${escapeHTML(medicine.name)}
                    </strong>
                </td>

                <td>
                    <span class="badge bg-primary">
                        ${escapeHTML(medicine.category)}
                    </span>
                </td>

                <td>
                    ${escapeHTML(
                        medicine.genericName || "-"
                    )}
                </td>

                <td>
                    ${escapeHTML(
                        medicine.form || "-"
                    )}
                </td>

                <td>
                    <small>
                        ${escapeHTML(
                            medicine.createdAt || "-"
                        )}
                    </small>
                </td>

                <td>

                    <div class="d-flex
                                justify-content-center
                                gap-1">

                        <button
                            class="btn btn-sm btn-info text-white"
                            onclick="viewMedicine(${medicine.id})">

                            <i class="bi bi-eye"></i>

                        </button>

                        <button
                            class="btn btn-sm btn-warning"
                            onclick="editMedicine(${medicine.id})">

                            <i class="bi bi-pencil"></i>

                        </button>

                        <button
                            class="btn btn-sm btn-danger"
                            onclick="openDeleteModal(${medicine.id})">

                            <i class="bi bi-trash"></i>

                        </button>

                    </div>

                </td>

            `;


            tableBody.appendChild(row);

        }
    );

}


/* =========================================
   VIEW MEDICINE
========================================= */

function viewMedicine(id) {

    localStorage.setItem(
        "selectedMedicineId",
        id
    );


    window.location.href =
        "../medicine-details.html";

}


/* =========================================
   EDIT MEDICINE
========================================= */

function editMedicine(id) {

    localStorage.setItem(
        "editingMedicineId",
        id
    );


    window.location.href =
        "edit-medicine.html";

}


/* =========================================
   DELETE MODAL
========================================= */

let medicineToDelete = null;


function openDeleteModal(id) {

    const medicines =
        getAdminMedicines();


    const medicine =
        medicines.find(
            function(item) {

                return item.id === id;

            }
        );


    if (!medicine) {
        return;
    }


    medicineToDelete =
        id;


    const nameElement =
        document.getElementById(
            "deleteMedicineName"
        );


    if (nameElement) {

        nameElement.textContent =
            medicine.name;

    }


    const modalElement =
        document.getElementById(
            "deleteMedicineModal"
        );


    if (modalElement) {

        const modal =
            new bootstrap.Modal(
                modalElement
            );

        modal.show();

    }

}


/* =========================================
   CONFIRM DELETE
========================================= */

function deleteMedicine() {

    if (!medicineToDelete) {
        return;
    }


    let medicines =
        getAdminMedicines();


    medicines =
        medicines.filter(
            function(medicine) {

                return medicine.id !==
                    medicineToDelete;

            }
        );


    saveAdminMedicines(
        medicines
    );


    medicineToDelete = null;


    const modalElement =
        document.getElementById(
            "deleteMedicineModal"
        );


    if (modalElement) {

        const modal =
            bootstrap.Modal
                .getInstance(
                    modalElement
                );

        if (modal) {
            modal.hide();
        }

    }


    displayMedicines();

}


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent =
        value;

    return div.innerHTML;

}


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayMedicines();


        const search =
            document.getElementById(
                "medicineSearch"
            );


        const category =
            document.getElementById(
                "categoryFilter"
            );


        if (search) {

            search.addEventListener(
                "input",
                filterMedicines
            );

        }


        if (category) {

            category.addEventListener(
                "change",
                filterMedicines
            );

        }


        const deleteButton =
            document.getElementById(
                "confirmDeleteButton"
            );


        if (deleteButton) {

            deleteButton.addEventListener(
                "click",
                deleteMedicine
            );

        }

    }
);
