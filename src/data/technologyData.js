/*
=========================================================
GLOBAL TECHNOLOGY REGISTRY

Rules:
1. Every technology gets a unique slug.
2. source indicates where it belongs.
3. healthLibraryPreview=true means it can appear
   in Health Library Technology preview.
4. AllTechnologies page uses ALL records.
=========================================================
*/

export const technologies = [
  {
    id: 1,
    slug: "advanced-ct-imaging",
    name: "Advanced CT Imaging",

    image:
      "/images/technology/ct-scan.jpg",

    description:
      "Advanced CT imaging supports detailed diagnostic assessment and treatment planning across appropriate clinical indications.",

    source:
      "health-library",

    healthLibraryPreview: true,
  },

  {
    id: 2,
    slug: "advanced-mri",
    name: "Advanced MRI",

    image:
      "/images/technology/mri.jpg",

    description:
      "Advanced magnetic resonance imaging provides detailed imaging that may support diagnosis and treatment planning.",

    source:
      "health-library",

    healthLibraryPreview: true,
  },

  {
    id: 3,
    slug: "robotic-surgery",
    name: "Robotic Surgery",

    image:
      "/images/technology/robotic-surgery.jpg",

    description:
      "Robotic-assisted platforms may support selected minimally invasive surgical procedures.",

    source:
      "health-library",

    healthLibraryPreview: true,
  },

  {
    id: 4,
    slug: "image-guided-surgery",
    name: "Image-Guided Surgery",

    image:
      "/images/technology/image-guided-surgery.jpg",

    description:
      "Image-guided systems may assist specialists during selected procedures by providing enhanced visual guidance.",

    source:
      "health-library",

    healthLibraryPreview: true,
  },

  {
    id: 5,
    slug: "radiation-technology",
    name: "Radiation Technology",

    image:
      "/images/technology/radiation.jpg",

    description:
      "Modern radiation platforms may support carefully planned treatment for selected cancer conditions.",

    source:
      "cancer-care",

    healthLibraryPreview: false,
  },

  {
    id: 6,
    slug: "advanced-cath-lab",
    name: "Advanced Cath Lab",

    image:
      "/images/technology/cath-lab.jpg",

    description:
      "Cardiac catheterisation facilities may support selected diagnostic and interventional cardiac procedures.",

    source:
      "cardiac-care",

    healthLibraryPreview: false,
  },

  {
    id: 7,
    slug: "surgical-navigation",
    name: "Surgical Navigation",

    image:
      "/images/technology/surgical-navigation.jpg",

    description:
      "Navigation systems may support selected orthopaedic and surgical procedures with image-based guidance.",

    source:
      "orthopaedics",

    healthLibraryPreview: false,
  },

  {
    id: 8,
    slug: "neuro-navigation",
    name: "Neuro Navigation",

    image:
      "/images/technology/neuro-navigation.jpg",

    description:
      "Neuro-navigation technology may provide image-based guidance during selected neurological procedures.",

    source:
      "neurosciences",

    healthLibraryPreview: false,
  },
];


/*
=========================================================
HEALTH LIBRARY OWN PREVIEW

Only these technologies appear in Health Library section.
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