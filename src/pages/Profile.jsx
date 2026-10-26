

import { patientCare } from "../api/patientCare";



import { useEffect, useMemo, useRef, useState } from "react";

import {

  Activity, Bell, Building2, CalendarDays, Check,

  CheckCircle2, ChevronRight, ClipboardList, CreditCard,

  Download, Eye, FileText, HeartPulse, Hotel, IdCard,

  LayoutDashboard, LockKeyhole, Menu, MessageCircle,

  Pencil, Plane, Plus, Save, ShieldCheck, Stethoscope,

  Trash2, Upload, UserRound, Wallet, X, ArrowLeft,

  Headphones, AlertCircle

} from "lucide-react";

import { getUser } from "../utils/auth";







const STORAGE_PREFIX = "akeso_patient_profile_demo_v4";



function getPatientKey(user) {

  const identity = String(

    user?.id ?? user?.customer_id ?? user?.email ?? ""

  ).trim().toLowerCase();



  return identity ? `${STORAGE_PREFIX}_${identity}` : null;

}



function getOrCreatePatientId(storageKey) {

  if (!storageKey) return "";



  const key = `${storageKey}_registration_number`;



  let registrationNumber = localStorage.getItem(key);



  if (!registrationNumber) {

    const uniquePart = crypto.randomUUID()

      .replace(/-/g, "")

      .slice(0, 12)

      .toUpperCase();



    registrationNumber = `AKESO-${uniquePart}`;

    localStorage.setItem(key, registrationNumber);

  }



  return registrationNumber;

}



const theme = {

  primary: "#064B50",

  gold: "#C8942E",

  text: "#263F41",

};


const NAV = [
  // Patient can add/edit their own information
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "personal", label: "Personal Information", icon: UserRound },
  { id: "passport", label: "Passport & Identity", icon: IdCard },
  { id: "medical", label: "Medical Records", icon: HeartPulse },
  { id: "documents", label: "Documents", icon: FileText },

  // Admin adds/updates these; patient can only view
  { id: "visa", label: "Visa & Immigration", icon: ShieldCheck },
  { id: "treatment", label: "Treatment & Surgery", icon: Stethoscope },
  { id: "hospital", label: "Doctor & Hospital", icon: Building2 },
  { id: "stay", label: "Accommodation", icon: Hotel },
  { id: "travel", label: "Travel Details", icon: Plane },
  { id: "appointments", label: "Appointments", icon: CalendarDays },
];



const FIELDS = {

  personal: [

    ["fullName", "Full legal name (as per passport)"],

    ["dob", "Date of birth", "date"],

    ["gender", "Gender", "select", ["Male", "Female", "Other", "Prefer not to say"]],

    ["phone", "Contact number with country code", "tel"],

    ["email", "Email address", "email"],

    ["address", "Residential address", "textarea"],

    ["emergencyName", "Emergency contact name"],

    ["emergencyRelation", "Emergency contact relationship"],

    ["emergencyPhone", "Emergency contact phone", "tel"],

  ],

  passport: [

    ["passportNumber", "Passport number"],

    ["citizenship", "Country of citizenship / origin"],

    ["nationality", "Nationality"],

    ["residence", "Country of residence"],

    ["passportIssue", "Passport issue date", "date"],

    ["passportExpiry", "Passport expiry date", "date"],

  ],

  visa: [

  ["visaType", "Visa type / category"],

  ["visaStatus", "Visa application status", "select", [

    "Not Started",

    "In Progress",

    "Submitted",

    "Approved",

    "Rejected",

  ]],

  ["visaReference", "Application / reference number"],

  ["visaApplicationDate", "Application date", "date"],

  ["visaApprovalDate", "Approval date", "date"],

  ["visaValidity", "Visa validity"],

  ["visaExpiry", "Visa expiry date", "date"],



  ["medicalVisaType", "Medical visa / medical attendant visa type"],

  ["medicalVisaNumber", "Medical visa / attendant visa number"],

  ["attendantName", "Medical attendant full name"],

  ["attendantRelationship", "Relationship with patient"],

  ["attendantPassport", "Medical attendant passport number"],

  ["attendantVisa", "Medical visa / medical attendant visa details", "textarea"],

],

 medical: [

  ["condition", "Primary medical condition"],

  ["diagnosis", "Primary diagnosis", "textarea"],

  ["medicalHistory", "Previous medical history", "textarea"],

  ["existingConditions", "Existing medical conditions", "textarea"],

  ["previousSurgeries", "Previous surgeries and treatments", "textarea"],

  ["medications", "Current medications", "textarea"],

  ["allergies", "Known allergies", "textarea"],



  ["labReportsSummary", "Relevant laboratory reports summary", "textarea"],

  ["scanSummary", "Scans and diagnostic records summary", "textarea"],

  ["diagnosticHistory", "Previous diagnostic findings", "textarea"],



  ["medicalSummary", "Medical history and treatment summary", "textarea"],

  ["previousTreatmentSummary", "Previous treatment summary", "textarea"],





],

 treatment: [
  ["treatmentType", "Type of treatment / surgery"],
  ["specialty", "Medical specialty / department"],
  ["treatmentPlan", "Proposed treatment plan", "textarea"],
  ["treatmentDuration", "Expected treatment duration"],

  ["estimatedCost", "Estimated treatment cost"],
  ["approvedQuotation", "Approved quotation / reference"],

  [
    "treatmentStatus",
    "Treatment status",
    "select",
    [
      "Under Review",
      "Consultation Pending",
      "Treatment Planned",
      "Confirmed",
      "Admitted",
      "In Treatment",
      "Discharged",
      "Follow-up",
    ],
  ],

  ["plannedAdmission", "Planned admission date", "date"],
  ["plannedDischarge", "Planned discharge date", "date"],
  ["actualAdmission", "Actual admission date", "date"],
  ["actualDischarge", "Actual discharge date", "date"],
],

  hospital: [

    ["doctorName", "Treating doctor name"],

    ["doctorSpecialty", "Doctor specialty"],

    ["hospitalName", "Hospital / healthcare facility"],

    ["hospitalAddress", "Hospital address", "textarea"],

    ["hospitalPhone", "Hospital contact number", "tel"],

    ["coordinatorName", "Assigned Akeso coordinator"],

    ["coordinatorPhone", "Coordinator contact number", "tel"],

    ["admissionConfirmation", "Admission confirmation"],

  ],

  stay: [

    ["hotelName", "Hotel / accommodation name"],

    ["hotelAddress", "Accommodation address", "textarea"],

    ["hotelPhone", "Accommodation contact", "tel"],

    ["checkIn", "Check-in date", "date"],

    ["checkOut", "Check-out date", "date"],

    ["bookingReference", "Booking confirmation reference"],

    ["accommodationStatus", "Accommodation status", "select", [

      "Not Booked", "Pending", "Confirmed", "Checked In", "Checked Out"

    ]],

    ["localTransport", "Local transportation details", "textarea"],

    ["airportPickup", "Airport pickup arrangements", "textarea"],

  ],

  travel: [

    ["departureCountry", "Departure country"],

    ["departureCity", "Departure city"],

    ["arrivalCity", "Destination city"],

    ["arrivalAirport", "Arrival airport"],

    ["arrivalDate", "Planned arrival date", "date"],

    ["arrivalTime", "Planned arrival time", "time"],

    ["airline", "Airline"],

    ["flightNumber", "Arrival flight number"],

    ["pnr", "E-ticket / booking reference / PNR"],

    ["pickupStatus", "Airport pickup status", "select", [

      "Pending", "Scheduled", "Completed"

    ]],

    ["returnDate", "Return journey date", "date"],

    ["returnTime", "Return journey time", "time"],

    ["returnFlight", "Return flight number"],

    ["returnPnr", "Return booking reference"],

    ["companions", "Travel companion details", "textarea"],

    ["itinerary", "Travel itinerary", "textarea"],

  ],

  appointments: [

    ["consultationDate", "Initial online consultation date", "date"],

    ["appointmentDoctor", "Doctor name"],

    ["appointmentSpecialty", "Doctor specialty"],

    ["appointmentDate", "Upcoming appointment date", "date"],

    ["appointmentTime", "Appointment time", "time"],

    ["timezone", "Time zone"],

    ["appointmentType", "Appointment type", "select", [

      "Teleconsultation", "Hospital Consultation", "Follow-up"

    ]],

    ["meetingLink", "Meeting link / consultation instructions"],

    ["appointmentStatus", "Appointment confirmation status", "select", [

      "Requested", "Pending", "Confirmed", "Completed", "Cancelled"

    ]],

    ["previousConsultations", "Previous consultation history", "textarea"],

    ["nextFollowup", "Next follow-up date", "date"],

    ["postTreatmentSchedule", "Post-treatment consultation schedule", "textarea"],

  ],

  payments: [

    ["estimatedCost", "Estimated treatment package cost"],

    ["approvedQuotation", "Approved quotation / invoice"],

    ["advancePayment", "Advance payment received"],

    ["paymentStatus", "Hospital / treatment payment status", "select", [

      "Pending", "Partially Paid", "Paid"

    ]],

    ["accommodationCost", "Accommodation expenses"],

    ["transportCost", "Transportation expenses"],

    ["otherExpenses", "Other approved expenses"],

    ["balance", "Outstanding balance"],

    ["transactionReference", "Payment transaction reference"],

    ["finalStatement", "Final statement of expenses", "textarea"],

  ],

};



const JOURNEY = [

  "Registration Completed",

  "Medical Records Received",

  "Medical Evaluation in Progress",

  "Doctor Consultation Scheduled",

  "Treatment Plan and Quotation Shared",

  "Patient Approval Received",

  "Visa Assistance in Progress",

  "Travel Bookings Confirmed",

  "Arrival and Airport Pickup",

  "Hospital Admission",

  "Treatment / Surgery in Progress",

  "Discharge and Recovery",

  "Accommodation / Post-operative Care",

  "Follow-up Teleconsultation",

  "Return Journey Completed",

  "Case Closed / Ongoing Follow-up",

];



const DOC_TYPES = [

  "Passport", "Visa", "Medical Reports", "Lab Reports",

  "Scans", "Doctor Consultation", "Treatment Plan",

  "Quotation", "Invoice", "Payment Receipt",

  "Flight Ticket", "Accommodation Confirmation",

  "Consent Form", "Discharge Summary",

  "Prescription", "Follow-up Instructions", "Other"

];





const SECTION_DOCUMENTS = {

  personal: [

  {

    label: "Profile Photo",

    category: "Profile Photo",

    description: "Upload your profile photograph (JPG, PNG or WEBP)",

  },

],

  passport: [

    {

      label: "Passport Copy",

      category: "Passport",

      description: "Upload passport image, PDF or Word document",

    },

  ],



  visa: [

    {

      label: "Visa Document",

      category: "Visa",

      description: "Upload medical visa or approved visa document",

    },

    {

      label: "Medical Attendant Visa Document",

      category: "Medical Attendant Visa",

      description: "Upload attendant visa, where applicable",

    },

  ],



  treatment: [
    { label: "Consent Forms & Treatment Documents", category: "Consent Form", description: "Consent forms, treatment plans and quotations" },
  ],
  medical: [

    {

      label: "Laboratory Reports",

      category: "Lab Reports",

      description: "Blood tests, pathology and laboratory reports",

    },

    {

      label: "Scans & Diagnostic Records",

      category: "Scans",

      description: "MRI, CT, X-ray, ultrasound and diagnostic reports",

    },

    {

      label: "Medical History & Treatment Summaries",

      category: "Medical History",

      description: "Previous treatment and medical history documents",

    },

    {

      label: "Medical Documents & Reports",

      category: "Medical Reports",

      description: "Additional medical records and supporting reports",

    },

  ],

};

const inputClass =

  "w-full min-w-0 rounded-lg border border-[#D7E3E1] bg-white px-4 py-3 text-[15px] leading-6 text-[#263F41] outline-none focus:border-[#064B50] focus:ring-1 focus:ring-[#064B50]";



const cardClass =

  "rounded-2xl border border-[#E2EAEA] bg-white p-4 shadow-sm sm:p-6";



const primaryButton =

  "inline-flex items-center justify-center gap-2 rounded-lg bg-[#064B50] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#043B40]";



const outlineButton =

  "inline-flex items-center justify-center gap-2 rounded-lg border border-[#CBDDD9] bg-white px-5 py-3 text-sm font-bold text-[#064B50] hover:bg-[#F0F8F7]";



function Field({ label, type = "text", options, value, onChange }) {

  return (

    <label className={`block min-w-0 ${type === "textarea" ? "md:col-span-2" : ""}`}>

      <span className="mb-2 block text-sm font-semibold text-[#344F51]">

        {label}

      </span>



      {type === "textarea" ? (

        <textarea

          rows={3}

          className={inputClass}

          value={value || ""}

          onChange={(e) => onChange(e.target.value)}

          placeholder={`Enter ${label.toLowerCase()}`}

        />

      ) : type === "select" ? (

        <select

          className={inputClass}

          value={value || ""}

          onChange={(e) => onChange(e.target.value)}

        >

          <option value="">Select</option>

          {options.map((option) => (

            <option key={option} value={option}>{option}</option>

          ))}

        </select>

      ) : (

        <input

          type={type}

          className={inputClass}

          value={value || ""}

          onChange={(e) => onChange(e.target.value)}

          placeholder={["date", "time"].includes(type) ? "" : `Enter ${label.toLowerCase()}`}

        />

      )}

    </label>

  );

}



function DisplayField({ label, value }) {

  return (

    <div className="min-w-0 rounded-xl border border-[#E5ECEB] bg-[#FBFCFC] p-4">

      <p className="text-sm font-medium leading-5 text-[#526467]">

        {label}

      </p>

      <p className="mt-2 break-words text-[15px] font-semibold leading-6 text-[#263F41]">

        {value || "—"}

      </p>

    </div>

  );

}



function SectionTitle({ icon: Icon, title, description, action }) {

  return (

    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">

      <div className="flex min-w-0 items-start gap-3">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF5F4] text-[#064B50]">

          <Icon size={22} />

        </div>

        <div>

          <h2 className="text-lg font-bold text-[#263F41] sm:text-xl">

            {title}

          </h2>

          <p className="mt-1 text-sm leading-6 text-[#526467]">

            {description}

          </p>

        </div>

      </div>

      {action}

    </div>

  );

}



function getStoredData(storageKey) {

  if (!storageKey) return {};



  try {

    const parsed = JSON.parse(localStorage.getItem(storageKey));

    return parsed && typeof parsed === "object" ? parsed : {};

  } catch {

    return {};

  }

}



export default function Profile() {

  const user = getUser();



  const storageKey = getPatientKey(user);



  const [patientId, setPatientId] = useState("");



 const STAFF_SECTIONS = [
  "visa",
  "treatment",
  "hospital",
  "stay",
  "travel",
  "appointments",
];

  const [active, setActive] = useState("overview");

  const [mobileOpen, setMobileOpen] = useState(false);

  const [editing, setEditing] = useState(null);

  const [draft, setDraft] = useState({});

  const [notice, setNotice] = useState("");



  // Patient data is loaded from the authenticated backend API.

  const [saved, setSaved] = useState({});



  const [journey, setJourney] = useState(() =>

    JOURNEY.map((name, index) => ({

      name,

      status: "Not Started",

      date: "",

      requirements: "",

      remarks: "",

    }))

  );



  // Files are uploaded to the backend; pending uploads remain in memory until saved.

  const [documents, setDocuments] = useState([]);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState("");
  const profilePhoto = documents
  .filter(
    (doc) =>
      doc.sectionId === "personal" &&
      doc.category === "Profile Photo" &&
      /\.(jpg|jpeg|png|webp)$/i.test(doc.name || "")
  )
  .sort((a, b) => {
    const aTime = new Date(a.createdAt || a.uploadedAt || a.date || 0).getTime();
    const bTime = new Date(b.createdAt || b.uploadedAt || b.date || 0).getTime();
    return bTime - aTime;
  })[0];
  useEffect(() => {
    if (!profilePhoto || typeof patientCare.getDocumentBlob !== "function") {
      setProfilePhotoUrl("");
      return;
    }
    let cancelled = false;
    let url;
    patientCare.getDocumentBlob(profilePhoto.id).then(blob => {
      if (cancelled) return;
      url = URL.createObjectURL(blob);
      setProfilePhotoUrl(url);
    }).catch(() => { if (!cancelled) setProfilePhotoUrl(""); });
    return () => { cancelled = true; if (url) URL.revokeObjectURL(url); };
  }, [profilePhoto?.id]);

  const [pendingDocuments, setPendingDocuments] = useState([]);



  const [docCategory, setDocCategory] = useState("Medical Reports");

  const fileInputRef = useRef(null);



  const [loadingProfile,setLoadingProfile]=useState(true);

  useEffect(()=>{

    let cancelled=false;

    setLoadingProfile(true);

    patientCare.me().then(data=>{

      if(cancelled)return;

      setPatientId(data.patientId);

      setSaved(data.sections||{});

      setDocuments(data.documents||[]);

    }).catch(error=>{if(!cancelled)setNotice(error.message);})

      .finally(()=>{if(!cancelled)setLoadingProfile(false);});

    return ()=>{cancelled=true;};

  },[user?.id]);



const documentUrlsRef = useRef(new Set());



useEffect(() => {

  return () => {

    documentUrlsRef.current.forEach((url) =>

      URL.revokeObjectURL(url)

    );

    documentUrlsRef.current.clear();

  };

}, []);





  const name =

    saved.personal?.fullName ||

    user?.name ||

    user?.full_name ||

    "Patient";



  const completedSections = Object.keys(FIELDS).filter(

    (id) =>

      Object.values(saved[id] || {}).some(

        (value) => String(value || "").trim() !== ""

      )

  ).length;



  const totalFields = Object.values(FIELDS).reduce(

    (count, fields) => count + fields.length,

    0

  );



  const filledFields = Object.entries(FIELDS).reduce(

    (count, [section, fields]) =>

      count +

      fields.filter(([key]) =>

        String(saved[section]?.[key] || "").trim()

      ).length,

    0

  );



  const profileProgress = Math.round(

    (filledFields / totalFields) * 100

  );



  const completedStages = journey.filter(

    (stage) => stage.status === "Completed"

  ).length;



  const journeyProgress = Math.round(

    (completedStages / JOURNEY.length) * 100

  );



  const sectionName = NAV.find((item) => item.id === active);



  function navigate(id) {

    setActive(id);

    setEditing(null);

    setMobileOpen(false);

    window.scrollTo({ top: 0, behavior: "smooth" });

  }



  function startEdit(id) {

  setDraft({ ...(saved[id] || {}) });

  setPendingDocuments([]);

  setEditing(id);

}



function cancelEdit() {

  pendingDocuments.forEach((doc) => URL.revokeObjectURL(doc.url));



  setPendingDocuments([]);

  setDraft({});

  setEditing(null);

}



async function saveSection(id) {

  try {

    const result=await patientCare.save(id,draft);

    const uploaded=[];

    for(const doc of pendingDocuments){

      const row=await patientCare.upload(doc.file,id,doc.category);

      uploaded.push(row);

    }

    setSaved(previous=>({...previous,[id]:result.data}));

    setDocuments(previous=>[...uploaded,...previous]);

    pendingDocuments.forEach(doc=>{URL.revokeObjectURL(doc.url);documentUrlsRef.current.delete(doc.url);});

    setPendingDocuments([]);setEditing(null);setDraft({});

    setNotice('Details saved successfully.');

  } catch(error){setNotice(error.message+' — please retry.');}

}



  function updateDraft(key, value) {

    setDraft((previous) => ({

      ...previous,

      [key]: value,

    }));

  }



 function uploadDocuments(event, categoryOverride = null, sectionId = null) {

  const selectedFiles = Array.from(event.target.files || []);



  const allowedExtensions = /\.(pdf|doc|docx|jpg|jpeg|png|webp)$/i;

  const maxSize = 10 * 1024 * 1024;



  const validFiles = selectedFiles.filter(

    (file) =>

      allowedExtensions.test(file.name) &&

      file.size <= maxSize

  );



  if (validFiles.length !== selectedFiles.length) {

    setNotice("Only PDF, Word and image files up to 10 MB are accepted.");

  }



  const newDocuments = validFiles.map((file) => ({

    id: crypto.randomUUID(),

    name: file.name,

    type: file.type,

    category: categoryOverride || docCategory,

    sectionId: sectionId || "documents",

    size: file.size,

    date: new Date().toLocaleDateString("en-IN"),

    url: URL.createObjectURL(file),

    file,

  }));



  newDocuments.forEach((doc) => {

  documentUrlsRef.current.add(doc.url);

});



  if (sectionId) {

    setPendingDocuments((previous) => [

      ...previous,

      ...newDocuments,

    ]);

  } else {

    Promise.all(newDocuments.map(doc=>patientCare.upload(doc.file,'documents',doc.category)))

      .then(rows=>{setDocuments(previous=>[...rows,...previous]);setNotice('Documents uploaded.');})

      .catch(error=>setNotice(error.message))

      .finally(()=>newDocuments.forEach(doc=>{URL.revokeObjectURL(doc.url);documentUrlsRef.current.delete(doc.url);}));

  }



  event.target.value = "";

}



function removePendingDocument(id) {

  setPendingDocuments((previous) => {

    const item = previous.find((doc) => doc.id === id);



    if (item) URL.revokeObjectURL(item.url);



    return previous.filter((doc) => doc.id !== id);

  });

}









async function removeDocument(id){try{await patientCare.remove(id);setDocuments(prev=>prev.filter(d=>d.id!==id));}catch(e){setNotice(e.message);}}

 function openDocument(doc){patientCare.download(doc.id,doc.name).catch(e=>setNotice(e.message));}

 function renderSectionDocuments(id, isEditing = false) {

  const uploadGroups = SECTION_DOCUMENTS[id] || [];



  if (uploadGroups.length === 0) return null;



  return (

    <div className="mt-6 border-t border-[#E7EEEE] pt-5">



      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

        {uploadGroups.map((group) => {

          const savedFiles = documents.filter(

            (doc) =>

              doc.sectionId === id &&

              doc.category === group.category

          );



          const newFiles = isEditing

            ? pendingDocuments.filter(

                (doc) =>

                  doc.sectionId === id &&

                  doc.category === group.category

              )

            : [];



          const groupFiles = [...savedFiles, ...newFiles];



          return (

            <div

              key={group.category}

              className="min-w-0 rounded-xl border border-[#DDE9E6] bg-[#FBFDFC] p-4"

            >

              <div className="mb-3 flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF5F4] text-[#064B50]">

                  <FileText size={20} />

                </div>



                <div>

                  <h4 className="text-sm font-bold text-[#263F41]">

                    {group.label}

                  </h4>

                  <p className="mt-1 text-xs text-[#526467]">

                    {group.description}

                  </p>

                </div>

              </div>



              {isEditing && (

                <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#C8DCD8] bg-white px-3 py-5 text-center hover:bg-[#F0F8F7]">

                  <Upload size={22} className="text-[#064B50]" />



                  <span className="mt-2 text-sm font-bold text-[#064B50]">

                    Choose Files

                  </span>



                  <span className="mt-1 text-xs text-[#526467]">

                    Images, PDF, Word · 10 MB per file · Multiple files allowed

                  </span>



                  <input

                    type="file"

                    multiple

                    accept=".jpg,.jpeg,.png,.webp,.pdf,.doc,.docx"

                    className="sr-only"

                    onChange={(event) =>

                      uploadDocuments(event, group.category, id)

                    }

                  />

                </label>

              )}



              {groupFiles.length > 0 ? (

                <div className="mt-3 space-y-2">

                  {groupFiles.map((doc) => {

                    const isPending = newFiles.some(

                      (item) => item.id === doc.id

                    );



                    return (

                      <div

                        key={doc.id}

                        className="rounded-lg border border-[#E2EAEA] bg-white p-3"

                      >

                        <p className="break-all text-sm font-semibold text-[#263F41]">

                          {doc.name}

                        </p>



                        <p className="mt-1 text-xs text-[#526467]">

                          {(doc.size / 1024).toFixed(1)} KB

                          {isPending ? " · Not saved yet" : ""}

                        </p>



                        <div className="mt-3 flex flex-wrap gap-2">

                          {/\.(pdf|jpg|jpeg|png|webp)$/i.test(doc.name) && (

                            <button type="button" onClick={()=>doc.file ? window.open(doc.url,"_blank") : openDocument(doc)}

                              className="inline-flex items-center gap-1 rounded-lg border border-[#CBDDD9] px-3 py-2 text-xs font-bold text-[#064B50]"

                            >

                              <Eye size={15} /> View

                            </button>

                          )}



                          <button type="button" onClick={()=>doc.file ? window.open(doc.url,"_blank") : openDocument(doc)}

                            className="inline-flex items-center gap-1 rounded-lg border border-[#CBDDD9] px-3 py-2 text-xs font-bold text-[#064B50]"

                          >

                            <Download size={15} /> Download

                          </button>



                          {isEditing && (

                            <button

                              type="button"

                              onClick={() =>

                                isPending

                                  ? removePendingDocument(doc.id)

                                  : removeDocument(doc.id)

                              }

                              className="inline-flex items-center gap-1 rounded-lg border border-red-200 px-3 py-2 text-xs font-bold text-red-600"

                            >

                              <Trash2 size={15} /> Remove

                            </button>

                          )}

                        </div>

                      </div>

                    );

                  })}

                </div>

              ) : (

                <p className="mt-3 text-xs text-[#526467]">

                  No documents added yet.

                </p>

              )}

            </div>

          );

        })}

      </div>

    </div>

  );

}







  function renderSection(id) {

    const section = NAV.find((item) => item.id === id);

    const Icon = section.icon;

    const fields = FIELDS[id];

    const values = saved[id] || {};

   const hasData = fields.some(([key]) => {
  const value = values[key];

  return (
    value !== null &&
    value !== undefined &&
    String(value).trim() !== ""
  );
});

    const isEditing = editing === id;



    return (

      <section className={cardClass}>

        <SectionTitle

          icon={Icon}

          title={section.label}

          description="Add, review and update your information."

          action={

            !isEditing && !STAFF_SECTIONS.includes(id) && (

              <button

                type="button"

                onClick={() => startEdit(id)}

                className={primaryButton}

              >

                {hasData ? <Pencil size={17} /> : <Plus size={17} />}

                {hasData ? "Edit Details" : "Add Details"}

              </button>

            )

          }

        />



        {id === "personal" && (

  <div className="mb-6 rounded-xl border border-[#D6E7E4] bg-[#F0F8F7] p-4">

    <p className="text-sm font-semibold text-[#526467]">

      Unique Patient ID / Registration Number

    </p>



    <p className="mt-2 break-all text-lg font-bold text-[#064B50]">

      {patientId || "Not assigned"}

    </p>



    <p className="mt-1 text-xs text-[#526467]">

      Registration number assigned to your account.

    </p>

  </div>

)}



        {isEditing ? (

          <>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {fields.map(([key, label, type, options]) => (

                <Field

                  key={key}

                  label={label}

                  type={type}

                  options={options}

                  value={draft[key]}

                  onChange={(value) => updateDraft(key, value)}

                />

              ))}

            </div>

            {renderSectionDocuments(id, true)}



            <div className="mt-7 flex flex-wrap justify-end gap-3 border-t border-[#E7EEEE] pt-5">

              <button

                type="button"

                onClick={cancelEdit}

                className={outlineButton}

              >

                <X size={17} /> Cancel

              </button>



              <button

                type="button"

                onClick={() => saveSection(id)}

                className={primaryButton}

              >

                <Save size={17} /> Save Details

              </button>

            </div>

          </>

        ) : hasData ? (

  <div>

    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

      {fields.map(([key, label]) => (

        <DisplayField

          key={key}

          label={label}

          value={values[key]}

        />

      ))}

    </div>



    {renderSectionDocuments(id, false)}

  </div>

) : (

          <div className="rounded-xl border border-dashed border-[#C9DCD8] bg-[#FAFCFB] px-5 py-10 text-center">

            <ClipboardList

              size={34}

              className="mx-auto text-[#064B50]"

            />



            <h3 className="mt-4 text-lg font-bold text-[#263F41]">

              No details added yet

            </h3>



            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#526467]">

              Click Add Details to complete this section of your

              patient profile.

            </p>



            {!STAFF_SECTIONS.includes(id) && <button

              type="button"

              onClick={() => startEdit(id)}

              className={`${primaryButton} mt-5`}

            >

              <Plus size={17} /> Add Details

            </button>}

          </div>

        )}



      </section>

    );

  }



  function renderOverview() {

    const stats = [

      {

        label: "Profile Completion",

        value: `${profileProgress}%`,

        icon: UserRound,

      },

      {

        label: "Sections Updated",

        value: `${completedSections} / ${Object.keys(FIELDS).length}`,

        icon: CheckCircle2,

      },

      {

        label: "Documents",

        value: documents.length,

        icon: FileText,

      },

    ];



    return (

      <div className="space-y-5">

        <div className="overflow-hidden rounded-2xl bg-[#064B50] p-5 sm:p-7 lg:p-8">
  <div className="flex flex-col-reverse items-center gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">

    {/* LEFT SIDE - WELCOME DETAILS */}
    <div className="min-w-0 flex-1 text-center sm:text-left">

      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#E9C77D]">
        Akeso International Patient Services
      </p>

      <h2 className="mt-3 break-words text-2xl font-bold leading-tight text-white sm:text-3xl">
        Welcome, {name}
      </h2>

      <div className="mt-4 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-2 sm:justify-start">
        <IdCard
          size={17}
          className="shrink-0 text-[#E9C77D]"
        />

        <span className="break-all text-sm font-semibold text-white">
          Patient ID: {patientId || "Not assigned"}
        </span>
      </div>

      <div className="mt-6">
        <button
          type="button"
          onClick={() => navigate("all-details")}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C8942E] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#B88423]"
        >
          <Eye size={18} />
          View All My Details
        </button>
      </div>
    </div>

    {/* RIGHT SIDE - PROFILE IMAGE */}
    <div className="flex shrink-0 items-center justify-center">
      <div
        className="
          flex h-24 w-24
          items-center justify-center
          overflow-hidden rounded-full
          border-4 border-white/80
          bg-white/10 shadow-xl
          sm:h-28 sm:w-28
          lg:h-32 lg:w-32
          xl:h-36 xl:w-36
        "
      >
        {profilePhotoUrl ? (
          <img
            src={profilePhotoUrl}
            alt={`${name} profile`}
            className="block h-full w-full object-cover object-center"
          />
        ) : (
          <UserRound
            size={48}
            className="text-white"
            strokeWidth={1.5}
          />
        )}
      </div>
    </div>

  </div>
</div>



        <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">

          {stats.map(({ label, value, icon: Icon }) => (

            <div key={label} className={cardClass}>

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF5F4] text-[#064B50]">

                <Icon size={22} />

              </div>



              <p className="text-sm font-medium leading-5 text-[#526467]">

                {label}

              </p>



              <p className="mt-2 text-2xl font-bold text-[#263F41]">

                {value}

              </p>

            </div>

          ))}

        </div>



        <div className={cardClass}>

          <SectionTitle

            icon={UserRound}

            title="My Profile Summary"

            description="Overview of all your saved patient details."

            action={

              <button

                type="button"

                onClick={() => navigate("all-details")}

                className={outlineButton}

              >

                <Eye size={17} />

                View All

              </button>

            }

          />



          <div className="mb-5">

            <div className="mb-2 flex items-center justify-between">

              <p className="text-sm font-semibold text-[#344F51]">

                Profile completion

              </p>

              <strong className="text-sm text-[#064B50]">

                {profileProgress}%

              </strong>

            </div>



            <div className="h-2.5 overflow-hidden rounded-full bg-[#E7EFEE]">

              <div

                className="h-full rounded-full bg-[#064B50] transition-all"

                style={{ width: `${profileProgress}%` }}

              />

            </div>

          </div>



          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

            {NAV.filter((item) => FIELDS[item.id]).map((item) => {

              const Icon = item.icon;

              const values = saved[item.id] || {};

              const updated = Object.values(values).some(

                (value) => String(value || "").trim() !== ""

              );



              const preview = Object.entries(values)

                .filter(([, value]) => String(value || "").trim())

                .slice(0, 2)

                .map(([, value]) => value)

                .join(" · ");



              return (

                <button

                  key={item.id}

                  type="button"

                  onClick={() => navigate(item.id)}

                  className="flex min-w-0 items-start gap-3 rounded-xl border border-[#E5ECEB] bg-[#FBFDFC] p-4 text-left hover:border-[#A7CBC6]"

                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF5F4] text-[#064B50]">

                    <Icon size={20} />

                  </div>



                  <div className="min-w-0 flex-1">

                    <p className="text-[15px] font-bold text-[#263F41]">

                      {item.label}

                    </p>



                    <p className="mt-1 truncate text-sm text-[#526467]">

                      {updated ? preview : STAFF_SECTIONS.includes(item.id) ? "Awaiting Akeso team update" : "Add your details"}

                    </p>



                    <span className={`mt-2 inline-block text-xs font-semibold ${

                      updated ? "text-[#176B44]" : "text-[#A36A13]"

                    }`}>

                      {updated ? "Updated" : "Pending"}

                    </span>

                  </div>



                  <ChevronRight

                    size={17}

                    className="mt-2 shrink-0 text-[#064B50]"

                  />

                </button>

              );

            })}

          </div>

        </div>



      </div>

    );

  }



  function renderAllDetails() {

    return (

      <div className="space-y-5">

        <div className={cardClass}>

          <SectionTitle

            icon={ClipboardList}

            title="Complete Patient Profile"

            description="All saved details from your patient dashboard."

            action={

              <button

                type="button"

                onClick={() => navigate("overview")}

                className={outlineButton}

              >

                <ArrowLeft size={17} />

                Overview

              </button>

            }

          />



          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

            <DisplayField

  label="Patient ID / Registration Number"

  value={patientId}

/>

            <DisplayField label="Patient Name" value={name} />

            <DisplayField label="Email" value={saved.personal?.email || user?.email} />

            <DisplayField label="Phone" value={saved.personal?.phone || user?.phone} />

          </div>

        </div>



        {NAV.filter((item) => FIELDS[item.id]).map((item) => {

          const values = saved[item.id] || {};

          const Icon = item.icon;



          return (

            <section key={item.id} className={cardClass}>

              <SectionTitle

                icon={Icon}

                title={item.label}

                description="Saved patient information"

                action={

                  <button

                    type="button"

                    onClick={() => navigate(item.id)}

                    className={outlineButton}

                  >

                    <Eye size={16} />

                    View

                  </button>

                }

              />



              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

                {FIELDS[item.id].map(([key, label]) => (

                  <DisplayField

                    key={key}

                    label={label}

                    value={values[key]}

                  />

                ))}

              </div>

            </section>

          );

        })}



        <section className={cardClass}>

          <SectionTitle

            icon={FileText}

            title="Documents"

            description="Additional documents saved to your patient account."

            action={

              <button

                onClick={() => navigate("documents")}

                className={outlineButton}

              >

                View Documents

              </button>

            }

          />

          {documents.filter(doc => doc.sectionId === "documents").length === 0 ? (

  <p className="text-[15px] text-[#526467]">

    No documents selected yet.

  </p>

) : (

  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

    {documents.filter(doc => doc.sectionId === "documents").map((doc) => (

      <div

        key={doc.id}

        className="rounded-xl border border-[#E5ECEB] bg-[#FBFCFC] p-4"

      >

        <p className="break-all text-[15px] font-bold text-[#263F41]">

          {doc.name}

        </p>



        <p className="mt-2 text-sm text-[#526467]">

          {doc.category} · {doc.date}

        </p>



        <div className="mt-4 flex flex-wrap gap-2">

          {/\.(pdf|jpg|jpeg|png|webp)$/i.test(doc.name) && (

            <button type="button" onClick={()=>doc.file ? window.open(doc.url,"_blank") : openDocument(doc)}

              className={outlineButton}

            >

              <Eye size={16} />

              View

            </button>

          )}



          <button type="button" onClick={()=>doc.file ? window.open(doc.url,"_blank") : openDocument(doc)}

            className={outlineButton}

          >

            <Download size={16} />

            Download

          </button>

        </div>

      </div>

    ))}

  </div>

)}

        </section>

      </div>

    );

  }



  const extraDocuments = documents.filter(

  (doc) => !doc.sectionId || doc.sectionId === "documents"

);



  function renderDocuments() {

    const extraDocuments=documents.filter(doc=>doc.sectionId==='documents');

    return (

      <section className={cardClass}>

        <SectionTitle

          icon={FileText}

          title="Document Centre"

          description="Add extra documents. Documents uploaded in other tabs remain in those tabs."

        />



        <div className="rounded-xl border-2 border-dashed border-[#C8DCD8] bg-[#FBFDFC] p-6 text-center sm:p-8">

          <Upload size={32} className="mx-auto text-[#064B50]" />



          <h3 className="mt-3 text-lg font-bold text-[#263F41]">

            Add Documents

          </h3>



          <p className="mt-2 text-sm text-[#526467]">

            Supported: JPG, PNG, WEBP, PDF, DOC and DOCX (10 MB per file; no document-count limit)

          </p>



          <div className="mx-auto mt-5 max-w-xs">

            <label className="mb-2 block text-left text-sm font-semibold text-[#263F41]">

              Document Category

            </label>



            <select

              className={inputClass}

              value={docCategory}

              onChange={(e) => setDocCategory(e.target.value)}

            >

              {DOC_TYPES.map((type) => (

                <option key={type} value={type}>{type}</option>

              ))}

            </select>

          </div>



          <input

            ref={fileInputRef}

            type="file"

            multiple

            accept=".jpg,.jpeg,.png,.webp,.pdf,.doc,.docx"

            className="hidden"

            onChange={uploadDocuments}

          />



          <button

            type="button"

            onClick={() => fileInputRef.current?.click()}

            className={`${primaryButton} mt-5`}

          >

            <Plus size={17} />

            Choose Documents

          </button>

        </div>



        <h3 className="mb-4 mt-8 text-lg font-bold text-[#263F41]">

          My Documents ({extraDocuments.length})

        </h3>



        {extraDocuments.length === 0 ? (

          <div className="rounded-xl border border-[#E5ECEB] p-8 text-center">

            <FileText

              size={30}

              className="mx-auto text-[#064B50]"

            />

            <p className="mt-3 text-[15px] font-semibold text-[#263F41]">

              No documents selected yet

            </p>

          </div>

        ) : (

          <div className="space-y-3">

            {extraDocuments.map((doc) => (

              <div

                key={doc.id}

                className="flex flex-wrap items-center gap-4 rounded-xl border border-[#E5ECEB] p-4"

              >

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF5F4] text-[#064B50]">

                  <FileText size={24} />

                </div>



                <div className="min-w-0 flex-1">

                  <p className="break-all text-[15px] font-bold text-[#263F41]">

                    {doc.name}

                  </p>



                  <p className="mt-1 text-sm text-[#526467]">

                    {doc.category} · {(doc.size / 1024).toFixed(1)} KB

                  </p>

                </div>



                <div className="flex flex-wrap gap-2">

                  {/**** Browser-supported formats can be opened ****/}

                  {(/\.(pdf|jpg|jpeg|png|webp)$/i.test(doc.name)) && (

                    <button type="button" onClick={()=>doc.file ? window.open(doc.url,"_blank") : openDocument(doc)}

                      className={outlineButton}

                    >

                      <Eye size={17} />

                      View

                    </button>

                  )}



                  <button type="button" onClick={()=>doc.file ? window.open(doc.url,"_blank") : openDocument(doc)}

                    className={outlineButton}

                  >

                    <Download size={17} />

                    Download

                  </button>



                  <button

                    type="button"

                    onClick={() => removeDocument(doc.id)}

                    className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-600"

                  >

                    <Trash2 size={17} />

                    Remove

                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

    );

  }



  function renderJourney() {

    return (

      <section className={cardClass}>

        <SectionTitle

          icon={Activity}

          title="Patient Journey Tracker"

          description="16 stages from registration to post-treatment follow-up."

        />



        <div className="mb-6 rounded-xl bg-[#F0F8F7] p-5">

          <div className="mb-3 flex items-center justify-between">

            <strong className="text-base text-[#263F41]">

              Journey Progress

            </strong>

            <strong className="text-xl text-[#064B50]">

              {journeyProgress}%

            </strong>

          </div>



          <div className="h-3 overflow-hidden rounded-full bg-[#DDEAE8]">

            <div

              className="h-full rounded-full bg-[#064B50]"

              style={{ width: `${journeyProgress}%` }}

            />

          </div>

        </div>



        <div className="mb-5 rounded-xl border border-[#D6E7E4] bg-[#F0F8F7] p-4 text-sm leading-6 text-[#344F51]">

          In production, official journey stages will be verified and

          updated by authorized Akeso staff. The controls below are

          only for testing the frontend design.

        </div>



        <div className="space-y-4">

          {journey.map((stage, index) => (

            <div

              key={stage.name}

              className="rounded-xl border border-[#E5ECEB] p-4 sm:p-5"

            >

              <div className="mb-4 flex items-start gap-3">

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF5F4] text-sm font-bold text-[#064B50]">

                  {index + 1}

                </span>



                <h3 className="pt-2 text-[15px] font-bold leading-6 text-[#263F41]">

                  {stage.name}

                </h3>

              </div>



              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

                <Field

                  label="Stage Status"

                  type="select"

                  options={[

                    "Not Started", "In Progress",

                    "Completed", "On Hold"

                  ]}

                  value={stage.status}

                  onChange={(value) =>

                    setJourney((previous) =>

                      previous.map((item, i) =>

                        i === index ? { ...item, status: value } : item

                      )

                    )

                  }

                />



                <Field

                  label="Relevant Date"

                  type="date"

                  value={stage.date}

                  onChange={(value) =>

                    setJourney((previous) =>

                      previous.map((item, i) =>

                        i === index ? { ...item, date: value } : item

                      )

                    )

                  }

                />



                <Field

                  label="Pending Requirements"

                  value={stage.requirements}

                  onChange={(value) =>

                    setJourney((previous) =>

                      previous.map((item, i) =>

                        i === index ? { ...item, requirements: value } : item

                      )

                    )

                  }

                />



                <Field

                  label="Remarks"

                  value={stage.remarks}

                  onChange={(value) =>

                    setJourney((previous) =>

                      previous.map((item, i) =>

                        i === index ? { ...item, remarks: value } : item

                      )

                    )

                  }

                />

              </div>

            </div>

          ))}

        </div>

      </section>

    );

  }



  function renderNotifications() {

    return (

      <section className={cardClass}>

        <SectionTitle

          icon={Bell}

          title="Notifications"

          description="Appointments, visa, travel and treatment updates."

        />



        <div className="rounded-xl border border-dashed border-[#D6E4E2] bg-[#FBFDFC] px-5 py-12 text-center">

          <Bell size={34} className="mx-auto text-[#064B50]" />



          <h3 className="mt-4 text-lg font-bold text-[#263F41]">

            No notifications yet

          </h3>



          <p className="mt-2 text-sm leading-6 text-[#526467]">

            Official reminders and notifications will appear here

            after backend integration.

          </p>

        </div>

      </section>

    );

  }



  function renderContent() {

    if (active === "overview") return renderOverview();

    if (active === "all-details") return renderAllDetails();

    if (FIELDS[active]) return renderSection(active);

    if (active === "documents") return renderDocuments();

    if (active === "journey") return renderJourney();

    if (active === "notifications") return renderNotifications();



    return null;

  }



  return (

    <main className="min-h-screen bg-[#F7FAF9] py-3 text-[#263F41] sm:py-4 lg:py-5">

      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">

        <div className="mb-4 flex items-center rounded-xl border border-[#E2EAEA] bg-white px-4 py-3 shadow-sm sm:px-5">

  <h1 className="text-lg font-bold text-[#064B50] sm:text-xl">

    My Profile Dashboard

  </h1>

</div>





        {notice && (

          <div

            role="status"

            className="mb-5 rounded-xl border border-[#D6E7E4] bg-[#EAF5F4] px-4 py-3 text-sm font-semibold text-[#064B50]"

          >

            {notice}

          </div>

        )}



        <div className="mb-5 lg:hidden">

          <button

            type="button"

            onClick={() => setMobileOpen((value) => !value)}

            className="flex w-full items-center justify-between rounded-xl border border-[#DDE8E6] bg-white px-4 py-4 text-sm font-bold text-[#263F41]"

          >

            <span className="flex items-center gap-3">

              {mobileOpen ? <X size={20} /> : <Menu size={20} />}

              {active === "all-details"

                ? "All My Details"

                : sectionName?.label || "Overview"}

            </span>



            <ChevronRight size={19} />

          </button>

        </div>



        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[265px_minmax(0,1fr)] xl:gap-7">

          <aside

            className={`rounded-2xl border border-[#E2EAEA] bg-white shadow-sm ${

              mobileOpen ? "block" : "hidden"

            } lg:sticky lg:top-24 lg:block lg:max-h-[calc(100vh-115px)] lg:overflow-y-auto`}

          >

            <div className="flex items-center gap-3 border-b border-[#E8EEEE] p-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EAF5F4] text-[#064B50]">

                <UserRound size={24} />

              </div>



              <div className="min-w-0">

                <p className="break-words text-base font-bold text-[#263F41]">

                  {name}

                </p>

                <p className="mt-1 break-all text-xs font-semibold text-[#064B50]">

                  {patientId || "Patient ID pending"}

                </p>

              </div>

            </div>



            <nav className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-2 lg:grid-cols-1">

              {NAV.map(({ id, label, icon: Icon }) => (

                <button

                  key={id}

                  type="button"

                  onClick={() => navigate(id)}

                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-[14px] font-semibold leading-5 ${

                    active === id

                      ? "bg-[#EAF5F4] text-[#064B50]"

                      : "text-[#344F51] hover:bg-[#F1F7F6]"

                  }`}

                >

                  <Icon

                    size={19}

                    className="shrink-0 text-[#064B50]"

                  />



                  <span className="min-w-0 flex-1">{label}</span>



                  {active === id && <ChevronRight size={16} />}

                </button>

              ))}

            </nav>

          </aside>



          <div className="min-w-0">

            {renderContent()}

          </div>

        </div>

      </div>

    </main>

  );

}











// import {
//   Activity,
//   Building2,
//   CalendarDays,
//   Clock3,
//   HeartPulse,
//   Mail,
//   Phone,
//   Pill,
//   ShieldCheck,
//   Stethoscope,
//   UserRound,
// } from "lucide-react";

// import { getUser } from "../utils/auth";

// /* =========================================================
//    MEDICAL HISTORY
//    CURRENTLY HARDCODED
// ========================================================= */

// const medicalHistory = [
//   {
//     id: 1,
//     date: "18 Sep 2026",
//     doctor: "Dr. Arjun Reddy",
//     speciality: "Cardiology",
//     hospital: "Akeso Partner Hospital, Hyderabad",
//     condition: "Hypertension",
//     treatment:
//       "Medication management and lifestyle modification.",
//     medicines:
//       "Amlodipine 5 mg – once daily",
//     status: "Follow-up",
//     nextVisit: "18 Dec 2026",
//   },
//   {
//     id: 2,
//     date: "06 Jul 2026",
//     doctor: "Dr. Sneha Kapoor",
//     speciality: "Orthopaedics",
//     hospital: "Akeso Partner Hospital, Hyderabad",
//     condition: "Lower Back Pain",
//     treatment:
//       "Physiotherapy and pain management.",
//     medicines:
//       "Supportive medication as advised",
//     status: "Completed",
//     nextVisit: "As Required",
//   },
//   {
//     id: 3,
//     date: "22 Mar 2026",
//     doctor: "Dr. Vikram Rao",
//     speciality: "General Medicine",
//     hospital: "Akeso Partner Hospital, Hyderabad",
//     condition: "Vitamin D Deficiency",
//     treatment:
//       "Vitamin supplementation and dietary advice.",
//     medicines:
//       "Vitamin D3 supplements",
//     status: "Completed",
//     nextVisit: "Completed",
//   },
//   {
//     id: 4,
//     date: "10 Jan 2026",
//     doctor: "Dr. Arjun Reddy",
//     speciality: "Cardiology",
//     hospital: "Akeso Partner Hospital, Hyderabad",
//     condition: "Routine Cardiac Evaluation",
//     treatment:
//       "ECG, blood pressure evaluation and specialist consultation.",
//     medicines: "No new medication",
//     status: "Completed",
//     nextVisit: "Completed",
//   },
//   {
//     id: 5,
//     date: "18 Nov 2025",
//     doctor: "Dr. Meera Sharma",
//     speciality: "General Medicine",
//     hospital: "Akeso Partner Hospital, Hyderabad",
//     condition: "General Health Checkup",
//     treatment:
//       "Routine health evaluation and preventive care advice.",
//     medicines: "No medication prescribed",
//     status: "Completed",
//     nextVisit: "As Required",
//   },
// ];

// /* =========================================================
//    PROFILE PAGE
// ========================================================= */

// export default function Profile() {
//   /* =======================================================
//      LOGGED-IN USER DETAILS
//   ======================================================= */

//   const user = getUser();

//   const userName =
//     user?.name ||
//     user?.full_name ||
//     user?.fullName ||
//     "User";

//   const userEmail =
//     user?.email ||
//     "Email not available";

//   const userMobile =
//     user?.mobile ||
//     user?.phone ||
//     user?.phone_number ||
//     "Mobile number not available";

//   return (
//     <main className="min-h-screen bg-[#F5F8F8]">
//       {/* =====================================================
//           MAIN RESPONSIVE LAYOUT

//           MOBILE  : Single column
//           TABLET  : Single column
//           DESKTOP : Sticky profile + history
//       ====================================================== */}

//       <section
//         className="
//           mx-auto
//           grid
//           w-full
//           max-w-[1400px]
//           grid-cols-1
//           gap-4
//           px-3
//           py-5

//           sm:gap-5
//           sm:px-5
//           sm:py-7

//           md:px-6

//           lg:grid-cols-[310px_minmax(0,1fr)]
//           lg:items-start
//           lg:gap-6
//           lg:px-8
//           lg:py-9

//           xl:grid-cols-[360px_minmax(0,1fr)]
//           xl:px-10
//           xl:py-10
//         "
//       >
//         {/* ===================================================
//             LEFT SIDE - PROFILE
//             DESKTOP STICKY
//         =================================================== */}

//         <aside
//           className="
//             w-full
//             min-w-0

//             lg:sticky
//             lg:top-[110px]
//             lg:self-start
//           "
//         >
//           <div
//             className="
//               overflow-hidden
//               rounded-[18px]
//               border
//               border-[#DCE8E7]
//               bg-white
//               shadow-[0_8px_30px_rgba(6,75,80,0.05)]

//               sm:rounded-[20px]
//               lg:rounded-[22px]
//             "
//           >
//             {/* ===============================================
//                 PROFILE HEADER
//             =============================================== */}

//             <div
//               className="
//                 relative
//                 overflow-hidden
//                 bg-[#064B50]
//                 px-4
//                 py-5
//                 text-center

//                 sm:px-5
//                 sm:py-6

//                 md:flex
//                 md:items-center
//                 md:gap-5
//                 md:px-6
//                 md:text-left

//                 lg:block
//                 lg:px-5
//                 lg:py-7
//                 lg:text-center
//               "
//             >
//               {/* DECORATION */}

//               <div
//                 className="
//                   absolute
//                   -right-12
//                   -top-12
//                   h-32
//                   w-32
//                   rounded-full
//                   border
//                   border-white/10
//                 "
//               />

//               <div
//                 className="
//                   absolute
//                   -bottom-16
//                   -left-14
//                   h-36
//                   w-36
//                   rounded-full
//                   border
//                   border-white/10
//                 "
//               />

//               {/* USER ICON */}

//               <div
//                 className="
//                   relative
//                   mx-auto
//                   flex
//                   h-[68px]
//                   w-[68px]
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-full
//                   border-[3px]
//                   border-[#C8942E]
//                   bg-white
//                   text-[#064B50]
//                   shadow-lg

//                   sm:h-[76px]
//                   sm:w-[76px]

//                   md:mx-0

//                   lg:mx-auto
//                   lg:h-[82px]
//                   lg:w-[82px]
//                 "
//               >
//                 <UserRound
//                   size={34}
//                   strokeWidth={1.6}
//                 />
//               </div>

//               {/* USER NAME */}

//               <div
//                 className="
//                   relative
//                   mt-3
//                   min-w-0

//                   md:mt-0
//                   lg:mt-4
//                 "
//               >
//                 <h2
//                   className="
//                     break-words
//                     text-[19px]
//                     font-semibold
//                     leading-tight
//                     text-white

//                     sm:text-[21px]
//                     lg:text-[22px]
//                   "
//                 >
//                   {userName}
//                 </h2>

//                 <p className="mt-1 text-[12px] text-white/70">
//                   Patient Profile
//                 </p>
//               </div>
//             </div>

//             {/* ===============================================
//                 PERSONAL INFORMATION
//             =============================================== */}

//             <div
//               className="
//                 p-4
//                 sm:p-5
//                 md:p-6
//                 lg:p-5
//                 xl:p-6
//               "
//             >
//               <div className="flex items-center gap-2">
//                 <div
//                   className="
//                     h-[3px]
//                     w-6
//                     rounded-full
//                     bg-[#C8942E]
//                   "
//                 />

//                 <h3
//                   className="
//                     text-[14px]
//                     font-semibold
//                     text-[#064B50]
//                   "
//                 >
//                   Personal Information
//                 </h3>
//               </div>

//               {/* =============================================
//                   MOBILE  = 1 COLUMN
//                   TABLET  = 3 COLUMNS
//                   DESKTOP = 1 COLUMN
//               ============================================= */}

//               <div
//                 className="
//                   mt-5
//                   grid
//                   grid-cols-1
//                   gap-5

//                   sm:grid-cols-2
//                   md:grid-cols-3
//                   lg:grid-cols-1
//                 "
//               >
//                 <ProfileInfo
//                   icon={UserRound}
//                   label="Full Name"
//                   value={userName}
//                 />

//                 <ProfileInfo
//                   icon={Mail}
//                   label="Email Address"
//                   value={userEmail}
//                 />

//                 <ProfileInfo
//                   icon={Phone}
//                   label="Mobile Number"
//                   value={userMobile}
//                 />
//               </div>
//             </div>
//           </div>
//         </aside>

//         {/* ===================================================
//             RIGHT SIDE
//         =================================================== */}

//         <div className="w-full min-w-0">
//           {/* =================================================
//               SUMMARY CARDS
//           ================================================= */}

//           <div
//             className="
//               grid
//               grid-cols-2
//               gap-2.5

//               sm:gap-3
//               md:grid-cols-4

//               lg:grid-cols-2
//               xl:grid-cols-4
//             "
//           >
//             <SummaryCard
//               icon={Stethoscope}
//               value="05"
//               label="Consultations"
//             />

//             <SummaryCard
//               icon={UserRound}
//               value="04"
//               label="Doctors Consulted"
//             />

//             <SummaryCard
//               icon={HeartPulse}
//               value="03"
//               label="Conditions"
//             />

//             <SummaryCard
//               icon={Pill}
//               value="04"
//               label="Treatments"
//             />
//           </div>

//           {/* =================================================
//               MEDICAL HISTORY HEADING
//           ================================================= */}

//           <div
//             className="
//               mt-5
//               rounded-[16px]
//               border
//               border-[#DCE8E7]
//               bg-white
//               p-4

//               sm:mt-6
//               sm:rounded-[20px]
//               sm:p-5

//               md:p-6
//             "
//           >
//             <div
//               className="
//                 flex
//                 items-start
//                 gap-3
//                 sm:gap-4
//               "
//             >
//               <div
//                 className="
//                   flex
//                   h-9
//                   w-9
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-lg
//                   bg-[#EEF6F5]
//                   text-[#064B50]

//                   sm:h-11
//                   sm:w-11
//                   sm:rounded-xl
//                 "
//               >
//                 <Activity size={19} />
//               </div>

//               <div className="min-w-0">
//                 <p
//                   className="
//                     text-[9px]
//                     font-bold
//                     uppercase
//                     tracking-[0.16em]
//                     text-[#C8942E]

//                     sm:text-[10px]
//                     sm:tracking-[0.18em]
//                   "
//                 >
//                   Medical History
//                 </p>

//                 <h1
//                   className="
//                     mt-1
//                     break-words
//                     text-[18px]
//                     font-semibold
//                     leading-6
//                     text-[#064B50]

//                     sm:text-[21px]
//                     sm:leading-7

//                     md:text-[24px]
//                   "
//                 >
//                   Consultation & Treatment History
//                 </h1>

//                 <p
//                   className="
//                     mt-2
//                     max-w-[700px]
//                     text-[12px]
//                     leading-5
//                     text-[#66797A]

//                     sm:text-[13px]
//                     sm:leading-6

//                     md:text-[14px]
//                   "
//                 >
//                   Previous doctor consultations,
//                   medical conditions, treatments,
//                   medications and follow-up history.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               HISTORY CARDS
//           ================================================= */}

//           <div
//             className="
//               mt-4
//               space-y-4

//               sm:mt-5
//               sm:space-y-5
//             "
//           >
//             {medicalHistory.map(
//               (record, index) => (
//                 <HistoryCard
//                   key={record.id}
//                   record={record}
//                   index={index}
//                 />
//               )
//             )}
//           </div>

//           {/* =================================================
//               NOTE
//           ================================================= */}

//           <div
//             className="
//               mt-5
//               flex
//               items-start
//               gap-3
//               rounded-[16px]
//               border
//               border-[#D6E5E3]
//               bg-[#EEF6F5]
//               p-4

//               sm:mt-6
//               sm:rounded-[18px]
//               sm:p-5
//             "
//           >
//             <ShieldCheck
//               size={19}
//               className="
//                 mt-0.5
//                 shrink-0
//                 text-[#064B50]
//               "
//             />

//             <div className="min-w-0">
//               <p
//                 className="
//                   text-[13px]
//                   font-semibold
//                   text-[#064B50]

//                   sm:text-[14px]
//                 "
//               >
//                 Medical History
//               </p>

//               <p
//                 className="
//                   mt-1
//                   text-[12px]
//                   leading-5
//                   text-[#607576]

//                   sm:text-[13px]
//                   sm:leading-6
//                 "
//               >
//                 Your profile information and medical
//                 consultation history are displayed here
//                 for easy reference.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// /* =========================================================
//    PROFILE INFORMATION
// ========================================================= */

// function ProfileInfo({
//   icon: Icon,
//   label,
//   value,
// }) {
//   return (
//     <div
//       className="
//         flex
//         min-w-0
//         items-start
//         gap-3
//       "
//     >
//       <div
//         className="
//           flex
//           h-9
//           w-9
//           shrink-0
//           items-center
//           justify-center
//           rounded-lg
//           bg-[#EEF6F5]
//           text-[#C8942E]

//           sm:h-10
//           sm:w-10
//         "
//       >
//         <Icon size={16} />
//       </div>

//       <div className="min-w-0 flex-1">
//         <p
//           className="
//             text-[9px]
//             font-semibold
//             uppercase
//             tracking-[0.08em]
//             text-[#8A9899]

//             sm:text-[10px]
//           "
//         >
//           {label}
//         </p>

//         <p
//           className="
//             mt-1
//             break-all
//             text-[12px]
//             font-medium
//             leading-5
//             text-[#344F51]

//             sm:break-words
//             sm:text-[13px]
//           "
//         >
//           {value}
//         </p>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    SUMMARY CARD
// ========================================================= */

// function SummaryCard({
//   icon: Icon,
//   value,
//   label,
// }) {
//   return (
//     <article
//       className="
//         min-w-0
//         rounded-[14px]
//         border
//         border-[#DCE8E7]
//         bg-white
//         p-3
//         transition-all
//         duration-300

//         sm:rounded-[16px]
//         sm:p-4

//         hover:-translate-y-1
//         hover:border-[#C8942E]/40
//         hover:shadow-[0_10px_25px_rgba(6,75,80,0.06)]
//       "
//     >
//       <div
//         className="
//           flex
//           h-8
//           w-8
//           items-center
//           justify-center
//           rounded-lg
//           bg-[#EEF6F5]
//           text-[#064B50]

//           sm:h-9
//           sm:w-9
//         "
//       >
//         <Icon size={16} />
//       </div>

//       <p
//         className="
//           mt-3
//           text-[21px]
//           font-semibold
//           leading-none
//           text-[#064B50]

//           sm:text-[24px]
//         "
//       >
//         {value}
//       </p>

//       <p
//         className="
//           mt-1.5
//           break-words
//           text-[10px]
//           leading-4
//           text-[#708283]

//           sm:mt-2
//           sm:text-[12px]
//           sm:leading-5
//         "
//       >
//         {label}
//       </p>
//     </article>
//   );
// }

// /* =========================================================
//    HISTORY CARD
// ========================================================= */

// function HistoryCard({
//   record,
//   index,
// }) {
//   const isCompleted =
//     record.status === "Completed";

//   return (
//     <article
//       className="
//         min-w-0
//         overflow-hidden
//         rounded-[16px]
//         border
//         border-[#DCE8E7]
//         bg-white
//         transition-all
//         duration-300

//         sm:rounded-[20px]

//         hover:border-[#C8942E]/40
//         hover:shadow-[0_12px_35px_rgba(6,75,80,0.07)]
//       "
//     >
//       {/* =====================================================
//           DOCTOR HEADER
//       ====================================================== */}

//       <div
//         className="
//           border-b
//           border-[#E5EEEE]
//           bg-[#F8FAFA]
//           px-3.5
//           py-3.5

//           sm:px-5
//           sm:py-4
//         "
//       >
//         <div
//           className="
//             flex
//             flex-col
//             gap-3

//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//           "
//         >
//           {/* DOCTOR DETAILS */}

//           <div
//             className="
//               flex
//               min-w-0
//               items-center
//               gap-3
//             "
//           >
//             <div
//               className="
//                 flex
//                 h-9
//                 w-9
//                 shrink-0
//                 items-center
//                 justify-center
//                 rounded-full
//                 bg-[#064B50]
//                 text-[11px]
//                 font-bold
//                 text-white

//                 sm:h-11
//                 sm:w-11
//                 sm:text-[12px]
//               "
//             >
//               {String(index + 1).padStart(
//                 2,
//                 "0"
//               )}
//             </div>

//             <div className="min-w-0">
//               <h3
//                 className="
//                   break-words
//                   text-[15px]
//                   font-semibold
//                   leading-5
//                   text-[#064B50]

//                   sm:text-[17px]
//                   sm:leading-6
//                 "
//               >
//                 {record.doctor}
//               </h3>

//               <p
//                 className="
//                   mt-0.5
//                   text-[11px]
//                   font-medium
//                   text-[#C8942E]

//                   sm:text-[13px]
//                 "
//               >
//                 {record.speciality}
//               </p>
//             </div>
//           </div>

//           {/* DATE */}

//           <div
//             className="
//               flex
//               w-fit
//               items-center
//               gap-2
//               rounded-full
//               border
//               border-[#DCE8E7]
//               bg-white
//               px-3
//               py-1.5
//               text-[11px]
//               font-medium
//               text-[#607576]

//               sm:text-[12px]
//             "
//           >
//             <CalendarDays size={13} />
//             {record.date}
//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           CONTENT
//       ====================================================== */}

//       <div
//         className="
//           p-3.5
//           sm:p-5
//         "
//       >
//         {/* ===================================================
//             HOSPITAL
//         =================================================== */}

//         <div
//           className="
//             flex
//             min-w-0
//             items-start
//             gap-2.5
//             rounded-[12px]
//             bg-[#F7FAFA]
//             p-3

//             sm:gap-3
//             sm:rounded-[13px]
//             sm:p-3.5
//           "
//         >
//           <Building2
//             size={17}
//             className="
//               mt-0.5
//               shrink-0
//               text-[#C8942E]
//             "
//           />

//           <div className="min-w-0">
//             <p
//               className="
//                 text-[9px]
//                 font-bold
//                 uppercase
//                 tracking-[0.08em]
//                 text-[#879596]

//                 sm:text-[10px]
//               "
//             >
//               Hospital
//             </p>

//             <p
//               className="
//                 mt-1
//                 break-words
//                 text-[12px]
//                 font-medium
//                 leading-5
//                 text-[#344F51]

//                 sm:text-[14px]
//               "
//             >
//               {record.hospital}
//             </p>
//           </div>
//         </div>

//         {/* ===================================================
//             HISTORY DETAILS

//             MOBILE       = 1 column
//             TABLET       = 2 columns
//             DESKTOP      = 2 columns
//             LARGE SCREEN = 3 columns
//         =================================================== */}

//         <div
//           className="
//             mt-4
//             grid
//             grid-cols-1
//             gap-x-5
//             gap-y-4

//             sm:mt-5
//             sm:grid-cols-2
//             sm:gap-y-5

//             lg:grid-cols-2
//             2xl:grid-cols-3
//           "
//         >
//           <HistoryItem
//             icon={HeartPulse}
//             label="Disease / Condition"
//             value={record.condition}
//           />

//           <HistoryItem
//             icon={Stethoscope}
//             label="Treatment"
//             value={record.treatment}
//           />

//           <HistoryItem
//             icon={Pill}
//             label="Medication"
//             value={record.medicines}
//           />

//           <HistoryItem
//             icon={CalendarDays}
//             label="Consultation Date"
//             value={record.date}
//           />

//           <HistoryItem
//             icon={Clock3}
//             label="Next Visit"
//             value={record.nextVisit}
//           />

//           {/* STATUS */}

//           <div className="min-w-0">
//             <p
//               className="
//                 text-[9px]
//                 font-bold
//                 uppercase
//                 tracking-[0.08em]
//                 text-[#879596]

//                 sm:text-[10px]
//               "
//             >
//               Status
//             </p>

//             <span
//               className={`
//                 mt-2
//                 inline-flex
//                 rounded-full
//                 px-3
//                 py-1.5
//                 text-[10px]
//                 font-semibold

//                 sm:text-[11px]

//                 ${
//                   isCompleted
//                     ? "bg-[#EAF6EF] text-[#287548]"
//                     : "bg-[#FFF4E1] text-[#A56A0B]"
//                 }
//               `}
//             >
//               {record.status}
//             </span>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// /* =========================================================
//    HISTORY ITEM
// ========================================================= */

// function HistoryItem({
//   icon: Icon,
//   label,
//   value,
// }) {
//   return (
//     <div className="min-w-0">
//       <div className="flex items-center gap-2">
//         <Icon
//           size={13}
//           className="
//             shrink-0
//             text-[#C8942E]

//             sm:h-[14px]
//             sm:w-[14px]
//           "
//         />

//         <p
//           className="
//             text-[9px]
//             font-bold
//             uppercase
//             tracking-[0.07em]
//             text-[#879596]

//             sm:text-[10px]
//             sm:tracking-[0.08em]
//           "
//         >
//           {label}
//         </p>
//       </div>

//       <p
//         className="
//           mt-1.5
//           break-words
//           text-[12px]
//           font-medium
//           leading-5
//           text-[#344F51]

//           sm:mt-2
//           sm:text-[14px]
//           sm:leading-6
//         "
//       >
//         {value}
//       </p>
//     </div>
//   );
// }