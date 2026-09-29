export function slugifyTreatment(value = "") {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/*
==========================================================
TREATMENT-SPECIFIC CONTENT
==========================================================

Add clinician-reviewed content here treatment-by-treatment.

Example:

"knee-replacement": {
  about: "...",

  preparation: {
    title: "...",
    description: "...",
    points: ["...", "..."],
    image: "/images/treatments/knee-replacement/preparation.jpg",
  },

  procedure: {...},
  postTreatment: {...},
  benefits: {...},
  risks: {...},
  limitations: {...},
}

==========================================================
*/

export const treatmentDetails = {};

/*
==========================================================
FALLBACK DATA
==========================================================

This fallback keeps every treatment details page functional
until reviewed treatment-specific content is added above.
==========================================================
*/

export function getTreatmentDetail(treatment) {
  if (!treatment) {
    return null;
  }

  const slug =
    treatment.slug ||
    slugifyTreatment(treatment.name);

  const custom =
    treatmentDetails[slug];

  if (custom) {
    return {
      ...treatment,
      slug,
      ...custom,
    };
  }

  return {
    ...treatment,
    slug,

    about:
      treatment.description ||
      `${treatment.name} is a treatment or procedure that may be considered after an appropriate medical evaluation. The exact treatment approach depends on the diagnosis, individual health and specialist recommendations.`,

    preparation: {
      title: `Preparing for ${treatment.name}`,

      description:
        `Before ${treatment.name}, the treating team may review medical history, current medicines, previous reports and relevant investigations. Additional preparation may be recommended depending on the procedure and individual clinical condition.`,

      points: [
        "Medical history and previous reports may be reviewed",
        "Current medicines and relevant health conditions may be discussed",
        "Required investigations may be advised before treatment",
        "Treatment-specific instructions are provided by the clinical team",
      ],

      image:
        "/images/treatments/treatment-preparation.jpg",
    },

    procedure: {
      title: `${treatment.name} Procedure`,

      description:
        `The exact steps involved in ${treatment.name} depend on the condition being treated and the treatment plan recommended by the specialist. The clinical team should explain the planned approach before treatment.`,

      points: [
        "The procedure is planned according to the individual diagnosis",
        "The treatment approach may vary between patients",
        "The clinical team monitors the patient during the procedure",
        "Procedure-specific steps are explained before treatment",
      ],

      image:
        "/images/treatments/treatment-procedure.jpg",
    },

    postTreatment: {
      title: `After ${treatment.name}`,

      description:
        `Recovery and follow-up after ${treatment.name} vary according to the procedure and individual health. The treating team may provide guidance regarding medicines, activity, follow-up visits and rehabilitation where appropriate.`,

      points: [
        "Recovery is monitored by the treating team",
        "Medicines and aftercare instructions may be provided",
        "Activity guidance depends on the treatment performed",
        "Follow-up appointments may be advised when required",
      ],

      image:
        "/images/treatments/post-treatment.jpg",
    },

    benefits: {
      title: "Potential Benefits",

      description:
        `The potential benefits of ${treatment.name} depend on the condition being treated, treatment approach and individual patient. A specialist can explain the expected treatment goals for a specific case.`,

      points: [
        "Potential benefits depend on the condition being treated",
        "Treatment goals can vary between individual patients",
        "Expected outcomes should be discussed with the specialist",
        "Follow-up care may contribute to overall treatment outcomes",
      ],

      image:
        "/images/treatments/treatment-benefits.jpg",
    },

    risks: {
      title: "Potential Risks",

      description:
        `Medical treatments can have potential risks or complications. The risks associated with ${treatment.name} depend on the procedure, individual health and other clinical factors.`,

      points: [
        "Medical treatments can have potential risks",
        "Risk levels depend on the procedure and individual health",
        "Some complications may require additional medical care",
        "Procedure-specific risks should be discussed with the specialist",
      ],

      image:
        "/images/treatments/treatment-risks.jpg",
    },

    limitations: {
      title: "Treatment Limitations",

      description:
        `${treatment.name} may not be suitable for every patient and results can vary. Treatment decisions should be based on diagnosis, investigations and specialist assessment.`,

      points: [
        "The treatment may not be suitable for every patient",
        "Results can vary between individuals",
        "Additional treatment or follow-up may sometimes be required",
        "Individual expectations should be discussed before treatment",
      ],

      image:
        "/images/treatments/treatment-limitations.jpg",
    },
  };
}