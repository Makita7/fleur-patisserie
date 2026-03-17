
import { useState, useEffect } from "react";
import { useLanguage } from "../components/LanguageContext";
import { HashLink } from "react-router-hash-link";
import './nav.css'

export default function MenuNav({ activeSection }) {

    const [activeHash, setActiveHash] = useState('#floral-pastries');

    useEffect(() => {
        const handleHashChange = () => {
        setActiveHash(window.location.hash);
        };

        window.addEventListener("hashchange", handleHashChange);

        return () => {
        window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 600);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { lang } = useLanguage();
    const hashLabels = {
        eng: {
            floral: "floral pastries",
            herb: "herb desserts",
            seasonal: "seasonal fruit",
            drinks: "drinks",
        },
        spa: {
            floral: "pasteleria floral",
            herb: "postres con hierbas",
            seasonal: "frutas de temporada",
            drinks: "infusiones",
        },
    }

    return(
        <div className={`menu-nav relative mb-6 flex flex-wrap justify-center align-center ${isScrolled ? "md:top-32" : "md:top-8"}`}>
            <HashLink
                smooth
                to="#floral-pastries"
                className={`menu-nav-link px-6 py-4 mx-4 ${
                    activeHash && activeSection === "#floral-pastries" ? "menu-active-link" : ""
                }`}
                onClick={() => setActiveHash("#floral-pastries")}
            >{ hashLabels[lang].floral }
            </HashLink>

            <HashLink
                smooth
                to="#herb-desserts"
                className={`menu-nav-link px-6 py-4 mx-4 ${
                    activeHash && activeSection === "#herb-desserts" ? "menu-active-link" : ""
                }`}
                onClick={() => setActiveHash("#herb-desserts")}
                >{ hashLabels[lang].herb }</HashLink>

            <HashLink
                smooth
                to="#seasonal-fruit"
                className={`menu-nav-link px-6 py-4 mx-4 ${
                    activeHash && activeSection === "#seasonal-fruit" ? "menu-active-link" : ""
                }`}
                onClick={() => setActiveHash("#seasonal-fruit")}
                >{ hashLabels[lang].seasonal }</HashLink>

            <HashLink
                smooth
                to="#drinks"
                className={`menu-nav-link px-6 py-4 mx-4 ${
                    activeHash && activeSection === "#drinks" ? "menu-active-link" : ""
                }`}
                onClick={() => setActiveHash("#drinks")}
            >{ hashLabels[lang].drinks }</HashLink>

        </div>
    )
}