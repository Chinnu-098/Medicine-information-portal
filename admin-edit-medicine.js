/* =========================================
   MEDINFO PORTAL
   ADMIN EDIT MEDICINE
========================================= */


/* =========================================
   GET MEDICINES
========================================= */

function getEditMedicines() {

    return JSON.parse(
        localStorage.getItem(
            "medicinePortalMedicines"
        )
    ) || [];

}


/* =========================================
   SAVE MEDICINES
========================================= */

function saveEditMedicines(medicines) {

    localStorage.setItem(
        "medicinePortalMedicines",
        JSON.stringify(medicines)
    );

}


/* =========================================
   SHOW MESSAGE
========================================= */

function showEditMessage(
    message,
    type
) {

    const box =
        document.getElementById(
            "editMedicineMessage"
        );

    if (!box) {
        return;
    }

    box.className =
        "alert alert-" + type;

    box.textContent =
        message;

    box.style.display =
        "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   LOAD MEDICINE
========================================= */

function loadMedicineForEdit() {

    const medicineId =
        Number(
            localStorage.getItem(
                "editingMedicineId"
            )
        );


    if (!medicineId) {

        showEditMessage(
            "No medicine selected for editing.",
            "warning"
        );

        return;

    }


    const medicines =
        getEditMedicines();


    const medicine =
        medicines.find(
            function(item) {

                return item.id === medicineId;

            }
        );


    if (!medicine) {

        showEditMessage(
            "Medicine record not found.",
            "danger"
        );

        return;

    }


    /* Fill form */

    document.getElementById(
        "editMedicineName"
    ).value =
        medicine.name || "";


    document.getElementById(
        "editMedicineCategory"
    ).value =
        medicine.category || "";


    document.getElementById(
        "editGenericName"
    ).value =
        medicine.genericName || "";


    document.getElementById(
        "editBrandName"
    ).value =
        medicine.brandName || "";


    document.getElementById(
        "editMedicineUses"
    ).value =
        medicine.uses || "";


    document.getElementById(
        "editMedicineDosage"
    ).value =
        medicine.dosage || "";


    document.getElementById(
        "editMedicineForm"
    ).value =
        medicine.form || "";


    document.getElementById(
        "editSideEffects"
    ).value =
        medicine.sideEffects || "";


    document.getElementById(
        "editPrecautions"
    ).value =
        medicine.precautions || "";


    document.getElementById(
        "editStorage"
    ).value =
        medicine.storage || "";

}


/* =========================================
   UPDATE MEDICINE
========================================= */

function updateMedicine(event) {

    event.preventDefault();


    const medicineId =
        Number(
            localStorage.getItem(
                "editingMedicineId"
            )
        );


    if (!medicineId) {

        showEditMessage(
            "Invalid medicine record.",
            "danger"
        );

        return;

    }


    /* Get updated values */

    const name =
        document.getElementById(
            "editMedicineName"
        ).value.trim();


    const category =
        document.getElementById(
            "editMedicineCategory"
        ).value;


    const genericName =
        document.getElementById(
            "editGenericName"
        ).value.trim();


    const brandName =
        document.getElementById(
            "editBrandName"
        ).value.trim();


    const uses =
        document.getElementById(
            "editMedicineUses"
        ).value.trim();


    const dosage =
        document.getElementById(
            "editMedicineDosage"
        ).value.trim();


    const medicineForm =
        document.getElementById(
            "editMedicineForm"
        ).value;


    const sideEffects =
        document.getElementById(
            "editSideEffects"
        ).value.trim();


    const precautions =
        document.getElementById(
            "editPrecautions"
        ).value.trim();


    const storage =
        document.getElementById(
            "editStorage"
        ).value.trim();



    /* =================================
       VALIDATION
    ================================= */

    if (
        name === "" ||
        category === "" ||
        uses === "" ||
        dosage === "" ||
        sideEffects === "" ||
        precautions === ""
    ) {

        showEditMessage(
            "Please fill all required fields.",
            "danger"
        );

        return;

    }



    /* =================================
       GET MEDICINES
    ================================= */

    const medicines =
        getEditMedicines();


    const currentMedicine =
        medicines.find(
            function(item) {

                return item.id === medicineId;

            }
        );


    if (!currentMedicine) {

        showEditMessage(
            "Medicine not found.",
            "danger"
        );

        return;

    }



    /* =================================
       DUPLICATE NAME CHECK
    ================================= */

    const duplicate =
        medicines.some(
            function(item) {

                return (

                    item.id !== medicineId &&

                    item.name
                        .toLowerCase() ===
                    name.toLowerCase()

                );

            }
        );


    if (duplicate) {

        showEditMessage(
            "Another medicine with this name already exists.",
            "warning"
        );

        return;

    }



    /* =================================
       UPDATE OBJECT
    ================================= */

    currentMedicine.name =
        name;

    currentMedicine.category =
        category;

    currentMedicine.genericName =
        genericName;

    currentMedicine.brandName =
        brandName;

    currentMedicine.uses =
        uses;

    currentMedicine.dosage =
        dosage;

    currentMedicine.form =
        medicineForm;

    currentMedicine.sideEffects =
        sideEffects;

    currentMedicine.precautions =
        precautions;

    currentMedicine.storage =
        storage;

    currentMedicine.updatedAt =
        new Date().toLocaleString();



    /* =================================
       SAVE
    ================================= */

    saveEditMedicines(
        medicines
    );



    /* =================================
       SUCCESS
    ================================= */

    showEditMessage(
        "Medicine updated successfully!",
        "success"
    );


    localStorage.removeItem(
        "editingMedicineId"
    );


    /* Redirect */

    setTimeout(
        function() {

            window.location.href =
                "medicines.html";

        },
        1200
    );

}


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadMedicineForEdit();


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
