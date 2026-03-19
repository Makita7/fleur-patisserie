import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Language } from "../types/appTypes";

type LanguageContextType = {
    lang: Language;
    setLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined> (undefined);

export default function LanguageProvider({ children }: {children: ReactNode}) {
    const [lang, setLang] = useState<Language>(() => {
        const saved = localStorage.getItem("lang");

        if (saved === "eng" || saved === "spa") return saved;

        return navigator.language.startsWith("es") ? "spa" : "eng";
    });

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }

    return context;
}