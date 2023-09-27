// i18n.js
import { createI18n } from "vue-i18n";
import enLocale from "@/locales/en.json"; // Importiere die en.json-Datei als ES6-Modul

const messages = {
  en: enLocale, // Verwende das importierte Modul
  // Weitere Sprachen hier hinzufügen, wenn benötigt
};

const i18n = createI18n({
  locale: "en", // Standardmäßige Standardsprache
  messages,
});

export default i18n;
