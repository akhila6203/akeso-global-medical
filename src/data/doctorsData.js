
import doctorImage from "../assets/doctor.jpg";

/* ==========================================
   AKESO GLOBAL MEDICAL SERVICES
   DOCTORS DATA

   IMPORTANT:
   All profile descriptions, experience,
   qualifications and achievements below
   are DEMO placeholders, not verified facts.
========================================== */

const doctorsList = [
  {
    id: "kosuri-nareen-krishnaji",
    name: "Dr. Kosuri Nareen Krishnaji",
    speciality: "Critical Care",
    expertise: [
      "Critical illness assessment",
      "Intensive care monitoring",
      "Emergency patient stabilisation",
      "Multidisciplinary ICU care coordination",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Critical care specialist training - pending verification",
      "Advanced critical care certification - pending verification",
    ],
    experience:
      "Experience in critical care medicine - duration and clinical appointments pending verification.",
    academicAchievements: [
      "Critical care research contributions - details to be confirmed",
      "Intensive care workshops and training - details to be confirmed",
      "Professional memberships - verification pending",
    ],
    about:
      "This sample profile highlights critical care services, including intensive monitoring, emergency stabilisation and coordinated management of critically ill patients.",
  },

  {
    id: "vamshidhar-reddy-t",
    name: "Dr. Vamshidhar Reddy T",
    speciality: "Gastroenterology & Hepatology",
    expertise: [
      "Digestive system disorders",
      "Liver disease evaluation",
      "Gastrointestinal endoscopy consultation",
      "Chronic digestive condition assessment",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Gastroenterology specialist qualification - pending verification",
      "Hepatology-related training - pending verification",
    ],
    experience:
      "Experience in gastroenterology and hepatology - duration and appointments pending verification.",
    academicAchievements: [
      "Digestive health research - details to be confirmed",
      "Gastroenterology conferences - details to be confirmed",
      "Professional academic activities - verification pending",
    ],
    about:
      "This sample profile describes gastroenterology and hepatology services involving digestive health evaluation, liver conditions and gastrointestinal consultation.",
  },

  {
    id: "srinivas-reddy-k",
    name: "Dr. Srinivas Reddy K",
    speciality: "General Medicine & Diabetology",
    expertise: [
      "Diabetes evaluation and management",
      "Hypertension and chronic disease assessment",
      "General medical consultation",
      "Preventive health screening",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "General medicine qualification - pending verification",
      "Diabetology training - pending verification",
    ],
    experience:
      "Experience in general medicine and diabetes care - duration pending verification.",
    academicAchievements: [
      "Diabetes education activities - details to be confirmed",
      "Preventive medicine workshops - details to be confirmed",
      "Professional development records - verification pending",
    ],
    about:
      "This sample profile focuses on general medical care, diabetes management, chronic disease monitoring and preventive healthcare services.",
  },

  {
    id: "swetha-reddy-t",
    name: "Dr. Swetha Reddy T",
    speciality: "Neurology",
    expertise: [
      "Neurological disorder assessment",
      "Headache and migraine evaluation",
      "Epilepsy consultation",
      "Stroke-related neurological assessment",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Neurology specialist qualification - pending verification",
      "Additional neurological training - pending verification",
    ],
    experience:
      "Experience in clinical neurology - duration and appointments pending verification.",
    academicAchievements: [
      "Neurology academic activities - details to be confirmed",
      "Stroke care workshops - details to be confirmed",
      "Neurological research participation - verification pending",
    ],
    about:
      "This sample profile introduces neurological services involving brain, spinal cord and nervous system disorders, including headaches, seizures and stroke-related conditions.",
  },

  {
    id: "samyuktha-reddy-k",
    name: "Dr. Samyuktha Reddy K",
    speciality: "Paediatrics",
    expertise: [
      "Child health assessment",
      "Growth and development monitoring",
      "Childhood illness evaluation",
      "Preventive paediatric care",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Paediatric specialist qualification - pending verification",
      "Child health training - pending verification",
    ],
    experience:
      "Experience in paediatric healthcare - duration pending verification.",
    academicAchievements: [
      "Child health awareness programmes - details to be confirmed",
      "Paediatric academic workshops - details to be confirmed",
      "Professional training records - verification pending",
    ],
    about:
      "This sample profile covers paediatric healthcare services supporting infants, children and adolescents through routine assessments and childhood illness consultations.",
  },

  {
    id: "girish-kumar",
    name: "Dr. Girish Kumar",
    speciality: "Oncology",
    expertise: [
      "Cancer-related consultation",
      "Oncology treatment planning",
      "Multidisciplinary cancer care",
      "Follow-up and supportive oncology care",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Oncology specialist qualification - pending verification",
      "Cancer care training - pending verification",
    ],
    experience:
      "Experience in oncology services - duration and appointments pending verification.",
    academicAchievements: [
      "Oncology research - details to be confirmed",
      "Cancer care conferences - details to be confirmed",
      "Academic presentations - verification pending",
    ],
    about:
      "This sample profile presents oncology services focused on cancer assessment, treatment coordination and multidisciplinary care planning.",
  },

  {
    id: "prashanth-t",
    name: "Dr. Prashanth T",
    speciality: "Pulmonology",
    expertise: [
      "Asthma evaluation",
      "Chronic respiratory disease assessment",
      "Lung infection consultation",
      "Respiratory function evaluation",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Pulmonology specialist qualification - pending verification",
      "Respiratory medicine training - pending verification",
    ],
    experience:
      "Experience in respiratory medicine - duration pending verification.",
    academicAchievements: [
      "Respiratory medicine workshops - details to be confirmed",
      "Pulmonary health education - details to be confirmed",
      "Academic activities - verification pending",
    ],
    about:
      "This sample profile introduces respiratory healthcare services involving asthma, chronic lung disorders and breathing-related conditions.",
  },

  {
    id: "mounya-dixith-y",
    name: "Dr. Mounya Dixith Y",
    speciality: "Emergency Medicine",
    expertise: [
      "Emergency patient assessment",
      "Acute medical condition evaluation",
      "Initial emergency stabilisation",
      "Emergency care coordination",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Emergency medicine qualification - pending verification",
      "Emergency response training - pending verification",
    ],
    experience:
      "Experience in emergency medicine - duration pending verification.",
    academicAchievements: [
      "Emergency care training - details to be confirmed",
      "Emergency medicine workshops - details to be confirmed",
      "Professional development - verification pending",
    ],
    about:
      "This sample profile describes emergency medicine services involving timely assessment, initial stabilisation and coordinated emergency care.",
  },

  {
    id: "chandrika-revan-v",
    name: "Dr. Chandrika Revan V",
    speciality: "Gynaecology",
    expertise: [
      "Women's reproductive health",
      "Menstrual disorder evaluation",
      "Gynaecological health assessment",
      "Preventive women's healthcare",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Gynaecology specialist qualification - pending verification",
      "Women's health training - pending verification",
    ],
    experience:
      "Experience in gynaecological healthcare - duration pending verification.",
    academicAchievements: [
      "Women's health education - details to be confirmed",
      "Gynaecology workshops - details to be confirmed",
      "Academic participation - verification pending",
    ],
    about:
      "This sample profile presents gynaecology services involving women's reproductive health, preventive care and evaluation of gynaecological conditions.",
  },

  {
    id: "praneeth-kumar",
    name: "Dr. Praneeth Kumar",
    speciality: "Radiology",
    expertise: [
      "Diagnostic imaging interpretation",
      "Radiological assessment",
      "Imaging-based clinical support",
      "Diagnostic reporting",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Radiology specialist qualification - pending verification",
      "Diagnostic imaging training - pending verification",
    ],
    experience:
      "Experience in radiology - duration pending verification.",
    academicAchievements: [
      "Radiology workshops - details to be confirmed",
      "Diagnostic imaging education - details to be confirmed",
      "Research and academic activities - verification pending",
    ],
    about:
      "This sample profile focuses on diagnostic radiology services supporting clinical assessment through medical imaging and reporting.",
  },

  {
    id: "pavan-kairi",
    name: "Dr. Pavan Kairi",
    speciality: "Radio Diagnosis",
    expertise: [
      "Ultrasound-related diagnostic assessment",
      "CT imaging interpretation",
      "MRI diagnostic consultation",
      "Radiological reporting support",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Radio diagnosis qualification - pending verification",
      "Advanced imaging training - pending verification",
    ],
    experience:
      "Experience in radio diagnosis - duration pending verification.",
    academicAchievements: [
      "Diagnostic imaging conferences - details to be confirmed",
      "Radiology training programmes - details to be confirmed",
      "Academic contributions - verification pending",
    ],
    about:
      "This sample profile introduces radio diagnosis services involving imaging techniques used to support medical diagnosis.",
  },

  {
    id: "sreekanth-kandi",
    name: "Dr. Sreekanth Kandi",
    speciality: "Orthopaedics",
    expertise: [
      "Bone and joint disorders",
      "Fracture evaluation",
      "Sports-related musculoskeletal injuries",
      "Orthopaedic treatment consultation",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Orthopaedic specialist qualification - pending verification",
      "Musculoskeletal care training - pending verification",
    ],
    experience:
      "Experience in orthopaedic care - duration pending verification.",
    academicAchievements: [
      "Orthopaedic workshops - details to be confirmed",
      "Musculoskeletal education programmes - details to be confirmed",
      "Academic presentations - verification pending",
    ],
    about:
      "This sample profile highlights orthopaedic services related to bones, joints, fractures and musculoskeletal health.",
  },

  {
    id: "karthik-reddy",
    name: "Dr. Karthik Reddy",
    speciality: "Maxillofacial Surgery",
    expertise: [
      "Jaw and facial condition assessment",
      "Oral and maxillofacial consultation",
      "Facial trauma evaluation",
      "Maxillofacial surgical planning",
    ],
    qualifications: [
      "Relevant professional qualification - pending verification",
      "Maxillofacial surgery qualification - pending verification",
      "Additional surgical training - pending verification",
    ],
    experience:
      "Experience in maxillofacial surgery - duration pending verification.",
    academicAchievements: [
      "Maxillofacial surgery workshops - details to be confirmed",
      "Facial trauma education - details to be confirmed",
      "Professional academic activities - verification pending",
    ],
    about:
      "This sample profile describes maxillofacial services involving conditions affecting the mouth, jaws, face and associated structures.",
  },

  {
    id: "goutham",
    name: "Dr. Goutham",
    speciality: "Critical Care",
    expertise: [
      "Intensive care patient assessment",
      "Acute organ dysfunction monitoring",
      "Critical care treatment coordination",
      "Complex patient management support",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Critical care qualification - pending verification",
      "Intensive care training - pending verification",
    ],
    experience:
      "Experience in intensive care services - duration pending verification.",
    academicAchievements: [
      "Intensive care education - details to be confirmed",
      "Critical care simulation training - details to be confirmed",
      "Professional academic contributions - verification pending",
    ],
    about:
      "This sample profile focuses on intensive care assessment, monitoring and coordinated treatment support for critically ill patients.",
  },

  {
    id: "uday-sagar",
    name: "Dr. Uday Sagar",
    speciality: "Emergency & Critical Care",
    expertise: [
      "Emergency clinical assessment",
      "Critical patient monitoring",
      "Acute care coordination",
      "Emergency stabilisation support",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Emergency and critical care training - pending verification",
      "Additional emergency care credentials - pending verification",
    ],
    experience:
      "Experience in emergency and critical care - duration pending verification.",
    academicAchievements: [
      "Emergency response education - details to be confirmed",
      "Critical care training activities - details to be confirmed",
      "Professional workshops - verification pending",
    ],
    about:
      "This sample profile describes emergency and critical care services focused on assessment, stabilisation and coordinated treatment of acutely ill patients.",
  },

  {
    id: "sarathi-goud-b",
    name: "Dr. Sarathi Goud B",
    speciality: "Psychiatry",
    expertise: [
      "Mental health assessment",
      "Mood disorder evaluation",
      "Anxiety-related conditions",
      "Psychiatric consultation and follow-up",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Psychiatry specialist qualification - pending verification",
      "Mental health training - pending verification",
    ],
    experience:
      "Experience in psychiatric care - duration pending verification.",
    academicAchievements: [
      "Mental health awareness activities - details to be confirmed",
      "Psychiatry workshops - details to be confirmed",
      "Academic and research work - verification pending",
    ],
    about:
      "This sample profile introduces psychiatric healthcare services involving mental health assessment and consultation for emotional and behavioural conditions.",
  },

  {
    id: "sudhir-m",
    name: "Dr. Sudhir M",
    speciality: "Orthopaedics",
    expertise: [
      "Joint pain assessment",
      "Degenerative joint condition evaluation",
      "Orthopaedic injury consultation",
      "Bone and joint health management",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Orthopaedic qualification - pending verification",
      "Additional orthopaedic training - pending verification",
    ],
    experience:
      "Experience in musculoskeletal and orthopaedic care - duration pending verification.",
    academicAchievements: [
      "Orthopaedic academic programmes - details to be confirmed",
      "Joint health workshops - details to be confirmed",
      "Professional achievements - verification pending",
    ],
    about:
      "This sample profile focuses on orthopaedic consultation for joint pain, injuries and common musculoskeletal conditions.",
  },

  {
    id: "dvs-rama-krishna-prasad",
    name: "Dr. DVS Rama Krishna Prasad",
    speciality: "Urology",
    expertise: [
      "Urinary tract condition assessment",
      "Kidney stone consultation",
      "Bladder-related disorders",
      "Urological treatment planning",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Urology specialist qualification - pending verification",
      "Additional urological training - pending verification",
    ],
    experience:
      "Experience in urological healthcare - duration pending verification.",
    academicAchievements: [
      "Urology academic workshops - details to be confirmed",
      "Urinary health education - details to be confirmed",
      "Research contributions - verification pending",
    ],
    about:
      "This sample profile describes urology services involving urinary tract health, kidney stones and related conditions.",
  },

  {
    id: "venkatesh-t",
    name: "Dr. Venkatesh T",
    speciality: "ENT",
    expertise: [
      "Ear disorder evaluation",
      "Sinus and nasal condition assessment",
      "Throat-related disorders",
      "ENT clinical consultation",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "ENT specialist qualification - pending verification",
      "Otolaryngology training - pending verification",
    ],
    experience:
      "Experience in ENT healthcare - duration pending verification.",
    academicAchievements: [
      "ENT academic conferences - details to be confirmed",
      "Otolaryngology workshops - details to be confirmed",
      "Professional development - verification pending",
    ],
    about:
      "This sample profile covers ear, nose and throat healthcare services, including assessment of sinus, hearing and throat-related conditions.",
  },

  {
    id: "jaipal-reddy",
    name: "Dr. Jaipal Reddy",
    speciality: "Cardiology",
    expertise: [
      "Cardiovascular risk assessment",
      "Heart disease evaluation",
      "Cardiac diagnostic consultation",
      "Preventive heart health",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Cardiology specialist qualification - pending verification",
      "Cardiovascular medicine training - pending verification",
    ],
    experience:
      "Experience in cardiology - duration pending verification.",
    academicAchievements: [
      "Cardiology research activities - details to be confirmed",
      "Cardiovascular health conferences - details to be confirmed",
      "Academic presentations - verification pending",
    ],
    about:
      "This sample profile introduces cardiology services involving heart health evaluation, cardiovascular risk assessment and cardiac care consultation.",
  },

  {
    id: "trilok-babu-t",
    name: "Dr. Trilok Babu T",
    speciality: "Pathology",
    expertise: [
      "Clinical laboratory diagnostics",
      "Pathology report evaluation",
      "Laboratory quality processes",
      "Diagnostic testing support",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Pathology specialist qualification - pending verification",
      "Laboratory medicine training - pending verification",
    ],
    experience:
      "Experience in pathology and laboratory medicine - duration pending verification.",
    academicAchievements: [
      "Pathology education programmes - details to be confirmed",
      "Laboratory diagnostics workshops - details to be confirmed",
      "Academic contributions - verification pending",
    ],
    about:
      "This sample profile focuses on pathology and laboratory medicine services supporting clinical diagnosis through testing and analysis.",
  },

  {
    id: "kamalakar-reddy",
    name: "Dr. Kamalakar Reddy",
    speciality: "Ophthalmology",
    expertise: [
      "Eye health assessment",
      "Vision-related disorder evaluation",
      "Cataract consultation",
      "Ophthalmic diagnostic assessment",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Ophthalmology specialist qualification - pending verification",
      "Eye care training - pending verification",
    ],
    experience:
      "Experience in ophthalmic healthcare - duration pending verification.",
    academicAchievements: [
      "Ophthalmology workshops - details to be confirmed",
      "Vision care awareness programmes - details to be confirmed",
      "Academic activities - verification pending",
    ],
    about:
      "This sample profile introduces eye care services involving vision assessment, cataract evaluation and ophthalmic consultation.",
  },

  {
    id: "sathish-krishna",
    name: "Dr. Sathish Krishna",
    speciality: "Anaesthesiology",
    expertise: [
      "Pre-anaesthesia assessment",
      "Perioperative patient monitoring",
      "Anaesthesia planning",
      "Post-anaesthesia care coordination",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Anaesthesiology qualification - pending verification",
      "Perioperative care training - pending verification",
    ],
    experience:
      "Experience in anaesthesiology - duration pending verification.",
    academicAchievements: [
      "Anaesthesia safety workshops - details to be confirmed",
      "Perioperative care education - details to be confirmed",
      "Professional academic records - verification pending",
    ],
    about:
      "This sample profile covers anaesthesiology services involving preoperative evaluation, anaesthesia planning and perioperative patient care.",
  },

  {
    id: "rajendra-prasad-b",
    name: "Dr. Rajendra Prasad B",
    speciality: "Surgical Gastroenterology",
    expertise: [
      "Gastrointestinal surgical evaluation",
      "Digestive system surgical consultation",
      "Abdominal surgical care planning",
      "Postoperative digestive care coordination",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Surgical gastroenterology qualification - pending verification",
      "Additional gastrointestinal surgical training - pending verification",
    ],
    experience:
      "Experience in surgical gastroenterology - duration pending verification.",
    academicAchievements: [
      "Gastrointestinal surgery conferences - details to be confirmed",
      "Surgical academic programmes - details to be confirmed",
      "Research activities - verification pending",
    ],
    about:
      "This sample profile describes surgical gastroenterology services involving surgical evaluation and management of digestive system conditions.",
  },

  {
    id: "alekhya-reddy",
    name: "Dr. Alekhya Reddy",
    speciality: "Endocrinology",
    expertise: [
      "Hormonal disorder assessment",
      "Thyroid condition evaluation",
      "Diabetes and metabolic health",
      "Endocrine consultation",
    ],
    qualifications: [
      "Primary medical qualification - pending verification",
      "Endocrinology specialist qualification - pending verification",
      "Hormonal and metabolic health training - pending verification",
    ],
    experience:
      "Experience in endocrinology - duration pending verification.",
    academicAchievements: [
      "Endocrine health education - details to be confirmed",
      "Diabetes and metabolism conferences - details to be confirmed",
      "Academic contributions - verification pending",
    ],
    about:
      "This sample profile focuses on endocrine healthcare involving hormonal conditions, thyroid disorders, diabetes and metabolic health.",
  },
];

/* ==========================================
   FINAL DOCTORS ARRAY
========================================== */

export const doctors = doctorsList.map((doctor) => ({
  ...doctor,

  image: doctorImage,

  // No featured badge.
  featured: false,

  // Add actual verified registration details.
  registrationNumber: "",
  registrationCouncil: "",

  // Add actual hospital / clinic location.
  location: "",

  // Add verified languages if available.
  languages: [],
}));

/* ==========================================
   GET INDIVIDUAL DOCTOR
========================================== */

export const getDoctorById = (id) =>
  doctors.find((doctor) => doctor.id === id);

/* ==========================================
   AKESO WHATSAPP ENQUIRY
========================================== */

export const whatsappNumber = "919885106619";

export const getAppointmentLink = () => {
  const message =
    "Hello Akeso Global Medical, I would like to know more about your healthcare services.";

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};
