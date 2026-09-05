/* =========================================================
   MEDICINE INFORMATION PORTAL
   Medicine Database
   File: js/medicines-data.js

   NOTE:
   This information is for educational purposes only.
   Always follow the medicine label and advice of a
   doctor/pharmacist for personal treatment.
   ========================================================= */

const medicines = [

    {
        id: 1,
        name: "Paracetamol",
        genericName: "Paracetamol / Acetaminophen",
        category: "Pain Relief & Fever",
        uses: [
            "Relief of mild to moderate pain",
            "Helps reduce fever",
            "May be used for headaches, toothache and body aches"
        ],
        description:
            "Paracetamol is commonly used to relieve pain and reduce fever.",
        sideEffects: [
            "Nausea",
            "Skin rash",
            "Allergic reactions are uncommon but possible"
        ],
        precautions: [
            "Do not take more than the recommended amount.",
            "Check other medicines because some may also contain paracetamol.",
            "People with liver problems should ask a healthcare professional before use."
        ],
        howToUse:
            "Take according to the product label or instructions given by a doctor or pharmacist.",
        dosage:
            "Dose depends on age, formulation and health condition. Follow the package instructions or healthcare professional's advice.",
        storage:
            "Store in a cool, dry place away from direct sunlight and out of children's reach.",
        prescription: "Usually available without prescription"
    },

    {
        id: 2,
        name: "Ibuprofen",
        genericName: "Ibuprofen",
        category: "Pain Relief & Anti-inflammatory",
        uses: [
            "Relief of pain",
            "Reduction of inflammation",
            "Reduction of fever"
        ],
        description:
            "Ibuprofen is a non-steroidal anti-inflammatory medicine used for pain, inflammation and fever.",
        sideEffects: [
            "Indigestion",
            "Stomach discomfort",
            "Nausea"
        ],
        precautions: [
            "May not be suitable for some people with stomach ulcers.",
            "People with certain kidney, heart or asthma conditions should seek medical advice.",
            "Take only as directed."
        ],
        howToUse:
            "Use according to the package instructions or healthcare professional's advice.",
        dosage:
            "The appropriate dose varies by age, formulation and condition. Follow the product label or professional advice.",
        storage:
            "Keep in a cool, dry place and away from children.",
        prescription: "Availability depends on strength and local regulations"
    },

    {
        id: 3,
        name: "Cetirizine",
        genericName: "Cetirizine Hydrochloride",
        category: "Allergy",
        uses: [
            "Relief of allergy symptoms",
            "Sneezing",
            "Runny or itchy nose",
            "Itchy or watery eyes",
            "Hives"
        ],
        description:
            "Cetirizine is an antihistamine used to relieve symptoms of allergies.",
        sideEffects: [
            "Sleepiness or tiredness",
            "Headache",
            "Dry mouth"
        ],
        precautions: [
            "It can make some people sleepy.",
            "Avoid activities requiring alertness if it makes you drowsy.",
            "Ask a healthcare professional if you have kidney problems."
        ],
        howToUse:
            "Take according to the product label or healthcare professional's instructions.",
        dosage:
            "Dose depends on age and formulation. Follow the label or professional advice.",
        storage:
            "Store at room temperature in a dry place away from children.",
        prescription: "Usually available without prescription"
    },

    {
        id: 4,
        name: "Loratadine",
        genericName: "Loratadine",
        category: "Allergy",
        uses: [
            "Hay fever symptoms",
            "Sneezing",
            "Runny nose",
            "Itchy eyes",
            "Hives"
        ],
        description:
            "Loratadine is an antihistamine used to relieve common allergy symptoms.",
        sideEffects: [
            "Headache",
            "Sleepiness in some people",
            "Tiredness"
        ],
        precautions: [
            "Follow the recommended instructions.",
            "Tell a healthcare professional about other medicines you take.",
            "People with certain liver conditions may need medical advice."
        ],
        howToUse:
            "Use according to the package instructions or healthcare professional's advice.",
        dosage:
            "Dose depends on age and formulation. Follow the product instructions.",
        storage:
            "Keep tightly closed in a cool, dry place.",
        prescription: "Usually available without prescription"
    },

    {
        id: 5,
        name: "Omeprazole",
        genericName: "Omeprazole",
        category: "Stomach & Digestive",
        uses: [
            "Heartburn",
            "Acid reflux",
            "Gastroesophageal reflux disease",
            "Some stomach and duodenal ulcers"
        ],
        description:
            "Omeprazole reduces the amount of acid produced in the stomach.",
        sideEffects: [
            "Headache",
            "Stomach pain",
            "Nausea",
            "Diarrhea or constipation"
        ],
        precautions: [
            "Long-term use should be discussed with a healthcare professional.",
            "Tell your doctor about other medicines you use.",
            "Persistent or severe stomach symptoms need medical evaluation."
        ],
        howToUse:
            "Use according to the medicine label or doctor's instructions.",
        dosage:
            "Dose and duration depend on the condition and formulation. Follow professional advice.",
        storage:
            "Store in a dry place at room temperature and away from children.",
        prescription: "Availability depends on formulation and local regulations"
    },

    {
        id: 6,
        name: "Pantoprazole",
        genericName: "Pantoprazole",
        category: "Stomach & Digestive",
        uses: [
            "Acid reflux",
            "Heartburn",
            "Certain stomach and intestinal ulcers",
            "Conditions involving excessive stomach acid"
        ],
        description:
            "Pantoprazole is a proton pump inhibitor that reduces stomach acid production.",
        sideEffects: [
            "Headache",
            "Diarrhea",
            "Nausea",
            "Abdominal discomfort"
        ],
        precautions: [
            "Use for the recommended duration.",
            "Discuss long-term treatment with a healthcare professional.",
            "Tell your doctor about other medicines."
        ],
        howToUse:
            "Take exactly as directed on the label or by a healthcare professional.",
        dosage:
            "Dose varies according to condition and formulation.",
        storage:
            "Keep in a cool, dry place away from direct sunlight.",
        prescription: "Availability depends on formulation"
    },

    {
        id: 7,
        name: "Amoxicillin",
        genericName: "Amoxicillin",
        category: "Antibiotic",
        uses: [
            "Treatment of certain bacterial infections",
            "Some respiratory infections",
            "Some ear, nose and throat infections",
            "Certain dental infections"
        ],
        description:
            "Amoxicillin is a penicillin-type antibiotic used to treat certain bacterial infections.",
        sideEffects: [
            "Nausea",
            "Diarrhea",
            "Skin rash"
        ],
        precautions: [
            "Use only when prescribed or advised by a qualified healthcare professional.",
            "Tell your doctor if you have had a penicillin allergy.",
            "Complete the prescribed course unless your healthcare professional tells you otherwise."
        ],
        howToUse:
            "Take exactly as prescribed by a healthcare professional.",
        dosage:
            "The dose depends on the infection, age, kidney function and formulation. Do not self-select a dose.",
        storage:
            "Follow the storage instructions on the specific product.",
        prescription: "Prescription medicine"
    },

    {
        id: 8,
        name: "Azithromycin",
        genericName: "Azithromycin",
        category: "Antibiotic",
        uses: [
            "Treatment of certain bacterial infections",
            "Some respiratory infections",
            "Some skin infections",
            "Certain sexually transmitted bacterial infections"
        ],
        description:
            "Azithromycin is a macrolide antibiotic used for certain bacterial infections.",
        sideEffects: [
            "Nausea",
            "Diarrhea",
            "Abdominal discomfort"
        ],
        precautions: [
            "Use only under appropriate medical advice.",
            "Tell your doctor about heart rhythm problems or liver problems.",
            "Antibiotics do not treat viral infections such as common colds."
        ],
        howToUse:
            "Take exactly according to the prescription and product instructions.",
        dosage:
            "Dose varies by infection, age and formulation. It should be determined by a healthcare professional.",
        storage:
            "Follow the storage instructions on the medicine package.",
        prescription: "Prescription medicine"
    },

    {
        id: 9,
        name: "Amlodipine",
        genericName: "Amlodipine",
        category: "Blood Pressure",
        uses: [
            "High blood pressure",
            "Prevention of certain types of chest pain",
            "Certain cardiovascular conditions"
        ],
        description:
            "Amlodipine is a calcium-channel blocker used mainly to treat high blood pressure and some types of angina.",
        sideEffects: [
            "Headache",
            "Dizziness",
            "Flushing",
            "Swelling around the ankles"
        ],
        precautions: [
            "Take regularly as prescribed.",
            "Do not stop prescribed blood-pressure treatment without medical advice.",
            "Tell your doctor about other medicines."
        ],
        howToUse:
            "Take exactly as prescribed by your healthcare professional.",
        dosage:
            "Dose is individualized according to the person's condition and response to treatment.",
        storage:
            "Store at room temperature away from moisture and children.",
        prescription: "Prescription medicine"
    },

    {
        id: 10,
        name: "Losartan",
        genericName: "Losartan",
        category: "Blood Pressure",
        uses: [
            "High blood pressure",
            "Certain heart-related conditions",
            "Protection of kidneys in some people with diabetes"
        ],
        description:
            "Losartan is an angiotensin II receptor blocker used to treat high blood pressure and certain related conditions.",
        sideEffects: [
            "Dizziness",
            "Tiredness",
            "Low blood pressure"
        ],
        precautions: [
            "Regular monitoring may be required.",
            "Tell your healthcare professional if you are pregnant or planning pregnancy.",
            "Discuss kidney problems and other medicines with your doctor."
        ],
        howToUse:
            "Take according to your prescription.",
        dosage:
            "Dose depends on the medical condition and response to treatment.",
        storage:
            "Keep in a dry place at room temperature.",
        prescription: "Prescription medicine"
    },

    {
        id: 11,
        name: "Metformin",
        genericName: "Metformin",
        category: "Diabetes",
        uses: [
            "Type 2 diabetes",
            "Helps control blood glucose levels",
            "May be used with diet and exercise"
        ],
        description:
            "Metformin is commonly used to help control blood glucose in people with type 2 diabetes.",
        sideEffects: [
            "Nausea",
            "Diarrhea",
            "Stomach discomfort",
            "Reduced appetite"
        ],
        precautions: [
            "Take exactly as prescribed.",
            "Tell your doctor about kidney or liver problems.",
            "Do not change the dose without professional advice."
        ],
        howToUse:
            "Use according to the prescription and medicine instructions.",
        dosage:
            "Dose is adjusted according to blood glucose, kidney function and other factors.",
        storage:
            "Store in a dry place at room temperature.",
        prescription: "Prescription medicine"
    },

    {
        id: 12,
        name: "Atorvastatin",
        genericName: "Atorvastatin",
        category: "Cholesterol",
        uses: [
            "High cholesterol",
            "Reduction of cardiovascular risk",
            "Helps lower LDL cholesterol"
        ],
        description:
            "Atorvastatin is a statin medicine used to lower cholesterol and reduce cardiovascular risk.",
        sideEffects: [
            "Headache",
            "Digestive problems",
            "Muscle aches may occur"
        ],
        precautions: [
            "Tell your doctor about unexplained muscle pain.",
            "Discuss liver problems and other medicines.",
            "Take consistently as prescribed."
        ],
        howToUse:
            "Take exactly as prescribed by your healthcare professional.",
        dosage:
            "Dose depends on cholesterol levels, cardiovascular risk and treatment response.",
        storage:
            "Store at room temperature in a dry place.",
        prescription: "Prescription medicine"
    },

    {
        id: 13,
        name: "Levothyroxine",
        genericName: "Levothyroxine",
        category: "Thyroid",
        uses: [
            "Underactive thyroid",
            "Replacement of thyroid hormone"
        ],
        description:
            "Levothyroxine is a synthetic thyroid hormone used to treat an underactive thyroid.",
        sideEffects: [
            "Headache",
            "Feeling restless",
            "Changes in heart rate may occur if the dose is too high"
        ],
        precautions: [
            "Take consistently according to medical instructions.",
            "Regular blood tests may be needed.",
            "Tell your doctor about other medicines and supplements."
        ],
        howToUse:
            "Follow the specific instructions provided by your doctor or pharmacist.",
        dosage:
            "The dose is individualized and adjusted using blood-test results.",
        storage:
            "Store according to the product instructions, away from moisture and heat.",
        prescription: "Prescription medicine"
    },

    {
        id: 14,
        name: "Salbutamol",
        genericName: "Salbutamol / Albuterol",
        category: "Respiratory",
        uses: [
            "Relief of asthma symptoms",
            "Wheezing",
            "Shortness of breath",
            "Certain other breathing conditions"
        ],
        description:
            "Salbutamol is a bronchodilator that helps open the airways and relieve breathing symptoms.",
        sideEffects: [
            "Shaking",
            "Headache",
            "Fast heartbeat",
            "Muscle cramps"
        ],
        precautions: [
            "Use the inhaler according to instructions.",
            "Seek medical advice if symptoms are becoming more frequent.",
            "Tell your healthcare professional about other medicines."
        ],
        howToUse:
            "Use the inhaler or other formulation exactly as instructed.",
        dosage:
            "Dose depends on the formulation and individual treatment plan.",
        storage:
            "Follow the storage instructions for the specific inhaler/product.",
        prescription: "Availability depends on formulation and local regulations"
    },

    {
        id: 15,
        name: "Montelukast",
        genericName: "Montelukast",
        category: "Respiratory & Allergy",
        uses: [
            "Asthma prevention",
            "Exercise-related breathing symptoms",
            "Allergic rhinitis in some patients"
        ],
        description:
            "Montelukast is a leukotriene receptor antagonist used for certain asthma and allergy conditions.",
        sideEffects: [
            "Headache",
            "Stomach discomfort",
            "Sleep-related changes may occur"
        ],
        precautions: [
            "It is not generally used as a rescue medicine for sudden asthma attacks.",
            "Discuss any unusual mood or behavior changes with a healthcare professional.",
            "Use only as directed."
        ],
        howToUse:
            "Follow the prescribed instructions.",
        dosage:
            "Dose depends on age and medical condition.",
        storage:
            "Keep in the original container in a dry place.",
        prescription: "Prescription medicine"
    },

    {
        id: 16,
        name: "Aspirin",
        genericName: "Acetylsalicylic Acid",
        category: "Pain Relief & Cardiovascular",
        uses: [
            "Pain relief in some situations",
            "Fever reduction",
            "Certain cardiovascular uses under medical advice"
        ],
        description:
            "Aspirin belongs to a group of medicines that can relieve pain and reduce inflammation. Low-dose aspirin is also used for certain cardiovascular purposes under medical supervision.",
        sideEffects: [
            "Stomach irritation",
            "Indigestion",
            "Increased risk of bleeding"
        ],
        precautions: [
            "It is not suitable for everyone.",
            "Children and teenagers should not use aspirin for certain viral illnesses unless specifically advised by a doctor.",
            "Tell your doctor about bleeding problems and other medicines."
        ],
        howToUse:
            "Use only according to the product instructions or medical advice.",
        dosage:
            "Different conditions require different doses. Follow professional advice.",
        storage:
            "Store in a dry place away from heat and children.",
        prescription: "Depends on formulation and intended use"
    },

    {
        id: 17,
        name: "Diclofenac",
        genericName: "Diclofenac",
        category: "Pain Relief & Anti-inflammatory",
        uses: [
            "Pain relief",
            "Inflammatory joint conditions",
            "Muscle and joint pain"
        ],
        description:
            "Diclofenac is an NSAID used to reduce pain and inflammation.",
        sideEffects: [
            "Indigestion",
            "Stomach pain",
            "Nausea"
        ],
        precautions: [
            "May not be suitable for people with certain stomach, kidney or heart conditions.",
            "Use the lowest effective amount for the shortest appropriate period when advised.",
            "Tell your healthcare professional about other medicines."
        ],
        howToUse:
            "Use according to the formulation's instructions or medical advice.",
        dosage:
            "Dose varies by formulation and condition and should follow professional advice.",
        storage:
            "Store according to package instructions.",
        prescription: "Availability depends on formulation"
    },

    {
        id: 18,
        name: "Furosemide",
        genericName: "Furosemide",
        category: "Diuretic",
        uses: [
            "Fluid retention",
            "Heart failure",
            "Certain kidney or liver conditions",
            "High blood pressure in some cases"
        ],
        description:
            "Furosemide is a diuretic that helps the body remove excess salt and water through urine.",
        sideEffects: [
            "Increased urination",
            "Dizziness",
            "Dehydration",
            "Changes in electrolytes"
        ],
        precautions: [
            "Medical monitoring may be required.",
            "Tell your doctor about kidney problems.",
            "Follow advice about fluid and electrolyte monitoring."
        ],
        howToUse:
            "Take exactly according to the prescription.",
        dosage:
            "Dose is individualized according to the condition and response.",
        storage:
            "Store in a dry place at room temperature.",
        prescription: "Prescription medicine"
    },

    {
        id: 19,
        name: "Clopidogrel",
        genericName: "Clopidogrel",
        category: "Blood Thinner / Antiplatelet",
        uses: [
            "Prevention of blood clots",
            "After certain heart attacks",
            "After certain strokes or cardiovascular procedures"
        ],
        description:
            "Clopidogrel is an antiplatelet medicine that helps prevent harmful blood clots.",
        sideEffects: [
            "Bruising",
            "Nosebleeds",
            "Increased bleeding"
        ],
        precautions: [
            "Tell doctors and dentists that you take clopidogrel.",
            "Do not stop it without medical advice.",
            "Report unusual or persistent bleeding to a healthcare professional."
        ],
        howToUse:
            "Take exactly as prescribed.",
        dosage:
            "Dose depends on the medical condition and treatment plan.",
        storage:
            "Store at room temperature away from moisture.",
        prescription: "Prescription medicine"
    },

    {
        id: 20,
        name: "Ondansetron",
        genericName: "Ondansetron",
        category: "Nausea & Vomiting",
        uses: [
            "Prevention of nausea",
            "Prevention of vomiting",
            "Nausea related to certain medical treatments"
        ],
        description:
            "Ondansetron is an antiemetic medicine used to help prevent nausea and vomiting in specific situations.",
        sideEffects: [
            "Headache",
            "Constipation",
            "Dizziness"
        ],
        precautions: [
            "Tell your doctor about heart rhythm problems.",
            "Discuss other medicines you are taking.",
            "Use only as directed."
        ],
        howToUse:
            "Follow the prescribed or product instructions.",
        dosage:
            "Dose depends on the cause of nausea, age and formulation.",
        storage:
            "Store according to the product instructions.",
        prescription: "Depends on formulation and local regulations"
    },

    {
        id: 21,
        name: "Domperidone",
        genericName: "Domperidone",
        category: "Digestive & Nausea",
        uses: [
            "Nausea and vomiting in certain situations",
            "Certain digestive symptoms under medical advice"
        ],
        description:
            "Domperidone is a medicine that may be used for nausea and vomiting in specific circumstances.",
        sideEffects: [
            "Dry mouth",
            "Headache",
            "Abdominal discomfort"
        ],
        precautions: [
            "It may not be suitable for people with certain heart conditions.",
            "Use only according to medical advice.",
            "Tell your doctor about other medicines."
        ],
        howToUse:
            "Use only as directed by a healthcare professional.",
        dosage:
            "Dose and duration depend on the condition and should be professionally determined.",
        storage:
            "Store in a dry place at room temperature.",
        prescription: "Prescription / medical advice recommended"
    },

    {
        id: 22,
        name: "Doxycycline",
        genericName: "Doxycycline",
        category: "Antibiotic",
        uses: [
            "Treatment of certain bacterial infections",
            "Certain respiratory infections",
            "Certain skin infections"
        ],
        description:
            "Doxycycline is a tetracycline antibiotic used to treat certain bacterial infections.",
        sideEffects: [
            "Nausea",
            "Diarrhea",
            "Increased sensitivity to sunlight"
        ],
        precautions: [
            "Use only when prescribed or advised by a healthcare professional.",
            "Follow instructions about taking it with food or fluids.",
            "Protect skin from excessive sunlight if advised."
        ],
        howToUse:
            "Take exactly according to the prescription and product instructions.",
        dosage:
            "Dose depends on the infection, age and individual factors.",
        storage:
            "Store according to package instructions.",
        prescription: "Prescription medicine"
    },

    {
        id: 23,
        name: "Cefixime",
        genericName: "Cefixime",
        category: "Antibiotic",
        uses: [
            "Treatment of certain bacterial infections",
            "Certain respiratory infections",
            "Certain urinary tract infections"
        ],
        description:
            "Cefixime is a cephalosporin antibiotic used to treat certain bacterial infections.",
        sideEffects: [
            "Diarrhea",
            "Nausea",
            "Stomach discomfort"
        ],
        precautions: [
            "Use only when prescribed or recommended by a healthcare professional.",
            "Tell your doctor about allergies to antibiotics.",
            "Antibiotics should not be used for viral infections."
        ],
        howToUse:
            "Take exactly as prescribed.",
        dosage:
            "Dose depends on the infection, age, kidney function and formulation.",
        storage:
            "Follow the specific product's storage instructions.",
        prescription: "Prescription medicine"
    },

    {
        id: 24,
        name: "Fluconazole",
        genericName: "Fluconazole",
        category: "Antifungal",
        uses: [
            "Certain fungal infections",
            "Some yeast infections",
            "Certain systemic fungal infections"
        ],
        description:
            "Fluconazole is an antifungal medicine used to treat certain fungal and yeast infections.",
        sideEffects: [
            "Headache",
            "Nausea",
            "Stomach discomfort"
        ],
        precautions: [
            "Tell your doctor about liver problems.",
            "It can interact with other medicines.",
            "Use only as directed."
        ],
        howToUse:
            "Take according to the prescription or product instructions.",
        dosage:
            "Dose varies significantly according to the type and severity of infection.",
        storage:
            "Store according to product instructions.",
        prescription: "Prescription medicine"
    },

    {
        id: 25,
        name: "Acyclovir",
        genericName: "Acyclovir",
        category: "Antiviral",
        uses: [
            "Certain herpes virus infections",
            "Cold sores",
            "Shingles in appropriate cases"
        ],
        description:
            "Acyclovir is an antiviral medicine used against certain infections caused by herpes viruses.",
        sideEffects: [
            "Headache",
            "Nausea",
            "Diarrhea"
        ],
        precautions: [
            "Use according to medical advice.",
            "People with kidney problems may require special medical guidance.",
            "Stay appropriately hydrated if advised by your healthcare professional."
        ],
        howToUse:
            "Use exactly as prescribed or according to product instructions.",
        dosage:
            "Dose depends on the infection, formulation and kidney function.",
        storage:
            "Store according to the product label.",
        prescription: "Depends on formulation and condition"
    },

    {
        id: 26,
        name: "Hydrocortisone",
        genericName: "Hydrocortisone",
        category: "Skin & Inflammation",
        uses: [
            "Certain skin inflammation",
            "Itching",
            "Redness associated with some skin conditions"
        ],
        description:
            "Hydrocortisone is a corticosteroid used in some formulations to reduce inflammation and itching.",
        sideEffects: [
            "Skin irritation",
            "Dryness",
            "Skin thinning with prolonged inappropriate use"
        ],
        precautions: [
            "Use only on the areas and for the duration recommended.",
            "Avoid prolonged use without medical advice.",
            "Seek professional advice for infections or worsening skin symptoms."
        ],
        howToUse:
            "Apply or use according to the product instructions.",
        dosage:
            "For topical products, amount and duration depend on the condition and product strength.",
        storage:
            "Store according to the product label.",
        prescription: "Depends on strength and formulation"
    },

    {
        id: 27,
        name: "Mupirocin",
        genericName: "Mupirocin",
        category: "Antibiotic Skin Treatment",
        uses: [
            "Certain bacterial skin infections",
            "Some localized infected skin conditions"
        ],
        description:
            "Mupirocin is a topical antibiotic used for certain bacterial skin infections.",
        sideEffects: [
            "Burning at application site",
            "Stinging",
            "Itching"
        ],
        precautions: [
            "Use only on the areas recommended.",
            "Avoid contact with eyes unless the product is specifically intended for them.",
            "Use according to medical advice."
        ],
        howToUse:
            "Apply exactly as directed on the product label or by a healthcare professional.",
        dosage:
            "Frequency and duration depend on the formulation and infection.",
        storage:
            "Store according to the product instructions.",
        prescription: "Depends on formulation and local regulations"
    },

    {
        id: 28,
        name: "Calcium Carbonate",
        genericName: "Calcium Carbonate",
        category: "Antacid & Mineral",
        uses: [
            "Relief of occasional heartburn",
            "Indigestion",
            "Calcium supplementation in some cases"
        ],
        description:
            "Calcium carbonate is used in some antacid products and as a source of calcium.",
        sideEffects: [
            "Constipation",
            "Stomach discomfort",
            "Gas"
        ],
        precautions: [
            "Tell your healthcare professional about kidney problems.",
            "It can affect the absorption of some medicines.",
            "Follow product directions."
        ],
        howToUse:
            "Use according to the specific product instructions.",
        dosage:
            "Dose varies according to the purpose and formulation.",
        storage:
            "Store in a dry place at room temperature.",
        prescription: "Usually available without prescription"
    },

    {
        id: 29,
        name: "Ferrous Sulfate",
        genericName: "Ferrous Sulfate",
        category: "Iron Supplement",
        uses: [
            "Treatment or prevention of iron deficiency",
            "Iron-deficiency anemia when medically appropriate"
        ],
        description:
            "Ferrous sulfate is an iron supplement used to prevent or treat iron deficiency.",
        sideEffects: [
            "Constipation",
            "Nausea",
            "Stomach discomfort",
            "Dark-colored stools"
        ],
        precautions: [
            "Keep iron products away from young children.",
            "Take according to professional advice.",
            "Iron supplements may interact with some medicines."
        ],
        howToUse:
            "Use according to the product instructions or healthcare professional's advice.",
        dosage:
            "Dose depends on the person's iron status, age and formulation.",
        storage:
            "Store securely away from children and according to the package instructions.",
        prescription: "Depends on formulation"
    },

    {
        id: 30,
        name: "Vitamin D3",
        genericName: "Cholecalciferol",
        category: "Vitamin & Supplement",
        uses: [
            "Prevention or treatment of vitamin D deficiency",
            "Supports normal bone health",
            "Helps the body absorb calcium"
        ],
        description:
            "Vitamin D3 is a form of vitamin D used to prevent or treat vitamin D deficiency.",
        sideEffects: [
            "Usually well tolerated at recommended amounts",
            "Excessive intake can cause high calcium levels"
        ],
        precautions: [
            "Do not take excessive amounts without medical advice.",
            "People with certain kidney or calcium-related conditions should seek professional advice.",
            "Check other supplements to avoid unnecessary duplication."
        ],
        howToUse:
            "Use according to the product label or healthcare professional's recommendation.",
        dosage:
            "The appropriate amount depends on age, vitamin D level and health condition.",
        storage:
            "Store in a cool, dry place away from direct sunlight and children.",
        prescription: "Usually available without prescription"
    }

];


/* =========================================================
   HELPER FUNCTIONS
   ========================================================= */


/* Get all medicines */
function getAllMedicines() {
    return medicines;
}


/* Find medicine by ID */
function getMedicineById(id) {
    return medicines.find(
        medicine => medicine.id === Number(id)
    );
}


/* Find medicine by name */
function getMedicineByName(name) {
    return medicines.find(
        medicine =>
            medicine.name.toLowerCase() === name.toLowerCase()
    );
}


/* Search medicines */
function searchMedicines(searchText) {

    const search = searchText.toLowerCase().trim();

    if (!search) {
        return medicines;
    }

    return medicines.filter(medicine => {

        return (
            medicine.name.toLowerCase().includes(search) ||
            medicine.genericName.toLowerCase().includes(search) ||
            medicine.category.toLowerCase().includes(search) ||
            medicine.description.toLowerCase().includes(search)
        );

    });
}


/* Get medicines by category */
function getMedicinesByCategory(category) {

    if (!category || category === "All") {
        return medicines;
    }

    return medicines.filter(
        medicine =>
            medicine.category.toLowerCase() ===
            category.toLowerCase()
    );
}


/* Get all categories */
function getMedicineCategories() {

    const categories = medicines.map(
        medicine => medicine.category
    );

    return ["All", ...new Set(categories)];
}


/* Total medicine count */
function getMedicineCount() {
    return medicines.length;
}


/* =========================================================
   CONSOLE INFORMATION
   ========================================================= */

console.log(
    "Medicine Information Portal:",
    medicines.length,
    "medicines loaded successfully."
);
