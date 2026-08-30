/* =====================================================
   MEDICINE DETAILS
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const params =
        new URLSearchParams(window.location.search);

    const id =
        params.get("id");

    const medicines =
        getAllMedicines();

    const medicine =
        medicines.find(
            item => String(item.id) === String(id)
        );

    if (!medicine) {

        document
            .getElementById("detailsLoading")
            .classList.add("d-none");

        document
            .getElementById("medicineNotFound")
            .classList.remove("d-none");

        return;
    }

    loadDetails(medicine);
});


function loadDetails(medicine) {

    document
        .getElementById("detailsLoading")
        .classList.add("d-none");

    document
        .getElementById("medicineDetails")
        .classList.remove("d-none");


    document.title =
        `${medicine.name} | Medicine Information Portal`;


    setText(
        "medicineName",
        medicine.name
    );

    setText(
        "medicineGeneric",
        medicine.genericName || ""
    );

    setText(
        "medicineCategory",
        medicine.category || "General"
    );

    setText(
        "medicineType",
        medicine.type || "Medicine"
    );

    setText(
        "medicineHow",
        medicine.howItWorks || "Information not available."
    );

    setText(
        "medicineDosage",
        medicine.dosage || "Follow the official label or healthcare professional's instructions."
    );

    setText(
        "medicineWarnings",
        medicine.warnings || "Follow the official product warnings."
    );

    setText(
        "medicineManufacturer",
        medicine.manufacturer || "Not specified"
    );

    setText(
        "medicineStorage",
        medicine.storage || "Follow product label."
    );


    setText(
        "sideCategory",
        medicine.category || "General"
    );

    setText(
        "sideType",
        medicine.type || "Medicine"
    );


    const prescription =
        medicine.prescription === true;

    setText(
        "sidePrescription",
        prescription ? "Prescription medicine" : "Not marked as prescription"
    );


    const prescriptionBadge =
        document.getElementById(
            "prescriptionStatus"
        );

    prescriptionBadge.textContent =
        prescription
            ? "Prescription"
            : "General / OTC";


    prescriptionBadge.className =
        prescription
            ? "badge bg-danger"
            : "badge bg-success";


    const image =
        document.getElementById(
            "medicineImage"
        );

    image.src =
        medicine.image ||
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80";

    image.alt =
        medicine.name;


    image.onerror = function() {

        this.src =
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80";

    };


    renderList(
        "medicineUses",
        medicine.uses
    );

    renderList(
        "medicineSideEffects",
        medicine.sideEffects
    );

    renderList(
        "medicinePrecautions",
        medicine.precautions
    );
}


function renderList(id, items) {

    const element =
        document.getElementById(id);

    element.innerHTML = "";

    if (!Array.isArray(items) || !items.length) {

        const li =
            document.createElement("li");

        li.textContent =
            "Information not available.";

        element.appendChild(li);

        return;
    }


    items.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent =
            item;

        element.appendChild(li);
    });
}


function setText(id, value) {

    const element =
        document.getElementById(id);

    if (element) {
        element.textContent =
            value ?? "";
    }
}
