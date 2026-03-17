import { useLanguage } from "../components/LanguageContext";
import Slash from '../assets/slash-language-bar.png'

export default function LanguageBar() {
    const { lang, setLang } = useLanguage();

    return (
        <div className="lang-bar flex justify-center">
            <button
                className={`pt-2 mx-4 ${lang === "spa" ? "active-lang" : ""}`}
                onClick={() => setLang("spa")}
            >
                SPA
            </button>
            <img src={Slash} className="lang-bar-slash" alt="" />
            <button
                className={`pt-2 mx-4 ${lang === "eng" ? "active-lang" : ""}`}
                onClick={() => setLang("eng")}
            >
                ENG
            </button>
        </div>
    );
}