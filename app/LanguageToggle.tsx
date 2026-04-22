"use client";

import { useEffect, useSyncExternalStore } from "react";

type Language = "en" | "bn";
const STORAGE_KEY = "site-language";
const CHANGE_EVENT = "site-language-change";

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
  if (savedLanguage === "bn") {
    return "bn";
  }

  return document.documentElement.dataset.lang === "bn" ||
    document.documentElement.lang === "bn"
    ? "bn"
    : "en";
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleChange = () => onStoreChange();

  window.addEventListener("storage", handleChange);
  window.addEventListener(CHANGE_EVENT, handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(CHANGE_EVENT, handleChange);
  };
}

export default function LanguageToggle() {
  const language = useSyncExternalStore(subscribe, getStoredLanguage, () => "en");

  useEffect(() => {
    document.documentElement.dataset.lang = language;
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  function changeLanguage(nextLanguage: Language) {
    document.documentElement.dataset.lang = nextLanguage;
    document.documentElement.lang = nextLanguage;
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  return (
    <div
      className="languageToggle"
      aria-label="Choose website language"
      suppressHydrationWarning
    >
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
