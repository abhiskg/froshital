const specialitiesData = [
  {
    id: 1,
    title: "Cardiology",
    slug: "cardiology",
    description:
      "The term cardiology is derived from the Greek words ‘cardia’ which refers to the heart and ‘logy’ meaning the study of. Cardiology is the study and treatment of disorders of the heart and the blood vessels. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology. A person with heart disease or cardiovascular disease is usually referred to a cardiologist. The cardiology team is highly experienced in diagnosing and treating diseases of the cardiovascular system. The cardiologist advises some tests, and may perform some procedures, such as heart catheterizations, angioplasty, or inserting a pacemaker in order to achieve accurate diagnosis of the problem.",
    services: [
      {
        id: 1,
        title: "Adult CTVS (Cardiothoracis and Vascular Surgery)",
      },
      {
        id: 2,
        title: "Heart Transplantation",
      },
      {
        id: 3,
        title: "Interventional Cardiology",
      },
      {
        id: 4,
        title: "Invasive Cardiology",
      },
      {
        id: 5,
        title: "Non-Invasive Cardiology",
      },
      {
        id: 6,
        title: "Paediatric CTVS",
      },
      {
        id: 7,
        title: "Paediatric Cardiac Science",
      },
      {
        id: 8,
        title: "Vascular Surgery",
      },
    ],
  },
  {
    id: 2,
    title: "Dermatology",
    slug: "dermatology",
    services: [
      {
        id: 1,
        title: "Acne",
      },
      {
        id: 2,
        title: "Allergy",
      },
      {
        id: 3,
        title: "Skin Infections",
      },
      {
        id: 4,
        title: "Eczema",
      },
      {
        id: 5,
        title: "Hair Loss",
      },
      {
        id: 6,
        title: "Vitiligo",
      },
    ],
  },
  {
    id: 3,
    title: "Gastroenterology",
    slug: "gastroenterology",
    services: [
      {
        id: 1,
        title: "Liver Problems",
      },
      {
        id: 2,
        title: "Pancreatitis",
      },
      {
        id: 3,
        title: "Gastroesophageal reflux (GERD)",
      },
      {
        id: 4,
        title: "Gallbladder and biliary tract disease",
      },
      {
        id: 5,
        title: "Cirrhosis",
      },
      {
        id: 6,
        title: "Inflammatory bowel disease (IBD)",
      },
    ],
  },
  {
    id: 4,
    title: "General Surgery",
    slug: "general-surgery",
    services: [
      {
        id: 1,
        title: "Hernia Surgery",
      },
      {
        id: 2,
        title: "Laparoscopic Surgery",
      },
    ],
  },
  {
    id: 5,
    title: "Neurology",
    slug: "neurology",
    services: [
      {
        id: 1,
        title: "Neuromuscular and Peripheral Nerve Disorders",
      },
      {
        id: 2,
        title: "Stroke and Neurovascular Care",
      },
      {
        id: 3,
        title: "Headache and Migraine Care",
      },
    ],
  },
  {
    id: 6,
    title: "Oncology",
    slug: "oncology",
    services: [
      {
        id: 1,
        title: "Gastrointestinal Oncology",
      },
      {
        id: 2,
        title: "Gynaecological Oncology",
      },
      {
        id: 3,
        title: "Head and Neck Oncology",
      },
      {
        id: 4,
        title: "Uro-Oncology",
      },
      {
        id: 5,
        title: "Risk Assessment and Screening",
      },
      {
        id: 6,
        title: "Palliative Care",
      },
    ],
  },
  {
    id: 7,
    title: "Orthopedics",
    slug: "orthopedics",
    services: [
      {
        id: 1,
        title: "Joint Replacement & Preservation",
      },
      {
        id: 2,
        title: "Sports Medicine",
      },
      {
        id: 3,
        title: "Foot & Ankle Surgery",
      },
      {
        id: 4,
        title: "Shoulder, Neck and Back Surgery",
      },
      {
        id: 5,
        title: "Paediatric Orthopedics",
      },
      {
        id: 6,
        title: "Geriatric Orthopedics",
      },
      {
        id: 7,
        title: "Spine Surgery",
      },
      {
        id: 8,
        title: "Rheumatology",
      },
      {
        id: 9,
        title: "Physiotherapy and Rehabilitation",
      },
      {
        id: 10,
        title: "Orthopaedic Oncology",
      },
    ],
  },
  {
    id: 8,
    title: "Paediatrics",
    slug: "paediatrics",
    services: [
      {
        id: 1,
        title: "Neonatology",
      },
      {
        id: 2,
        title: "Paediatrics CTVS",
      },
      {
        id: 3,
        title: "Paediatric Cardiac Science",
      },
      {
        id: 4,
        title: "Paediatric Endocrinology",
      },
      {
        id: 5,
        title: "Paediatric Intensive Care",
      },
      {
        id: 6,
        title: "Paediatric Nephrology",
      },
      {
        id: 7,
        title: "Paediatric Neurology",
      },
      {
        id: 8,
        title: "Paediatrics Surgery",
      },
    ],
  },
  {
    id: 9,
    title: "Radiology",
    slug: "radiology",
    services: [
      {
        id: 1,
        title: "Interventional Radiology",
      },
    ],
  },
  {
    id: 10,
    title: "Urology",
    slug: "urology",
    services: [
      {
        id: 1,
        title: "Urinary stones",
      },
      {
        id: 2,
        title: "Prostate enlargement",
      },
      {
        id: 3,
        title: "Prostatitis",
      },
      {
        id: 4,
        title: "Urinary problems",
      },
      {
        id: 5,
        title: "Uro-oncology",
      },
      {
        id: 6,
        title: "Female pelvic problems",
      },
      {
        id: 7,
        title: "Male sexual dysfunction",
      },
    ],
  },
  {
    id: 11,
    title: "Vascular Surgery",
    slug: "vascular-surgery",
    services: [
      {
        id: 1,
        title: "Vascular Surgery",
      },
    ],
  },
  {
    id: 12,
    title: "Neurosurgery",
    slug: "neurosurgery",
    services: [
      {
        id: 1,
        title: "Brain Surgery",
      },
      {
        id: 2,
        title: "Functional Neurosurgery",
      },
    ],
  },
  {
    id: 13,
    title: "Thoracic Surgery",
    slug: "thoracic-surgery",
    services: [
      {
        id: 1,
        title: "Thoracis Surgery",
      },
    ],
  },
  {
    id: 14,
    title: "Gynecology",
    slug: "gynecology",
    services: [
      {
        id: 1,
        title: "Menstrual Disorders",
      },
      {
        id: 2,
        title: "Endometriosis",
      },
      {
        id: 3,
        title: "Polycystic Ovarian Syndrome",
      },
      {
        id: 4,
        title: "Uterine Fibroids",
      },
      {
        id: 5,
        title: "Ovarian Cysts",
      },
      {
        id: 6,
        title: "Pelvic Floor Disorders",
      },
      {
        id: 7,
        title: "Sexually Transmitted Diseases",
      },
      {
        id: 8,
        title: "Menopausal Problems",
      },
      {
        id: 9,
        title: "Gyneacological Cancer",
      },
      {
        id: 10,
        title: "Adolescent Gynecology",
      },
    ],
  },
  {
    id: 15,
    title: "Mental Health",
    slug: "mental-health",
    services: [
      {
        id: 1,
        title: "Clinical psychiatry",
      },
      {
        id: 2,
        title: "Counselling & psychotherapy",
      },
      {
        id: 3,
        title: "Relaxation techniques",
      },
      {
        id: 4,
        title: "Cognitive behavioural therapy (CBT)",
      },
    ],
  },
  {
    id: 16,
    title: "Obstetrics",
    slug: "obstetrics",
    services: [
      {
        id: 1,
        title: "Normal Delivery",
      },
      {
        id: 2,
        title: "High Risk Pregnancy",
      },
      {
        id: 3,
        title: "Water Birthing",
      },
      {
        id: 4,
        title: "Cesarean Section",
      },
      {
        id: 5,
        title: "Fetal Medicine",
      },
      {
        id: 6,
        title: "Antenatal Care",
      },
      {
        id: 7,
        title: "Labour Pain Management",
      },
      {
        id: 8,
        title: "Multiple Births",
      },
      {
        id: 9,
        title: "Pregnancy to Parenthood Program",
      },
    ],
  },
  {
    id: 17,
    title: "Diabetes",
    slug: "diabetes",
    services: [
      {
        id: 1,
        title: "Diabetis",
      },
      {
        id: 2,
        title: "Endocrine Surgery",
      },
      {
        id: 3,
        title: "Metabolic Surgery",
      },
      {
        id: 4,
        title: "Podiatry / Diabetic Foot Care",
      },
    ],
  },
  {
    id: 18,
    title: "Cosmetology",
    slug: "cosmetology",
    services: [
      {
        id: 1,
        title: "Breast Surgery",
      },
    ],
  },
  {
    id: 19,
    title: "Dentristy",
    slug: "dentristy",
    services: [
      {
        id: 1,
        title: "Oral / Maxillofacial Surgery",
      },
    ],
  },
  {
    id: 20,
    title: "Pulmonology",
    slug: "pulmonology",
    services: [
      {
        id: 1,
        title: "Bronchoscopy",
      },
      {
        id: 2,
        title: "Sleep medicine",
      },
      {
        id: 3,
        title: "Chest clinic",
      },
      {
        id: 4,
        title: "Thoracoscopy",
      },
      {
        id: 5,
        title: "Pulmonary rehabilitation",
      },
    ],
  },
  {
    id: 21,
    title: "Psychiatry",
    slug: "psychiatry",
    services: [
      {
        id: 1,
        title: "Psychiatry",
      },
    ],
  },
  {
    id: 22,
    title: "Fertility and IVF",
    slug: "fertility-and-ivf",
    services: [
      {
        id: 1,
        title: "Fertility and IVF",
      },
    ],
  },
  {
    id: 23,
    title: "Nephrology and Dialysis",
    slug: "nephrology-and-dialysis",
    services: [
      {
        id: 1,
        title: "Acute kidney failure",
      },
      {
        id: 2,
        title: "Chronic kidney disease (CKD)",
      },
      {
        id: 3,
        title: "Kidney Cancer",
      },
      {
        id: 4,
        title: "Kidney Stones",
      },
    ],
  },
  {
    id: 24,
    title: "The Breast Center",
    slug: "the-breast-center",
    services: [
      {
        id: 1,
        title: "Breast cancer treatment",
      },
      {
        id: 2,
        title: "Oncoplastic Breast Preservation Surgery",
      },
      {
        id: 3,
        title: "Benign breast health treatment",
      },
      {
        id: 4,
        title: "Risk assessment & prevention",
      },
      {
        id: 5,
        title: "Scarless breast surgery",
      },
    ],
  },
  {
    id: 25,
    title: "Ear, Nose and Throat",
    slug: "ear-nose-and-throat",
    services: [
      {
        id: 1,
        title: "Rhinology",
      },
      {
        id: 2,
        title: "Paediatric Otolaryngology",
      },
      {
        id: 3,
        title: "Otology",
      },
      {
        id: 4,
        title: "Laryngology",
      },
      {
        id: 5,
        title: "Vertigo Treatment",
      },
      {
        id: 6,
        title: "Allergy Treatment",
      },
    ],
  },
];

export { specialitiesData };
