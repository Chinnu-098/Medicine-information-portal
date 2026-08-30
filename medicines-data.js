/* =====================================================
   MEDICINE INFORMATION PORTAL
   File: js/medicines-data.js
   ===================================================== */

const MEDICINES_KEY = "medinfo_medicines";


/* =====================================================
   DEMO MEDICINES
   ===================================================== */

const DEFAULT_MEDICINES = [

    {
        id: "MED001",
        name: "Paracetamol",
        genericName: "Paracetamol",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",

        category: "Pain Relief",
        form: "Tablet",
        strength: "500 mg",

        uses: [
            "Fever",
            "Headache",
            "Mild to moderate pain",
            "Body aches"
        ],

        dosage: "Use only according to the product label or advice of a healthcare professional.",

        howToUse: "Take as directed on the package or by a healthcare professional. Do not exceed the recommended amount.",

        sideEffects: [
            "Nausea",
            "Stomach discomfort",
            "Skin rash"
        ],

        precautions: [
            "Do not exceed the recommended amount.",
            "Check other medicines for paracetamol before combining products.",
            "Ask a healthcare professional if you have liver problems."
        ],

        warnings: "Seek professional advice if symptoms persist or worsen.",

        contraindications: [
            "Known allergy to paracetamol",
            "Certain serious liver conditions"
        ],

        storage: "Store in a cool, dry place away from direct sunlight and keep out of reach of children.",

        manufacturer: "Generic Manufacturer",

        prescriptionRequired: false,

        description:
            "Paracetamol is commonly used to reduce fever and relieve mild to moderate pain.",

        createdAt: "2026-01-01T00:00:00.000Z"
    },


    {
        id: "MED002",
        name: "Ibuprofen",
        genericName: "Ibuprofen",
        image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",

        category: "Pain Relief",
        form: "Tablet",
        strength: "200 mg",

        uses: [
            "Mild pain",
            "Fever",
            "Inflammation",
            "Headache"
        ],

        dosage: "Follow the package directions or advice from a healthcare professional.",

        howToUse: "Take with water and follow the directions provided with the medicine.",

        sideEffects: [
            "Stomach discomfort",
            "Nausea",
            "Heartburn"
        ],

        precautions: [
            "Ask a healthcare professional if you have stomach problems.",
            "Tell your healthcare professional about other medicines you take.",
            "Do not use more than the recommended amount."
        ],

        warnings: "NSAID medicines may not be suitable for everyone. Professional advice may be needed.",

        contraindications: [
            "Certain serious allergic reactions to NSAIDs",
            "Some stomach or kidney conditions"
        ],

        storage: "Keep tightly closed in a cool, dry place away from direct sunlight.",

        manufacturer: "Generic Manufacturer",

        prescriptionRequired: false,

        description:
            "Ibuprofen is an NSAID commonly used for pain, fever and inflammation.",

        createdAt: "2026-01-01T00:00:00.000Z"
    },


    {
        id: "MED003",
        name: "Amoxicillin",
        genericName: "Amoxicillin",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",

        category: "Antibiotics",
        form: "Capsule",
        strength: "500 mg",

        uses: [
            "Certain bacterial infections",
            "Some respiratory infections",
            "Some ear infections"
        ],

        dosage: "Use only when prescribed and follow the exact directions given by the healthcare professional.",

        howToUse: "Take exactly as prescribed. Complete the prescribed course unless your healthcare professional tells you otherwise.",

        sideEffects: [
            "Nausea",
            "Diarrhea",
            "Skin rash"
        ],

        precautions: [
            "Tell your healthcare professional if you have a penicillin allergy.",
            "Use antibiotics only when prescribed.",
            "Do not share antibiotics with other people."
        ],

        warnings: "Antibiotics do not treat viral infections such as common colds.",

        contraindications: [
            "Known serious allergy to penicillin or related antibiotics"
        ],

        storage: "Store according to the package instructions and keep away from children.",

        manufacturer: "Generic Manufacturer",

        prescriptionRequired: true,

        description:
            "Amoxicillin is an antibiotic used to treat certain bacterial infections.",

        createdAt: "2026-01-01T00:00:00.000Z"
    },


    {
        id: "MED004",
        name: "Cetirizine",
        genericName: "Cetirizine Hydrochloride",
        image: "https://images.unsplash.com/photo-1550572017-edd951aa8ca9?auto=format&fit=crop&w=800&q=80",

        category: "Allergy",
        form: "Tablet",
        strength: "10 mg",

        uses: [
            "Sneezing",
            "Runny nose",
            "Itching",
            "Allergy symptoms"
        ],

        dosage: "Follow the package directions or advice of a healthcare professional.",

        howToUse: "Take according to the medicine label or professional advice.",

        sideEffects: [
            "Drowsiness",
            "Dry mouth",
            "Fatigue"
        ],

        precautions: [
            "May cause drowsiness in some people.",
            "Be careful with activities requiring alertness if you feel sleepy.",
            "Ask a healthcare professional if you take other medicines."
        ],

        warnings: "Individual response can vary. Follow the product instructions.",

        contraindications: [
            "Known allergy to cetirizine or related medicines"
        ],

        storage: "Store in a cool, dry place away from moisture and direct sunlight.",

        manufacturer: "Generic Manufacturer",

        prescriptionRequired: false,

        description:
            "Cetirizine is an antihistamine commonly used to relieve allergy symptoms.",

        createdAt: "2026-01-01T00:00:00.000Z"
    },


    {
        id: "MED005",
        name: "Azithromycin",
        genericName: "Azithromycin",
        image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",

        category: "Antibiotics",
        form: "Tablet",
        strength: "250 mg",

        uses: [
            "Certain bacterial infections",
            "Certain respiratory infections",
            "Some skin infections"
        ],

        dosage: "Use only as prescribed by a qualified healthcare professional.",

        howToUse: "Follow the exact prescription and instructions provided by your healthcare professional.",

        sideEffects: [
            "Nausea",
            "Diarrhea",
            "Abdominal discomfort"
        ],

        precautions: [
            "Use only when prescribed.",
            "Tell your healthcare professional about other medicines you take.",
            "Do not use leftover antibiotics."
        ],

        warnings: "Antibiotics should not be used for viral illnesses unless specifically directed.",

        contraindications: [
            "Certain serious allergies to macrolide antibiotics"
        ],

        storage: "Store according to the package instructions.",

        manufacturer: "Generic Manufacturer",

        prescriptionRequired: true,

        description:
            "Azithromycin is an antibiotic used for certain bacterial infections.",

        createdAt: "2026-01-01T00:00:00.000Z"
    },


    {
        id: "MED006",
        name: "Omeprazole",
        genericName: "Omeprazole",
        image: "https://images.unsplash.com/photo-1550572017-edd951aa8ca9?auto=format&fit=crop&w=800&q=80",

        category: "Digestive Health",
        form: "Capsule",
        strength: "20 mg",

        uses: [
            "Heartburn",
            "Acid reflux",
            "Certain stomach conditions"
        ],

        dosage: "Follow the product label or professional advice.",

        howToUse: "Use according to the instructions supplied with the medicine.",

        sideEffects: [
            "Headache",
            "Nausea",
            "Abdominal discomfort"
        ],

        precautions: [
            "Tell a healthcare professional about persistent digestive symptoms.",
            "Follow the recommended duration of use.",
            "Discuss long-term use with a healthcare professional."
        ],

        warnings: "Persistent or severe symptoms should be evaluated by a healthcare professional.",

        contraindications: [
            "Known allergy to omeprazole or related medicines"
        ],

        storage: "Store in a cool, dry place away from direct sunlight.",

        manufacturer: "Generic Manufacturer",

        prescriptionRequired: false,

        description:
            "Omeprazole reduces the amount of acid produced in the stomach.",

        createdAt: "2026-01-01T00:00:00.000Z"
    },


    {
        id: "MED007",
        name: "Loratadine",
        genericName: "Loratadine",
        image: "https://images.unsplash.com/photo-1550572017-edd951aa8ca9?auto=format&fit=crop&w=800&q=80",

        category: "Allergy",
        form: "Tablet",
        strength: "10 mg",

        uses: [
            "Sneezing",
            "Runny nose",
            "Itching",
            "Allergy symptoms"
        ],

        dosage: "Follow the package directions or professional advice.",

        howToUse: "Take according to the instructions on the product label.",

        sideEffects: [
            "Headache",
            "Drowsiness",
            "Dry mouth"
        ],

        precautions: [
            "Follow the recommended amount.",
            "Tell a healthcare professional about other medicines you use.",
            "Stop and seek advice if an unusual reaction occurs."
        ],

        warnings: "Follow the package instructions and professional guidance.",

        contraindications: [
            "Known allergy to loratadine"
        ],

        storage: "Keep in a cool, dry place away from moisture.",

        manufacturer: "Generic Manufacturer",

        prescriptionRequired: false,

        description:
            "Loratadine is an antihistamine used to relieve common allergy symptoms.",

        createdAt: "2026-01-01T00:00:00.000Z"
    },


    {
        id: "MED008",
        name: "Metformin",
        genericName: "Metformin",
        image: "https://images.unsplash.com/photo-1550572017-edd951aa8ca9?auto=format&fit=crop&w=800&q=80",

        category: "Diabetes",
        form: "Tablet",
        strength: "500 mg",

        uses: [
            "Type 2 diabetes",
            "Blood glucose management"
        ],

        dosage: "Use only according to a prescription or advice from a qualified healthcare professional.",

        howToUse: "Take exactly as prescribed. Do not change the dose without professional advice.",

        sideEffects: [
            "Nausea",
            "Diarrhea",
            "Stomach discomfort"
        ],

        precautions: [
            "Tell your healthcare professional about kidney problems.",
            "Do not change your prescribed dose yourself.",
            "Attend recommended health check-ups."
        ],

        warnings: "This is a prescription medicine and should be used under professional supervision.",

        contraindications: [
            "Certain severe kidney conditions",
            "Known allergy to metformin"
        ],

        storage: "Store at room temperature according to the product instructions.",

        manufacturer: "Generic Manufacturer",

        prescriptionRequired: true,

        description:
            "Metformin is a prescription medicine commonly used in the management of type 2 diabetes.",

        createdAt: "2026-01-01T00:00:00.000Z"
    },


    {
        id: "MED009",
        name: "Amlodipine",
        genericName: "Amlodipine",
        image: "https://images.unsplash.com/photo-1550572017-edd951aa8ca9?auto=format&fit=crop&w=800&q=80",

        category: "Blood Pressure",
        form: "Tablet",
        strength: "5 mg",

        uses: [
            "High blood pressure",
            "Certain heart-related conditions"
        ],

        dosage: "Use only as prescribed by a healthcare professional.",

        howToUse: "Take exactly as prescribed and at the recommended time.",

        sideEffects: [
            "Headache",
            "Dizziness",
            "Swelling of ankles"
        ],

        precautions: [
            "Do not stop prescribed treatment without professional advice.",
            "Tell your healthcare professional if you experience significant dizziness.",
            "Keep regular health check-ups."
        ],

        warnings: "Prescription medicine. Dose changes should be made only by a healthcare professional.",

        contraindications: [
            "Known allergy to amlodipine"
        ],

        storage: "Store in a cool, dry place away from direct sunlight.",

        manufacturer: "Generic Manufacturer",

        prescriptionRequired: true,

        description:
            "Amlodipine is a prescription medicine used to help manage high blood pressure and certain heart conditions.",

        createdAt: "2026-01-01T00:00:00.000Z"
    },


    {
        id: "MED010",
        name: "ORS",
        genericName: "Oral Rehydration Salts",
        image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80",

        category: "Hydration",
        form: "Powder",
        strength: "As labelled",

        uses: [
            "Replacement of fluids",
            "Replacement of electrolytes",
            "Dehydration associated with diarrhea"
        ],

        dosage: "Prepare and use exactly according to the instructions on the packet.",

        howToUse: "Mix and prepare exactly as instructed on the product packaging.",

        sideEffects: [
            "Usually well tolerated when prepared correctly"
        ],

        precautions: [
            "Use the correct amount of water specified on the packet.",
            "Do not store prepared solution longer than instructed.",
            "Seek medical help for severe dehydration."
        ],

        warnings: "Severe dehydration or worsening illness requires prompt medical attention.",

        contraindications: [
            "Certain conditions requiring restricted fluid or electrolyte intake"
        ],

        storage: "Keep unopened packets in a cool, dry place. Follow the packet instructions after preparation.",

        manufacturer: "Generic Manufacturer",

        prescriptionRequired: false,

        description:
            "Oral rehydration salts are used to help replace fluids and electrolytes lost from the body.",

        createdAt: "2026-01-01T00:00:00.000Z"
    }

];


/* =====================================================
   INITIALIZE DATABASE
   ===================================================== */

function initializeMedicinesData() {

    const stored =
        localStorage.getItem(MEDICINES_KEY);

    if (!stored) {

        localStorage.setItem(
            MEDICINES_KEY,
            JSON.stringify(DEFAULT_MEDICINES)
        );

        return;
    }

    /*
     * If old/invalid data exists,
     * restore demo data.
     */

    try {

        const medicines =
            JSON.parse(stored);

        if (!Array.isArray(medicines)) {

            localStorage.setItem(
                MEDICINES_KEY,
                JSON.stringify(DEFAULT_MEDICINES)
            );

        }

    } catch (error) {

        localStorage.setItem(
            MEDICINES_KEY,
            JSON.stringify(DEFAULT_MEDICINES)
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

        return Array.isArray(medicines)
            ? medicines
            : [];

    } catch (error) {

        console.error(
            "Error loading medicines:",
            error
        );

        return [];

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
        JSON.stringify(medicines)
    );

}


/* =====================================================
   GET MEDICINE BY ID
   ===================================================== */

function getMedicineById(
    id
) {

    const medicines =
        getMedicines();

    return medicines.find(
        medicine =>
            String(medicine.id) ===
            String(id)
    ) || null;

}


/* =====================================================
   ADD MEDICINE
   ===================================================== */

function addMedicine(
    medicineData
) {

    const medicines =
        getMedicines();

    const newMedicine = {

        id:
            medicineData.id ||
            "MED" +
            Date.now(),

        name:
            medicineData.name || "",

        genericName:
            medicineData.genericName || "",

        image:
            medicineData.image || "",

        category:
            medicineData.category || "Other",

        form:
            medicineData.form || "Tablet",

        strength:
            medicineData.strength || "",

        uses:
            Array.isArray(medicineData.uses)
                ? medicineData.uses
                : [],

        dosage:
            medicineData.dosage || "",

        howToUse:
            medicineData.howToUse || "",

        sideEffects:
            Array.isArray(medicineData.sideEffects)
                ? medicineData.sideEffects
                : [],

        precautions:
            Array.isArray(medicineData.precautions)
                ? medicineData.precautions
                : [],

        warnings:
            medicineData.warnings || "",

        contraindications:
            Array.isArray(
                medicineData.contraindications
            )
                ? medicineData.contraindications
                : [],

        storage:
            medicineData.storage || "",

        manufacturer:
            medicineData.manufacturer || "",

        prescriptionRequired:
            Boolean(
                medicineData.prescriptionRequired
            ),

        description:
            medicineData.description || "",

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
    id,
    updatedData
) {

    const medicines =
        getMedicines();

    const index =
        medicines.findIndex(
            medicine =>
                String(medicine.id) ===
                String(id)
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
    id
) {

    const medicines =
        getMedicines();

    const updated =
        medicines.filter(
            medicine =>
                String(medicine.id) !==
                String(id)
        );

    if (
        updated.length ===
        medicines.length
    ) {

        return false;

    }

    saveMedicines(
        updated
    );

    return true;

}


/* =====================================================
   SEARCH MEDICINES
   ===================================================== */

function searchMedicines(
    keyword
) {

    const medicines =
        getMedicines();

    const search =
        String(keyword || "")
            .trim()
            .toLowerCase();

    if (!search) {

        return medicines;

    }

    return medicines.filter(
        medicine => {

            const text = [

                medicine.name,

                medicine.genericName,

                medicine.category,

                medicine.form,

                medicine.strength,

                medicine.description

            ]
                .join(" ")
                .toLowerCase();

            return text.includes(search);

        }
    );

}


/* =====================================================
   GET CATEGORIES
   ===================================================== */

function getMedicineCategories() {

    const medicines =
        getMedicines();

    return [
        ...new Set(
            medicines
                .map(
                    medicine =>
                        medicine.category
                )
                .filter(Boolean)
        )
    ].sort();

}


/* =====================================================
   RESET DEMO DATA
   ===================================================== */

function resetDemoMedicines() {

    localStorage.setItem(
        MEDICINES_KEY,
        JSON.stringify(
            DEFAULT_MEDICINES
        )
    );

    return DEFAULT_MEDICINES;

}


/* =====================================================
   INITIALIZE
   ===================================================== */

initializeMedicinesData();
