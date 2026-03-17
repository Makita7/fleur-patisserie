
// import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
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

    return(
        <div className="menu-nav relative md:top-32 mb-6 flex flex-wrap justify-center align-center">
            <HashLink
                smooth
                to="#floral-pastries"
                className={`menu-nav-link px-6 py-4 mx-4 ${
                    activeHash && activeSection === "#floral-pastries" ? "menu-active-link" : ""
                }`}
                onClick={() => setActiveHash("#floral-pastries")}
            >floral pastries
            </HashLink>

            <HashLink
                smooth
                to="#herb-desserts"
                className={`menu-nav-link px-6 py-4 mx-4 ${
                    activeHash && activeSection === "#herb-desserts" ? "menu-active-link" : ""
                }`}
                onClick={() => setActiveHash("#herb-desserts")}
                >herb desserts</HashLink>

            <HashLink
                smooth
                to="#seasonal-fruit"
                className={`menu-nav-link px-6 py-4 mx-4 ${
                    activeHash && activeSection === "#seasonal-fruit" ? "menu-active-link" : ""
                }`}
                onClick={() => setActiveHash("#seasonal-fruit")}
                >seasonal fruit</HashLink>

            <HashLink
                smooth
                to="#drinks"
                className={`menu-nav-link px-6 py-4 mx-4 ${
                    activeHash && activeSection === "#drinks" ? "menu-active-link" : ""
                }`}
                onClick={() => setActiveHash("#drinks")}
            >drinks</HashLink>

        </div>
    )
}