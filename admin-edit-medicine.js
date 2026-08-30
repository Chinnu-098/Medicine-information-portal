```javascript
/* =========================================================
   ADMIN EDIT MEDICINE
   Medicine Information Portal
   ========================================================= */


/* =========================================================
   GLOBAL VARIABLES
   ========================================================= */

let editingMedicineId = null;

let editingMedicine = null;


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
         * Get medicine ID from URL
         *
         * Example:
         * edit-medicine.html?id=MED-123456
         */

        const params =
            new URLSearchParams(
                window.location.search
            );


        editingMedicineId =
            params.get("id");


        if (!editingMedicineId) {

            showNotFound();

            return;

        }


        loadMedicineForEditing();


        const form =
            document.getElementById(
                "editMedicineForm"
            );


        if (form) {

            form.addEventListener(
                "submit",
                updateMedicine
            );

        }

    }
);


/* =========================================================
   GET MEDICINES
   ========================================================= */

function getStoredMedicines() {

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
            "Unable to read medicines:",
            error
        );


        return [];

    }

}


/* =========================================================
   LOAD MEDICINE
   ========================================================= */

function loadMedicineForEditing() {


    const medicines =
        getStoredMedicines();


    editingMedicine =
        medicines.find(
            function (medicine) {

                return String(
                    medicine.id
                ) === String(
                    editingMedicineId
                );

            }
        );


    /*
     * If medicine does not exist
     */

    if (!editingMedicine) {

        showNotFound();

        return;

    }


    /*
     * Show form
     */

    const form =
        document.getElementById(
            "editMedicineForm"
        );


    const notFound =
        document.getElementById(
            "medicineNotFound"
        );


    if (form) {

        form.classList.remove(
            "d-none"
        );

    }


    if (notFound) {

        notFound.classList.add(
            "d-none"
        );

    }


    /*
     * Fill all fields
     */

    setField(
        "medicineName",
        editingMedicine.name
    );


    setField(
        "genericName",
        editingMedicine.genericName
    );


    setField(
        "category",
        editingMedicine.category
    );


    setField(
        "medicineFormType",
        editingMedicine.form
    );


    setField(
        "strength",
        editingMedicine.strength
    );


    setField(
        "manufacturer",
        editingMedicine.manufacturer
    );


    setField(
        "medicineImage",
        editingMedicine.image
    );


    setField(
        "uses",
        editingMedicine.uses
    );


    setField(
        "dosage",
        editingMedicine.dosage
    );


    setField(
        "sideEffects",
        editingMedicine.sideEffects
    );


    setField(
        "precautions",
        editingMedicine.precautions
    );


    setField(
        "storage",
        editingMedicine.storage
    );


    setField(
        "description",
        editingMedicine.description
    );

}


/* =========================================================
   SET FIELD VALUE
   ========================================================= */

function setField(
    id,
    value
) {


    const element =
        document.getElementById(id);


    if (!element) {

        return;

    }


    element.value =
        value || "";

}


/* =========================================================
   SHOW NOT FOUND
   ========================================================= */

function showNotFound() {


    const form =
        document.getElementById(
            "editMedicineForm"
        );


    const notFound =
        document.getElementById(
            "medicineNotFound"
        );


    if (form) {

        form.classList.add(
            "d-none"
        );

    }


    if (notFound) {

        notFound.classList.remove(
            "d-none"
        );

    }

}


/* =========================================================
   UPDATE MEDICINE
   ========================================================= */

function updateMedicine(
    event
) {


    event.preventDefault();


    const form =
        document.getElementById(
            "editMedicineForm"
        );


    /*
     * Bootstrap validation
     */

    if (form) {

        form.classList.add(
            "was-validated"
        );

    }


    if (
        form &&
        !form.checkValidity()
    ) {

        showMessage(
            "Please fill all required fields.",
            "danger"
        );


        window.scrollTo(
            {
                top: 0,
                behavior: "smooth"
            }
        );


        return;

    }


    /*
     * Get current medicines
     */

    const medicines =
        getStoredMedicines();


    /*
     * Find medicine index
     */

    const index =
        medicines.findIndex(
            function (medicine) {

                return String(
                    medicine.id
                ) === String(
                    editingMedicineId
                );

            }
        );


    if (index === -1) {

        showNotFound();

        return;

    }


    /*
     * Keep original ID
     */

    const oldMedicine =
        medicines[index];


    /*
     * Create updated object
     */

    const updatedMedicine = {

        ...oldMedicine,


        name:
            getValue(
                "medicineName"
            ),


        genericName:
            getValue(
                "genericName"
            ),


        category:
            getValue(
                "category"
            ),


        form:
            getValue(
                "medicineFormType"
            ),


        strength:
            getValue(
                "strength"
            ),


        manufacturer:
            getValue(
                "manufacturer"
            ),


        image:
            getValue(
                "medicineImage"
            ),


        uses:
            getValue(
                "uses"
            ),


        dosage:
            getValue(
                "dosage"
            ),


        sideEffects:
            getValue(
                "sideEffects"
            ),


        precautions:
            getValue(
                "precautions"
            ),


        storage:
            getValue(
                "storage"
            ),


        description:
            getValue(
                "description"
            ),


        updatedAt:
            new Date().toISOString()

    };


    /*
     * Replace old medicine
     */

    medicines[index] =
        updatedMedicine;


    /*
     * Save to localStorage
     */

    try {

        localStorage.setItem(
            "medicines",
            JSON.stringify(
                medicines
            )
        );

    }
    catch (error) {

        console.error(
            "Unable to save medicine:",
            error
        );


        showMessage(
            "Unable to save medicine. Please try again.",
            "danger"
        );


        return;

    }


    /*
     * Success message
     */

    showMessage(
        "Medicine updated successfully!",
        "success"
    );


    /*
     * Disable button
     */

    const button =
        document.getElementById(
            "updateMedicineButton"
        );


    if (button) {

        button.disabled =
            true;


        button.innerHTML = `

            <span
                class="spinner-border
                       spinner-border-sm
                       me-2">
            </span>

            Updated Successfully

        `;

    }


    /*
     * Redirect to medicine list
     */

    setTimeout(
        function () {

            window.location.href =
                "medicines.html";

        },
        1200
    );

}


/* =========================================================
   GET VALUE
   ========================================================= */

function getValue(
    id
) {


    const element =
        document.getElementById(id);


    if (!element) {

        return "";

    }


    return element.value.trim();

}


/* =========================================================
   SHOW MESSAGE
   ========================================================= */

function showMessage(
    message,
    type = "info"
) {


    const box =
        document.getElementById(
            "pageMessage"
        );


    if (!box) {

        return;

    }


    box.className =
        "alert alert-" +
        type;


    if (type === "success") {

        box.innerHTML = `

            <i
                class="bi bi-check-circle-fill me-2">
            </i>

            ${escapeHTML(message)}

        `;

    }
    else {

        box.innerHTML = `

            <i
                class="bi bi-exclamation-circle-fill me-2">
            </i>

            ${escapeHTML(message)}

        `;

    }


    box.classList.remove(
        "d-none"
    );


    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    );


    /*
     * Hide only non-success messages
     */

    if (type !== "success") {

        setTimeout(
            function () {

                box.classList.add(
                    "d-none"
                );

            },
            3500
        );

    }

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
```
