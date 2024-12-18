import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ExamsTime: "EXAMS TIME",
        Definition:
          "Here we are. Are you ready to fight? Don’t worry, we prepared some tips to be ready for your exams.",
        Quote: `"Nothing happens until something moves." - Albert Einstein`,
        Tips: "View exams tips",
      },
    },
    ar: {
      translation: {
        ExamsTime: "وقت الامتحانات",
        Definition:
          "نحن هنا. هل أنت مستعد للقتال؟ لا تقلق، فقد أعددنا لك بعض النصائح للاستعداد لامتحاناتك.",
        Quote: `"لا شيء يحدث حتى يتحرك شيء ما." - ألبرت أينشتاين`,
        Tips: "عرض نصائح الامتحان",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
