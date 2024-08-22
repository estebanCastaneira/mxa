import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLng: ["es", "en"],
    fallbackLng: "es",
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/languages/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });

export default i18n;
