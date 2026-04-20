"use client";

import { useEffect, useState } from "react";

type Language = "en" | "bn";

export default function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    document.documentElement.dataset.lang = language;
  }, [language]);

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
  }

  return (
    <div className="languageToggle" aria-label="Choose website language">
      <button
        type="button"
        className={language === "en" ? "active" : ""}
        onClick={() => changeLanguage("en")}
      >
        English
      </button>
      <button
        type="button"
        className={language === "bn" ? "active" : ""}
        onClick={() => changeLanguage("bn")}
      >
        বাংলা
      </button>
    </div>
  );
}
