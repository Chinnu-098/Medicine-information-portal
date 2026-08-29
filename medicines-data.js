/* =====================================================
   MEDINFO PORTAL - MEDICINE DATA
   File: js/medicines-data.js
   ===================================================== */

const DEFAULT_MEDICINES = [

    {
        id: "MED001",
        name: "Paracetamol",
        genericName: "Paracetamol",
        category: "Pain Relief",
        form: "Tablet",
        strength: "500 mg",
        manufacturer: "Generic",
        uses: [
            "Fever",
            "Mild to moderate pain",
            "Headache"
        ],
        description:
            "Paracetamol is commonly used to reduce fever and relieve mild to moderate pain.",
        precautions:
            "Use only according to the label or advice of a healthcare professional.",
        sideEffects: [
            "Nausea",
            "Stomach discomfort",
            "Skin rash"
        ],
        prescriptionRequired: false
    },


    {
        id: "MED002",
        name: "Amoxicillin",
        genericName: "Amoxicillin",
        category: "Antibiotic",
        form: "Capsule",
        strength: "500 mg",
        manufacturer: "Generic",
        uses: [
            "Certain bacterial infections",
            "Respiratory infections",
            "Ear infections"
        ],
        description:
            "Amoxicillin is an antibiotic used for certain bacterial infections.",
        precautions:
            "Antibiotics should be used only when prescribed by a qualified healthcare professional.",
        sideEffects: [
            "Nausea",
            "Diarrhea",
            "Skin rash"
        ],
        prescriptionRequired: true
    },


    {
        id: "MED003",
        name: "Cetirizine",
        genericName: "Cetirizine Hydrochloride",
        category: "Allergy",
        form: "Tablet",
        strength: "10 mg",
        manufacturer: "Generic",
        uses: [
            "Allergic rhinitis",
            "Sneezing",
            "Itching"
        ],
        description:
            "Cetirizine is an antihistamine commonly used to relieve allergy symptoms.",
        precautions:
            "May cause drowsiness in some people. Follow professional or label guidance.",
        sideEffects: [
            "Drowsiness",
            "Dry mouth",
            "Fatigue"
        ],
        prescriptionRequired: false
    },


    {
        id: "MED004",
        name: "Ibuprofen",
        genericName: "Ibuprofen",
        category: "Pain Relief",
        form: "Tablet",
        strength: "200 mg",
        manufacturer: "Generic",
        uses: [
            "Mild pain",
            "Inflammation",
            "Fever"
        ],
        description:
            "Ibuprofen is an NSAID commonly used for pain, inflammation and fever.",
        precautions:
            "Some people should avoid NSAIDs. Ask a healthcare professional if it is appropriate for you.",
        sideEffects: [
            "Stomach discomfort",
            "Nausea",
            "Heartburn"
        ],
        prescriptionRequired: false
    },


    {
        id: "MED005",
        name: "Omeprazole",
        genericName: "Omeprazole",
        category: "Digestive Health",
        form: "Capsule",
        strength: "20 mg",
        manufacturer: "Generic",
        uses: [
            "Heartburn",
            "Acid reflux",
            "Certain stomach conditions"
        ],
        description:
            "Omeprazole reduces the amount of acid produced in the stomach.",
        precautions:
            "Use according to professional advice, especially for persistent symptoms.",
        sideEffects: [
            "Headache",
            "Nausea",
            "Abdominal discomfort"
        ],
        prescriptionRequired: false
    },


    {
        id: "MED006",
        name: "Azithromycin",
        genericName: "Azithromycin",
        category: "Antibiotic",
        form: "Tablet",
        strength: "250 mg",
        manufacturer: "Generic",
        uses: [
            "Certain bacterial infections",
            "Respiratory infections",
            "Certain skin infections"
        ],
        description:
            "Azithromycin is an antibiotic used for certain bacterial infections.",
        precautions:
            "Use only when prescribed by a qualified healthcare professional.",
        sideEffects: [
            "Diarrhea",
            "Nausea",
            "Abdominal discomfort"
        ],
        prescriptionRequired: true
    },


    {
        id: "MED007",
        name: "Loratadine",
        genericName: "Loratadine",
        category: "Allergy",
        form: "Tablet",
        strength: "10 mg",
        manufacturer: "Generic",
        uses: [
            "Sneezing",
            "Runny nose",
            "Allergy symptoms"
        ],
        description:
            "Loratadine is an antihistamine used to relieve common allergy symptoms.",
        precautions:
            "Follow the package directions or advice from a healthcare professional.",
        sideEffects: [
            "Headache",
            "Drowsiness",
            "Dry mouth"
        ],
        prescriptionRequired: false
    },


    {
        id: "MED008",
        name: "Metformin",
        genericName: "Metformin",
        category: "Diabetes",
        form: "Tablet",
        strength: "500 mg",
        manufacturer: "Generic",
        uses: [
            "Type 2 diabetes",
            "Blood glucose management"
        ],
        description:
            "Metformin is a prescription medicine commonly used as part of treatment for type 2 diabetes.",
        precautions:
            "Use only under the guidance of a qualified healthcare professional.",
        sideEffects: [
            "Nausea",
            "Diarrhea",
            "Stomach discomfort"
        ],
        prescriptionRequired: true
    },


    {
        id: "MED009",
        name: "Amlodipine",
        genericName: "Amlodipine",
        category: "Blood Pressure",
        form: "Tablet",
        strength: "5 mg",
        manufacturer: "Generic",
        uses: [
            "High blood pressure",
            "Certain heart-related conditions"
        ],
        description:
            "Amlodipine is a prescription medicine used to help manage high blood pressure and certain heart conditions.",
        precautions:
            "Take only as prescribed and do not change the dose without professional advice.",
        sideEffects: [
            "Headache",
            "Dizziness",
            "Swelling of ankles"
        ],
        prescriptionRequired: true
    },


    {
        id: "MED010",
        name: "Vitamin B12",
        genericName: "Cyanocobalamin",
        category: "Vitamins",
        form: "Tablet",
        strength: "500 mcg",
        manufacturer: "Generic",
        uses: [
            "Vitamin B12 supplementation",
            "Prevention or treatment of deficiency"
        ],
        description:
            "Vitamin B12 supplements may be used when dietary intake or blood levels are inadequate.",
        precautions:
            "Supplement use should be based on individual needs and professional guidance.",
        sideEffects: [
            "Nausea",
            "Headache",
            "Mild digestive discomfort"
        ],
        prescriptionRequired: false
    },


    {
        id: "MED011",
        name: "Calcium + Vitamin D",
        genericName: "Calcium with Vitamin D",
        category: "Vitamins",
        form: "Tablet",
        strength: "As labelled",
        manufacturer: "Generic",
        uses: [
            "Calcium supplementation",
            "Vitamin D supplementation",
            "Bone health support"
        ],
        description:
            "Calcium and vitamin D supplements can help provide nutrients needed for normal bone health.",
        precautions:
            "Follow the product label and professional advice, especially if taking other medicines.",
        sideEffects: [
            "Constipation",
            "Stomach discomfort",
            "Nausea"
        ],
        prescriptionRequired: false
    },


    {
        id: "MED012",
        name: "ORS",
        genericName: "Oral Rehydration Salts",
        category: "Hydration",
        form: "Powder",
        strength: "As labelled",
        manufacturer: "Generic",
        uses: [
            "Replacement of fluids and electrolytes",
            "Dehydration associated with diarrhea"
        ],
        description:
            "Oral rehydration solution helps replace fluids and electrolytes lost from the body.",
        precautions:
            "Prepare and use exactly according to the product instructions.",
        sideEffects: [
            "Usually well tolerated when prepared correctly"
        ],
        prescriptionRequired: false
    }

];


/* =====================================================
   STORAGE KEY
   ===================================================== */

const MEDICINES_KEY =
    "medinfo_medicines";


/* =====================================================
   INITIALIZE MEDICINE DATA
   ===================================================== */

function initializeMedicinesData() {

    const existing =
        localStorage.getItem(
            MEDICINES_KEY
        );


    /*
     * Only create demo medicines if
     * there is no medicine data already.
     */

    if (!existing) {

        localStorage.setItem(
            MEDICINES_KEY,
            JSON.stringify(
                DEFAULT_MEDICINES
            )
        );

    }

}


/* =====================================================
   GET ALL MEDICINES
   ===================================================== */

function getMedicines() {

    try {

        const medicines =
            JSON.parse(
                localStorage.getItem(
                    MEDICINES_KEY
                )
            );


        if (
            Array.isArray(medicines) &&
            medicines.length > 0
        ) {

            return medicines;

        }


        return DEFAULT_MEDICINES;

    } catch (error) {

        console.error(
            "Unable to load medicines:",
            error
        );


        return DEFAULT_MEDICINES;

    }

}


/* =====================================================
   SAVE MEDICINES
   ===================================================== */

function saveMedicines(
    medicines
) {

    localStorage.setItem(

        MEDICINES_KEY,

        JSON.stringify(
            medicines
        )

    );

}


/* =====================================================
   GET MEDICINE BY ID
   ===================================================== */

function getMedicineById(
    medicineId
) {

    const medicines =
        getMedicines();


    return medicines.find(
        function (medicine) {

            return (
                medicine.id ===
                medicineId
            );

        }
    ) || null;

}


/* =====================================================
   GET MEDICINE BY NAME
   ===================================================== */

function getMedicineByName(
    medicineName
) {

    const medicines =
        getMedicines();


    const searchName =
        String(
            medicineName || ""
        )
        .trim()
        .toLowerCase();


    return medicines.find(
        function (medicine) {

            return (
                medicine.name
                    .toLowerCase() ===
                searchName
            );

        }
    ) || null;

}


/* =====================================================
   GET CATEGORIES
   ===================================================== */

function getMedicineCategories() {

    const medicines =
        getMedicines();


    return [
        ...new Set(
            medicines.map(
                function (medicine) {

                    return medicine.category;

                }
            )
        )
    ].sort();

}


/* =====================================================
   ADD MEDICINE
   ===================================================== */

function addMedicine(
    medicine
) {

    const medicines =
        getMedicines();


    const newMedicine = {

        id:
            medicine.id ||
            "MED" +
            String(
                Date.now()
            ).slice(-6),

        name:
            medicine.name || "",

        genericName:
            medicine.genericName || "",

        category:
            medicine.category || "Other",

        form:
            medicine.form || "Other",

        strength:
            medicine.strength || "",

        manufacturer:
            medicine.manufacturer ||
            "Generic",

        uses:
            Array.isArray(
                medicine.uses
            )
                ? medicine.uses
                : [],

        description:
            medicine.description || "",

        precautions:
            medicine.precautions || "",

        sideEffects:
            Array.isArray(
                medicine.sideEffects
            )
                ? medicine.sideEffects
                : [],

        prescriptionRequired:
            Boolean(
                medicine.prescriptionRequired
            ),

        createdAt:
            new Date().toISOString()

    };


    medicines.push(
        newMedicine
    );


    saveMedicines(
        medicines
    );


    return newMedicine;

}


/* =====================================================
   UPDATE MEDICINE
   ===================================================== */

function updateMedicine(
    medicineId,
    updatedData
) {

    const medicines =
        getMedicines();


    const index =
        medicines.findIndex(
            function (medicine) {

                return (
                    medicine.id ===
                    medicineId
                );

            }
        );


    if (index === -1) {

        return null;

    }


    medicines[index] = {

        ...medicines[index],

        ...updatedData,

        id:
            medicines[index].id,

        updatedAt:
            new Date().toISOString()

    };


    saveMedicines(
        medicines
    );


    return medicines[index];

}


/* =====================================================
   DELETE MEDICINE
   ===================================================== */

function deleteMedicine(
    medicineId
) {

    const medicines =
        getMedicines();


    const filtered =
        medicines.filter(
            function (medicine) {

                return (
                    medicine.id !==
                    medicineId
                );

            }
        );


    if (
        filtered.length ===
        medicines.length
    ) {

        return false;

    }


    saveMedicines(
        filtered
    );


    return true;

}


/* =====================================================
   RESET DEMO MEDICINES
   ===================================================== */

function resetDemoMedicines() {

    saveMedicines(
        DEFAULT_MEDICINES
    );


    return DEFAULT_MEDICINES;

}


/* =====================================================
   INITIALIZE ON PAGE LOAD
   ===================================================== */

initializeMedicinesData();
