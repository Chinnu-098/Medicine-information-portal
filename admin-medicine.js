```javascript
/* =========================================================
   ADMIN MEDICINE
   Medicine Information Portal
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const form =
            document.getElementById(
                "addMedicineForm"
            );


        if (!form) {

            return;

        }


        form.addEventListener(
            "submit",
            addMedicine
        );


        /* Image preview */

        const imageInput =
            document.getElementById(
                "medicineImage"
            );


        if (imageInput) {

            imageInput.addEventListener(
                "input",
                previewMedicineImage
            );

        }

    }
);


/* =========================================================
   GET STORED MEDICINES
   ========================================================= */

function getMedicines() {

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
            "Error reading medicines:",
            error
        );


        return [];

    }

}


/* =========================================================
   ADD MEDICINE
   ========================================================= */

function addMedicine(event) {

    event.preventDefault();


    const form =
        document.getElementById(
            "addMedicineForm"
        );


    if (form) {

        form.classList.add(
            "was-validated"
        );

    }


    if (
        form &&
        !form.checkValidity()
    ) {

        showMedicineMessage(
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


    const name =
        getMedicineValue(
            "medicineName"
        );


    const genericName =
        getMedicineValue(
            "genericName"
        );


    const category =
        getMedicineValue(
            "category"
        );


    const medicineForm =
        getMedicineValue(
            "medicineFormType"
        );


    const strength =
        getMedicineValue(
            "strength"
        );


    const manufacturer =
        getMedicineValue(
            "manufacturer"
        );


    const image =
        getMedicineValue(
            "medicineImage"
        );


    const uses =
        getMedicineValue(
            "uses"
        );


    const dosage =
        getMedicineValue(
            "dosage"
        );


    const sideEffects =
        getMedicineValue(
            "sideEffects"
        );


    const precautions =
        getMedicineValue(
            "precautions"
        );


    const storage =
        getMedicineValue(
            "storage"
        );


    const description =
        getMedicineValue(
            "description"
        );


    /* =====================================================
       CREATE UNIQUE ID
       ===================================================== */

    const id =
        createMedicineId();


    /* =====================================================
       CREATE MEDICINE OBJECT
       ===================================================== */

    const medicine = {

        id: id,

        name: name,

        genericName:
            genericName,

        category:
            category,

        form:
            medicineForm,

        strength:
            strength,

        manufacturer:
            manufacturer,

        image:
            image ||
            getDefaultMedicineImage(),

        uses:
            uses,

        dosage:
            dosage,

        sideEffects:
            sideEffects,

        precautions:
            precautions,

        storage:
            storage ||
            "Store in a cool, dry place away from direct sunlight.",

        description:
            description,

        createdAt:
            new Date().toISOString(),

        updatedAt:
            new Date().toISOString()

    };


    /* =====================================================
       SAVE
       ===================================================== */

    const medicines =
        getMedicines();


    medicines.push(
        medicine
    );


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


        showMedicineMessage(
            "Unable to save medicine.",
            "danger"
        );


        return;

    }


    /* =====================================================
       SUCCESS
       ===================================================== */

    showMedicineMessage(
        "Medicine added successfully!",
        "success"
    );


    /* =====================================================
       RESET FORM
       ===================================================== */

    if (form) {

        form.reset();

        form.classList.remove(
            "was-validated"
        );

    }


    /* Remove preview */

    const preview =
        document.getElementById(
            "medicineImagePreview"
        );


    if (preview) {

        preview.classList.add(
            "d-none"
        );

    }


    /* =====================================================
       REDIRECT
       ===================================================== */

    setTimeout(
        function () {

            window.location.href =
                "medicines.html";

        },
        1200
    );

}


/* =========================================================
   GET FIELD VALUE
   ========================================================= */

function getMedicineValue(
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
   CREATE MEDICINE ID
   ========================================================= */

function createMedicineId() {

    return (
        "MED-" +
        Date.now().toString(36).toUpperCase() +
        "-" +
        Math.random()
            .toString(36)
            .substring(2, 7)
            .toUpperCase()
    );

}


/* =========================================================
   DEFAULT IMAGE
   ========================================================= */

function getDefaultMedicineImage() {

    return "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80";

}


/* =========================================================
   IMAGE PREVIEW
   ========================================================= */

function previewMedicineImage() {


    const input =
        document.getElementById(
            "medicineImage"
        );


    const preview =
        document.getElementById(
            "medicineImagePreview"
        );


    const image =
        document.getElementById(
            "previewImage"
        );


    if (
        !input ||
        !preview ||
        !image
    ) {

        return;

    }


    const url =
        input.value.trim();


    if (!url) {

        preview.classList.add(
            "d-none"
        );

        return;

    }


    image.src =
        url;


    image.onload =
        function () {

            preview.classList.remove(
                "d-none"
            );

        };


    image.onerror =
        function () {

            preview.classList.add(
                "d-none"
            );

        };

}


/* =========================================================
   SHOW MESSAGE
   ========================================================= */

function showMedicineMessage(
    message,
    type = "info"
) {


    let box =
        document.getElementById(
            "pageMessage"
        );


    /*
     * If message box doesn't exist,
     * create one automatically.
     */

    if (!box) {

        box =
            document.createElement(
                "div"
            );


        box.id =
            "pageMessage";


        box.className =
            "alert";


        const main =
            document.querySelector(
                "main"
            );


        if (main) {

            main.prepend(
                box
            );

        }
    }


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

            ${escapeMedicineHTML(message)}

        `;

    }
    else {

        box.innerHTML = `

            <i
                class="bi bi-exclamation-circle-fill me-2">
            </i>

            ${escapeMedicineHTML(message)}

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

function escapeMedicineHTML(
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
