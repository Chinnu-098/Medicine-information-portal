/* =====================================================
   MEDICINE DATABASE
   Educational / demo information
   ===================================================== */

const MEDICINES = [

{
id:"MED001",
name:"Paracetamol",
genericName:"Paracetamol / Acetaminophen",
category:"Pain Relief",
type:"Tablet",
image:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",

uses:[
"Relief of mild to moderate pain",
"Reduction of fever",
"Headache and body aches"
],

howItWorks:
"Paracetamol works mainly in the central nervous system to reduce pain and fever.",

dosage:
"Use only according to the product label or instructions from a doctor or pharmacist. The appropriate amount depends on age, formulation and medical circumstances.",

sideEffects:[
"Nausea",
"Stomach discomfort",
"Skin reaction may rarely occur"
],

precautions:[
"Do not exceed the recommended amount.",
"Check other medicines because some also contain paracetamol.",
"People with liver disease should seek professional advice."
],

warnings:
"Too much paracetamol can seriously damage the liver.",

storage:
"Store according to the product label, generally in a cool, dry place away from children.",

manufacturer:"Example Pharmaceutical Ltd.",
prescription:false
},


{
id:"MED002",
name:"Ibuprofen",
genericName:"Ibuprofen",
category:"Pain Relief",
type:"Tablet",
image:"https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=800&q=80",

uses:[
"Pain relief",
"Fever reduction",
"Inflammation-related pain"
],

howItWorks:
"Ibuprofen is an NSAID that reduces substances involved in pain, fever and inflammation.",

dosage:
"Use only the dose stated on the product label or prescribed by a healthcare professional. Dose varies with age, formulation and health conditions.",

sideEffects:[
"Stomach upset",
"Nausea",
"Heartburn",
"Dizziness"
],

precautions:[
"Take according to label directions.",
"People with stomach ulcers, kidney problems or certain heart conditions should seek medical advice.",
"Do not combine with other NSAIDs unless advised."
],

warnings:
"NSAIDs can cause stomach bleeding and other serious effects in some people.",

storage:"Keep tightly closed in a cool, dry place away from children.",

manufacturer:"Example Pharmaceutical Ltd.",
prescription:false
},


{
id:"MED003",
name:"Amoxicillin",
genericName:"Amoxicillin",
category:"Antibiotics",
type:"Capsule",
image:"https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",

uses:[
"Treatment of certain bacterial infections",
"Respiratory bacterial infections",
"Certain ear and throat infections"
],

howItWorks:
"Amoxicillin is a penicillin-type antibiotic that interferes with bacterial cell-wall formation.",

dosage:
"Take only when prescribed and follow the complete instructions from the prescriber. The dose depends on the infection, age and formulation.",

sideEffects:[
"Nausea",
"Diarrhea",
"Stomach discomfort",
"Skin rash"
],

precautions:[
"Tell your doctor about penicillin or antibiotic allergies.",
"Complete the prescribed course unless your healthcare professional tells you otherwise.",
"Do not use antibiotics for viral infections unless specifically prescribed."
],

warnings:
"Serious allergic reactions can occur. Seek urgent medical attention for severe allergic symptoms.",

storage:"Follow the product label. Some liquid formulations may have special storage requirements.",

manufacturer:"Example Pharma Ltd.",
prescription:true
},


{
id:"MED004",
name:"Cetirizine",
genericName:"Cetirizine",
category:"Allergy",
type:"Tablet",
image:"https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80",

uses:[
"Allergic rhinitis symptoms",
"Sneezing",
"Runny nose",
"Itching and hives"
],

howItWorks:
"Cetirizine is an antihistamine that blocks histamine activity involved in allergic symptoms.",

dosage:
"Follow the package label or healthcare professional's instructions. Dosage depends on age and formulation.",

sideEffects:[
"Drowsiness",
"Dry mouth",
"Headache",
"Tiredness"
],

precautions:[
"May cause drowsiness in some people.",
"Be careful with activities requiring alertness until you know how it affects you.",
"Ask a healthcare professional if you have kidney problems."
],

warnings:
"Do not assume a medicine is suitable simply because it is available without prescription.",

storage:"Store in a dry place at the temperature specified on the label.",

manufacturer:"Example Healthcare Ltd.",
prescription:false
},


{
id:"MED005",
name:"Azithromycin",
genericName:"Azithromycin",
category:"Antibiotics",
type:"Tablet",
image:"https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",

uses:[
"Certain bacterial respiratory infections",
"Certain bacterial skin infections",
"Other susceptible bacterial infections"
],

howItWorks:
"Azithromycin is a macrolide antibiotic that interferes with bacterial protein production.",

dosage:
"Use only as prescribed. The schedule varies according to the infection and formulation.",

sideEffects:[
"Diarrhea",
"Nausea",
"Abdominal discomfort",
"Headache"
],

precautions:[
"Tell your doctor about liver disease and heart rhythm problems.",
"Take exactly as prescribed.",
"Do not use antibiotics for ordinary viral colds."
],

warnings:
"Certain medicines and medical conditions can increase the risk of abnormal heart rhythm.",

storage:"Follow the medicine label for storage instructions.",

manufacturer:"Example Pharma Ltd.",
prescription:true
},


{
id:"MED006",
name:"Omeprazole",
genericName:"Omeprazole",
category:"Digestive Health",
type:"Capsule",
image:"https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=800&q=80",

uses:[
"Heartburn",
"Acid reflux",
"Certain stomach ulcers",
"Excess stomach acid conditions"
],

howItWorks:
"Omeprazole reduces the amount of acid produced by the stomach.",

dosage:
"Follow the product label or prescription. The appropriate dose and duration depend on the condition.",

sideEffects:[
"Headache",
"Abdominal discomfort",
"Nausea",
"Diarrhea"
],

precautions:[
"Long-term use should be monitored by a healthcare professional.",
"Tell your doctor about persistent or unusual digestive symptoms.",
"Follow instructions regarding timing and food."
],

warnings:
"Persistent digestive symptoms should be evaluated by a healthcare professional.",

storage:"Store in a dry place away from excessive heat and moisture.",

manufacturer:"Example Healthcare Ltd.",
prescription:false
},


{
id:"MED007",
name:"Loratadine",
genericName:"Loratadine",
category:"Allergy",
type:"Tablet",
image:"https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80",

uses:[
"Hay fever symptoms",
"Sneezing",
"Runny nose",
"Hives"
],

howItWorks:
"Loratadine is an antihistamine that reduces the effects of histamine.",

dosage:
"Use according to the package label or advice from a healthcare professional.",

sideEffects:[
"Headache",
"Dry mouth",
"Tiredness"
],

precautions:[
"Check the label for age restrictions.",
"Tell a healthcare professional about other medicines you take.",
"Do not exceed the recommended amount."
],

warnings:
"Some people can still experience drowsiness.",

storage:"Keep in a cool, dry place away from children.",

manufacturer:"Example Healthcare Ltd.",
prescription:false
},


{
id:"MED008",
name:"Metformin",
genericName:"Metformin",
category:"Diabetes",
type:"Tablet",
image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",

uses:[
"Management of type 2 diabetes",
"Helps improve blood glucose control"
],

howItWorks:
"Metformin mainly reduces glucose production by the liver and improves the body's response to insulin.",

dosage:
"Take only as prescribed. The dose is individualized according to blood glucose, kidney function and other factors.",

sideEffects:[
"Nausea",
"Diarrhea",
"Abdominal discomfort",
"Reduced appetite"
],

precautions:[
"Kidney function may need monitoring.",
"Take exactly as prescribed.",
"Tell your healthcare professional about other medicines and medical conditions."
],

warnings:
"A rare but serious complication called lactic acidosis can occur in certain circumstances.",

storage:"Store according to the product label.",

manufacturer:"Example Diabetes Care Ltd.",
prescription:true
},


{
id:"MED009",
name:"Amlodipine",
genericName:"Amlodipine",
category:"Blood Pressure",
type:"Tablet",
image:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",

uses:[
"High blood pressure",
"Certain types of angina"
],

howItWorks:
"Amlodipine is a calcium-channel blocker that relaxes blood vessels and helps lower blood pressure.",

dosage:
"Use only according to the prescription. The appropriate dose depends on the individual patient.",

sideEffects:[
"Headache",
"Dizziness",
"Flushing",
"Ankle swelling"
],

precautions:[
"Monitor blood pressure as advised.",
"Stand up slowly if you feel dizzy.",
"Do not stop prescribed treatment without medical advice."
],

warnings:
"Seek medical advice if swelling, dizziness or other concerning symptoms persist.",

storage:"Store at room temperature according to the label.",

manufacturer:"Example Cardio Pharma Ltd.",
prescription:true
},


{
id:"MED010",
name:"ORS",
genericName:"Oral Rehydration Salts",
category:"Hydration",
type:"Oral Solution",
image:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",

uses:[
"Helps replace fluids and electrolytes lost during diarrhea or vomiting",
"Prevention of dehydration"
],

howItWorks:
"ORS provides glucose and electrolytes that help the intestine absorb water and salts.",

dosage:
"Prepare and use exactly according to the packet instructions. Do not make the solution stronger or weaker than directed.",

sideEffects:[
"Usually well tolerated when prepared correctly",
"Incorrect preparation can cause problems"
],

precautions:[
"Use the exact amount of water specified on the packet.",
"Seek medical care for severe dehydration or persistent symptoms.",
"Infants and children may require professional assessment."
],

warnings:
"ORS does not treat the underlying cause of severe illness or dehydration.",

storage:"Store the unopened product in a dry place. Prepared solution should be used according to packet instructions.",

manufacturer:"Example Health Products Ltd.",
prescription:false
},


{
id:"MED011",
name:"Diclofenac",
genericName:"Diclofenac",
category:"Pain Relief",
type:"Tablet",
image:"https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",

uses:[
"Short-term relief of certain pain",
"Inflammation-related conditions"
],

howItWorks:
"Diclofenac is an NSAID that reduces substances involved in pain and inflammation.",

dosage:
"Use only according to a healthcare professional's instructions or the product label.",

sideEffects:[
"Indigestion",
"Stomach pain",
"Nausea",
"Dizziness"
],

precautions:[
"People with stomach, kidney, heart or blood-pressure problems should seek medical advice.",
"Do not combine with another NSAID unless advised."
],

warnings:
"NSAIDs may increase the risk of stomach bleeding and cardiovascular problems in some people.",

storage:"Store according to the package instructions.",

manufacturer:"Example Pharma Ltd.",
prescription:true
},


{
id:"MED012",
name:"Calcium + Vitamin D",
genericName:"Calcium / Vitamin D supplement",
category:"Vitamins & Supplements",
type:"Tablet",
image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",

uses:[
"Supports normal bone health",
"Helps provide calcium and vitamin D when dietary intake is inadequate"
],

howItWorks:
"Calcium is an essential mineral for bones and many body functions. Vitamin D helps the body absorb calcium.",

dosage:
"Use according to the product label or healthcare professional's advice. Requirements vary by age and health status.",

sideEffects:[
"Constipation",
"Stomach discomfort",
"Nausea"
],

precautions:[
"Do not take more than recommended.",
"Tell a healthcare professional about kidney disease or kidney stones.",
"Check other supplements to avoid unnecessary duplication."
],

warnings:
"Excessive intake of some supplements can be harmful.",

storage:"Store tightly closed in a cool, dry place.",

manufacturer:"Example Nutrition Ltd.",
prescription:false
}

];


/* =====================================================
   LOCAL STORAGE SUPPORT
   ===================================================== */

function getAllMedicines() {

    let custom = [];

    try {
        custom = JSON.parse(
            localStorage.getItem("medicines") || "[]"
        );
    } catch(e) {
        custom = [];
    }

    if (!Array.isArray(custom)) {
        custom = [];
    }

    const map = new Map();

    MEDICINES.forEach(m => map.set(m.id, m));

    custom.forEach(m => {
        if (m.id) {
            map.set(m.id, {
                ...m,
                uses: Array.isArray(m.uses) ? m.uses : [],
                sideEffects: Array.isArray(m.sideEffects) ? m.sideEffects : [],
                precautions: Array.isArray(m.precautions) ? m.precautions : []
            });
        }
    });

    return Array.from(map.values());
}
