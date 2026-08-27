/* =========================================
   MEDINFO PORTAL
   ADMIN MEDICINE MANAGEMENT
========================================= */


/* =========================================
   GET MEDICINES
========================================= */

function getMedicines() {

    return JSON.parse(
        localStorage.getItem(
            "medicinePortalMedicines"
        )
    ) || [];

}


/* =========================================
   SAVE MEDICINES
========================================= */

function saveMedicines(medicines) {

    localStorage.setItem(
        "medicinePortalMedicines",
        JSON.stringify(medicines)
    );

}


/* =========================================
   SHOW MESSAGE
========================================= */

function showMedicineMessage(
    message,
    type
) {

    const messageBox =
        document.getElementById(
            "medicineMessage"
        );

    if (!messageBox) {
        return;
    }


    messageBox.className =
        "alert alert-" + type;


    messageBox.textContent =
        message;


    messageBox.style.display =
        "block";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   ADD MEDICINE
========================================= */

function addMedicine(event) {

    event.preventDefault();


    /* Get form values */

    const name =
        document.getElementById(
            "medicineName"
        ).value.trim();


    const category =
        document.getElementById(
            "medicineCategory"
        ).value;


    const genericName =
        document.getElementById(
            "genericName"
        ).value.trim();


    const brandName =
        document.getElementById(
            "brandName"
        ).value.trim();


    const uses =
        document.getElementById(
            "medicineUses"
        ).value.trim();


    const dosage =
        document.getElementById(
            "medicineDosage"
        ).value.trim();


    const medicineForm =
        document.getElementById(
            "medicineForm"
        ).value;


    const sideEffects =
        document.getElementById(
            "sideEffects"
        ).value.trim();


    const precautions =
        document.getElementById(
            "precautions"
        ).value.trim();


    const storage =
        document.getElementById(
            "storage"
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

        showMedicineMessage(
            "Please fill all required fields.",
            "danger"
        );

        return;

    }



    /* =================================
       GET EXISTING MEDICINES
    ================================= */

    const medicines =
        getMedicines();



    /* =================================
       DUPLICATE CHECK
    ================================= */

    const duplicate =
        medicines.some(
            function(medicine) {

                return medicine.name
                    .toLowerCase() ===
                    name.toLowerCase();

            }
        );


    if (duplicate) {

        showMedicineMessage(
            "This medicine already exists.",
            "warning"
        );

        return;

    }



    /* =================================
       CREATE MEDICINE OBJECT
    ================================= */

    const newMedicine = {

        id: Date.now(),

        name: name,

        category: category,

        genericName: genericName,

        brandName: brandName,

        uses: uses,

        dosage: dosage,

        form: medicineForm,

        sideEffects: sideEffects,

        precautions: precautions,

        storage: storage,

        createdAt:
            new Date().toLocaleString()

    };



    /* =================================
       SAVE
    ================================= */

    medicines.push(
        newMedicine
    );


    saveMedicines(
        medicines
    );



    /* =================================
       SUCCESS MESSAGE
    ================================= */

    showMedicineMessage(
        "Medicine added successfully!",
        "success"
    );



    /* =================================
       RESET FORM
    ================================= */

    document
        .getElementById(
            "addMedicineForm"
        )
        .reset();



    /* =================================
       REDIRECT
    ================================= */

    setTimeout(
        function() {

            window.location.href =
                "medicines.html";

        },
        1200
    );

}


/* =========================================
   FORM EVENT
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const form =
            document.getElementById(
                "addMedicineForm"
            );


        if (form) {

            form.addEventListener(
                "submit",
                addMedicine
            );

        }

    }
);
