import {
  getHealthCondition,
} from "./healthLibraryData";

import {
  getAilmentBySlug,
} from "../utils/medicalDirectory";


/* =========================================
   DEFAULT IMAGES
========================================= */

const DEFAULT_IMAGES = {
  about:
    "/images/health-library/default-condition.jpg",

  symptoms:
    "/images/health-library/symptoms.jpg",

  causes:
    "/images/health-library/causes.jpg",

  risks:
    "/images/health-library/risks.jpg",

  prevention:
    "/images/health-library/prevention.jpg",
};


/* =========================================
   APPROVED / CUSTOM AILMENT DETAILS

   Add condition-specific reviewed content here.
========================================= */

export const ailmentDetails = {
  /*
  Example structure:

  "osteoarthritis": {
    image:
      "/images/ailments/osteoarthritis.jpg",

    about:
      "Approved Osteoarthritis overview goes here.",

    sections: {
      symptoms: {
        title:
          "Symptoms",

        image:
          "/images/ailments/osteoarthritis-symptoms.jpg",

        content:
          "Approved symptoms introduction.",

        points: [
          "Approved symptom 1",
          "Approved symptom 2",
        ],
      },

      causes: {
        title:
          "Causes",

        image:
          "/images/ailments/osteoarthritis-causes.jpg",

        content:
          "Approved causes introduction.",

        points: [
          "Approved cause 1",
          "Approved cause 2",
        ],
      },

      risks: {
        title:
          "Risks",

        image:
          "/images/ailments/osteoarthritis-risks.jpg",

        content:
          "Approved risk-factor introduction.",

        points: [
          "Approved risk 1",
          "Approved risk 2",
        ],
      },

      prevention: {
        title:
          "Prevention",

        image:
          "/images/ailments/osteoarthritis-prevention.jpg",

        content:
          "Approved prevention information.",

        points: [
          "Approved prevention point 1",
          "Approved prevention point 2",
        ],
      },
    },
  },
  */
};


/* =========================================
   SAFE FALLBACK SECTION
========================================= */

function createFallbackSections(
  ailment
) {
  return {
    symptoms: {
      title:
        "Symptoms",

      image:
        DEFAULT_IMAGES.symptoms,

      content:
        `Symptoms associated with ${ailment.name} can vary between patients. Their type and severity depend on the condition and individual clinical factors.`,

      points: [
        "Symptoms may differ from person to person",
        "Severity can vary over time",
        "Symptoms may overlap with other medical conditions",
        "Persistent or worsening symptoms require medical assessment",
      ],
    },


    causes: {
      title:
        "Causes",

      image:
        DEFAULT_IMAGES.causes,

      content:
        `The causes and contributing factors associated with ${ailment.name} depend on the underlying condition and the individual patient.`,

      points: [
        "Medical history may be relevant",
        "Some conditions can have multiple contributing factors",
        "Genetic or environmental factors may be relevant in selected conditions",
        "Clinical assessment helps identify likely contributing factors",
      ],
    },


    risks: {
      title:
        "Risks",

      image:
        DEFAULT_IMAGES.risks,

      content:
        `Risk factors associated with ${ailment.name} vary between individuals and should be considered together with medical history and clinical findings.`,

      points: [
        "Individual risk factors vary",
        "Age may be relevant for some conditions",
        "Family or medical history may influence risk",
        "Existing health conditions may affect individual risk",
      ],
    },


    prevention: {
      title:
        "Prevention",

      image:
        DEFAULT_IMAGES.prevention,

      content:
        `Prevention or risk-reduction strategies for ${ailment.name} depend on its underlying cause and the patient's individual health needs.`,

      points: [
        "Follow appropriate preventive healthcare advice",
        "Manage existing medical conditions as advised",
        "Attend recommended health assessments",
        "Seek medical advice for persistent or worsening symptoms",
      ],
    },
  };
}


/* =========================================
   GET AILMENT DETAILS
========================================= */

export function getAilmentDetails(
  slug
) {
  const ailment =
    getAilmentBySlug(
      slug
    );

  if (!ailment) {
    return null;
  }


  /*
   * First priority:
   * explicitly approved ailment details.
   */

  const custom =
    ailmentDetails[
      slug
    ];

  if (custom) {
    return {
      ...ailment,

      title:
        ailment.name,

      image:
        custom.image ||
        DEFAULT_IMAGES.about,

      about:
        custom.about ||
        ailment.description,

      sections:
        custom.sections ||
        createFallbackSections(
          ailment
        ),
    };
  }


  /*
   * Second priority:
   * already existing Health Library data.
   *
   * Example:
   * Paget's Disease already has reviewed
   * condition-specific sections in your
   * healthLibraryData.js.
   */

  const healthCondition =
    getHealthCondition(
      slug
    );

  if (
    healthCondition &&
    healthCondition.sections
  ) {
    return {
      ...ailment,

      title:
        ailment.name,

      image:
        healthCondition.image ||
        DEFAULT_IMAGES.about,

      about:
        healthCondition.about ||
        ailment.description,

      sections:
        healthCondition.sections,
    };
  }


  /*
   * Final fallback:
   * preserve existing speciality description.
   */

  return {
    ...ailment,

    title:
      ailment.name,

    image:
      DEFAULT_IMAGES.about,

    about:
      ailment.description ||
      `${ailment.name} is a health condition that requires appropriate clinical evaluation. Diagnosis and management depend on symptoms, medical history, examination and specialist assessment.`,

    sections:
      createFallbackSections(
        ailment
      ),
  };
}