import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
    const [lang, setLang] = useState(() => {
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
    return useContext(LanguageContext);
}