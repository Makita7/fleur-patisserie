
import { linksEng } from '../data/navData'
import { NavLink } from "react-router-dom"
import './nav.css'
import LanguageBar from './LanguageBar';

export default function NavMobile() {

    const links = [
        { to: "/", label: "menu", end: true },
        { to: "/garden", label: "garden" },
        { to: "/about", label: "about" },
        { to: "/visit", label: "visit" },
        { to: "/reserve", label: "reserve" },
    ];

    return(
        <div className="hidden md:flex justify-between items-center nav-web mt-8 px-[10rem] z-10 sticky top-0">
            <p className="nav-logo">Fleur Patisserie</p>
            <div className="flex">
                { linksEng.map((link) => (
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