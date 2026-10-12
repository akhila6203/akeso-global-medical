
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const languages = [
  { code: "en", short: "EN", name: "English (USA)" },
  { code: "en-GB", short: "EN", name: "English (UK)" },
  { code: "hi", short: "HI", name: "Hindi (India)" },
  { code: "te", short: "TE", name: "Telugu (India)" },
  { code: "bn", short: "BN", name: "Bengali (India)" },
  { code: "pa", short: "PA", name: "Punjabi (India)" },
  { code: "mr", short: "MR", name: "Marathi (India)" },
  { code: "ta", short: "TA", name: "Tamil (India)" },
  { code: "ja", short: "JA", name: "Japanese (Japan)" },
  { code: "ru", short: "RU", name: "Russian (Russia)" },
  { code: "fr", short: "FR", name: "French (France)" },
  { code: "de", short: "DE", name: "German (Germany)" },
  { code: "ar", short: "AR", name: "Arabic (UAE)" },
  { code: "zh", short: "ZH", name: "Chinese (China)" },
  { code: "es", short: "ES", name: "Spanish (Spain)" },
  { code: "ko", short: "KO", name: "Korean (South Korea)" },
  { code: "pt", short: "PT", name: "Portuguese (Brazil)" },
];

const resources = {
  en: {
    translation: {
      home: "Home",
      speciality: "Speciality",
      healthLibrary: "Health Library",
      doctors: "Our Doctors",
      services: "Services",
      internationalPatients: "International Patients",
      contact: "Contact Us",
      requestCallback: "Request Call Back",
      language: "Select Language",
    },
  },
  te: {
    translation: {
      home: "హోమ్",
      speciality: "వైద్య ప్రత్యేకతలు",
      healthLibrary: "ఆరోగ్య సమాచార కేంద్రం",
      doctors: "మా వైద్యులు",
      services: "సేవలు",
      internationalPatients: "అంతర్జాతీయ రోగులు",
      contact: "మమ్మల్ని సంప్రదించండి",
      requestCallback: "తిరిగి కాల్ చేయమని కోరండి",
      language: "భాషను ఎంచుకోండి",
    },
  },
  hi: {
    translation: {
      home: "होम",
      speciality: "चिकित्सा विशेषज्ञताएँ",
      healthLibrary: "स्वास्थ्य पुस्तकालय",
      doctors: "हमारे डॉक्टर",
      services: "सेवाएँ",
      internationalPatients: "अंतरराष्ट्रीय मरीज",
      contact: "संपर्क करें",
      requestCallback: "कॉल बैक का अनुरोध करें",
      language: "भाषा चुनें",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: languages.some((item) => item.code === localStorage.getItem("akeso-language"))
    ? localStorage.getItem("akeso-language")
    : "en",
  fallbackLng: "en",
  supportedLngs: languages.map((item) => item.code),
  load: "currentOnly",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

i18n.on("languageChanged", (language) => {
  localStorage.setItem("akeso-language", language);

  document.documentElement.lang = language;
  document.documentElement.dir =
    language === "ar" ? "rtl" : "ltr";
});

export default i18n;
