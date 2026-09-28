import {
  getSpecialityDetails,
} from "./specialityDetails";

import {
  specialties,
} from "./navigation";

/* =========================================================
   SLUGIFY
========================================================= */

export function slugify(
  value = ""
) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(
      /[^a-z0-9]+/g,
      "-"
    )
    .replace(/^-|-$/g, "");
}

/* =========================================================
   COMMON IMAGE FALLBACKS

   IMPORTANT:
   These are only image paths.
   You can later replace them with your actual project images.
========================================================= */

const images = {
  cancer:
    "/images/specialities/cancer-care.jpg",

  orthopaedics:
    "/images/specialities/orthopaedics.jpg",

  neuro:
    "/images/specialities/neurosciences.jpg",

  cardiac:
    "/images/specialities/cardiac-care.jpg",

  gastro:
    "/images/specialities/gastrosciences.jpg",

  renal:
    "/images/specialities/renal-care.jpg",

  liver:
    "/images/specialities/liver-transplant.jpg",

  lung:
    "/images/specialities/lung-transplant.jpg",
};

/* =========================================================
   REUSABLE ITEM CREATOR
========================================================= */

const item = (
  title,
  description,
  image = null
) => ({
  title,
  description,
  image,
});

/* =========================================================
   SUB-SPECIALITY DATA

   IMPORTANT:
   Every sub-speciality has its OWN:
   - intro
   - about
   - highlights
   - treatments
   - ailments
   - technologies
   - team
========================================================= */

export const subSpecialityDetails = {

  /* =======================================================
     ORTHOPAEDICS
  ======================================================= */

  "joint-replacement": {
    title:
      "Joint Replacement",

    parentSlug:
      "orthopaedics",

    intro:
      "Specialist evaluation and coordinated care for patients with severely damaged knee, hip and other joints where joint replacement may be considered.",

    about:
      "Joint replacement care focuses on relieving pain, improving mobility and restoring joint function in patients with advanced joint damage. Evaluation may include clinical examination, imaging, medical fitness assessment and personalised implant and surgical planning.",

    aboutImage:
      "/images/specialities/ortho-team-1.jpg",

    highlights: [
      "Specialist knee and hip evaluation",
      "Pre-operative imaging and assessment",
      "Personalised joint replacement planning",
      "Implant and procedure coordination",
      "Post-operative mobility support",
      "Rehabilitation and follow-up planning",
    ],

    treatments: [
      item(
        "Total Knee Replacement",
        "Surgical replacement of damaged knee joint surfaces when clinically recommended."
      ),

      item(
        "Total Hip Replacement",
        "Replacement of damaged hip joint components to improve mobility and reduce pain."
      ),

      item(
        "Partial Knee Replacement",
        "Replacement of a selected damaged portion of the knee in suitable patients."
      ),

      item(
        "Revision Joint Replacement",
        "Specialist assessment and replacement of a previously implanted joint where revision is required."
      ),

      item(
        "Bilateral Knee Replacement",
        "Evaluation and surgical planning for replacement of both knee joints in selected patients."
      ),

      item(
        "Joint Rehabilitation",
        "Structured physiotherapy and mobility support following joint replacement."
      ),
    ],

    ailments: [
      item(
        "Knee Osteoarthritis",
        "Progressive degeneration of knee cartilage causing pain, stiffness and reduced mobility."
      ),

      item(
        "Hip Osteoarthritis",
        "Degenerative changes affecting hip movement and daily activities."
      ),

      item(
        "Avascular Necrosis",
        "Loss of blood supply to bone that may result in joint damage."
      ),

      item(
        "Rheumatoid Joint Damage",
        "Inflammatory joint damage that may significantly affect function."
      ),

      item(
        "Failed Joint Implant",
        "Problems involving a previous joint replacement that may require specialist review."
      ),

      item(
        "Severe Joint Deformity",
        "Advanced structural changes affecting joint alignment and mobility."
      ),
    ],

    technologies: [
      item(
        "Robotic Joint Replacement",
        "Computer-assisted robotic systems may support precision during selected joint replacement procedures."
      ),

      item(
        "Digital Surgical Planning",
        "Digital planning tools may assist implant positioning and surgical preparation."
      ),

      item(
        "Advanced Joint Imaging",
        "Modern imaging supports detailed assessment of joint structure and damage."
      ),
    ],

    team: {
      title:
        "Joint Replacement Care Team",

      description:
        "Multidisciplinary support for joint replacement planning, surgery and recovery.",

      cards: [
        item(
          "Joint Replacement Specialists",
          "Orthopaedic specialists evaluate joint damage and appropriate surgical options."
        ),

        item(
          "Anaesthesia & Medical Support",
          "Pre-operative fitness and peri-operative care are coordinated according to patient requirements."
        ),

        item(
          "Rehabilitation Team",
          "Physiotherapy supports mobility, strength and functional recovery after surgery."
        ),
      ],
    },
  },

  "sports-medicine": {
    title:
      "Sports Medicine",

    parentSlug:
      "orthopaedics",

    intro:
      "Specialist assessment and treatment coordination for sports-related muscle, tendon, ligament and joint injuries.",

    about:
      "Sports medicine focuses on diagnosing, treating and rehabilitating injuries caused by sports, exercise and physical activity. Care may include imaging, non-surgical management, arthroscopy and structured rehabilitation depending on the injury.",

    aboutImage:
      "/images/specialities/ortho-team-2.jpg",

    highlights: [
      "Sports injury assessment",
      "Ligament and tendon evaluation",
      "Arthroscopic treatment planning",
      "Non-surgical treatment options",
      "Sports rehabilitation support",
      "Return-to-activity planning",
    ],

    treatments: [
      item(
        "ACL Reconstruction",
        "Surgical reconstruction may be considered for selected anterior cruciate ligament injuries."
      ),

      item(
        "Meniscus Surgery",
        "Arthroscopic repair or treatment of selected meniscal injuries."
      ),

      item(
        "Rotator Cuff Treatment",
        "Treatment planning for shoulder tendon injuries."
      ),

      item(
        "Ligament Reconstruction",
        "Specialist surgical management for selected ligament injuries."
      ),

      item(
        "Sports Injury Rehabilitation",
        "Structured rehabilitation focused on strength, mobility and return to activity."
      ),

      item(
        "Non-Surgical Injury Care",
        "Selected injuries may be managed with medication, physiotherapy and activity modification."
      ),
    ],

    ailments: [
      item(
        "ACL Injury",
        "Injury to a major stabilising ligament of the knee."
      ),

      item(
        "Meniscus Tear",
        "Damage to the cartilage that cushions the knee joint."
      ),

      item(
        "Shoulder Injury",
        "Sports-related injuries affecting shoulder muscles, tendons or stability."
      ),

      item(
        "Tendon Injury",
        "Overuse or traumatic injury involving tendons."
      ),

      item(
        "Ankle Injury",
        "Ligament and joint injuries affecting ankle stability and movement."
      ),

      item(
        "Muscle Injury",
        "Strains and other muscle injuries associated with physical activity."
      ),
    ],

    technologies: [
      item(
        "Arthroscopy Systems",
        "Minimally invasive camera-based systems support selected joint procedures."
      ),

      item(
        "MRI Imaging",
        "MRI may provide detailed assessment of ligaments, cartilage, muscles and tendons."
      ),

      item(
        "Rehabilitation Technology",
        "Modern rehabilitation tools may support recovery and functional assessment."
      ),
    ],

    team: {
      title:
        "Sports Medicine Team",

      description:
        "Coordinated care for injury assessment, treatment and rehabilitation.",

      cards: [
        item(
          "Sports Orthopaedic Specialists",
          "Specialists assess sports-related joint and ligament injuries."
        ),

        item(
          "Arthroscopy Team",
          "Minimally invasive treatment is coordinated when clinically appropriate."
        ),

        item(
          "Sports Rehabilitation",
          "Physiotherapists support safe recovery and return to physical activity."
        ),
      ],
    },
  },

  "spine-care": {
    title:
      "Spine Care",

    parentSlug:
      "orthopaedics",

    intro:
      "Specialist assessment and coordinated treatment for selected cervical, thoracic and lumbar spine conditions.",

    about:
      "Spine care involves detailed evaluation of back or neck symptoms, neurological findings and imaging. Treatment may range from rehabilitation and pain management to minimally invasive or complex spine surgery depending on the diagnosis.",

    aboutImage:
      "/images/specialities/ortho-team-3.jpg",

    highlights: [
      "Comprehensive spine evaluation",
      "Advanced spinal imaging",
      "Non-surgical treatment planning",
      "Minimally invasive spine options",
      "Complex spine surgery coordination",
      "Rehabilitation and recovery support",
    ],

    treatments: [
      item(
        "Spinal Decompression",
        "Surgical decompression may be considered where nerves or the spinal cord are compressed."
      ),

      item(
        "Spinal Fusion",
        "Fusion procedures may stabilise selected unstable or degenerative spinal conditions."
      ),

      item(
        "Disc Surgery",
        "Treatment of selected disc-related conditions causing nerve compression."
      ),

      item(
        "Minimally Invasive Spine Surgery",
        "Selected spine procedures may be performed through smaller surgical approaches."
      ),

      item(
        "Spine Rehabilitation",
        "Physiotherapy and rehabilitation support mobility and recovery."
      ),

      item(
        "Pain Management",
        "Non-surgical pain-management options may be considered after specialist assessment."
      ),
    ],

    ailments: [
      item(
        "Slipped Disc",
        "Disc displacement that may irritate or compress spinal nerves."
      ),

      item(
        "Spinal Stenosis",
        "Narrowing of spaces within the spine that may affect nerves."
      ),

      item(
        "Spondylolisthesis",
        "Forward movement of one vertebra relative to another."
      ),

      item(
        "Scoliosis",
        "Abnormal sideways curvature of the spine."
      ),

      item(
        "Degenerative Spine Disease",
        "Age-related changes affecting discs, joints and spinal structures."
      ),

      item(
        "Spinal Fracture",
        "Traumatic or fragility-related injury affecting vertebrae."
      ),
    ],

    technologies: [
      item(
        "Advanced MRI",
        "Detailed imaging supports assessment of spinal discs, nerves and surrounding structures."
      ),

      item(
        "Navigation-Guided Spine Surgery",
        "Navigation systems may support surgical planning and instrumentation."
      ),

      item(
        "Minimally Invasive Spine Systems",
        "Specialised instruments support selected minimally invasive procedures."
      ),
    ],

    team: {
      title:
        "Spine Care Team",

      description:
        "Coordinated specialist support for spine diagnosis, treatment and rehabilitation.",

      cards: [
        item(
          "Spine Specialists",
          "Specialists evaluate spinal disorders and determine suitable treatment pathways."
        ),

        item(
          "Neurological Support",
          "Neurological assessment may be coordinated when spinal conditions affect nerves."
        ),

        item(
          "Spine Rehabilitation",
          "Rehabilitation supports strength, mobility and functional recovery."
        ),
      ],
    },
  },

  /* =======================================================
     CANCER CARE
  ======================================================= */

  "medical-oncology": {
    title:
      "Medical Oncology",

    parentSlug:
      "cancer-care",

    intro:
      "Specialist cancer care focused on systemic treatments including chemotherapy, immunotherapy and targeted therapy according to individual diagnosis and treatment plans.",

    about:
      "Medical oncology focuses on the diagnosis and non-surgical treatment of cancer using medicines that act throughout the body. A medical oncologist evaluates cancer type, stage, pathology and patient health before recommending an appropriate systemic treatment plan.",

    aboutImage:
      "/images/specialities/cancer-team-1.jpg",

    highlights: [
      "Individualised systemic treatment planning",
      "Chemotherapy coordination",
      "Immunotherapy evaluation",
      "Targeted therapy planning",
      "Treatment-response monitoring",
      "Supportive care during cancer treatment",
    ],

    treatments: [
      item(
        "Chemotherapy",
        "Anti-cancer medicines may be used to destroy or control cancer cells."
      ),

      item(
        "Immunotherapy",
        "Selected therapies help the immune system recognise and respond to cancer."
      ),

      item(
        "Targeted Therapy",
        "Medicines may target specific molecular characteristics of selected cancers."
      ),

      item(
        "Hormone Therapy",
        "Hormone-sensitive cancers may be treated by modifying hormonal activity."
      ),

      item(
        "Combination Therapy",
        "Multiple systemic treatments may be combined according to the clinical treatment plan."
      ),

      item(
        "Supportive Oncology Care",
        "Supportive treatment helps manage symptoms and treatment-related side effects."
      ),
    ],

    ailments: [
      item(
        "Breast Cancer",
        "Cancer arising in breast tissue with treatment depending on subtype and stage."
      ),

      item(
        "Lung Cancer",
        "Cancer originating in lung tissue requiring personalised multidisciplinary planning."
      ),

      item(
        "Gastrointestinal Cancer",
        "Cancers involving the digestive system."
      ),

      item(
        "Prostate Cancer",
        "Cancer affecting the prostate gland."
      ),

      item(
        "Ovarian Cancer",
        "Cancer involving ovarian tissue."
      ),

      item(
        "Metastatic Cancer",
        "Cancer that has spread from its original site to another part of the body."
      ),
    ],

    technologies: [
      item(
        "Molecular Diagnostics",
        "Selected molecular tests may help identify treatment-relevant cancer characteristics."
      ),

      item(
        "PET-CT Imaging",
        "PET-CT may support cancer staging and treatment-response assessment."
      ),

      item(
        "Infusion Therapy Systems",
        "Specialised systems support controlled administration of systemic cancer treatments."
      ),
    ],

    team: {
      title:
        "Medical Oncology Team",

      description:
        "Coordinated systemic cancer treatment and supportive care.",

      cards: [
        item(
          "Medical Oncologists",
          "Specialists develop systemic treatment plans based on cancer type, stage and patient condition."
        ),

        item(
          "Oncology Nursing",
          "Specially trained teams support treatment administration and symptom monitoring."
        ),

        item(
          "Supportive Care",
          "Nutrition, symptom management and recovery support may be coordinated throughout treatment."
        ),
      ],
    },
  },

  "surgical-oncology": {
    title:
      "Surgical Oncology",

    parentSlug:
      "cancer-care",

    intro:
      "Specialist surgical evaluation and treatment planning for cancers where tumour removal or cancer-directed surgery may be appropriate.",

    about:
      "Surgical oncology focuses on cancer operations including tumour removal, lymph-node procedures and selected reconstructive approaches. Surgical planning depends on cancer location, stage, pathology and multidisciplinary evaluation.",

    aboutImage:
      "/images/specialities/cancer-team-3.jpg",

    highlights: [
      "Cancer-specific surgical evaluation",
      "Multidisciplinary tumour planning",
      "Minimally invasive surgical options",
      "Complex tumour surgery coordination",
      "Reconstructive planning where required",
      "Post-operative recovery support",
    ],

    treatments: [
      item(
        "Tumour Resection",
        "Surgical removal of selected tumours with appropriate surrounding tissue."
      ),

      item(
        "Lymph Node Surgery",
        "Selected procedures evaluate or remove regional lymph nodes."
      ),

      item(
        "Minimally Invasive Cancer Surgery",
        "Laparoscopic or robotic approaches may be suitable for selected cancers."
      ),

      item(
        "Organ-Specific Cancer Surgery",
        "Surgery is planned according to the organ involved and disease extent."
      ),

      item(
        "Reconstructive Surgery",
        "Reconstruction may be coordinated following selected cancer operations."
      ),

      item(
        "Metastatic Disease Surgery",
        "Selected metastatic lesions may be surgically treated after multidisciplinary review."
      ),
    ],

    ailments: [
      item(
        "Breast Tumours",
        "Selected breast cancers may require breast-conserving or other surgical procedures."
      ),

      item(
        "Gastrointestinal Tumours",
        "Cancers of the stomach, intestine and related organs may require surgery."
      ),

      item(
        "Head & Neck Tumours",
        "Selected tumours may require complex surgical planning."
      ),

      item(
        "Gynaecological Cancers",
        "Selected cancers involving female reproductive organs may require surgery."
      ),

      item(
        "Thoracic Tumours",
        "Selected lung and chest tumours may be considered for surgical treatment."
      ),

      item(
        "Soft Tissue Tumours",
        "Surgical treatment may be required for selected soft tissue tumours."
      ),
    ],

    technologies: [
      item(
        "Robotic Surgery",
        "Robotic systems may support selected minimally invasive cancer operations."
      ),

      item(
        "Laparoscopic Surgery",
        "Minimally invasive techniques may reduce incision size for selected procedures."
      ),

      item(
        "Image-Guided Surgery",
        "Imaging technologies may support surgical planning and selected procedures."
      ),
    ],

    team: {
      title:
        "Surgical Oncology Team",

      description:
        "Multidisciplinary support for cancer surgery and recovery.",

      cards: [
        item(
          "Cancer Surgeons",
          "Organ-specific surgeons assess suitability for cancer-directed operations."
        ),

        item(
          "Anaesthesia & Critical Care",
          "Peri-operative support is coordinated for complex cancer procedures."
        ),

        item(
          "Recovery Team",
          "Post-operative nursing, nutrition and rehabilitation support recovery."
        ),
      ],
    },
  },

  "radiation-oncology": {
    title:
      "Radiation Oncology",

    parentSlug:
      "cancer-care",

    intro:
      "Specialist radiation treatment planning using carefully targeted radiation for selected cancer conditions.",

    about:
      "Radiation oncology uses controlled high-energy radiation to treat selected cancers. Treatment planning involves imaging, tumour localisation and dose planning designed to target cancer while limiting exposure to surrounding healthy tissues.",

    aboutImage:
      "/images/specialities/cancer-team-2.jpg",

    highlights: [
      "Radiation oncologist evaluation",
      "CT-based treatment planning",
      "Precise tumour localisation",
      "Individualised radiation dosing",
      "Image-guided treatment",
      "Treatment-response follow-up",
    ],

    treatments: [
      item(
        "External Beam Radiation Therapy",
        "Radiation is delivered externally to a carefully planned treatment area."
      ),

      item(
        "IMRT",
        "Intensity-modulated radiation may shape radiation doses around selected tumours."
      ),

      item(
        "IGRT",
        "Image guidance supports treatment positioning and targeting."
      ),

      item(
        "Stereotactic Radiation",
        "Highly focused radiation may be used for selected small or well-defined targets."
      ),

      item(
        "Brachytherapy",
        "A radiation source may be positioned within or close to selected tumours."
      ),

      item(
        "Palliative Radiation",
        "Radiation may be used to relieve selected cancer-related symptoms."
      ),
    ],

    ailments: [
      item(
        "Brain Tumours",
        "Selected brain tumours may be treated with carefully planned radiation."
      ),

      item(
        "Head & Neck Cancer",
        "Radiation is commonly considered within multidisciplinary treatment plans."
      ),

      item(
        "Prostate Cancer",
        "Radiation may be considered according to disease characteristics."
      ),

      item(
        "Breast Cancer",
        "Radiation may form part of treatment following selected breast surgeries."
      ),

      item(
        "Lung Cancer",
        "Selected lung cancers may be treated using radiation."
      ),

      item(
        "Metastatic Lesions",
        "Focused or palliative radiation may be used for selected metastatic sites."
      ),
    ],

    technologies: [
      item(
        "Linear Accelerator",
        "Modern linear accelerators deliver carefully planned external radiation."
      ),

      item(
        "Image-Guided Radiation",
        "Imaging supports accurate positioning during treatment."
      ),

      item(
        "Stereotactic Systems",
        "Specialised systems support highly focused radiation treatments."
      ),
    ],

    team: {
      title:
        "Radiation Oncology Team",

      description:
        "Coordinated radiation planning, treatment and supportive care.",

      cards: [
        item(
          "Radiation Oncologists",
          "Specialists determine radiation indications, dose and treatment schedules."
        ),

        item(
          "Medical Physics Team",
          "Physics specialists support treatment planning and radiation quality assurance."
        ),

        item(
          "Radiation Therapy Team",
          "Trained professionals support accurate daily treatment delivery."
        ),
      ],
    },
  },

  "haemato-oncology": {
    title:
      "Haemato Oncology",

    parentSlug:
      "cancer-care",

    intro:
      "Specialist evaluation and treatment coordination for cancers and disorders involving blood-forming tissues.",

    about:
      "Haemato oncology focuses on cancers affecting blood, bone marrow and lymphatic tissues. Diagnosis may involve specialised blood tests, bone marrow evaluation, imaging and molecular testing followed by personalised treatment planning.",

    aboutImage:
      "/images/specialities/cancer-team-1.jpg",

    highlights: [
      "Specialist blood cancer evaluation",
      "Bone marrow diagnostic coordination",
      "Chemotherapy planning",
      "Targeted treatment evaluation",
      "Transplant assessment when appropriate",
      "Long-term monitoring support",
    ],

    treatments: [
      item(
        "Systemic Chemotherapy",
        "Medication-based treatment may be used for selected blood cancers."
      ),

      item(
        "Targeted Therapy",
        "Selected treatments target specific abnormalities in cancer cells."
      ),

      item(
        "Immunotherapy",
        "Immune-based treatments may be considered for selected conditions."
      ),

      item(
        "Stem Cell Transplant Evaluation",
        "Patients may be evaluated for transplant when clinically appropriate."
      ),

      item(
        "Supportive Transfusion Care",
        "Blood-product support may be required during selected treatments."
      ),

      item(
        "Long-Term Monitoring",
        "Regular assessment helps monitor treatment response and recurrence."
      ),
    ],

    ailments: [
      item(
        "Leukaemia",
        "Cancer affecting blood-forming tissues and blood cells."
      ),

      item(
        "Lymphoma",
        "Cancer involving cells of the lymphatic system."
      ),

      item(
        "Multiple Myeloma",
        "Cancer involving plasma cells within bone marrow."
      ),

      item(
        "Myelodysplastic Syndromes",
        "Disorders affecting normal blood-cell production."
      ),

      item(
        "Myeloproliferative Disorders",
        "Conditions causing abnormal production of blood cells."
      ),

      item(
        "Bone Marrow Disorders",
        "Selected disorders affecting marrow function may require specialist evaluation."
      ),
    ],

    technologies: [
      item(
        "Flow Cytometry",
        "Specialised cell analysis supports diagnosis of selected blood cancers."
      ),

      item(
        "Molecular Testing",
        "Genetic and molecular tests may help characterise selected diseases."
      ),

      item(
        "Advanced Laboratory Diagnostics",
        "Specialised laboratory evaluation supports diagnosis and treatment monitoring."
      ),
    ],

    team: {
      title:
        "Haemato Oncology Team",

      description:
        "Specialist blood cancer diagnosis, treatment and supportive care.",

      cards: [
        item(
          "Haemato Oncologists",
          "Specialists assess blood cancers and develop personalised treatment plans."
        ),

        item(
          "Transplant Support",
          "Selected patients may receive coordinated transplant evaluation and care."
        ),

        item(
          "Laboratory & Supportive Care",
          "Specialised diagnostics and supportive treatment assist the overall care pathway."
        ),
      ],
    },
  },

  "gynae-oncology": {
    title:
      "Gynae Oncology",

    parentSlug:
      "cancer-care",

    intro:
      "Specialist care for cancers affecting the female reproductive system with multidisciplinary diagnosis and treatment planning.",

    about:
      "Gynaecological oncology focuses on cancers of the ovaries, uterus, cervix, vulva and related reproductive organs. Care may involve surgery, systemic therapy and radiation depending on cancer type and stage.",

    aboutImage:
      "/images/specialities/cancer-team-3.jpg",

    highlights: [
      "Gynaecological cancer evaluation",
      "Multidisciplinary treatment planning",
      "Cancer surgery coordination",
      "Systemic treatment support",
      "Radiation treatment coordination",
      "Recovery and follow-up planning",
    ],

    treatments: [
      item(
        "Gynaecological Cancer Surgery",
        "Surgical treatment may be recommended for selected reproductive-system cancers."
      ),

      item(
        "Chemotherapy",
        "Systemic treatment may form part of care for selected cancers."
      ),

      item(
        "Radiation Therapy",
        "Radiation may be incorporated into selected treatment plans."
      ),

      item(
        "Targeted Therapy",
        "Selected cancers may be evaluated for targeted treatment options."
      ),

      item(
        "Minimally Invasive Surgery",
        "Selected procedures may be performed using minimally invasive techniques."
      ),

      item(
        "Follow-Up Care",
        "Regular surveillance is coordinated after treatment."
      ),
    ],

    ailments: [
      item(
        "Ovarian Cancer",
        "Cancer arising from ovarian or related tissues."
      ),

      item(
        "Cervical Cancer",
        "Cancer arising from cells of the cervix."
      ),

      item(
        "Endometrial Cancer",
        "Cancer involving the lining of the uterus."
      ),

      item(
        "Uterine Cancer",
        "Selected cancers affecting uterine tissues."
      ),

      item(
        "Vulvar Cancer",
        "Cancer affecting tissues of the vulva."
      ),

      item(
        "Gestational Trophoblastic Disease",
        "A group of pregnancy-related abnormal tissue conditions requiring specialist care."
      ),
    ],

    technologies: [
      item(
        "Minimally Invasive Surgery",
        "Laparoscopic or robotic techniques may support selected operations."
      ),

      item(
        "Advanced Imaging",
        "Imaging supports staging and treatment planning."
      ),

      item(
        "Radiation Planning Systems",
        "Modern planning systems support precise radiation treatment."
      ),
    ],

    team: {
      title:
        "Gynae Oncology Team",

      description:
        "Multidisciplinary care for cancers affecting the female reproductive system.",

      cards: [
        item(
          "Gynaecological Oncologists",
          "Specialists coordinate diagnosis and treatment planning."
        ),

        item(
          "Medical & Radiation Oncology",
          "Systemic and radiation treatments are coordinated when required."
        ),

        item(
          "Recovery Support",
          "Nursing, nutrition and follow-up support the patient journey."
        ),
      ],
    },
  },

  "head-and-neck-oncology": {
    title:
      "Head & Neck Oncology",

    parentSlug:
      "cancer-care",

    intro:
      "Multidisciplinary specialist care for cancers affecting the mouth, throat, larynx, salivary glands and other head and neck structures.",

    about:
      "Head and neck oncology combines specialist surgical, medical and radiation expertise. Treatment planning considers tumour location, stage, swallowing, speech, appearance and long-term functional recovery.",

    aboutImage:
      "/images/specialities/cancer-team-2.jpg",

    highlights: [
      "Head and neck tumour evaluation",
      "Multidisciplinary cancer planning",
      "Complex surgical coordination",
      "Radiation treatment planning",
      "Speech and swallowing support",
      "Rehabilitation and follow-up",
    ],

    treatments: [
      item(
        "Head & Neck Cancer Surgery",
        "Cancer-directed surgery may be recommended for selected tumours."
      ),

      item(
        "Radiation Therapy",
        "Radiation may be used alone or with other treatments."
      ),

      item(
        "Chemotherapy",
        "Systemic therapy may be incorporated into selected treatment plans."
      ),

      item(
        "Reconstructive Surgery",
        "Reconstruction may help restore structure and function after selected operations."
      ),

      item(
        "Speech Rehabilitation",
        "Specialist therapy supports speech and communication where required."
      ),

      item(
        "Swallowing Rehabilitation",
        "Therapy may support swallowing function during and after treatment."
      ),
    ],

    ailments: [
      item(
        "Oral Cancer",
        "Cancer affecting the mouth and oral cavity."
      ),

      item(
        "Throat Cancer",
        "Cancer involving structures of the pharynx."
      ),

      item(
        "Laryngeal Cancer",
        "Cancer affecting the voice box."
      ),

      item(
        "Salivary Gland Cancer",
        "Cancer arising from major or minor salivary glands."
      ),

      item(
        "Thyroid Cancer",
        "Selected cancers involving the thyroid gland."
      ),

      item(
        "Sinonasal Cancer",
        "Cancer involving nasal or sinus structures."
      ),
    ],

    technologies: [
      item(
        "Endoscopic Imaging",
        "Endoscopic assessment may support evaluation of selected head and neck structures."
      ),

      item(
        "Advanced Radiation Technology",
        "Modern radiation techniques support carefully targeted treatment."
      ),

      item(
        "Image-Guided Surgery",
        "Imaging may support planning for selected complex operations."
      ),
    ],

    team: {
      title:
        "Head & Neck Oncology Team",

      description:
        "Coordinated cancer treatment with attention to function and recovery.",

      cards: [
        item(
          "Head & Neck Surgeons",
          "Specialists evaluate tumour surgery and reconstructive requirements."
        ),

        item(
          "Oncology Specialists",
          "Medical and radiation oncologists coordinate additional cancer treatment."
        ),

        item(
          "Speech & Swallowing Support",
          "Rehabilitation specialists support communication and swallowing recovery."
        ),
      ],
    },
  },

  /* =======================================================
     NEUROSCIENCES
  ======================================================= */

  neurology: {
    title:
      "Neurology",

    parentSlug:
      "neurosciences",

    intro:
      "Specialist medical evaluation and management of conditions affecting the brain, spinal cord, nerves and muscles.",

    about:
      "Neurology focuses on diagnosing and medically managing disorders of the nervous system. Assessment may include neurological examination, imaging, electrical studies and laboratory testing according to symptoms.",

    highlights: [
      "Comprehensive neurological evaluation",
      "Brain and spine imaging coordination",
      "Electrophysiological testing",
      "Medication-based treatment planning",
      "Chronic neurological care",
      "Rehabilitation coordination",
    ],

    treatments: [
      item(
        "Neurological Medical Management",
        "Medication and monitoring plans are developed according to diagnosis."
      ),

      item(
        "Epilepsy Management",
        "Specialist evaluation supports diagnosis and treatment of seizure disorders."
      ),

      item(
        "Movement Disorder Treatment",
        "Medical treatment may help manage selected movement disorders."
      ),

      item(
        "Headache Management",
        "Specialist assessment helps identify and manage recurrent headache disorders."
      ),

      item(
        "Neuropathy Management",
        "Treatment planning for selected peripheral nerve disorders."
      ),

      item(
        "Neuro Rehabilitation",
        "Rehabilitation may support function following neurological illness."
      ),
    ],

    ailments: [
      item(
        "Epilepsy",
        "A neurological disorder associated with recurrent seizures."
      ),

      item(
        "Migraine",
        "A neurological condition causing recurrent headache and associated symptoms."
      ),

      item(
        "Parkinson's Disease",
        "A movement disorder affecting movement and coordination."
      ),

      item(
        "Multiple Sclerosis",
        "An immune-mediated condition affecting the central nervous system."
      ),

      item(
        "Neuropathy",
        "Damage or dysfunction involving peripheral nerves."
      ),

      item(
        "Dementia",
        "Conditions associated with progressive changes in memory and cognition."
      ),
    ],

    technologies: [
      item(
        "MRI Brain & Spine",
        "Advanced MRI supports detailed neurological assessment."
      ),

      item(
        "EEG",
        "Electrical brain activity recording may support seizure evaluation."
      ),

      item(
        "EMG & Nerve Conduction Studies",
        "Electrical tests support assessment of nerves and muscles."
      ),
    ],

    team: {
      title:
        "Neurology Care Team",

      description:
        "Specialist neurological diagnosis, medical treatment and rehabilitation support.",

      cards: [
        item(
          "Neurologists",
          "Specialists assess and medically manage neurological conditions."
        ),

        item(
          "Neurodiagnostic Team",
          "Imaging and electrical testing support neurological diagnosis."
        ),

        item(
          "Neuro Rehabilitation",
          "Therapists support mobility, function and independence."
        ),
      ],
    },
  },

  neurosurgery: {
    title:
      "Neurosurgery",

    parentSlug:
      "neurosciences",

    intro:
      "Specialist surgical evaluation and coordinated treatment for selected conditions affecting the brain, spine and nervous system.",

    about:
      "Neurosurgery focuses on surgical treatment of selected brain, spine and nerve conditions. Detailed imaging and multidisciplinary evaluation help determine whether surgery is appropriate and which surgical approach may be suitable.",

    highlights: [
      "Brain and spine surgical evaluation",
      "Complex neurological imaging review",
      "Minimally invasive surgical options",
      "Microsurgical treatment planning",
      "Critical-care coordination",
      "Post-operative neuro rehabilitation",
    ],

    treatments: [
      item(
        "Brain Tumour Surgery",
        "Surgical removal or biopsy may be considered for selected brain tumours."
      ),

      item(
        "Spine Surgery",
        "Surgical treatment may be considered for selected spinal conditions."
      ),

      item(
        "Cerebrovascular Surgery",
        "Selected vascular conditions of the brain may require surgical treatment."
      ),

      item(
        "Minimally Invasive Neurosurgery",
        "Selected procedures may use minimally invasive surgical approaches."
      ),

      item(
        "Skull Base Surgery",
        "Complex skull-base conditions may require multidisciplinary surgical planning."
      ),

      item(
        "Peripheral Nerve Surgery",
        "Selected nerve compression or injury conditions may require surgery."
      ),
    ],

    ailments: [
      item(
        "Brain Tumour",
        "Abnormal growth within or around the brain."
      ),

      item(
        "Spinal Cord Compression",
        "Pressure affecting the spinal cord may require urgent specialist evaluation."
      ),

      item(
        "Brain Aneurysm",
        "Abnormal widening of a blood vessel in the brain."
      ),

      item(
        "Hydrocephalus",
        "Abnormal accumulation of fluid within brain cavities."
      ),

      item(
        "Skull Base Tumours",
        "Tumours arising near the base of the skull."
      ),

      item(
        "Nerve Compression",
        "Pressure on peripheral nerves causing pain or neurological symptoms."
      ),
    ],

    technologies: [
      item(
        "Neuronavigation",
        "Navigation systems may assist selected brain and spine operations."
      ),

      item(
        "Operating Microscope",
        "Microsurgical visualisation supports precision during selected procedures."
      ),

      item(
        "Advanced Neuro Imaging",
        "Detailed imaging supports surgical planning."
      ),
    ],

    team: {
      title:
        "Neurosurgery Team",

      description:
        "Multidisciplinary surgical care for complex neurological conditions.",

      cards: [
        item(
          "Neurosurgeons",
          "Specialists assess surgical options for brain, spine and nerve disorders."
        ),

        item(
          "Neuro Anaesthesia & Critical Care",
          "Specialist peri-operative support is coordinated for complex procedures."
        ),

        item(
          "Neuro Rehabilitation",
          "Rehabilitation supports neurological recovery following surgery."
        ),
      ],
    },
  },

  "stroke-care": {
    title:
      "Stroke Care",

    parentSlug:
      "neurosciences",

    intro:
      "Coordinated specialist evaluation, acute treatment and rehabilitation support for patients affected by stroke.",

    about:
      "Stroke care requires rapid assessment to identify whether a stroke is caused by a blocked or bleeding blood vessel. Treatment and rehabilitation depend on stroke type, timing, neurological findings and imaging.",

    highlights: [
      "Rapid neurological assessment",
      "Emergency brain imaging",
      "Stroke treatment coordination",
      "Neuro-intervention evaluation",
      "Critical-care support",
      "Structured stroke rehabilitation",
    ],

    treatments: [
      item(
        "Acute Stroke Management",
        "Immediate specialist treatment depends on stroke type and time from symptom onset."
      ),

      item(
        "Thrombolysis Evaluation",
        "Eligible patients may be assessed for clot-dissolving treatment."
      ),

      item(
        "Mechanical Thrombectomy",
        "Selected large-vessel strokes may be considered for catheter-based clot removal."
      ),

      item(
        "Haemorrhagic Stroke Care",
        "Bleeding strokes require specialised neurological and neurosurgical assessment."
      ),

      item(
        "Stroke Rehabilitation",
        "Physiotherapy, speech and occupational therapy support recovery."
      ),

      item(
        "Secondary Prevention",
        "Risk-factor management helps reduce the chance of recurrent stroke."
      ),
    ],

    ailments: [
      item(
        "Ischaemic Stroke",
        "Stroke caused by interruption of blood supply to part of the brain."
      ),

      item(
        "Haemorrhagic Stroke",
        "Stroke caused by bleeding within or around the brain."
      ),

      item(
        "Transient Ischaemic Attack",
        "Temporary neurological symptoms caused by reduced blood flow."
      ),

      item(
        "Carotid Artery Disease",
        "Narrowing of arteries supplying blood to the brain."
      ),

      item(
        "Post-Stroke Weakness",
        "Motor impairment that may occur after stroke."
      ),

      item(
        "Post-Stroke Speech Problems",
        "Communication difficulties may occur following brain injury."
      ),
    ],

    technologies: [
      item(
        "CT & CT Angiography",
        "Rapid imaging helps identify bleeding and blood-vessel blockage."
      ),

      item(
        "MRI Brain",
        "MRI may provide detailed assessment of stroke-related brain changes."
      ),

      item(
        "Neuro-Interventional Systems",
        "Catheter-based systems support selected emergency stroke procedures."
      ),
    ],

    team: {
      title:
        "Stroke Care Team",

      description:
        "Emergency neurological care followed by structured recovery support.",

      cards: [
        item(
          "Stroke Neurologists",
          "Specialists coordinate acute stroke assessment and medical management."
        ),

        item(
          "Neuro Intervention Team",
          "Selected patients may require catheter-based emergency treatment."
        ),

        item(
          "Stroke Rehabilitation",
          "Multidisciplinary rehabilitation supports functional recovery."
        ),
      ],
    },
  },

  /* =======================================================
     CARDIAC CARE
  ======================================================= */

  "cardiac-surgery": {
    title:
      "Cardiac Surgery",

    parentSlug:
      "cardiac-care",

    intro:
      "Specialist surgical evaluation and coordinated treatment for selected heart and major blood-vessel conditions.",

    about:
      "Cardiac surgery includes surgical treatment of coronary artery disease, heart valve disease and selected structural or congenital heart conditions. Treatment planning follows detailed cardiac evaluation and multidisciplinary review.",

    highlights: [
      "Comprehensive cardiac surgical evaluation",
      "Coronary bypass planning",
      "Heart valve surgery coordination",
      "Advanced cardiac imaging",
      "Cardiac critical-care support",
      "Structured cardiac rehabilitation",
    ],

    treatments: [
      item(
        "CABG",
        "Coronary artery bypass surgery creates alternate pathways for blood flow around blocked coronary arteries."
      ),

      item(
        "Valve Replacement",
        "Damaged heart valves may be surgically replaced when clinically indicated."
      ),

      item(
        "Valve Repair",
        "Selected valve conditions may be treated by repairing the patient's existing valve."
      ),

      item(
        "Aortic Surgery",
        "Selected diseases affecting the aorta may require surgical treatment."
      ),

      item(
        "Congenital Heart Surgery",
        "Selected structural heart conditions may require surgical correction."
      ),

      item(
        "Cardiac Rehabilitation",
        "Structured rehabilitation supports recovery following heart surgery."
      ),
    ],

    ailments: [
      item(
        "Coronary Artery Disease",
        "Narrowing of coronary arteries that supply the heart muscle."
      ),

      item(
        "Heart Valve Disease",
        "Valve narrowing or leakage affecting normal heart function."
      ),

      item(
        "Aortic Disease",
        "Conditions affecting the body's main artery."
      ),

      item(
        "Congenital Heart Disease",
        "Structural heart conditions present from birth."
      ),

      item(
        "Ischaemic Heart Disease",
        "Reduced blood supply to heart muscle."
      ),

      item(
        "Advanced Heart Disease",
        "Complex cardiac conditions requiring specialist surgical assessment."
      ),
    ],

    technologies: [
      item(
        "Advanced Cardiac Imaging",
        "Detailed imaging supports surgical planning and assessment."
      ),

      item(
        "Minimally Invasive Cardiac Surgery",
        "Selected cardiac procedures may use smaller surgical approaches."
      ),

      item(
        "Cardiopulmonary Bypass Systems",
        "Specialised systems support selected open-heart procedures."
      ),
    ],

    team: {
      title:
        "Cardiac Surgery Team",

      description:
        "Multidisciplinary support before, during and after heart surgery.",

      cards: [
        item(
          "Cardiac Surgeons",
          "Specialists assess and perform selected heart operations."
        ),

        item(
          "Cardiac Anaesthesia & Critical Care",
          "Specialist teams support complex peri-operative cardiac care."
        ),

        item(
          "Cardiac Rehabilitation",
          "Rehabilitation supports recovery, mobility and cardiovascular wellbeing."
        ),
      ],
    },
  },

  "interventional-cardiology": {
    title:
      "Interventional Cardiology",

    parentSlug:
      "cardiac-care",

    intro:
      "Catheter-based evaluation and treatment for selected coronary, structural and vascular heart conditions.",

    about:
      "Interventional cardiology uses catheter-based techniques to diagnose and treat selected heart conditions without conventional open surgery. Procedures may include coronary angiography, angioplasty and selected structural-heart interventions.",

    highlights: [
      "Coronary artery evaluation",
      "Catheter-based treatment planning",
      "Angioplasty and stent coordination",
      "Structural heart assessment",
      "Advanced cardiac imaging",
      "Post-procedure follow-up",
    ],

    treatments: [
      item(
        "Coronary Angiography",
        "Catheter-based imaging evaluates coronary artery narrowing or blockage."
      ),

      item(
        "Coronary Angioplasty",
        "Balloon treatment may open selected narrowed coronary arteries."
      ),

      item(
        "Coronary Stenting",
        "Stents may be placed to maintain blood flow through selected narrowed arteries."
      ),

      item(
        "Structural Heart Intervention",
        "Selected structural heart conditions may be treated through catheter-based techniques."
      ),

      item(
        "Complex Coronary Intervention",
        "Advanced catheter procedures may be considered for complex coronary disease."
      ),

      item(
        "Post-PCI Follow-Up",
        "Medication and risk-factor management are coordinated after intervention."
      ),
    ],

    ailments: [
      item(
        "Coronary Artery Blockage",
        "Narrowed coronary arteries can reduce blood flow to the heart."
      ),

      item(
        "Heart Attack",
        "Acute blockage of a coronary artery may require emergency intervention."
      ),

      item(
        "Angina",
        "Chest discomfort may result from reduced blood supply to the heart."
      ),

      item(
        "Structural Heart Disease",
        "Selected valve or structural abnormalities may be evaluated for catheter treatment."
      ),

      item(
        "Complex Coronary Disease",
        "Multiple or difficult coronary blockages may require advanced intervention."
      ),

      item(
        "Restenosis",
        "Re-narrowing at a previously treated coronary segment."
      ),
    ],

    technologies: [
      item(
        "Digital Cath Lab",
        "Advanced catheter laboratories support coronary imaging and intervention."
      ),

      item(
        "IVUS / Intravascular Imaging",
        "Internal vessel imaging may support selected complex coronary procedures."
      ),

      item(
        "Physiological Coronary Assessment",
        "Specialised measurements may help evaluate the significance of coronary narrowing."
      ),
    ],

    team: {
      title:
        "Interventional Cardiology Team",

      description:
        "Specialist catheter-based cardiac diagnosis and treatment.",

      cards: [
        item(
          "Interventional Cardiologists",
          "Specialists assess and perform catheter-based heart procedures."
        ),

        item(
          "Cath Lab Team",
          "Specialised staff support imaging, intervention and procedural monitoring."
        ),

        item(
          "Cardiac Recovery",
          "Post-procedure observation and follow-up are coordinated according to patient needs."
        ),
      ],
    },
  },

  /* =======================================================
     GASTROSCIENCES
  ======================================================= */

  gastroenterology: {
    title:
      "Gastroenterology",

    parentSlug:
      "gastrosciences",

    intro:
      "Specialist medical evaluation and treatment for disorders affecting the digestive system.",

    about:
      "Gastroenterology focuses on conditions involving the oesophagus, stomach, intestines, liver, pancreas and digestive tract. Diagnosis may involve endoscopy, imaging, laboratory testing and specialised functional studies.",

    highlights: [
      "Digestive-system specialist evaluation",
      "Upper and lower GI endoscopy",
      "Advanced diagnostic coordination",
      "Medical treatment planning",
      "Therapeutic endoscopy support",
      "Nutrition and follow-up care",
    ],

    treatments: [
      item(
        "Upper GI Endoscopy",
        "Endoscopy allows visual assessment of the oesophagus, stomach and upper digestive tract."
      ),

      item(
        "Colonoscopy",
        "Endoscopic examination evaluates the colon and rectum."
      ),

      item(
        "Therapeutic Endoscopy",
        "Selected digestive conditions may be treated using endoscopic techniques."
      ),

      item(
        "Inflammatory Bowel Disease Management",
        "Medical treatment is personalised for selected chronic intestinal inflammatory conditions."
      ),

      item(
        "Acid Reflux Management",
        "Treatment may include medication and lifestyle modification."
      ),

      item(
        "Digestive Disease Follow-Up",
        "Long-term monitoring may be required for chronic digestive disorders."
      ),
    ],

    ailments: [
      item(
        "GERD",
        "Acid reflux from the stomach into the oesophagus."
      ),

      item(
        "Peptic Ulcer Disease",
        "Ulcers affecting the stomach or upper small intestine."
      ),

      item(
        "Inflammatory Bowel Disease",
        "Chronic inflammatory conditions including Crohn's disease and ulcerative colitis."
      ),

      item(
        "GI Bleeding",
        "Bleeding occurring within the digestive tract."
      ),

      item(
        "Irritable Bowel Syndrome",
        "A functional digestive disorder affecting bowel habits and abdominal comfort."
      ),

      item(
        "Digestive Polyps",
        "Abnormal tissue growths that may be identified during endoscopy."
      ),
    ],

    technologies: [
      item(
        "High-Definition Endoscopy",
        "Advanced endoscopic imaging supports detailed digestive-system evaluation."
      ),

      item(
        "Endoscopic Ultrasound",
        "Ultrasound integrated with endoscopy supports selected diagnostic procedures."
      ),

      item(
        "Advanced GI Imaging",
        "Modern imaging supports diagnosis and treatment planning."
      ),
    ],

    team: {
      title:
        "Gastroenterology Team",

      description:
        "Medical, endoscopic and nutritional support for digestive disorders.",

      cards: [
        item(
          "Gastroenterologists",
          "Specialists assess and medically manage digestive-system conditions."
        ),

        item(
          "Endoscopy Team",
          "Specialised teams support diagnostic and therapeutic endoscopic procedures."
        ),

        item(
          "Nutrition Support",
          "Nutrition guidance may form part of digestive-disease management."
        ),
      ],
    },
  },

  hepatology: {
    title:
      "Hepatology",

    parentSlug:
      "gastrosciences",

    intro:
      "Specialist evaluation and medical management for liver-related diseases and complications.",

    about:
      "Hepatology focuses on diseases affecting the liver and related systems. Evaluation may include blood testing, imaging, fibrosis assessment and other investigations to determine disease severity and appropriate treatment.",

    highlights: [
      "Comprehensive liver evaluation",
      "Liver-function assessment",
      "Advanced liver imaging",
      "Chronic liver disease management",
      "Cirrhosis complication management",
      "Transplant evaluation coordination",
    ],

    treatments: [
      item(
        "Chronic Liver Disease Management",
        "Medical care focuses on disease control and prevention of complications."
      ),

      item(
        "Viral Hepatitis Treatment",
        "Selected viral liver infections may be treated with antiviral medication."
      ),

      item(
        "Cirrhosis Management",
        "Treatment focuses on liver function and associated complications."
      ),

      item(
        "Fatty Liver Management",
        "Metabolic and lifestyle management may support selected patients."
      ),

      item(
        "Portal Hypertension Care",
        "Specialist management addresses complications related to increased portal pressure."
      ),

      item(
        "Liver Transplant Evaluation",
        "Advanced liver disease may require assessment for transplantation."
      ),
    ],

    ailments: [
      item(
        "Cirrhosis",
        "Advanced liver scarring that affects normal liver function."
      ),

      item(
        "Fatty Liver Disease",
        "Excess fat accumulation within the liver."
      ),

      item(
        "Hepatitis",
        "Inflammation of the liver from viral or other causes."
      ),

      item(
        "Liver Failure",
        "Severe impairment of liver function."
      ),

      item(
        "Portal Hypertension",
        "Increased pressure within the portal venous system."
      ),

      item(
        "Autoimmune Liver Disease",
        "Immune-mediated conditions affecting liver tissue."
      ),
    ],

    technologies: [
      item(
        "Fibrosis Assessment",
        "Non-invasive assessment may help estimate liver stiffness and fibrosis."
      ),

      item(
        "Advanced Liver Imaging",
        "Ultrasound, CT or MRI may support detailed liver evaluation."
      ),

      item(
        "Endoscopic Evaluation",
        "Endoscopy may assess selected complications of advanced liver disease."
      ),
    ],

    team: {
      title:
        "Hepatology Team",

      description:
        "Specialist medical care for liver disease and transplant evaluation.",

      cards: [
        item(
          "Hepatologists",
          "Specialists assess and manage acute and chronic liver disease."
        ),

        item(
          "Liver Diagnostics",
          "Imaging and laboratory assessment support diagnosis and monitoring."
        ),

        item(
          "Transplant Coordination",
          "Selected advanced cases may be referred for transplant evaluation."
        ),
      ],
    },
  },

  /* =======================================================
     RENAL CARE
  ======================================================= */

  nephrology: {
    title:
      "Nephrology",

    parentSlug:
      "renal-care",

    intro:
      "Specialist medical evaluation and management for kidney disease, hypertension and kidney-related metabolic conditions.",

    about:
      "Nephrology focuses on kidney function and medical conditions affecting the kidneys. Care may include laboratory evaluation, blood-pressure management, medication, dialysis planning and transplant assessment when required.",

    highlights: [
      "Kidney-function assessment",
      "Chronic kidney disease management",
      "Blood-pressure management",
      "Dialysis planning",
      "Electrolyte disorder treatment",
      "Kidney transplant evaluation",
    ],

    treatments: [
      item(
        "Chronic Kidney Disease Management",
        "Medical care aims to preserve kidney function and manage complications."
      ),

      item(
        "Dialysis",
        "Dialysis may replace selected kidney functions in advanced kidney failure."
      ),

      item(
        "Hypertension Management",
        "Blood-pressure treatment helps protect kidney and cardiovascular health."
      ),

      item(
        "Electrolyte Management",
        "Treatment addresses abnormal levels of minerals and salts in the body."
      ),

      item(
        "Kidney Disease Medication",
        "Medication plans depend on kidney function and underlying diagnosis."
      ),

      item(
        "Transplant Evaluation",
        "Selected patients with advanced kidney failure may be assessed for transplantation."
      ),
    ],

    ailments: [
      item(
        "Chronic Kidney Disease",
        "Progressive reduction in kidney function."
      ),

      item(
        "Acute Kidney Injury",
        "Sudden reduction in kidney function."
      ),

      item(
        "Diabetic Kidney Disease",
        "Kidney damage associated with diabetes."
      ),

      item(
        "Hypertensive Kidney Disease",
        "Kidney damage associated with long-standing high blood pressure."
      ),

      item(
        "Glomerular Disease",
        "Conditions affecting the kidney's filtering structures."
      ),

      item(
        "Kidney Failure",
        "Severe loss of kidney function requiring specialised treatment."
      ),
    ],

    technologies: [
      item(
        "Advanced Renal Diagnostics",
        "Laboratory and imaging studies support detailed kidney assessment."
      ),

      item(
        "Haemodialysis Systems",
        "Modern dialysis systems support blood purification in kidney failure."
      ),

      item(
        "Renal Ultrasound",
        "Ultrasound provides structural assessment of kidneys and urinary systems."
      ),
    ],

    team: {
      title:
        "Nephrology Team",

      description:
        "Specialist medical care for kidney disease and dialysis planning.",

      cards: [
        item(
          "Nephrologists",
          "Specialists diagnose and medically manage kidney disorders."
        ),

        item(
          "Dialysis Team",
          "Specialised professionals support safe dialysis treatment."
        ),

        item(
          "Renal Nutrition Support",
          "Nutrition planning may help manage selected kidney conditions."
        ),
      ],
    },
  },

  urology: {
    title:
      "Urology",

    parentSlug:
      "renal-care",

    intro:
      "Specialist evaluation and treatment for conditions affecting the urinary tract and male reproductive system.",

    about:
      "Urology includes medical and surgical management of urinary-system disorders involving the kidneys, ureters, bladder, prostate and related structures. Treatment may use endoscopic, laparoscopic, robotic or conventional approaches.",

    highlights: [
      "Comprehensive urological evaluation",
      "Endoscopic urinary procedures",
      "Kidney stone treatment",
      "Prostate treatment planning",
      "Minimally invasive surgery",
      "Post-treatment follow-up",
    ],

    treatments: [
      item(
        "Kidney Stone Treatment",
        "Treatment options depend on stone size, location and symptoms."
      ),

      item(
        "Endoscopic Urology",
        "Endoscopic procedures may diagnose and treat selected urinary conditions."
      ),

      item(
        "Prostate Surgery",
        "Selected prostate conditions may require surgical treatment."
      ),

      item(
        "Urinary Reconstruction",
        "Reconstructive procedures may be considered for selected urinary disorders."
      ),

      item(
        "Laparoscopic Urology",
        "Selected procedures may use minimally invasive laparoscopic approaches."
      ),

      item(
        "Robotic Urology",
        "Robotic systems may support selected complex urological procedures."
      ),
    ],

    ailments: [
      item(
        "Kidney Stones",
        "Mineral deposits that form within the urinary system."
      ),

      item(
        "Prostate Enlargement",
        "Non-cancerous prostate enlargement that may affect urination."
      ),

      item(
        "Urinary Obstruction",
        "Blockage affecting normal urine flow."
      ),

      item(
        "Ureteric Stones",
        "Stones located within tubes connecting the kidneys to the bladder."
      ),

      item(
        "Bladder Disorders",
        "Conditions affecting bladder storage or emptying."
      ),

      item(
        "Urethral Stricture",
        "Narrowing of the urethra that may restrict urine flow."
      ),
    ],

    technologies: [
      item(
        "Laser Stone Treatment",
        "Laser systems may fragment selected urinary stones."
      ),

      item(
        "Endoscopic Systems",
        "Modern endoscopy supports minimally invasive urinary procedures."
      ),

      item(
        "Robotic Surgery",
        "Robotic technology may support selected complex operations."
      ),
    ],

    team: {
      title:
        "Urology Team",

      description:
        "Specialist medical and surgical care for urinary-system conditions.",

      cards: [
        item(
          "Urologists",
          "Specialists assess urinary and male reproductive-system conditions."
        ),

        item(
          "Endourology Team",
          "Specialised teams support endoscopic stone and urinary procedures."
        ),

        item(
          "Recovery Support",
          "Post-procedure monitoring and follow-up support recovery."
        ),
      ],
    },
  },

  /* =======================================================
     TRANSPLANT
  ======================================================= */

  "liver-transplant": {
    title:
      "Liver Transplant",

    parentSlug:
      "liver-transplant",

    intro:
      "Comprehensive transplant evaluation and coordinated care for selected patients with advanced liver disease.",

    about:
      "Liver transplantation may be considered for selected patients with irreversible liver failure or other advanced liver conditions. Evaluation includes liver-disease assessment, transplant suitability, donor evaluation where applicable and multidisciplinary planning.",

    highlights: [
      "Recipient transplant evaluation",
      "Living donor assessment coordination",
      "Multidisciplinary transplant planning",
      "Complex liver surgery support",
      "Post-transplant monitoring",
      "Long-term transplant follow-up",
    ],

    treatments: [
      item(
        "Living Donor Liver Transplant",
        "A portion of a healthy donor liver may be transplanted into an eligible recipient."
      ),

      item(
        "Deceased Donor Liver Transplant",
        "Eligible patients may receive a liver from a deceased donor according to applicable allocation systems."
      ),

      item(
        "Transplant Evaluation",
        "Detailed medical assessment determines transplant suitability."
      ),

      item(
        "Donor Evaluation",
        "Potential living donors undergo detailed medical and surgical assessment."
      ),

      item(
        "Post-Transplant Care",
        "Monitoring focuses on graft function, medications and recovery."
      ),

      item(
        "Transplant Rehabilitation",
        "Nutrition and physical recovery support are coordinated after transplantation."
      ),
    ],

    ailments: [
      item(
        "End-Stage Liver Disease",
        "Advanced irreversible liver disease with significant loss of function."
      ),

      item(
        "Decompensated Cirrhosis",
        "Advanced cirrhosis associated with serious complications."
      ),

      item(
        "Acute Liver Failure",
        "Rapid severe deterioration in liver function."
      ),

      item(
        "Selected Liver Tumours",
        "Certain liver cancers may be evaluated within transplant criteria."
      ),

      item(
        "Metabolic Liver Disease",
        "Selected inherited metabolic liver disorders may require transplant evaluation."
      ),

      item(
        "Cholestatic Liver Disease",
        "Selected progressive bile-duct disorders may lead to advanced liver failure."
      ),
    ],

    technologies: [
      item(
        "Advanced Liver Imaging",
        "CT, MRI and vascular imaging support transplant planning."
      ),

      item(
        "Transplant Monitoring Systems",
        "Laboratory and clinical monitoring support post-transplant care."
      ),

      item(
        "Advanced Surgical Systems",
        "Specialised operating-room systems support complex transplant procedures."
      ),
    ],

    team: {
      title:
        "Liver Transplant Team",

      description:
        "Multidisciplinary transplant evaluation, surgery and long-term care.",

      cards: [
        item(
          "Transplant Surgeons",
          "Specialists assess and perform complex liver transplant procedures."
        ),

        item(
          "Hepatology Team",
          "Hepatologists manage liver disease before and after transplantation."
        ),

        item(
          "Transplant Critical Care",
          "Specialist intensive-care support is coordinated during recovery."
        ),
      ],
    },
  },

  "lung-transplant": {
    title:
      "Lung Transplant",

    parentSlug:
      "lung-transplant",

    intro:
      "Specialist transplant evaluation and coordinated care for selected patients with advanced irreversible lung disease.",

    about:
      "Lung transplantation may be considered for selected patients with severe end-stage lung disease when other treatments no longer provide adequate benefit. Evaluation considers lung function, overall health and transplant suitability.",

    highlights: [
      "Advanced lung disease evaluation",
      "Transplant suitability assessment",
      "Multidisciplinary transplant planning",
      "Thoracic surgical coordination",
      "Post-transplant critical care",
      "Pulmonary rehabilitation support",
    ],

    treatments: [
      item(
        "Single Lung Transplant",
        "Replacement of one diseased lung may be considered for selected conditions."
      ),

      item(
        "Double Lung Transplant",
        "Both lungs may be replaced in selected patients."
      ),

      item(
        "Pre-Transplant Evaluation",
        "Detailed assessment determines transplant suitability and risk."
      ),

      item(
        "Post-Transplant Care",
        "Close monitoring supports graft function and recovery."
      ),

      item(
        "Immunosuppression Management",
        "Medication is used to reduce the risk of organ rejection."
      ),

      item(
        "Pulmonary Rehabilitation",
        "Structured rehabilitation supports breathing, strength and functional recovery."
      ),
    ],

    ailments: [
      item(
        "Pulmonary Fibrosis",
        "Progressive scarring of lung tissue affecting breathing."
      ),

      item(
        "Advanced COPD",
        "Severe chronic obstructive lung disease with major functional limitation."
      ),

      item(
        "Bronchiectasis",
        "Chronic airway damage associated with recurrent infection and breathing problems."
      ),

      item(
        "Cystic Fibrosis",
        "Inherited disease that can cause progressive lung damage."
      ),

      item(
        "Pulmonary Hypertension",
        "Elevated pressure within blood vessels of the lungs."
      ),

      item(
        "End-Stage Lung Disease",
        "Severe irreversible lung dysfunction despite advanced treatment."
      ),
    ],

    technologies: [
      item(
        "Advanced Pulmonary Function Testing",
        "Detailed lung-function testing supports transplant assessment."
      ),

      item(
        "High-Resolution CT",
        "Detailed lung imaging supports diagnosis and transplant planning."
      ),

      item(
        "Advanced Critical-Care Systems",
        "Specialised monitoring and respiratory support assist complex transplant care."
      ),
    ],

    team: {
      title:
        "Lung Transplant Team",

      description:
        "Multidisciplinary care from transplant evaluation through rehabilitation.",

      cards: [
        item(
          "Lung Transplant Surgeons",
          "Specialists assess and perform selected lung transplant procedures."
        ),

        item(
          "Pulmonology Team",
          "Pulmonologists manage advanced lung disease before and after transplantation."
        ),

        item(
          "Pulmonary Rehabilitation",
          "Rehabilitation supports respiratory and physical recovery."
        ),
      ],
    },
  },
};

/* =========================================================
   DEFAULT DATA GENERATOR

   Your ZIP contains more sub-specialities.
   If an exact custom object above is not yet added,
   this generator DOES NOT copy the parent's treatments/
   ailments.

   It creates sub-speciality-specific generic categories
   using that sub-speciality name.
========================================================= */

function createSpecificFallback(
  name,
  speciality
) {
  return {
    title: name,

    intro:
      `${name} provides focused specialist evaluation and coordinated care within ${speciality.title}. Treatment recommendations are based on the patient's diagnosis, clinical findings and specialist assessment.`,

    about:
      `${name} is a focused area of ${speciality.title}. Patients may require specialist consultation, appropriate investigations, personalised treatment planning and structured follow-up depending on their medical condition.`,

    highlights: [
      `Specialist ${name} evaluation`,
      `Diagnostic assessment for ${name}`,
      "Individualised treatment planning",
      "Multidisciplinary care coordination",
      "International patient support",
      "Recovery and follow-up planning",
    ],

    treatments: [
      item(
        `${name} Specialist Consultation`,
        `Detailed specialist evaluation is performed to determine the most appropriate care pathway for ${name}.`
      ),

      item(
        "Diagnostic Evaluation",
        `Investigations are selected according to the patient's condition and ${name} requirements.`
      ),

      item(
        "Medical Management",
        "Medication-based treatment may be recommended where clinically appropriate."
      ),

      item(
        "Procedure-Based Treatment",
        `Selected patients may require procedures related to ${name} after specialist assessment.`
      ),

      item(
        "Rehabilitation & Recovery",
        "Recovery support may include rehabilitation, nutrition and functional care."
      ),

      item(
        "Follow-Up Care",
        "Follow-up helps assess recovery and ongoing treatment requirements."
      ),
    ],

    ailments: [
      item(
        `${name} Related Conditions`,
        `Conditions within the ${name} area require diagnosis before a specific treatment plan is recommended.`
      ),

      item(
        "Acute Conditions",
        "Selected acute conditions may require prompt specialist assessment."
      ),

      item(
        "Chronic Conditions",
        "Long-term conditions may require ongoing monitoring and medical management."
      ),

      item(
        "Complex Conditions",
        "Complex cases may require multidisciplinary specialist review."
      ),

      item(
        "Post-Treatment Conditions",
        "Some patients require continued assessment after previous treatment."
      ),

      item(
        "Functional Problems",
        "Selected conditions may affect mobility, function or quality of life."
      ),
    ],

    technologies: [
      item(
        "Advanced Diagnostic Imaging",
        `Modern imaging may support diagnosis and treatment planning in ${name}.`
      ),

      item(
        "Image-Guided Technology",
        "Imaging guidance may support selected diagnostic or treatment procedures."
      ),

      item(
        "Modern Treatment Systems",
        `Specialised technology may support selected ${name} treatments.`
      ),
    ],

    team: {
      title:
        `${name} Care Team`,

      description:
        `Coordinated multidisciplinary support for patients requiring ${name} care.`,

      cards: [
        item(
          `${name} Specialists`,
          `Specialists evaluate conditions related to ${name} and recommend appropriate treatment pathways.`
        ),

        item(
          "Diagnostic Support Team",
          "Imaging, laboratory and other diagnostic teams support clinical assessment."
        ),

        item(
          "Recovery & Follow-Up",
          "Rehabilitation and follow-up support are coordinated according to patient needs."
        ),
      ],
    },
  };
}

/* =========================================================
   GET DETAILS
========================================================= */

/* =========================================================
   GET DETAILS
========================================================= */

export function getSubSpecialityDetails(
  specialitySlug,
  subSpecialitySlug
) {
  /* =======================================================
     1. FIND PARENT SPECIALITY
  ======================================================= */

  const navigationItem =
    specialties.find(
      (item) =>
        item[1] ===
        specialitySlug
    );

  if (!navigationItem) {
    return null;
  }


  /* =======================================================
     2. GET PARENT SPECIALITY DETAILS
  ======================================================= */

  const speciality =
    getSpecialityDetails(
      specialitySlug,
      navigationItem
    );

  if (!speciality) {
    return null;
  }


  /* =======================================================
     3. FIND SELECTED SUB-SPECIALITY
  ======================================================= */

  const subSpecialityName =
    speciality
      ?.subSpecialities
      ?.find(
        (name) =>
          slugify(name) ===
          subSpecialitySlug
      );

  if (!subSpecialityName) {
    return null;
  }


  /* =======================================================
     4. GET SUB-SPECIALITY OWN DATA
  ======================================================= */

  const custom =
    subSpecialityDetails[
      subSpecialitySlug
    ];


  /* =======================================================
     5. IF CUSTOM DATA NOT AVAILABLE
        CREATE SUB-SPECIALITY-SPECIFIC FALLBACK
  ======================================================= */

  const specific =
    custom ||
    createSpecificFallback(
      subSpecialityName,
      speciality
    );


  /* =======================================================
     6. RETURN FINAL DATA

     IMPORTANT:

     ABOUT
     HIGHLIGHTS
     TREATMENTS
     AILMENTS
     TECHNOLOGIES

     => SUB-SPECIALITY DATA


     CHAIRMAN
     TEAM

     => PARENT SPECIALITY DATA
  ======================================================= */

  return {
    /* =====================================================
       ROUTING
    ===================================================== */

    slug:
      subSpecialitySlug,

    parentSlug:
      specialitySlug,


    /* =====================================================
       TITLES
    ===================================================== */

    title:
      specific.title ||
      subSpecialityName,

    parentTitle:
      speciality.title,


    /* =====================================================
       SUB-SPECIALITY INTRO
    ===================================================== */

    intro:
      specific.intro ||
      "",


    /* =====================================================
       SUB-SPECIALITY ABOUT
    ===================================================== */

    about:
      specific.about ||
      "",


    /* =====================================================
       ABOUT IMAGE

       First preference:
       Sub-speciality own image.

       If image not available:
       Parent speciality team image.

       If that is also not available:
       Parent chairman image.
    ===================================================== */

    aboutImage:
      specific.aboutImage ||
      speciality.team
        ?.cards?.[0]
        ?.image ||
      speciality.chairman
        ?.image ||
      null,


    /* =====================================================
       SUB-SPECIALITY HIGHLIGHTS
    ===================================================== */

    highlights:
      specific.highlights ||
      [],


    /* =====================================================
       CHILD SUB-SPECIALITIES

       Only current sub-speciality own children.
       Parent list is not copied.
    ===================================================== */

    subSpecialities:
      specific.subSpecialities ||
      [],


    /* =====================================================
       SUB-SPECIALITY TREATMENTS
    ===================================================== */

    treatments:
      specific.treatments ||
      [],


    /* =====================================================
       SUB-SPECIALITY AILMENTS
    ===================================================== */

    ailments:
      specific.ailments ||
      [],


    /* =====================================================
       SUB-SPECIALITY TECHNOLOGIES
    ===================================================== */

    technologies:
      specific.technologies ||
      [],


    /* =====================================================
       TEAM

       IMPORTANT:
       Parent speciality team only.

       Example:
       Orthopaedics -> Sports Medicine
       Sports Medicine page lo
       Orthopaedics parent team display avuthundi.
    ===================================================== */

    team:
      speciality.team ||
      null,


    /* =====================================================
       CHAIRMAN

       IMPORTANT:
       Parent speciality chairman only.

       Example:
       Orthopaedics -> Sports Medicine
       Sports Medicine page lo
       Orthopaedics chairman display avutharu.
    ===================================================== */

    chairman:
      speciality.chairman ||
      null,


    /* =====================================================
       PATIENT STORIES

       Sub-speciality-specific stories unte avi.
       Parent stories automatic ga copy cheyyatledu.
    ===================================================== */

    patientStories:
      specific.patientStories ||
      [],


    /* =====================================================
       LOCATION

       Parent speciality location.
    ===================================================== */

    location:
      speciality.location ||
      "India",
  };
}
