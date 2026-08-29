// Complete Medicine Database
const medicines = [
    {
        id: 1,
        name: "Paracetamol (Acetaminophen)",
        category: "Pain Reliever & Fever Reducer",
        uses: "Fever, Mild to Moderate Pain, Headache, Toothache",
        dosage: "500mg to 650mg every 4-6 hours as needed (Max 4g/day)",
        sideEffects: "Nausea, Rash, Liver damage in high doses",
        precautions: "Avoid alcohol consumption. Consult a doctor if you have liver disease.",
        storage: "Store below 30°C in a dry place away from sunlight."
    },
    {
        id: 2,
        name: "Amoxicillin",
        category: "Antibiotics (Penicillin group)",
        uses: "Bacterial Infections (Ear, Nose, Throat, Skin, Urinary Tract)",
        dosage: "250mg to 500mg every 8 hours or as directed by doctor",
        sideEffects: "Diarrhea, Nausea, Rash, Allergic reactions",
        precautions: "Complete the full course. Inform doctor if allergic to penicillin.",
        storage: "Store at room temperature away from heat and moisture."
    },
    {
        id: 3,
        name: "Ibuprofen",
        category: "NSAID (Anti-inflammatory)",
        uses: "Body pain, Joint inflammation, Arthritis, Toothache, Menstrual cramps",
        dosage: "200mg to 400mg every 4 to 6 hours after meals",
        sideEffects: "Stomach pain, Heartburn, Dizziness, Ulcers with long-term use",
        precautions: "Take with food or milk to prevent stomach upset. Avoid if you have kidney issues.",
        storage: "Keep in a cool, dry place."
    },
    {
        id: 4,
        name: "Cetirizine",
        category: "Antihistamine (Anti-allergy)",
        uses: "Running nose, Sneezing, Allergies, Skin itching, Hives",
        dosage: "5mg to 10mg once daily at bedtime",
        sideEffects: "Drowsiness, Dry mouth, Fatigue",
        precautions: "May cause sleepiness; avoid driving or operating heavy machinery after consumption.",
        storage: "Store at room temperature."
    },
    {
        id: 5,
        name: "Omeprazole",
        category: "Antacid / Proton Pump Inhibitor (PPI)",
        uses: "Acidity, GERD, Stomach Ulcers, Heartburn",
        dosage: "20mg once daily before breakfast (empty stomach)",
        sideEffects: "Headache, Stomach discomfort, Gas, Diarrhea",
        precautions: "Swallow whole capsule; do not crush or chew.",
        storage: "Store in a cool, dry place away from direct light."
    },
    {
        id: 6,
        name: "Metformin",
        category: "Anti-diabetic",
        uses: "Type 2 Diabetes mellitus Management",
        dosage: "500mg to 1000mg daily with or after meals as prescribed",
        sideEffects: "Nausea, Vomiting, Metallic taste, Diarrhea",
        precautions: "Monitor blood sugar regularly. Take with meals to reduce stomach problems.",
        storage: "Store below 25°C."
    },
    {
        id: 7,
        name: "Amlodipine",
        category: "Antihypertensive (Calcium Channel Blocker)",
        uses: "High Blood Pressure (Hypertension), Angina (Chest pain)",
        dosage: "2.5mg to 10mg once daily",
        sideEffects: "Swelling in ankles/feet, Dizziness, Flushing",
        precautions: "Do not stop taking abruptly without consulting your doctor.",
        storage: "Protect from light and moisture."
    },
    {
        id: 8,
        name: "Azithromycin",
        category: "Antibiotics (Macrolide group)",
        uses: "Respiratory tract infections, Typhoid, Skin infections",
        dosage: "500mg once daily for 3 to 5 days",
        sideEffects: "Diarrhea, Abdominal pain, Nausea",
        precautions: "Take 1 hour before or 2 hours after food for better absorption.",
        storage: "Store below 30°C."
    },
    {
        id: 9,
        name: "Pantoprazole",
        category: "Antacid / PPI",
        uses: "Acid reflux, Stomach ulcers, Gastritis",
        dosage: "40mg daily before morning food",
        sideEffects: "Headache, Diarrhea, Joint pain",
        precautions: "Best taken 30-60 minutes before meals.",
        storage: "Keep in dry conditions."
    },
    {
        id: 10,
        name: "Atorvastatin",
        category: "Cholesterol-lowering (Statin)",
        uses: "High cholesterol, Heart attack prevention",
        dosage: "10mg to 40mg once daily at night",
        sideEffects: "Muscle pain, Weakness, Mild digestive issues",
        precautions: "Avoid eating grapefruit while taking this medicine.",
        storage: "Store in cool and dry place."
    }
];

// Export / Make globally available
if (typeof window !== 'undefined') {
    window.medicinesData = medicines;
}
