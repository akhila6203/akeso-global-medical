
import {
  Video,
  Stethoscope,
  FlaskConical,
  HeartHandshake,
  Home,
} from "lucide-react";

export const services = [
  {
    id: 1,
    slug: "televisits",
    name: "TeleVisits",
    eyebrow: "Online Consultations",
    icon: Video,
    shortDescription:
      "Connect with qualified healthcare professionals for specialist consultations, medical report discussions, and follow-up care.",
    description:
      "Akeso Global Medical Services Private Limited facilitates access to online consultations with healthcare professionals, helping patients connect with doctors for appropriate medical guidance without always needing to travel for an initial consultation.",
    highlight:
      "Connect with medical specialists from wherever you are, subject to doctor availability and clinical suitability.",
    benefits: [
      "Initial specialist consultations",
      "Follow-up consultations",
      "Discussion of medical reports and investigation results",
      "Treatment-plan clarification and general medical guidance",
      "Post-operative follow-up and recovery-related consultations",
    ],
    process: [
      {
        title: "Contact Akeso",
        description:
          "Contact Akeso and explain your consultation requirements.",
      },
      {
        title: "Share Medical Records",
        description:
          "Share relevant medical records and reports through the designated channel.",
      },
      {
        title: "Appointment Confirmation",
        description:
          "Receive appointment details and instructions for joining the online consultation.",
      },
      {
        title: "Online Consultation",
        description:
          "Connect with the healthcare professional at the confirmed time.",
      },
      {
        title: "Follow-Up",
        description:
          "Follow the doctor's recommendations and arrange any further evaluation if required.",
      },
    ],
    details: [
      {
        title: "Patient Responsibilities",
        content:
          "Patients should provide accurate medical information, disclose relevant medical history and current medications, and ensure they have a suitable private environment and a reliable internet connection during the consultation.",
      },
      {
        title: "Limitations of Televisits",
        content:
          "Online consultations may not be appropriate for every medical condition. A doctor may recommend a physical examination, additional investigations, or an in-person consultation where necessary. Prescriptions and clinical advice will be provided only where appropriate and in accordance with applicable laws, professional standards, and telemedicine requirements.",
      },
      {
        title: "Fees and Cancellations",
        content:
          "Consultation fees, appointment availability, cancellation terms, and rescheduling conditions will be communicated during booking, as applicable. Payments for services coordinated through Akeso must follow the authorised payment policy in the Terms and Conditions.",
      },
      {
        title: "Privacy and Confidentiality",
        content:
          "Patient information shared during the coordination and consultation process will be handled in accordance with the applicable Privacy Policy and legal requirements.",
      },
    ],
    faqs: [
      {
        question: "Can I consult a specialist without travelling to India?",
        answer:
          "An initial online consultation may be arranged when a suitable specialist is available and the patient's condition is appropriate for teleconsultation.",
      },
      {
        question: "What documents should I share?",
        answer:
          "Relevant medical records, prescriptions, investigation reports and a summary of your medical concerns may be requested.",
      },
      {
        question: "Can a doctor prescribe medication online?",
        answer:
          "Prescriptions are provided only when clinically appropriate and permitted under applicable telemedicine laws and professional standards.",
      },
      {
        question: "Are TeleVisits suitable for emergencies?",
        answer:
          "No. Televisits are not a substitute for emergency medical services. Seek immediate local medical care for severe or potentially life-threatening symptoms.",
      },
    ],
    notice:
      "Televisits are not a substitute for emergency medical services. If you experience severe chest pain, difficulty breathing, loss of consciousness, symptoms of a stroke, or another potentially life-threatening condition, seek immediate emergency care locally.",
    ctaTitle: "Book a TeleVisit",
    ctaDescription:
      "Contact Akeso to enquire about specialist availability, appointment slots, applicable fees, and the documents required for your consultation.",
  },

  {
    id: 2,
    slug: "second-opinion",
    name: "Second Opinion",
    eyebrow: "Expert Medical Review",
    icon: Stethoscope,
    shortDescription:
      "Get an additional medical perspective from qualified specialists to better understand your diagnosis and treatment options.",
    description:
      "At Akeso Global Medical Services Private Limited, we help patients access an additional medical perspective from qualified healthcare professionals to support informed decision-making.",
    highlight:
      "Make more informed healthcare decisions with an additional medical perspective.",
    benefits: [
      "Review of submitted medical records",
      "Specialist recommendations",
      "Clarification of treatment options",
      "Guidance regarding further evaluation",
      "Support understanding possible next steps",
    ],
    process: [
      {
        title: "Submit Your Medical Records",
        description:
          "Share relevant prescriptions, investigation reports, imaging, discharge summaries, and other available medical documents through our designated communication channels.",
      },
      {
        title: "Medical Review Coordination",
        description:
          "We facilitate the review of your case by an appropriate specialist, subject to availability and acceptance.",
      },
      {
        title: "Receive the Opinion",
        description:
          "The reviewing doctor may provide an assessment, discuss possible treatment approaches, or recommend further investigations or an in-person evaluation.",
      },
      {
        title: "Understand Your Options",
        description:
          "Patients can use the opinion to discuss the next steps with their existing treating doctor or the reviewing specialist.",
      },
    ],
    details: [
      {
        title: "What Is Included",
        content:
          "Depending on the service selected, a second opinion may include a review of submitted records, specialist recommendations, clarification of treatment options, and guidance regarding further evaluation.",
      },
      {
        title: "Medical Review Limitations",
        content:
          "A second opinion is based on the information made available to the reviewing doctor. Physical examination, additional tests, or an in-person consultation may be necessary before a definitive recommendation can be made.",
      },
      {
        title: "Treatment Decisions",
        content:
          "A second opinion does not automatically replace the advice of your existing treating doctor. Treatment decisions remain between the patient and the responsible healthcare professional. Medical outcomes cannot be guaranteed.",
      },
    ],
    faqs: [
      {
        question: "When should I consider a second opinion?",
        answer:
          "Patients may seek an additional perspective when reviewing a diagnosis, considering major treatment or wanting clarification about available medical options.",
      },
      {
        question: "What documents are required?",
        answer:
          "Relevant prescriptions, imaging, investigation reports, discharge summaries and other available medical records may be required.",
      },
      {
        question: "Does a second opinion replace my current doctor?",
        answer:
          "No. It provides an additional medical perspective and does not automatically replace the advice of your treating doctor.",
      },
      {
        question: "Is a second opinion guaranteed to confirm my diagnosis?",
        answer:
          "No. The reviewing doctor may recommend further tests, a physical examination or an in-person consultation.",
      },
    ],
    notice:
      "A second opinion service is not intended for emergencies. If you experience severe symptoms or a medical emergency, seek immediate medical attention at the nearest appropriate healthcare facility.",
    ctaTitle: "Book a Second Opinion",
    ctaDescription:
      "Contact Akeso to learn about the required documents, specialist availability, applicable fees, and expected review timelines.",
  },

  {
    id: 3,
    slug: "lab-test-diagnostic",
    name: "Lab Test & Diagnostic",
    eyebrow: "Diagnostic Coordination",
    icon: FlaskConical,
    shortDescription:
      "Access coordinated laboratory investigations, imaging services, diagnostic appointments, and report follow-up.",
    description:
      "Akeso Global Medical Services Private Limited helps patients coordinate laboratory investigations and diagnostic services through relevant healthcare providers and diagnostic centres.",
    highlight:
      "Coordinated diagnostic services to support informed clinical assessment and treatment planning.",
    benefits: [
      "Routine and specialised laboratory tests",
      "Blood and urine investigations",
      "X-rays and ultrasound",
      "CT scans and MRI",
      "Other clinically recommended diagnostic procedures",
      "Appointments, reports and follow-up consultations",
    ],
    process: [
      {
        title: "Share Investigation Details",
        description:
          "Share your doctor's prescription or the details of the required investigation.",
      },
      {
        title: "Identify a Diagnostic Provider",
        description:
          "Our team will help identify an appropriate available diagnostic provider.",
      },
      {
        title: "Confirm Appointment",
        description:
          "Receive information about applicable charges, appointment availability, and preparation instructions.",
      },
      {
        title: "Complete the Investigation",
        description:
          "Attend the scheduled investigation and obtain the report through the relevant provider.",
      },
      {
        title: "Discuss Your Results",
        description:
          "Consult a qualified healthcare professional for interpretation of the results and further medical advice.",
      },
    ],
    details: [
      {
        title: "Clinical Advice",
        content:
          "Investigations should be undertaken based on appropriate clinical advice and applicable requirements.",
      },
      {
        title: "Preparation Instructions",
        content:
          "Fasting, medication adjustments, and other preparation instructions must be confirmed with the relevant healthcare provider.",
      },
      {
        title: "Accuracy and Report Timelines",
        content:
          "Test accuracy and report turnaround times depend on the specific investigation and the provider.",
      },
      {
        title: "Understanding Results",
        content:
          "Diagnostic results must be interpreted in the context of the patient's medical history and clinical condition. Additional investigations may be recommended when clinically necessary.",
      },
      {
        title: "Fees and Availability",
        content:
          "Diagnostic services are subject to provider availability, location, and the nature of the investigation. Applicable charges will be communicated before coordination wherever reasonably possible.",
      },
      {
        title: "Provider Responsibility",
        content:
          "Akeso facilitates access and coordination; the diagnostic provider remains responsible for performing the investigation and issuing its report in accordance with applicable professional and regulatory requirements.",
      },
    ],
    faqs: [
      {
        question: "Can Akeso help arrange blood tests and scans?",
        answer:
          "Yes. Akeso can help coordinate appropriate laboratory and imaging investigations through relevant providers, subject to availability.",
      },
      {
        question: "Do I need a doctor's prescription?",
        answer:
          "Investigations should be undertaken according to appropriate clinical advice and the relevant provider's requirements.",
      },
      {
        question: "How long will reports take?",
        answer:
          "Report turnaround times depend on the investigation and diagnostic provider.",
      },
      {
        question: "Who explains my test results?",
        answer:
          "A qualified healthcare professional should interpret diagnostic findings in the context of your medical history and clinical condition.",
      },
    ],
    notice:
      "Diagnostic investigations should follow appropriate clinical advice. Preparation requirements, report turnaround times and provider availability may vary.",
    ctaTitle: "Enquire About Diagnostic Services",
    ctaDescription:
      "Contact Akeso to enquire about diagnostic coordination, appointment availability, and estimated charges.",
  },

  {
    id: 4,
    slug: "post-op-care",
    name: "Post-Op Care",
    eyebrow: "Recovery & Rehabilitation",
    icon: HeartHandshake,
    shortDescription:
      "Coordinate recovery planning, wound care, physiotherapy, follow-up consultations, and patient wellbeing support.",
    description:
      "At Akeso Global Medical Services Private Limited, we understand that recovery is an important part of every patient's healthcare journey. Our post-operative care coordination services are designed to support patients after surgery through recovery planning, rehabilitation coordination, and general well-being support.",
    highlight:
      "Personalised recovery coordination designed around the treating team's recommendations.",
    benefits: [
      "Wound care coordination",
      "Physiotherapy and rehabilitation",
      "Medical follow-up",
      "Yoga and meditation where clinically appropriate",
      "Recovery planning",
      "Patient and caregiver guidance",
    ],
    benefitDetails: [
      {
        title: "Wound Care Coordination",
        description:
          "Assistance with arranging appropriate wound assessments, dressing changes, and follow-up appointments with qualified healthcare professionals, based on the treating surgeon's instructions.",
      },
      {
        title: "Physiotherapy and Rehabilitation",
        description:
          "Coordination of physiotherapy sessions and rehabilitation support to help patients work towards improved mobility, strength, flexibility, and functional recovery, as recommended by their treating team.",
      },
      {
        title: "Medical Follow-Up",
        description:
          "Assistance with scheduling follow-up consultations, reviewing recovery-related concerns with the appropriate healthcare professional, and coordinating further investigations when recommended.",
      },
      {
        title: "Yoga and Meditation",
        description:
          "Access to suitable yoga, breathing exercises, relaxation techniques, and meditation sessions to support general well-being, stress management, and a positive recovery experience. These activities will be adapted to the patient's condition and medical restrictions.",
      },
      {
        title: "Recovery Planning",
        description:
          "Help with coordinating follow-up appointments, rehabilitation schedules, and other agreed recovery-related services according to the patient's individual requirements.",
      },
      {
        title: "Patient and Caregiver Guidance",
        description:
          "General guidance to help patients and their caregivers understand the recommended recovery plan, follow professional instructions, and identify when additional medical attention may be needed.",
      },
    ],
    process: [
      {
        title: "Share Your Recovery Requirements",
        description:
          "Discuss the surgical procedure, discharge recommendations, and recovery support required.",
      },
      {
        title: "Review the Recovery Plan",
        description:
          "Identify appropriate follow-up and rehabilitation services based on the treating team's advice.",
      },
      {
        title: "Coordinate Support",
        description:
          "Arrange agreed recovery services with suitable healthcare providers, subject to availability.",
      },
      {
        title: "Continue Medical Follow-Up",
        description:
          "Follow medical recommendations and arrange further evaluation when necessary.",
      },
    ],
    details: [
      {
        title: "Personalised Recovery Support",
        content:
          "Post-operative care requirements vary depending on the procedure, the patient's medical history, and the treating surgeon's recommendations. Services will therefore be coordinated according to individual clinical needs, provider availability, and the agreed scope of support.",
      },
      {
        title: "Professional Supervision",
        content:
          "Wound care and rehabilitation must be performed or supervised by appropriately qualified professionals, as required.",
      },
      {
        title: "Physical Activity",
        content:
          "Yoga, meditation, and physical activity should only be undertaken when clinically appropriate and in accordance with the treating team's advice.",
      },
      {
        title: "Recovery Expectations",
        content:
          "Recovery timelines and outcomes vary from patient to patient; specific results cannot be guaranteed.",
      },
      {
        title: "Warning Symptoms",
        content:
          "New or worsening symptoms, including fever, increasing wound redness, discharge, severe pain, or sudden swelling, should be reported promptly to a healthcare professional.",
      },
      {
        title: "Our Commitment",
        content:
          "Akeso aims to make the recovery journey more organised, supportive, and patient-focused by helping coordinate appropriate medical follow-up and complementary well-being services.",
      },
    ],
    faqs: [
      {
        question: "What support is available after surgery?",
        answer:
          "Depending on clinical requirements and availability, support may include wound care coordination, rehabilitation, follow-up appointments and recovery planning.",
      },
      {
        question: "Can physiotherapy be arranged?",
        answer:
          "Akeso may help coordinate physiotherapy and rehabilitation recommended by the treating team.",
      },
      {
        question: "Can patients practise yoga during recovery?",
        answer:
          "Yoga and physical activity should only be undertaken when clinically appropriate and approved by the treating team.",
      },
      {
        question: "What symptoms need urgent attention?",
        answer:
          "New or worsening symptoms such as fever, wound redness, discharge, severe pain or sudden swelling should be reported promptly. Seek emergency medical care for severe symptoms.",
      },
    ],
    notice:
      "For severe symptoms or an emergency, seek immediate medical attention at the nearest appropriate facility.",
    ctaTitle: "Discuss Your Recovery Requirements",
    ctaDescription:
      "Contact Akeso to discuss your post-operative care requirements, available support services, and estimated costs.",
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);




// import {
//   Activity,
//   Ambulance,
//   Apple,
//   BadgeCheck,
//   CalendarCheck,
//   ClipboardCheck,
//   Clock3,
//   Dumbbell,
//   FileCheck2,
//   FileText,
//   FlaskConical,
//   HeartHandshake,
//   HeartPulse,
//   Home,
//   House,
//   Languages,
//   MessageCircle,
//   MessagesSquare,
//   Microscope,
//   MonitorSmartphone,
//   Pill,
//   Salad,
//   ShieldCheck,
//   Sparkles,
//   Stethoscope,
//   TestTube2,
//   UserRoundCheck,
//   Users,
//   Video,
// } from "lucide-react";


// /* =========================================================
//    SERVICES
// ========================================================= */

// export const services = [

//   /* =======================================================
//      TELEVISITS
//   ======================================================= */

//   {
//     id: 1,

//     name: "TeleVisits",

//     slug: "televisits",

//     icon: Video,

//     eyebrow: "Virtual Care",

//     shortDescription:
//       "Connect with suitable medical specialists remotely before planning your treatment journey.",

//     heroDescription:
//       "Begin your medical journey with convenient specialist consultation, report review and coordinated guidance from wherever you are.",

//     aboutTitle:
//       "Specialist Care Before You Travel",

//     about:
//       "TeleVisits help patients discuss their medical condition with an appropriate specialist without travelling for the first consultation. Patients can share available reports, scans, prescriptions and medical history so the clinical team can better understand the case before discussing possible next steps.",

//     introTitle:
//       "Why Use a TeleVisit?",

//     introText:
//       "For international and outstation patients, the first challenge is often understanding which specialist to consult and whether travel is necessary. A TeleVisit creates an early connection between the patient and specialist, helping organise the medical journey before an in-person hospital visit.",


//     features: [
//       {
//         icon: FileText,
//         title: "Share Medical Reports",
//         text:
//           "Send available reports, scans, prescriptions and relevant medical history for review.",
//       },

//       {
//         icon: Stethoscope,
//         title: "Specialist Review",
//         text:
//           "Your medical concern can be coordinated with an appropriate specialist based on the information provided.",
//       },

//       {
//         icon: Video,
//         title: "Online Consultation",
//         text:
//           "Discuss symptoms, previous treatment and possible next steps through a scheduled virtual consultation.",
//       },

//       {
//         icon: ClipboardCheck,
//         title: "Treatment Guidance",
//         text:
//           "Understand whether additional investigations, an in-person consultation or further treatment planning may be required.",
//       },

//       {
//         icon: Languages,
//         title: "Communication Support",
//         text:
//           "Our coordination team can assist patients in organising the information required for their consultation.",
//       },

//       {
//         icon: CalendarCheck,
//         title: "Plan the Next Step",
//         text:
//           "If further care is required, the next consultation or treatment journey can be coordinated accordingly.",
//       },
//     ],


//     highlightTitle:
//       "Care Starts Before You Travel",

//     highlightText:
//       "Begin your healthcare journey with remote specialist consultation and coordinated support before making major travel or treatment decisions.",


//     processTitle:
//       "How TeleVisits Work",

//     process: [
//       {
//         title: "Send Your Request",
//         text:
//           "Tell us about the medical condition, preferred speciality and your current concerns.",
//       },

//       {
//         title: "Share Medical Records",
//         text:
//           "Provide available reports, scans, prescriptions and previous medical information.",
//       },

//       {
//         title: "Specialist Coordination",
//         text:
//           "The case is coordinated with an appropriate specialist based on the available information.",
//       },

//       {
//         title: "Virtual Consultation",
//         text:
//           "Attend the scheduled consultation and discuss your condition, questions and possible next steps.",
//       },

//       {
//         title: "Plan Further Care",
//         text:
//           "If an in-person evaluation or treatment is advised, our team can help coordinate the next stage.",
//       },
//     ],


//     benefitsTitle:
//       "When TeleVisits Can Help",

//     benefits: [
//       "Before travelling for specialist treatment",
//       "For review of existing medical reports",
//       "For suitable follow-up discussions",
//       "When seeking guidance about the appropriate speciality",
//       "To understand possible next steps before planning treatment",
//       "For patients who live far from the treating hospital",
//     ],


//     note:
//       "TeleVisits are suitable for selected non-emergency medical needs. A specialist may advise an in-person examination or additional investigations when clinically necessary.",
//   },


//   /* =======================================================
//      SECOND OPINION
//   ======================================================= */

//   {
//     id: 2,

//     name: "Second Opinion",

//     slug: "second-opinion",

//     icon: MessagesSquare,

//     eyebrow: "Expert Medical Review",

//     shortDescription:
//       "Get an additional specialist perspective before making an important treatment decision.",

//     heroDescription:
//       "A structured medical review can help patients better understand a diagnosis, recommended treatment and available options.",

//     aboutTitle:
//       "Greater Clarity for Important Medical Decisions",

//     about:
//       "A second opinion allows another suitable specialist to review available medical information and provide an additional clinical perspective. It may be useful when a diagnosis is complex, major surgery has been recommended, treatment options are unclear or the patient wants greater confidence before deciding the next step.",

//     introTitle:
//       "Why Consider a Second Opinion?",

//     introText:
//       "Complex healthcare decisions can involve several possible approaches. Reviewing the available reports, imaging and previous recommendations with another specialist can help patients prepare better questions and understand the considerations around their current care plan.",


//     features: [
//       {
//         icon: FileText,
//         title: "Medical Record Review",
//         text:
//           "Relevant reports, scans, pathology findings and previous treatment information can be organised for review.",
//       },

//       {
//         icon: UserRoundCheck,
//         title: "Specialist Matching",
//         text:
//           "The case can be directed toward an appropriate specialist according to the medical condition.",
//       },

//       {
//         icon: Microscope,
//         title: "Investigation Review",
//         text:
//           "Available diagnostic information can be considered together with the patient's medical history.",
//       },

//       {
//         icon: MessagesSquare,
//         title: "Clinical Discussion",
//         text:
//           "Discuss questions regarding diagnosis, proposed treatment and possible alternatives where appropriate.",
//       },

//       {
//         icon: FileCheck2,
//         title: "Organised Case Summary",
//         text:
//           "Keeping relevant medical information together can make specialist review more efficient.",
//       },

//       {
//         icon: ClipboardCheck,
//         title: "Next-Step Guidance",
//         text:
//           "Understand what further evaluation or consultation may be required before making a treatment decision.",
//       },
//     ],


//     highlightTitle:
//       "Another Perspective Can Bring More Clarity",

//     highlightText:
//       "The goal of a second opinion is not to replace your existing doctor, but to provide additional specialist insight that can support an informed discussion about your care.",


//     processTitle:
//       "How the Second Opinion Process Works",

//     process: [
//       {
//         title: "Tell Us About Your Case",
//         text:
//           "Share the diagnosis, current recommendation and reason for requesting another opinion.",
//       },

//       {
//         title: "Submit Medical Records",
//         text:
//           "Provide relevant reports, scans, pathology documents, prescriptions and treatment history.",
//       },

//       {
//         title: "Specialist Coordination",
//         text:
//           "The case is coordinated with a suitable specialist according to the medical condition.",
//       },

//       {
//         title: "Medical Review",
//         text:
//           "The specialist reviews the available clinical information and discusses relevant considerations.",
//       },

//       {
//         title: "Discuss Next Steps",
//         text:
//           "Use the additional perspective when discussing your treatment plan with your healthcare team.",
//       },
//     ],


//     benefitsTitle:
//       "A Second Opinion May Be Useful When",

//     benefits: [
//       "A major surgery or procedure has been recommended",
//       "The diagnosis is complex or uncommon",
//       "Several treatment options are available",
//       "You want another specialist perspective",
//       "You are considering travelling for medical treatment",
//       "You want to better understand the proposed care plan",
//     ],


//     note:
//       "A second opinion is based on the medical information available for review and may not replace a physical examination or additional diagnostic testing.",
//   },


//   /* =======================================================
//      LAB TEST & DIAGNOSTIC
//   ======================================================= */

//   {
//     id: 3,

//     name: "Lab Test & Diagnostic",

//     slug: "lab-test-diagnostic",

//     icon: FlaskConical,

//     eyebrow: "Diagnostics & Testing",

//     shortDescription:
//       "Coordinate laboratory investigations and diagnostic testing recommended as part of your medical care.",

//     heroDescription:
//       "From commonly prescribed blood tests to diagnostic investigations, testing helps clinicians evaluate health concerns and monitor treatment.",

//     aboutTitle:
//       "Diagnostics That Support Better Medical Decisions",

//     about:
//       "Laboratory and diagnostic investigations provide important information that doctors use together with symptoms, medical history, physical examination and other clinical findings. Akeso helps patients coordinate suitable testing requirements as part of their broader treatment journey.",

//     introTitle:
//       "Why Akeso for Diagnostic Coordination?",

//     introText:
//       "Patients travelling for treatment may need several investigations before or during their medical journey. Our role is to help organise prescribed testing, coordinate available diagnostic requirements and ensure reports are ready for appropriate clinical review.",


//     whyTitle:
//       "Why Akeso",

//     whyItems: [
//       {
//         icon: ClipboardCheck,
//         title: "Doctor-Directed Testing",
//         text:
//           "Testing can be coordinated according to the investigations recommended by the treating clinician.",
//       },

//       {
//         icon: TestTube2,
//         title: "Multiple Test Categories",
//         text:
//           "Support can include commonly prescribed pathology investigations and other diagnostic requirements.",
//       },

//       {
//         icon: FileCheck2,
//         title: "Report Coordination",
//         text:
//           "Available diagnostic reports can be organised for subsequent specialist consultation and treatment planning.",
//       },

//       {
//         icon: Clock3,
//         title: "Journey Coordination",
//         text:
//           "Where possible, testing can be planned around consultations and other stages of the patient's medical journey.",
//       },
//     ],


//     testsTitle:
//       "Frequently Prescribed Tests",

//     tests: [
//       {
//         icon: TestTube2,
//         title: "Complete Blood Count (CBC)",
//         text:
//           "Measures different blood-cell components and is commonly used as part of general health assessment and monitoring.",
//       },

//       {
//         icon: Activity,
//         title: "Blood Glucose",
//         text:
//           "Measures blood glucose and may be prescribed for diabetes screening or monitoring.",
//       },

//       {
//         icon: HeartPulse,
//         title: "Lipid Profile",
//         text:
//           "Measures cholesterol and triglyceride levels to provide information relevant to cardiovascular risk assessment.",
//       },

//       {
//         icon: FlaskConical,
//         title: "Liver Function Tests",
//         text:
//           "A group of blood tests used to assess substances associated with liver function and possible liver injury.",
//       },

//       {
//         icon: Microscope,
//         title: "Kidney / Renal Function",
//         text:
//           "Tests may be prescribed to assess substances related to kidney function and monitor selected medical conditions.",
//       },

//       {
//         icon: Activity,
//         title: "Thyroid Tests",
//         text:
//           "Tests such as TSH may be used when evaluating or monitoring thyroid function.",
//       },

//       {
//         icon: TestTube2,
//         title: "HbA1c",
//         text:
//           "Provides information about average blood glucose levels over approximately the previous two to three months.",
//       },

//       {
//         icon: Microscope,
//         title: "Urine Tests",
//         text:
//           "Urinalysis and other urine investigations may provide information about selected health conditions.",
//       },
//     ],


//     features: [
//       {
//         icon: ClipboardCheck,
//         title: "Prescription Review",
//         text:
//           "Share the investigation advised by your doctor or treating specialist.",
//       },

//       {
//         icon: FlaskConical,
//         title: "Test Coordination",
//         text:
//           "Suitable laboratory or diagnostic requirements can be organised according to availability.",
//       },

//       {
//         icon: FileText,
//         title: "Report Collection",
//         text:
//           "Completed reports can be organised for use during subsequent medical consultations.",
//       },

//       {
//         icon: Stethoscope,
//         title: "Clinical Review",
//         text:
//           "The treating clinician interprets test results in the context of the patient's overall medical condition.",
//       },
//     ],


//     processTitle:
//       "From Prescription to Clinical Review",

//     process: [
//       {
//         title: "Share the Prescription",
//         text:
//           "Provide the investigations recommended by the doctor or specialist.",
//       },

//       {
//         title: "Coordinate Testing",
//         text:
//           "The required laboratory or diagnostic service is identified according to availability.",
//       },

//       {
//         title: "Complete the Investigation",
//         text:
//           "Attend the scheduled diagnostic service and follow any preparation instructions provided.",
//       },

//       {
//         title: "Receive the Report",
//         text:
//           "Reports are made available according to the relevant laboratory or diagnostic process.",
//       },

//       {
//         title: "Discuss With Your Doctor",
//         text:
//           "Results should be interpreted by the treating clinician together with symptoms and other medical information.",
//       },
//     ],


//     benefitsTitle:
//       "Diagnostic Support May Include",

//     benefits: [
//       "Routine and prescribed laboratory testing",
//       "Pre-treatment investigations",
//       "Follow-up testing during treatment",
//       "Report coordination for specialist review",
//       "Selected imaging or diagnostic coordination",
//       "Testing required as part of treatment planning",
//     ],


//     note:
//       "Tests should be selected and interpreted by qualified healthcare professionals. Not every patient requires every test, and preparation requirements can vary.",
//   },


//   /* =======================================================
//      HOMECARE
//   ======================================================= */

//   // {
//   //   id: 4,

//   //   name: "Homecare Services",

//   //   slug: "homecare-services",

//   //   icon: House,

//   //   eyebrow: "Care at Home",

//   //   shortDescription:
//   //     "Coordinate suitable healthcare and recovery support for patients who need continued care at home.",

//   //   heroDescription:
//   //     "Home-based support can help selected patients continue recovery, rehabilitation and clinical care outside the hospital.",

//   //   aboutTitle:
//   //     "Continuity of Care in a Familiar Environment",

//   //   about:
//   //     "Some patients need ongoing support after hospital discharge or during recovery from illness, injury or treatment. Homecare can help coordinate appropriate nursing, rehabilitation and patient-support requirements based on the treating team's care plan and the services available.",

//   //   introTitle:
//   //     "What Can Homecare Help With?",

//   //   introText:
//   //     "The exact homecare plan depends on the patient's condition. The goal is to support continuity of care, help families follow medical instructions and coordinate qualified assistance where clinically appropriate.",


//   //   features: [
//   //     {
//   //       icon: HeartPulse,
//   //       title: "Nursing Support",
//   //       text:
//   //         "Selected nursing needs may include monitoring, dressing support and other clinician-directed care.",
//   //     },

//   //     {
//   //       icon: Dumbbell,
//   //       title: "Physiotherapy",
//   //       text:
//   //         "Rehabilitation support can help suitable patients work on mobility, strength and functional recovery.",
//   //     },

//   //     {
//   //       icon: Pill,
//   //       title: "Medication Support",
//   //       text:
//   //         "Patients and caregivers can receive support in following the medication plan provided by the treating clinician.",
//   //     },

//   //     {
//   //       icon: Activity,
//   //       title: "Health Monitoring",
//   //       text:
//   //         "Selected observations can be tracked according to the patient's care plan and clinical requirements.",
//   //     },

//   //     {
//   //       icon: Users,
//   //       title: "Caregiver Guidance",
//   //       text:
//   //         "Families can be supported in understanding appropriate day-to-day care instructions.",
//   //     },

//   //     {
//   //       icon: Stethoscope,
//   //       title: "Follow-Up Coordination",
//   //       text:
//   //         "Medical follow-up can be coordinated when the treating team needs to review recovery progress.",
//   //     },
//   //   ],


//   //   careTitle:
//   //     "Homecare Support Areas",

//   //   careItems: [
//   //     {
//   //       icon: HeartPulse,
//   //       title: "Skilled Nursing",
//   //       text:
//   //         "Appropriate nursing support based on the patient's clinical requirements.",
//   //     },

//   //     {
//   //       icon: Dumbbell,
//   //       title: "Physical Rehabilitation",
//   //       text:
//   //         "Selected physiotherapy support for mobility, strength and functional recovery.",
//   //     },

//   //     {
//   //       icon: Activity,
//   //       title: "Recovery Monitoring",
//   //       text:
//   //         "Support in following the monitoring plan advised by the treating healthcare team.",
//   //     },

//   //     {
//   //       icon: FileText,
//   //       title: "Care Instructions",
//   //       text:
//   //         "Helping patients and caregivers organise discharge instructions and follow-up requirements.",
//   //     },

//   //     {
//   //       icon: Users,
//   //       title: "Family Support",
//   //       text:
//   //         "Practical guidance for caregivers involved in the patient's recovery journey.",
//   //     },

//   //     {
//   //       icon: CalendarCheck,
//   //       title: "Medical Follow-Up",
//   //       text:
//   //         "Coordination of appropriate consultations when medical reassessment is required.",
//   //     },
//   //   ],


//   //   highlightTitle:
//   //     "Hospital Care Does Not Always End at Discharge",

//   //   highlightText:
//   //     "A structured transition to home can help patients and families understand the care plan, rehabilitation needs and follow-up requirements.",


//   //   processTitle:
//   //     "How Homecare Is Coordinated",

//   //   process: [
//   //     {
//   //       title: "Understand the Patient's Needs",
//   //       text:
//   //         "Review the available medical recommendations, discharge advice and required support.",
//   //     },

//   //     {
//   //       title: "Plan Appropriate Care",
//   //       text:
//   //         "Identify suitable nursing, rehabilitation or patient-support requirements.",
//   //     },

//   //     {
//   //       title: "Coordinate Home Support",
//   //       text:
//   //         "Available healthcare support is coordinated according to the agreed care requirements.",
//   //     },

//   //     {
//   //       title: "Follow the Care Plan",
//   //       text:
//   //         "The patient and caregivers follow instructions provided by the treating healthcare team.",
//   //     },

//   //     {
//   //       title: "Review Progress",
//   //       text:
//   //         "Follow-up requirements can be reassessed as the patient's condition changes.",
//   //     },
//   //   ],


//   //   benefitsTitle:
//   //     "Who May Benefit From Homecare?",

//   //   benefits: [
//   //     "Patients recovering after hospital discharge",
//   //     "Patients with reduced mobility",
//   //     "Patients requiring selected nursing support",
//   //     "Patients undergoing rehabilitation",
//   //     "Older adults who need additional care support",
//   //     "Families who need help coordinating continued care",
//   //   ],


//   //   note:
//   //     "Homecare services depend on clinical suitability and service availability. Sudden or severe symptoms require appropriate emergency medical assessment.",
//   // },


//   /* =======================================================
//      POST-OPERATIVE CARE
//   ======================================================= */

//   {
//     id: 5,

//     name: "Post-Op Care",

//     slug: "post-op-care",

//     icon: Activity,

//     eyebrow: "Healing Beyond Surgery",

//     shortDescription:
//       "Structured recovery support after surgery, from discharge planning and rehabilitation to follow-up care.",

//     heroDescription:
//       "Help patients transition from surgery to recovery with coordinated follow-up, rehabilitation and wellbeing support.",

//     aboutTitle:
//       "Recovery Continues After the Procedure",

//     about:
//       "The period after surgery can involve wound-care instructions, medications, mobility restrictions, rehabilitation, nutrition and follow-up appointments. Post-operative support helps patients and families organise these requirements around the surgeon's discharge plan and recognise when further medical review may be needed.",

//     introTitle:
//       "How Post-Operative Care Helps",

//     introText:
//       "Recovery needs differ depending on the procedure and the patient's overall health. A structured plan can make it easier to follow medical instructions, gradually restore mobility and coordinate follow-up with the treating team.",


//     features: [
//       {
//         icon: ClipboardCheck,
//         title: "Discharge Plan Support",
//         text:
//           "Organise the instructions, precautions and follow-up recommendations provided after surgery.",
//       },

//       {
//         icon: HeartPulse,
//         title: "Recovery Monitoring",
//         text:
//           "Observe recovery according to the care plan and communicate concerns to appropriate healthcare professionals.",
//       },

//       {
//         icon: Pill,
//         title: "Medication Guidance",
//         text:
//           "Help patients follow the medication schedule prescribed by their treating clinician.",
//       },

//       {
//         icon: Dumbbell,
//         title: "Rehabilitation",
//         text:
//           "Coordinate suitable physiotherapy and mobility support where recommended.",
//       },

//       {
//         icon: Salad,
//         title: "Nutrition Support",
//         text:
//           "Support practical nutrition planning around recovery where appropriate and clinically advised.",
//       },

//       {
//         icon: CalendarCheck,
//         title: "Follow-Up Visits",
//         text:
//           "Coordinate follow-up consultations and investigations advised by the treating team.",
//       },
//     ],


//     careTitle:
//       "Post-Operative Care & Wellness",

//     careItems: [
//       {
//         icon: Activity,
//         title: "Physiotherapy",
//         text:
//           "Structured rehabilitation designed around mobility, strength and functional recovery.",
//       },

//       {
//         icon: Sparkles,
//         title: "Gentle Movement & Wellness",
//         text:
//           "Appropriate guided movement and relaxation practices may complement recovery when medically suitable.",
//       },

//       {
//         icon: HeartHandshake,
//         title: "Emotional Wellbeing",
//         text:
//           "Recovery can be physically and emotionally demanding; supportive care can help patients manage the transition.",
//       },

//       {
//         icon: Apple,
//         title: "Nutrition",
//         text:
//           "Practical nutrition support may complement recovery according to individual needs and medical advice.",
//       },
//     ],


//     highlightTitle:
//       "From Procedure to Recovery",

//     highlightText:
//       "Post-operative care helps connect hospital discharge with rehabilitation, follow-up and day-to-day recovery support.",


//     processTitle:
//       "Your Post-Surgery Recovery Journey",

//     process: [
//       {
//         title: "Review Discharge Instructions",
//         text:
//           "Understand the surgeon's medication, activity, wound-care and follow-up recommendations.",
//       },

//       {
//         title: "Prepare the Recovery Plan",
//         text:
//           "Identify appropriate support for mobility, rehabilitation, nutrition and follow-up.",
//       },

//       {
//         title: "Follow the Care Instructions",
//         text:
//           "Continue the prescribed recovery plan and observe precautions advised by the treating team.",
//       },

//       {
//         title: "Rehabilitation & Mobility",
//         text:
//           "Gradually work toward appropriate functional recovery according to clinical guidance.",
//       },

//       {
//         title: "Follow-Up & Reassessment",
//         text:
//           "Attend recommended follow-up consultations and report concerning symptoms promptly.",
//       },
//     ],


//     benefitsTitle:
//       "Post-Operative Support Can Help With",

//     benefits: [
//       "Understanding discharge instructions",
//       "Organising follow-up appointments",
//       "Medication schedule support",
//       "Mobility and rehabilitation coordination",
//       "Recovery-focused nutrition support",
//       "Transition from hospital to home",
//       "Monitoring recovery concerns",
//       "Coordination with the treating team",
//     ],


//     note:
//       "Post-operative instructions from the treating surgeon take priority. New or worsening symptoms should be discussed promptly with an appropriate healthcare professional.",
//   },
// ];


// /* =========================================================
//    GET SERVICE
// ========================================================= */

// export function getServiceBySlug(slug) {
//   return services.find(
//     (service) =>
//       service.slug === slug
//   );
// }