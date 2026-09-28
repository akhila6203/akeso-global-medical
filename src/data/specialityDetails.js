import {
  Activity,
  Bone,
  Brain,
  HeartPulse,
  Stethoscope,
  ShieldPlus,
  ScanLine,
  HeartHandshake,
  Microscope,
} from "lucide-react";

export const specialityDetails = {
  /* ======================================================
     ORTHOPAEDICS
  ====================================================== */

  orthopaedics: {
    title: "Orthopaedics",

    shortTitle: "Advanced Bone & Joint Care",

    icon: Bone,

    intro:
      "Comprehensive orthopaedic care for bone, joint, spine and musculoskeletal conditions with coordinated access to specialists and modern treatment options.",

    highlights: [
      "Comprehensive care for bone, joint and musculoskeletal conditions",
      "Support for joint replacement and mobility-related treatments",
      "Coordinated specialist consultation for complex orthopaedic cases",
      "Treatment planning based on individual patient requirements",
      "Rehabilitation and recovery support after treatment",
      "International patient coordination from review to follow-up",
    ],

    subSpecialities: [
      "Joint Replacement",
      "Sports Medicine",
      "Spine Care",
      "Paediatric Orthopaedics",
      "Arthroscopy",
      "Trauma & Fracture Care",
    ],

    chairman: {
      title: "Specialist-Led Orthopaedic Care",

      message:
        "Our approach focuses on helping patients understand their condition, available treatment options and expected recovery journey. Akeso coordinates appropriate specialist consultations and supports international patients throughout their medical journey.",

      name: "Orthopaedic Care Team",

      designation: "Specialist Coordination",
      location:"India",

      image: "/images/specialities/orthopaedics-doctor.png",
    },

    team: {
      title: "Comprehensive Orthopaedic Care Team",

      description:
        "Coordinated expertise for joint, bone, spine and mobility-related healthcare needs.",

      cards: [
        {
          title: "Joint Replacement Care",
          description:
            "Coordinated evaluation and treatment planning for patients requiring knee, hip and other joint procedures.",
          image:
            "/images/specialities/ortho-team-1.jpg",
        },
        {
          title: "Sports & Arthroscopy Care",
          description:
            "Specialist support for sports injuries, ligament conditions and minimally invasive joint procedures.",
          image:
            "/images/specialities/ortho-team-2.jpg",
        },
        {
          title: "Recovery & Rehabilitation",
          description:
            "Post-treatment rehabilitation planning to support mobility, strength and functional recovery.",
          image:
            "/images/specialities/ortho-team-3.jpg",
        },
      ],
    },

    treatments: [
      {
        title: "Joint Replacement",
        description:
          "Treatment planning for damaged knee, hip and other joints where replacement may be clinically recommended.",
      },
      {
        title: "Arthroscopy",
        description:
          "Minimally invasive procedures used for selected joint conditions and injuries.",
      },
      {
        title: "Spine Procedures",
        description:
          "Specialist evaluation and treatment options for selected spinal conditions.",
      },
      {
        title: "Sports Injury Treatment",
        description:
          "Care for ligament, tendon and joint injuries related to sports and physical activity.",
      },
      {
        title: "Fracture Management",
        description:
          "Assessment and treatment planning for simple and complex fractures.",
      },
      {
        title: "Paediatric Orthopaedic Care",
        description:
          "Specialist care for selected bone and musculoskeletal conditions affecting children.",
      },
    ],

    ailments: [
      {
        title: "Knee Arthritis",
        description:
          "Degeneration of the knee joint that may cause pain, stiffness and reduced mobility.",
      },
      {
        title: "Hip Arthritis",
        description:
          "Joint degeneration affecting movement, comfort and daily activities.",
      },
      {
        title: "Sports Injuries",
        description:
          "Ligament, tendon and joint injuries associated with sports or physical activity.",
      },
      {
        title: "Fractures",
        description:
          "Bone injuries ranging from uncomplicated fractures to more complex trauma.",
      },
      {
        title: "Spine Disorders",
        description:
          "Conditions affecting the spine that may cause pain, stiffness or neurological symptoms.",
      },
      {
        title: "Shoulder Disorders",
        description:
          "Conditions affecting shoulder movement, stability and function.",
      },
    ],
  },

  /* ======================================================
     CANCER CARE
  ====================================================== */

  "cancer-care": {
    title: "Cancer Care",

    shortTitle: "Comprehensive Cancer Care",

    icon: Activity,

    intro:
      "Coordinated cancer care supporting international patients through specialist consultation, diagnosis, treatment planning and recovery support.",

    highlights: [
      "Multidisciplinary approach to cancer treatment planning",
      "Coordination with appropriate oncology specialists",
      "Support for diagnostic evaluation and treatment planning",
      "Access to surgical and non-surgical treatment pathways",
      "International patient assistance throughout the treatment journey",
      "Post-treatment and follow-up coordination",
    ],

    subSpecialities: [
      "Medical Oncology",
      "Surgical Oncology",
      "Radiation Oncology",
      "Haemato Oncology",
      "Gynae Oncology",
      "Head & Neck Oncology",
    ],

    chairman: {
      title: "Personalised Cancer Care",

      message:
        "Cancer treatment often requires collaboration across multiple clinical disciplines. Our coordination approach helps international patients connect with appropriate specialists and understand the different stages of their treatment journey.",

      name: "Cancer Care Team",

      designation: "Oncology Coordination",
       location:"India",


      image: "/images/specialities/cancer-doctor.png",
    },

    team: {
      title: "Comprehensive Cancer Care Team",

      description:
        "Multidisciplinary coordination across diagnosis, treatment and recovery.",

      cards: [
        {
          title: "Medical Oncology",
          description:
            "Coordination for systemic cancer treatment and specialist medical oncology consultation.",
          image:
            "/images/specialities/cancer-team-1.jpg",
        },
        {
          title: "Surgical Oncology",
          description:
            "Specialist surgical assessment and treatment planning for appropriate cancer conditions.",
          image:
            "/images/specialities/cancer-team-2.jpg",
        },
        {
          title: "Recovery Support",
          description:
            "Support for treatment recovery, follow-up planning and patient wellbeing.",
          image:
            "/images/specialities/cancer-team-3.jpg",
        },
      ],
    },

    treatments: [
      {
        title: "Cancer Surgery",
        description:
          "Surgical treatment planning for selected cancers based on specialist evaluation.",
      },
      {
        title: "Chemotherapy",
        description:
          "Systemic cancer treatment delivered according to the patient's clinical treatment plan.",
      },
      {
        title: "Radiation Therapy",
        description:
          "Radiation-based treatment used for selected cancer conditions.",
      },
      {
        title: "Immunotherapy",
        description:
          "Specialised treatment that may be considered for selected cancers.",
      },
      {
        title: "Targeted Therapy",
        description:
          "Treatment approaches directed toward specific characteristics of selected cancers.",
      },
    ],

    ailments: [
      {
        title: "Breast Cancer",
        description:
          "Cancer affecting breast tissue requiring specialist diagnosis and treatment planning.",
      },
      {
        title: "Lung Cancer",
        description:
          "Cancer arising in lung tissue with treatment depending on type and stage.",
      },
      {
        title: "Blood Cancer",
        description:
          "A group of cancers involving blood-forming tissues and cells.",
      },
      {
        title: "Head & Neck Cancer",
        description:
          "Cancer affecting structures of the head and neck region.",
      },
      {
        title: "Gastrointestinal Cancer",
        description:
          "Cancer affecting parts of the digestive system.",
      },
      {
        title: "Gynaecological Cancer",
        description:
          "Cancers affecting the female reproductive system.",
      },
    ],
  },

  /* ======================================================
     NEUROSCIENCES
  ====================================================== */

  neurosciences: {
    title: "Neurosciences",

    shortTitle: "Advanced Brain, Spine & Nerve Care",

    icon: Brain,

    intro:
      "Coordinated neurological and neurosurgical care for conditions affecting the brain, spine and nervous system.",

    highlights: [
      "Specialist support for neurological and neurosurgical conditions",
      "Brain and spine treatment coordination",
      "Advanced diagnostic evaluation support",
      "Multidisciplinary planning for complex neurological cases",
      "Rehabilitation coordination where required",
      "International patient support throughout the journey",
    ],

    subSpecialities: [
      "Neurology",
      "Neurosurgery",
      "Spine Surgery",
      "Stroke Care",
      "Movement Disorders",
      "Neuro Rehabilitation",
    ],

    chairman: {
      title: "Integrated Neuroscience Care",

      message:
        "Neurological conditions may require detailed evaluation and coordinated care across different clinical disciplines. Our role is to support international patients in accessing appropriate expertise and navigating each stage of their medical journey.",

      name: "Neurosciences Team",

      designation: "Specialist Coordination",
       location:"India",


      image: "/images/specialities/neuro-doctor.png",
    },

    team: {
      title: "Comprehensive Neurosciences Team",

      description:
        "Specialist coordination for complex brain, spine and neurological conditions.",

      cards: [
        {
          title: "Brain & Neurosurgery",
          description:
            "Specialist evaluation and surgical planning for selected brain and neurological conditions.",
          image:
            "/images/specialities/neuro-team-1.jpg",
        },
        {
          title: "Spine Care",
          description:
            "Coordinated specialist assessment for spinal and neurological conditions.",
          image:
            "/images/specialities/neuro-team-2.jpg",
        },
        {
          title: "Neuro Rehabilitation",
          description:
            "Recovery planning and rehabilitation support after neurological treatment.",
          image:
            "/images/specialities/neuro-team-3.jpg",
        },
      ],
    },

    treatments: [
      {
        title: "Brain Tumour Surgery",
        description:
          "Specialist surgical evaluation and treatment planning for selected brain tumours.",
      },
      {
        title: "Spine Surgery",
        description:
          "Surgical treatment options for selected spinal disorders.",
      },
      {
        title: "Stroke Management",
        description:
          "Specialist management and rehabilitation planning for stroke patients.",
      },
      {
        title: "Deep Brain Stimulation",
        description:
          "A specialised treatment that may be considered for selected neurological conditions.",
      },
      {
        title: "Neuro Rehabilitation",
        description:
          "Structured rehabilitation support following neurological illness or treatment.",
      },
    ],

    ailments: [
      {
        title: "Stroke",
        description:
          "A neurological emergency caused by disruption of blood supply to the brain.",
      },
      {
        title: "Brain Tumours",
        description:
          "Abnormal growths involving brain tissue that require specialist evaluation.",
      },
      {
        title: "Parkinson's Disease",
        description:
          "A neurological condition affecting movement and other functions.",
      },
      {
        title: "Epilepsy",
        description:
          "A neurological disorder characterised by recurrent seizures.",
      },
      {
        title: "Spine Disorders",
        description:
          "Conditions affecting the spinal column, nerves or surrounding structures.",
      },
      {
        title: "Migraine",
        description:
          "A neurological condition associated with recurrent headaches and related symptoms.",
      },
    ],
  },

  /* ======================================================
     CARDIAC CARE
  ====================================================== */

  "cardiac-care": {
    title: "Cardiac Care",

    shortTitle: "Advanced Heart Care",

    icon: HeartPulse,

    intro:
      "Comprehensive coordination for patients seeking specialist evaluation and treatment for heart and cardiovascular conditions.",

    highlights: [
      "Specialist consultation for heart and cardiovascular conditions",
      "Support for surgical and interventional cardiac care",
      "Diagnostic evaluation coordination",
      "Treatment planning for complex cardiac cases",
      "Recovery and rehabilitation coordination",
      "International patient journey support",
    ],

    subSpecialities: [
      "Cardiac Surgery",
      "Interventional Cardiology",
      "Clinical Cardiology",
      "Electrophysiology",
      "Heart Failure Care",
      "Paediatric Cardiology",
    ],

    chairman: {
      title: "Patient-Focused Heart Care",

      message:
        "Heart conditions often require timely assessment and coordinated decision-making. Akeso supports international patients in accessing appropriate cardiac specialists and understanding their treatment journey.",

      name: "Cardiac Care Team",

      designation: "Cardiac Coordination",
       location:"India",


      image: "/images/specialities/cardiac-doctor.png",
    },

    team: {
      title: "Comprehensive Heart Care Team",

      description:
        "Coordinated expertise across cardiac diagnosis, intervention, surgery and recovery.",

      cards: [
        {
          title: "Cardiac Surgery",
          description:
            "Coordination for specialist evaluation and planned cardiac surgical procedures.",
          image:
            "/images/specialities/cardiac-team-1.jpg",
        },
        {
          title: "Interventional Cardiology",
          description:
            "Specialist support for catheter-based cardiac procedures and treatment planning.",
          image:
            "/images/specialities/cardiac-team-2.jpg",
        },
        {
          title: "Cardiac Rehabilitation",
          description:
            "Recovery and rehabilitation planning following cardiac treatment.",
          image:
            "/images/specialities/cardiac-team-3.jpg",
        },
      ],
    },

    treatments: [
      {
        title: "Coronary Angioplasty",
        description:
          "Catheter-based treatment for selected narrowed or blocked coronary arteries.",
      },
      {
        title: "CABG",
        description:
          "Coronary artery bypass surgery used for selected coronary artery disease.",
      },
      {
        title: "Valve Surgery",
        description:
          "Surgical treatment for selected heart valve conditions.",
      },
      {
        title: "Pacemaker Procedures",
        description:
          "Device-based treatment for selected heart rhythm conditions.",
      },
      {
        title: "Heart Failure Treatment",
        description:
          "Specialist evaluation and management for patients with heart failure.",
      },
    ],

    ailments: [
      {
        title: "Coronary Artery Disease",
        description:
          "Narrowing or blockage of coronary arteries supplying blood to the heart.",
      },
      {
        title: "Heart Failure",
        description:
          "A condition in which the heart cannot pump blood effectively enough for the body's needs.",
      },
      {
        title: "Valve Disease",
        description:
          "Conditions affecting one or more valves of the heart.",
      },
      {
        title: "Arrhythmia",
        description:
          "Abnormal heart rhythms requiring specialist evaluation.",
      },
      {
        title: "Hypertension",
        description:
          "Persistently elevated blood pressure that can affect cardiovascular health.",
      },
    ],
  },

  /* ======================================================
     GASTROSCIENCES
  ====================================================== */

  gastrosciences: {
    title: "Gastrosciences",

    shortTitle: "Digestive & Gastrointestinal Care",

    icon: Stethoscope,

    intro:
      "Specialist coordination for conditions affecting the digestive tract, liver, pancreas and related gastrointestinal systems.",

    highlights: [
      "Comprehensive digestive health evaluation",
      "Gastroenterology and GI surgery coordination",
      "Support for liver and pancreatic conditions",
      "Advanced diagnostic procedure coordination",
      "Minimally invasive treatment planning where appropriate",
      "International patient assistance",
    ],

    subSpecialities: [
      "Gastroenterology",
      "GI Surgery",
      "Hepatology",
      "Pancreatic Care",
      "Colorectal Surgery",
    ],

    chairman: {
      title: "Integrated Digestive Health Care",

      message:
        "Digestive disorders can involve several organs and may require coordinated medical and surgical expertise. We help international patients navigate appropriate specialist evaluation and treatment planning.",

      name: "Gastrosciences Team",

      designation: "Specialist Coordination",
       location:"India",

      image: "/images/specialities/gastro-doctor.png",
    },

    team: {
      title: "Comprehensive Gastrosciences Team",

      description:
        "Coordinated expertise for digestive, liver, pancreatic and gastrointestinal conditions.",

      cards: [
        {
          title: "Gastroenterology",
          description:
            "Specialist evaluation for digestive and gastrointestinal conditions.",
          image:
            "/images/specialities/gastro-team-1.jpg",
        },
        {
          title: "GI Surgery",
          description:
            "Surgical consultation and treatment planning for selected gastrointestinal conditions.",
          image:
            "/images/specialities/gastro-team-2.jpg",
        },
        {
          title: "Liver & Pancreatic Care",
          description:
            "Coordinated specialist support for liver and pancreatic disorders.",
          image:
            "/images/specialities/gastro-team-3.jpg",
        },
      ],
    },

    treatments: [
      {
        title: "Endoscopy",
        description:
          "Diagnostic and therapeutic endoscopic procedures for selected digestive conditions.",
      },
      {
        title: "GI Surgery",
        description:
          "Surgical treatment planning for gastrointestinal disorders.",
      },
      {
        title: "Hernia Surgery",
        description:
          "Surgical treatment for selected hernia conditions.",
      },
      {
        title: "Gallbladder Surgery",
        description:
          "Treatment planning for selected gallbladder conditions.",
      },
      {
        title: "Colorectal Surgery",
        description:
          "Specialist surgical care for selected colorectal conditions.",
      },
    ],

    ailments: [
      {
        title: "GERD",
        description:
          "A digestive condition involving recurrent reflux of stomach contents.",
      },
      {
        title: "Gallstones",
        description:
          "Hardened deposits that can develop in the gallbladder.",
      },
      {
        title: "Pancreatitis",
        description:
          "Inflammation of the pancreas requiring medical evaluation.",
      },
      {
        title: "Inflammatory Bowel Disease",
        description:
          "Chronic inflammatory disorders affecting the digestive tract.",
      },
      {
        title: "Liver Disorders",
        description:
          "A broad group of conditions affecting liver structure or function.",
      },
    ],
  },

  /* ======================================================
     RENAL CARE
  ====================================================== */

  "renal-care": {
    title: "Renal Care",

    shortTitle: "Kidney & Urinary Care",

    icon: ShieldPlus,

    intro:
      "Coordinated specialist care for kidney, urinary and related renal conditions.",

    highlights: [
      "Nephrology and urology specialist coordination",
      "Kidney treatment and transplant evaluation support",
      "Diagnostic and surgical treatment planning",
      "Care coordination for complex renal conditions",
      "International patient assistance",
      "Follow-up and recovery coordination",
    ],

    subSpecialities: [
      "Nephrology",
      "Urology",
      "Kidney Transplant",
      "Uro Oncology",
    ],

    chairman: {
      title: "Comprehensive Renal Care",

      message:
        "Kidney and urinary conditions can require coordinated medical and surgical expertise. Our team supports international patients in navigating specialist consultations, treatment planning and recovery.",

      name: "Renal Care Team",

      designation: "Renal Care Coordination",
       location:"India",

      image: "/images/specialities/renal-doctor.png",
    },

    team: {
      title: "Urology & Nephrology Care Team",

      description:
        "Coordinated care across kidney, urinary and transplant-related requirements.",

      cards: [
        {
          title: "Nephrology",
          description:
            "Specialist medical care for kidney function and renal disorders.",
          image:
            "/images/specialities/renal-team-1.jpg",
        },
        {
          title: "Urology",
          description:
            "Specialist evaluation and surgical planning for urinary tract conditions.",
          image:
            "/images/specialities/renal-team-2.jpg",
        },
        {
          title: "Kidney Transplant Support",
          description:
            "Coordination for transplant evaluation and treatment planning where clinically appropriate.",
          image:
            "/images/specialities/renal-team-3.jpg",
        },
      ],
    },

    treatments: [
      {
        title: "Kidney Transplant",
        description:
          "Evaluation and coordination for kidney transplantation where clinically appropriate.",
      },
      {
        title: "Urological Surgery",
        description:
          "Surgical treatment for selected urinary and urological conditions.",
      },
      {
        title: "Kidney Stone Treatment",
        description:
          "Treatment planning for selected kidney and urinary stone conditions.",
      },
      {
        title: "Dialysis Coordination",
        description:
          "Support for patients requiring dialysis as part of renal care.",
      },
    ],

    ailments: [
      {
        title: "Chronic Kidney Disease",
        description:
          "Long-term loss of kidney function requiring specialist management.",
      },
      {
        title: "Kidney Stones",
        description:
          "Mineral deposits that form in the urinary system and may cause pain or obstruction.",
      },
      {
        title: "Urinary Disorders",
        description:
          "Conditions affecting normal urinary system function.",
      },
      {
        title: "Kidney Tumours",
        description:
          "Abnormal kidney growths requiring specialist evaluation.",
      },
    ],
  },

  /* ======================================================
     LIVER TRANSPLANT
  ====================================================== */

  "liver-transplant": {
    title: "Liver Transplant",

    shortTitle: "Advanced Liver Care",

    icon: Activity,

    intro:
      "Specialist coordination for patients requiring evaluation for complex liver disease and potential liver transplantation.",

    highlights: [
      "Liver transplant evaluation coordination",
      "Specialist hepatology and surgical consultation",
      "Pre-transplant assessment support",
      "Treatment journey coordination for international patients",
      "Post-treatment recovery planning",
      "Follow-up coordination",
    ],

    subSpecialities: [
      "Liver Transplant",
      "Hepatology",
      "Liver Surgery",
    ],

    chairman: {
      title: "Specialist Liver Care",

      message:
        "Advanced liver disease may require detailed assessment by a multidisciplinary clinical team. We support international patients in coordinating appropriate consultations and understanding the stages of their treatment journey.",

      name: "Liver Care Team",

      designation: "Transplant Coordination",
       location:"India",


      image: "/images/specialities/liver-doctor.png",
    },

    team: {
      title: "Comprehensive Liver Care Team",

      description:
        "Coordinated specialist support for complex liver disease and transplantation.",

      cards: [
        {
          title: "Transplant Evaluation",
          description:
            "Coordination of specialist assessment for patients being considered for transplantation.",
          image:
            "/images/specialities/liver-team-1.jpg",
        },
        {
          title: "Liver Surgery",
          description:
            "Specialist surgical evaluation for selected liver conditions.",
          image:
            "/images/specialities/liver-team-2.jpg",
        },
        {
          title: "Recovery & Follow-Up",
          description:
            "Post-treatment coordination and follow-up planning.",
          image:
            "/images/specialities/liver-team-3.jpg",
        },
      ],
    },

    treatments: [
      {
        title: "Liver Transplant",
        description:
          "Transplant evaluation and treatment coordination for eligible patients.",
      },
      {
        title: "Liver Surgery",
        description:
          "Specialist surgical treatment for selected liver conditions.",
      },
      {
        title: "Hepatology Care",
        description:
          "Medical management of liver-related conditions.",
      },
    ],

    ailments: [
      {
        title: "Liver Failure",
        description:
          "Severe impairment of liver function requiring specialist evaluation.",
      },
      {
        title: "Liver Cirrhosis",
        description:
          "Advanced scarring of the liver resulting from chronic liver disease.",
      },
      {
        title: "Liver Tumours",
        description:
          "Abnormal growths affecting liver tissue.",
      },
      {
        title: "Chronic Liver Disease",
        description:
          "Long-term conditions affecting liver structure or function.",
      },
    ],
  },

  /* ======================================================
     LUNG TRANSPLANT
  ====================================================== */

  "lung-transplant": {
    title: "Lung Transplant",

    shortTitle: "Advanced Lung & Transplant Care",

    icon: Activity,

    intro:
      "Specialist coordination for complex respiratory disease and patients being evaluated for lung transplantation.",

    highlights: [
      "Lung transplant evaluation support",
      "Respiratory specialist coordination",
      "Pre-transplant assessment planning",
      "International patient journey coordination",
      "Recovery and rehabilitation support",
      "Post-treatment follow-up planning",
    ],

    subSpecialities: [
      "Lung Transplant",
      "Pulmonology",
      "Thoracic Surgery",
    ],

    chairman: {
      title: "Advanced Respiratory Care",

      message:
        "Patients with advanced respiratory disease may require comprehensive assessment before treatment or transplantation. Our coordination team helps international patients navigate specialist consultations and their planned care journey.",

      name: "Lung Care Team",

      designation: "Transplant Coordination",
       location:"India",


      image: "/images/specialities/lung-doctor.png",
    },

    team: {
      title: "Lung Transplant Care Team",

      description:
        "Multidisciplinary coordination for advanced respiratory disease and transplant evaluation.",

      cards: [
        {
          title: "Respiratory Evaluation",
          description:
            "Specialist assessment for advanced lung and respiratory conditions.",
          image:
            "/images/specialities/lung-team-1.jpg",
        },
        {
          title: "Transplant Coordination",
          description:
            "Support throughout the evaluation and planned transplant journey.",
          image:
            "/images/specialities/lung-team-2.jpg",
        },
        {
          title: "Recovery Support",
          description:
            "Rehabilitation and follow-up coordination after treatment.",
          image:
            "/images/specialities/lung-team-3.jpg",
        },
      ],
    },

    treatments: [
      {
        title: "Lung Transplant",
        description:
          "Transplant evaluation and treatment coordination for eligible patients.",
      },
      {
        title: "Thoracic Surgery",
        description:
          "Specialist surgical treatment for selected chest and lung conditions.",
      },
      {
        title: "Respiratory Rehabilitation",
        description:
          "Rehabilitation support for selected respiratory conditions.",
      },
    ],

    ailments: [
      {
        title: "Advanced Lung Disease",
        description:
          "Severe respiratory disease requiring specialist assessment.",
      },
      {
        title: "Pulmonary Fibrosis",
        description:
          "Progressive scarring of lung tissue that can affect breathing.",
      },
      {
        title: "COPD",
        description:
          "A chronic respiratory condition associated with airflow limitation.",
      },
      {
        title: "Bronchiectasis",
        description:
          "A chronic condition involving abnormal widening of the airways.",
      },
    ],
  },
};


/* =========================================================
   DEFAULT DATA

   Remaining navigation specialities use this until you add
   their final approved content.
========================================================= */

export const getSpecialityDetails = (
  slug,
  navigationItem
) => {
  if (specialityDetails[slug]) {
    return specialityDetails[slug];
  }

  const name =
    navigationItem?.[0] ||
    "Speciality";

  const Icon =
    navigationItem?.[2] ||
    Stethoscope;

  return {
    title: name,

    shortTitle: `Specialist ${name} Care`,

    icon: Icon,

    intro:
      `Explore coordinated specialist care and international patient support for ${name}.`,

    highlights: [
      `Specialist consultation for ${name}`,
      "Medical report review and treatment planning",
      "Coordination with appropriate medical teams",
      "International patient journey support",
      "Treatment and recovery coordination",
      "Follow-up planning after treatment",
    ],

    subSpecialities: [],

    chairman: {
      title: `Specialist-Led ${name} Care`,

      message:
        `Our approach helps international patients navigate specialist consultation, treatment planning and recovery for ${name}.`,

      name: `${name} Care Team`,

      designation:
        "Specialist Coordination",

      image:
        "/images/specialities/default-doctor.png",
    },

    team: {
      title: `${name} Care Team`,

      description:
        `Coordinated specialist support for patients seeking ${name} care.`,

      cards: [
        {
          title: "Specialist Consultation",
          description:
            "Coordination with suitable specialists based on the patient's medical requirements.",
          image:
            "/images/specialities/default-team-1.jpg",
        },
        {
          title: "Treatment Planning",
          description:
            "Support in understanding the planned medical journey and treatment pathway.",
          image:
            "/images/specialities/default-team-2.jpg",
        },
        {
          title: "Recovery Support",
          description:
            "Coordination for follow-up and recovery after treatment.",
          image:
            "/images/specialities/default-team-3.jpg",
        },
      ],
    },

    treatments: [
      {
        title: `${name} Consultation`,
        description:
          `Specialist evaluation and treatment planning for ${name}.`,
      },
      {
        title: "Diagnostic Evaluation",
        description:
          "Appropriate diagnostic assessment based on specialist recommendations.",
      },
      {
        title: "Treatment Planning",
        description:
          "Individual treatment planning based on clinical evaluation.",
      },
      {
        title: "Follow-Up Care",
        description:
          "Follow-up coordination according to the treating team's recommendations.",
      },
    ],

    ailments: [
      {
        title: `${name} Conditions`,
        description:
          `Evaluation of conditions related to ${name}.`,
      },
      {
        title: "Complex Conditions",
        description:
          "Specialist assessment for complex medical requirements.",
      },
      {
        title: "Chronic Conditions",
        description:
          "Evaluation and management planning for long-term conditions.",
      },
      {
        title: "Follow-Up Requirements",
        description:
          "Continued specialist follow-up based on individual clinical needs.",
      },
    ],
  };
};