
import heartImage from "../assets/knowledge/blog-heart.jpg";
import kneeImage from "../assets/knowledge/blog-knee.jpg";
import cancerImage from "../assets/knowledge/blog-cancer.jpg";
import diabetesImage from "../assets/knowledge/blog-diabetes.jpg";
import neuroImage from "../assets/knowledge/blog-neuro.jpg";
import digestiveImage from "../assets/knowledge/blog-digestive.jpg";


import caseKneeImage from "../assets/knowledge/case-knee.jpg";
import caseHeartImage from "../assets/knowledge/case-heart.jpg";
import caseCancerImage from "../assets/knowledge/case-cancer.jpg";
import caseNeuroImage from "../assets/knowledge/case-neuro.jpg";
import caseRenalImage from "../assets/knowledge/case-renal.jpg";
import caseGastroImage from "../assets/knowledge/case-gastro.jpg";


export const blogData = [
  {
    id: 1,
    slug: "understanding-heart-health",
    category: "Heart Health",
    title: "Understanding Heart Health: Everyday Habits That Matter",
    image: heartImage,
    date: "Sep 28, 2026",
    author: "Akeso Medical Team",
    excerpt:
      "Learn about everyday habits that can support cardiovascular wellbeing and when professional medical guidance may be useful.",
    content: [
      {
        heading: "Understanding Heart Health",
        paragraphs: [
          "Heart health is influenced by several factors including physical activity, nutrition, sleep, stress management and existing medical conditions.",
          "Regular health evaluations can help identify risk factors early and allow an appropriate healthcare professional to recommend suitable next steps.",
        ],
      },
      {
        heading: "Why Regular Health Checks Matter",
        paragraphs: [
          "Blood pressure, blood sugar and cholesterol are commonly assessed as part of cardiovascular risk evaluation.",
          "The frequency and type of testing required varies from person to person and should be discussed with a qualified healthcare professional.",
        ],
      },
      {
        heading: "Supporting a Healthy Lifestyle",
        paragraphs: [
          "A balanced diet, appropriate physical activity, adequate sleep and avoiding tobacco can form part of a heart-conscious lifestyle.",
          "People with existing medical conditions should follow advice provided by their treating clinician.",
        ],
      },
    ],
  },

  {
    id: 2,
    slug: "managing-knee-pain",
    category: "Orthopaedics",
    title: "Managing Knee Pain: When Should You Consult a Specialist?",
    image: kneeImage,
    date: "Sep 26, 2026",
    author: "Akeso Medical Team",
    excerpt:
      "An overview of knee discomfort, common warning signs and when an orthopaedic evaluation may be appropriate.",
    content: [
      {
        heading: "Understanding Knee Pain",
        paragraphs: [
          "Knee discomfort can occur for many reasons, including injuries, overuse and joint conditions.",
          "Persistent pain, swelling, instability or difficulty walking may require professional evaluation.",
        ],
      },
      {
        heading: "Medical Evaluation",
        paragraphs: [
          "A clinician may assess symptoms, medical history and movement of the joint before deciding whether imaging or additional investigations are appropriate.",
        ],
      },
    ],
  },

  {
    id: 3,
    slug: "importance-of-early-cancer-screening",
    category: "Cancer Care",
    title: "The Importance of Early Cancer Screening",
    image: cancerImage,
    date: "Sep 24, 2026",
    author: "Akeso Medical Team",
    excerpt:
      "Understand why screening recommendations vary by age, personal history and individual risk factors.",
    content: [
      {
        heading: "What Is Cancer Screening?",
        paragraphs: [
          "Cancer screening refers to tests or examinations used in people who may not yet have symptoms.",
          "The appropriate screening test and schedule depends on factors such as age, sex, family history and individual risk.",
        ],
      },
    ],
  },

  {
    id: 4,
    slug: "understanding-diabetes-care",
    category: "Endocrinology",
    title: "Understanding Diabetes Care and Regular Monitoring",
    image: diabetesImage,
    date: "Sep 22, 2026",
    author: "Akeso Medical Team",
    excerpt:
      "A general introduction to diabetes monitoring and long-term health management.",
    content: [
      {
        heading: "Diabetes Management",
        paragraphs: [
          "Diabetes management may involve monitoring blood glucose, nutrition, physical activity and medicines prescribed by a healthcare professional.",
        ],
      },
    ],
  },

  {
    id: 5,
    slug: "brain-health-warning-signs",
    category: "Neurosciences",
    title: "Brain Health: Symptoms That Should Not Be Ignored",
    image: neuroImage,
    date: "Sep 20, 2026",
    author: "Akeso Medical Team",
    excerpt:
      "Learn why new or severe neurological symptoms should receive appropriate medical assessment.",
    content: [
      {
        heading: "Neurological Symptoms",
        paragraphs: [
          "New neurological symptoms can have many possible causes. Sudden or severe symptoms may require urgent medical attention.",
        ],
      },
    ],
  },

  {
    id: 6,
    slug: "healthy-digestive-system",
    category: "Gastrosciences",
    title: "Simple Ways to Support Digestive Health",
    image: digestiveImage,
    date: "Sep 18, 2026",
    author: "Akeso Medical Team",
    excerpt:
      "General information about lifestyle factors associated with digestive wellbeing.",
    content: [
      {
        heading: "Digestive Health",
        paragraphs: [
          "Diet, hydration, physical activity and individual medical conditions can influence digestive health.",
        ],
      },
    ],
  },
];


export const videoData = [
  {
    id: 1,
    slug: "heart-health-explained",
    category: "Cardiac Care",
    title: "Heart Health Explained by Our Medical Team",
    image: "https://i.ytimg.com/vi/vZqgw3MKQPo/hqdefault.jpg",
    youtubeId: "vZqgw3MKQPo",
  },
  {
    id: 2,
    slug: "understanding-knee-replacement",
    category: "Orthopaedics",
    title: "Understanding Knee Replacement",
    image: "https://i.ytimg.com/vi/ifoywK1O9JA/hqdefault.jpg",
    youtubeId: "ifoywK1O9JA",
  },
  {
    id: 3,
    slug: "cancer-care-awareness",
    category: "Cancer Care",
    title: "Cancer Care and Early Evaluation",
    image: "https://i.ytimg.com/vi/z7-vFN8MAKw/hqdefault.jpg",
    youtubeId: "z7-vFN8MAKw",
  },
  {
    id: 4,
    slug: "brain-health-awareness",
    category: "Neurosciences",
    title: "Understanding Brain Health",
    image: "https://i.ytimg.com/vi/9e9h_s1v4Tw/hqdefault.jpg",
    youtubeId: "9e9h_s1v4Tw",
  },
  {
    id: 5,
    slug: "digestive-health-guide",
    category: "Gastrosciences",
    title: "A Guide to Digestive Health",
    image: "https://i.ytimg.com/vi/AmvTWJXmIyA/hqdefault.jpg",
    youtubeId: "AmvTWJXmIyA",
  },
];



export const caseStudyData = [
  {
    id: 1,
    slug: "complex-knee-care-case",
    category: "Orthopaedics",
    title: "Coordinated Care for a Complex Knee Condition",
     image: caseKneeImage,
    date: "Sep 28, 2026",
    author: "Akeso Medical Team",
    excerpt:
      "A sample case-study layout showing how multidisciplinary care information can be presented.",
    content: [
      {
        heading: "Case Overview",
        paragraphs: [
          "This is placeholder case-study content for the Akeso website UI. Replace it with an approved, de-identified clinical case before production.",
        ],
      },
      {
        heading: "Clinical Evaluation",
        paragraphs: [
          "The clinical team reviews medical history, investigations and available imaging before recommending an appropriate care plan.",
        ],
      },
      {
        heading: "Care Coordination",
        paragraphs: [
          "Where international care is involved, coordination may include medical-document review, hospital communication and treatment planning.",
        ],
      },
    ],
  },

  {
    id: 2,
    slug: "cardiac-care-coordination",
    category: "Cardiac Care",
    title: "Coordinated International Cardiac Care",
    image: caseHeartImage,
    date: "Sep 25, 2026",
    author: "Akeso Medical Team",
    excerpt:
      "Sample UI content for presenting a coordinated cardiac-care journey.",
    content: [
      {
        heading: "Case Overview",
        paragraphs: [
          "This sample demonstrates the intended case-study layout. Replace the clinical details with approved information.",
        ],
      },
    ],
  },

  {
    id: 3,
    slug: "cancer-treatment-coordination",
    category: "Cancer Care",
    title: "Multidisciplinary Cancer Care Coordination",
    image: caseCancerImage,
    date: "Sep 22, 2026",
    author: "Akeso Medical Team",
    excerpt:
      "A sample presentation of multidisciplinary treatment coordination.",
    content: [
      {
        heading: "Case Overview",
        paragraphs: [
          "This is placeholder content and should be replaced by medically reviewed, de-identified case information.",
        ],
      },
    ],
  },

  {
    id: 4,
    slug: "neuroscience-care-case",
    category: "Neurosciences",
    title: "Coordinated Neuroscience Evaluation",
    image: caseNeuroImage,
    date: "Sep 19, 2026",
    author: "Akeso Medical Team",
    excerpt:
      "Sample content demonstrating a neuroscience case-study card.",
    content: [],
  },

  {
    id: 5,
    slug: "renal-care-case",
    category: "Renal Care",
    title: "International Renal Care Coordination",
    image: caseRenalImage,
    date: "Sep 17, 2026",
    author: "Akeso Medical Team",
    excerpt:
      "Sample content demonstrating an international renal-care workflow.",
    content: [],
  },

  {
    id: 6,
    slug: "gastro-care-case",
    category: "Gastrosciences",
    title: "Digestive Health Treatment Coordination",
    image: caseGastroImage,
    date: "Sep 15, 2026",
    author: "Akeso Medical Team",
    excerpt:
      "Sample content demonstrating a digestive-health case-study layout.",
    content: [],
  },
];


export const getBlogBySlug = (slug) =>
  blogData.find((item) => item.slug === slug);

export const getCaseStudyBySlug = (slug) =>
  caseStudyData.find((item) => item.slug === slug);