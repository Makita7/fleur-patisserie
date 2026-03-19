import { useLanguage } from "./LanguageContext";
import { navLinks } from '../data/navData'
import { NavLink } from "react-router-dom"
import './nav.css'
import LanguageBar from './LanguageBar';

export default function NavMobile() {
    const { lang } = useLanguage();
    const links = navLinks[lang];

    return(
        <div className="hidden md:flex justify-between items-center nav-web mt-8 px-40 z-10 sticky top-0">
            <NavLink to="/">
                <p className="nav-logo">Fleur Patisserie</p>
            </NavLink>
            <div className="flex">
                { links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({isActive}) => `nav-link px-6 py-4 mx-2 ${ isActive ? "nav-link-active" : ""}`
                    }
                    >{link.label}</NavLink>
                ))}
            </div>
            <LanguageBar/>
        </div>
    )
}