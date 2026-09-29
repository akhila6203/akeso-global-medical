/*
=========================================================
GLOBAL TECHNOLOGY REGISTRY
=========================================================
*/

const commonDepartments = [
  {
    name: "Cancer Care",
    description:
      "Multidisciplinary cancer evaluation, treatment planning and specialist care.",
    icon: "shield",
    to: "/speciality/cancer-care",
  },
  {
    name: "Cardiac Care",
    description:
      "Advanced evaluation and treatment for cardiovascular conditions.",
    icon: "heart",
    to: "/speciality/cardiac-care",
  },
  {
    name: "Orthopaedics",
    description:
      "Specialist care for bone, joint and musculoskeletal conditions.",
    icon: "bone",
    to: "/speciality/orthopaedics",
  },
  {
    name: "Neurosciences",
    description:
      "Specialist neurological and neurosurgical assessment and care.",
    icon: "brain",
    to: "/speciality/neurosciences",
  },
];


/*
=========================================================
HELPER
=========================================================
*/

function createTechnology({
  id,
  slug,
  name,
  image,
  description,
  source,
  healthLibraryPreview = false,
  about,
  helpTabs,
  procedureTabs,
  benefitsTabs,
  unique,
  departments = commonDepartments,
}) {
  return {
    id,
    slug,
    name,
    image,
    description,
    source,
    healthLibraryPreview,

    about: {
      title:
        about?.title ||
        `What is ${name}?`,

      description:
        about?.description ||
        `${name} is a medical technology used to support selected diagnostic, treatment-planning or therapeutic procedures. Its exact clinical role depends on the patient's condition and specialist evaluation.`,

      image:
        about?.image ||
        image,
    },

    help: {
      title:
        "How Does It Help?",

      description:
        `${name} may support healthcare professionals during selected areas of diagnosis, planning or treatment.`,

      tabs:
        helpTabs || [
          {
            label:
              "Clinical Support",

            title:
              `Clinical Support With ${name}`,

            description:
              `${name} can provide additional technical support during selected clinical applications.`,

            points: [
              "Supports selected clinical applications",
              "Used by trained healthcare professionals",
              "Application depends on clinical requirements",
              "Specialist evaluation determines suitability",
            ],

            image,
          },

          {
            label:
              "Precision",

            title:
              "Supporting Precision",

            description:
              "Advanced technology may provide additional information or technical assistance to the treating team.",

            points: [
              "Supports clinical planning",
              "May provide detailed information",
              "Used according to procedure requirements",
              "Works alongside professional clinical judgement",
            ],

            image,
          },
        ],
    },

    procedure: {
      title:
        "How Is It Done?",

      description:
        `The exact use of ${name} depends on the procedure and the individual clinical plan.`,

      tabs:
        procedureTabs || [
          {
            label:
              "Preparation",

            title:
              `Preparing for ${name}`,

            description:
              "The clinical team reviews the patient's condition, previous reports and relevant investigations before the planned procedure.",

            points: [
              "Medical history may be reviewed",
              "Relevant investigations may be evaluated",
              "Preparation instructions depend on the procedure",
              "The clinical team confirms suitability",
            ],

            image,
          },

          {
            label:
              "Treatment",

            title:
              `During ${name}`,

            description:
              `${name} is used by trained healthcare professionals according to the planned clinical procedure.`,

            points: [
              "Technology is prepared according to the procedure",
              "The clinical team remains responsible for treatment",
              "Patient monitoring is performed where required",
              "Steps vary according to clinical need",
            ],

            image,
          },

          {
            label:
              "Post Treatment",

            title:
              `After ${name}`,

            description:
              "After the procedure, further monitoring and follow-up depend on the treatment performed and the patient's clinical condition.",

            points: [
              "Post-procedure monitoring may be required",
              "Aftercare instructions are provided where appropriate",
              "Recovery varies according to the procedure",
              "Follow-up may be advised by the specialist",
            ],

            image,
          },
        ],
    },

    benefitsRisks: {
      title:
        "What Are The Benefits & Risks Of This Technology?",

      description:
        `Potential benefits and risks of ${name} depend on its clinical application, the procedure and individual patient factors.`,

      tabs:
        benefitsTabs || [
          {
            label:
              "Benefits",

            title:
              "Potential Benefits",

            description:
              `${name} may provide technical or clinical advantages during selected applications.`,

            points: [
              "May support clinical decision-making",
              "May provide additional technical precision",
              "Can assist selected diagnostic or treatment procedures",
              "Supports trained healthcare teams",
            ],

            image,
          },

          {
            label:
              "Risks",

            title:
              "Risks & Considerations",

            description:
              "Medical procedures may involve risks. The exact risks depend primarily on the procedure, patient health and how the technology is used.",

            points: [
              "Not every technology is suitable for every patient",
              "Procedure-specific complications may occur",
              "Technical limitations can apply",
              "Specialist evaluation is required",
            ],

            image,
          },
        ],
    },

    unique: {
      eyebrow:
        "Technology Highlights",

      title:
        unique?.title ||
        `What Makes ${name} Unique?`,

      description:
        unique?.description ||
        `${name} provides specialised technological support for selected areas of modern healthcare.`,

      points:
        unique?.points || [
          "Modern medical technology",
          "Designed to support trained specialists",
          "Integrated with clinical planning",
          "Used according to individual clinical requirements",
        ],

      image:
        unique?.image ||
        image,
    },

    departments,
  };
}


/*
=========================================================
TECHNOLOGIES
=========================================================
*/

export const technologies = [
  createTechnology({
    id: 1,

    slug:
      "advanced-ct-imaging",

    name:
      "Advanced CT Imaging",

    image:
      "/images/technology/ct-scan.jpg",

    description:
      "Advanced CT imaging supports detailed diagnostic assessment and treatment planning across appropriate clinical indications.",

    source:
      "health-library",

    healthLibraryPreview:
      true,

    about: {
      title:
        "What is Advanced CT Imaging?",

      description:
        "Advanced CT imaging uses X-ray technology and computer processing to create detailed cross-sectional images of structures inside the body. It can support clinical diagnosis, treatment planning and follow-up when medically appropriate.",
    },

    helpTabs: [
      {
        label:
          "Diagnosis",

        title:
          "Detailed Diagnostic Imaging",

        description:
          "CT imaging can provide detailed views of internal structures and may help clinicians evaluate selected medical conditions.",

        points: [
          "Provides cross-sectional anatomical images",
          "May support diagnosis of selected conditions",
          "Can assist emergency and planned assessment",
          "Findings are interpreted with clinical information",
        ],

        image:
          "/images/technology/ct-scan.jpg",
      },

      {
        label:
          "Treatment Planning",

        title:
          "Supporting Treatment Planning",

        description:
          "CT images may provide anatomical information that assists specialists when planning selected treatments or procedures.",

        points: [
          "Supports anatomical assessment",
          "May assist procedural planning",
          "Can help evaluate treatment areas",
          "Used according to clinical indication",
        ],

        image:
          "/images/technology/ct-scan.jpg",
      },
    ],

    unique: {
      title:
        "What Makes Advanced CT Imaging Useful?",

      description:
        "CT technology can rapidly produce detailed cross-sectional images that support a wide range of clinical assessments.",

      points: [
        "Detailed cross-sectional imaging",
        "Rapid image acquisition",
        "Supports multiple clinical specialties",
        "Can assist treatment and procedure planning",
      ],
    },
  }),


  createTechnology({
    id: 2,

    slug:
      "advanced-mri",

    name:
      "Advanced MRI",

    image:
      "/images/technology/mri.jpg",

    description:
      "Advanced magnetic resonance imaging provides detailed imaging that may support diagnosis and treatment planning.",

    source:
      "health-library",

    healthLibraryPreview:
      true,

    about: {
      title:
        "What is Advanced MRI?",

      description:
        "Magnetic resonance imaging uses magnetic fields and radiofrequency signals to create detailed images of structures inside the body. It is commonly used for selected neurological, musculoskeletal and other clinical assessments.",
    },

    helpTabs: [
      {
        label:
          "Soft Tissue Imaging",

        title:
          "Detailed Soft Tissue Imaging",

        description:
          "MRI can provide detailed visualisation of many soft tissues and anatomical structures.",

        points: [
          "Detailed soft-tissue imaging",
          "Supports neurological assessment",
          "Supports musculoskeletal evaluation",
          "No ionising radiation is used for image generation",
        ],

        image:
          "/images/technology/mri.jpg",
      },

      {
        label:
          "Planning",

        title:
          "Supporting Clinical Planning",

        description:
          "MRI findings may help specialists plan further evaluation or treatment where clinically appropriate.",

        points: [
          "Detailed anatomical information",
          "May support treatment planning",
          "Can assist clinical monitoring",
          "Used according to specialist recommendation",
        ],

        image:
          "/images/technology/mri.jpg",
      },
    ],

    unique: {
      title:
        "What Makes Advanced MRI Unique?",

      description:
        "MRI provides detailed imaging without using ionising radiation for image acquisition.",

      points: [
        "Detailed soft-tissue visualisation",
        "Multiple imaging sequences",
        "Useful across several specialties",
        "Supports diagnosis and treatment planning",
      ],
    },
  }),


  createTechnology({
    id: 3,

    slug:
      "robotic-surgery",

    name:
      "Robotic Surgery",

    image:
      "/images/technology/robotic-surgery.jpg",

    description:
      "Robotic-assisted platforms may support selected minimally invasive surgical procedures.",

    source:
      "health-library",

    healthLibraryPreview:
      true,

    about: {
      title:
        "What is Robotic Surgery?",

      description:
        "Robotic-assisted surgery uses specialised surgeon-controlled technology to support selected surgical procedures. Depending on the operation, the system can provide enhanced visualisation and controlled movement of surgical instruments.",
    },

    helpTabs: [
      {
        label:
          "Precision",

        title:
          "Supporting Surgical Precision",

        description:
          "Robotic-assisted instruments can support controlled movements during selected surgical procedures.",

        points: [
          "Surgeon-controlled instrument movement",
          "Enhanced visualisation",
          "Supports selected minimally invasive procedures",
          "Procedure-specific surgical planning",
        ],

        image:
          "/images/technology/robotic-surgery.jpg",
      },

      {
        label:
          "Visualisation",

        title:
          "Enhanced Visualisation",

        description:
          "Selected robotic systems can provide magnified visualisation of the operative field to the surgeon.",

        points: [
          "Detailed operative view",
          "Supports anatomical visualisation",
          "Can assist selected complex procedures",
          "Used under trained surgical supervision",
        ],

        image:
          "/images/technology/robotic-surgery.jpg",
      },
    ],

    procedureTabs: [
      {
        label:
          "Preparation",

        title:
          "Preparing for Robotic Surgery",

        description:
          "Before surgery, the treating team reviews the patient's condition, investigations and planned surgical approach.",

        points: [
          "Medical history and investigations are reviewed",
          "Anaesthesia assessment may be completed",
          "Medication instructions may be provided",
          "The surgical approach is planned individually",
        ],

        image:
          "/images/technology/robotic-surgery.jpg",
      },

      {
        label:
          "Treatment",

        title:
          "During Robotic Surgery",

        description:
          "During the procedure, the surgeon controls the robotic-assisted system and specialised instruments according to the planned operation.",

        points: [
          "The surgeon remains in control of the system",
          "Specialised instruments are positioned for the operation",
          "The exact technique depends on the procedure",
          "The patient is monitored throughout surgery",
        ],

        image:
          "/images/technology/robotic-surgery.jpg",
      },

      {
        label:
          "Post Treatment",

        title:
          "After Robotic Surgery",

        description:
          "Post-operative care depends on the procedure performed and the patient's individual recovery.",

        points: [
          "Post-operative monitoring",
          "Pain and wound care where required",
          "Activity and recovery guidance",
          "Follow-up according to the surgeon's plan",
        ],

        image:
          "/images/technology/robotic-surgery.jpg",
      },
    ],

    benefitsTabs: [
      {
        label:
          "Benefits",

        title:
          "Potential Benefits",

        description:
          "For appropriately selected procedures, robotic-assisted surgery may provide technical advantages to the surgical team.",

        points: [
          "Enhanced operative visualisation",
          "Controlled instrument movement",
          "May support minimally invasive approaches",
          "Can assist selected complex procedures",
        ],

        image:
          "/images/technology/robotic-surgery.jpg",
      },

      {
        label:
          "Risks",

        title:
          "Potential Risks",

        description:
          "Robotic-assisted surgery remains a surgical procedure and can involve risks depending on the operation and individual patient.",

        points: [
          "Anaesthesia-related risks",
          "Bleeding or infection may occur",
          "Procedure-specific complications are possible",
          "Another surgical approach may occasionally be required",
        ],

        image:
          "/images/technology/robotic-surgery.jpg",
      },
    ],

    unique: {
      title:
        "What Makes Robotic Surgery Technology Unique?",

      description:
        "Robotic-assisted systems combine surgeon-controlled instrumentation with enhanced visualisation for selected surgical procedures.",

      points: [
        "Surgeon-controlled robotic instrumentation",
        "Enhanced operative visualisation",
        "Controlled instrument movement",
        "Supports selected minimally invasive procedures",
      ],
    },
  }),


  createTechnology({
    id: 4,

    slug:
      "image-guided-surgery",

    name:
      "Image-Guided Surgery",

    image:
      "/images/technology/image-guided-surgery.jpg",

    description:
      "Image-guided systems may assist specialists during selected procedures by providing enhanced visual guidance.",

    source:
      "health-library",

    healthLibraryPreview:
      true,

    about: {
      title:
        "What is Image-Guided Surgery?",

      description:
        "Image-guided surgery combines medical imaging with surgical navigation to help clinicians visualise selected anatomical structures during a planned procedure.",
    },

    unique: {
      title:
        "What Makes Image-Guided Surgery Unique?",

      description:
        "Image-guided systems combine imaging information with procedural navigation to support selected surgical procedures.",

      points: [
        "Image-based procedural guidance",
        "Supports anatomical localisation",
        "May assist selected minimally invasive approaches",
        "Integrated with surgical planning",
      ],
    },
  }),


  createTechnology({
    id: 5,

    slug:
      "radiation-technology",

    name:
      "Radiation Technology",

    image:
      "/images/technology/radiation.jpg",

    description:
      "Modern radiation platforms may support carefully planned treatment for selected cancer conditions.",

    source:
      "cancer-care",

    healthLibraryPreview:
      false,

    about: {
      title:
        "What is Radiation Technology?",

      description:
        "Radiation technology includes specialised systems used to deliver planned radiation treatment for selected cancer conditions. Treatment is planned by the oncology team according to the tumour, surrounding tissues and individual clinical requirements.",
    },

    unique: {
      title:
        "What Makes Modern Radiation Technology Unique?",

      description:
        "Modern systems combine treatment planning, imaging and controlled radiation delivery for selected oncology treatments.",

      points: [
        "Individualised treatment planning",
        "Image-supported treatment delivery",
        "Controlled radiation administration",
        "Multidisciplinary oncology use",
      ],
    },
  }),


  createTechnology({
    id: 6,

    slug:
      "advanced-cath-lab",

    name:
      "Advanced Cath Lab",

    image:
      "/images/technology/cath-lab.jpg",

    description:
      "Cardiac catheterisation facilities may support selected diagnostic and interventional cardiac procedures.",

    source:
      "cardiac-care",

    healthLibraryPreview:
      false,

    about: {
      title:
        "What is an Advanced Cath Lab?",

      description:
        "A cardiac catheterisation laboratory is a specialised clinical environment equipped for selected diagnostic and interventional cardiovascular procedures.",
    },

    unique: {
      title:
        "What Makes an Advanced Cath Lab Important?",

      description:
        "Cath lab technology combines imaging, monitoring and interventional equipment for selected cardiovascular procedures.",

      points: [
        "Real-time imaging support",
        "Specialised cardiac monitoring",
        "Supports diagnostic procedures",
        "Supports selected interventional procedures",
      ],
    },
  }),


  createTechnology({
    id: 7,

    slug:
      "surgical-navigation",

    name:
      "Surgical Navigation",

    image:
      "/images/technology/surgical-navigation.jpg",

    description:
      "Navigation systems may support selected orthopaedic and surgical procedures with image-based guidance.",

    source:
      "orthopaedics",

    healthLibraryPreview:
      false,

    about: {
      title:
        "What is Surgical Navigation?",

      description:
        "Surgical navigation uses imaging and tracking technology to provide additional anatomical guidance during selected surgical procedures.",
    },

    unique: {
      title:
        "What Makes Surgical Navigation Unique?",

      description:
        "Navigation technology can provide image-based anatomical guidance during selected procedures.",

      points: [
        "Image-based guidance",
        "Supports surgical planning",
        "Provides anatomical orientation",
        "Used according to procedure requirements",
      ],
    },
  }),


  createTechnology({
    id: 8,

    slug:
      "neuro-navigation",

    name:
      "Neuro Navigation",

    image:
      "/images/technology/neuro-navigation.jpg",

    description:
      "Neuro-navigation technology may provide image-based guidance during selected neurological procedures.",

    source:
      "neurosciences",

    healthLibraryPreview:
      false,

    about: {
      title:
        "What is Neuro Navigation?",

      description:
        "Neuro-navigation uses imaging and tracking technology to support anatomical orientation during selected neurological and neurosurgical procedures.",
    },

    unique: {
      title:
        "What Makes Neuro Navigation Unique?",

      description:
        "Neuro-navigation integrates patient imaging with procedural guidance for selected neurological procedures.",

      points: [
        "Image-based neurological guidance",
        "Supports anatomical orientation",
        "Can assist selected neurosurgical procedures",
        "Used by trained specialist teams",
      ],
    },
  }),
];


/*
=========================================================
HEALTH LIBRARY PREVIEW
=========================================================
*/

export const healthLibraryTechnologies =
  technologies.filter(
    (item) =>
      item.healthLibraryPreview
  );


/*
=========================================================
GET TECHNOLOGY
=========================================================
*/

export function getTechnologyBySlug(
  slug
) {
  return technologies.find(
    (item) =>
      item.slug === slug
  );
}


/*
=========================================================
PATIENT STORIES
=========================================================
*/

export const specialityPatientStories = [
  {
    id: 1,

    title:
      "International Patient Journey",

    subtitle:
      "Coordinated medical care in India",

    image:
      "/images/patient-stories/patient-1.jpg",

    videoId: "",
  },

  {
    id: 2,

    title:
      "Treatment & Recovery Journey",

    subtitle:
      "Specialist care and patient support",

    image:
      "/images/patient-stories/patient-2.jpg",

    videoId: "",
  },

  {
    id: 3,

    title:
      "Patient Experience",

    subtitle:
      "From consultation to follow-up",

    image:
      "/images/patient-stories/patient-3.jpg",

    videoId: "",
  },

  {
    id: 4,

    title:
      "Recovery Story",

    subtitle:
      "Coordinated support throughout treatment",

    image:
      "/images/patient-stories/patient-4.jpg",

    videoId: "",
  },
];