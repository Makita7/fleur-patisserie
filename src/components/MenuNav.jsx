
// import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link";
import './nav.css'

export default function MenuNav() {
    return(
        <div className="menu-nav my-8 flex flex-wrap justify-center">
            <HashLink smooth to="#floral-pastries" className="menu-nav-link px-6 py-4 mx-4" >floral pastries</HashLink>
            <HashLink smooth to="#herb-desserts" className="menu-nav-link px-6 py-4 mx-4" >herb desserts</HashLink>
            <HashLink smooth to="#seasonal-fruit" className="menu-nav-link px-6 py-4 mx-4" >seasonal fruit</HashLink>
            <HashLink smooth to="#drinks" className="menu-nav-link px-6 py-4 mx-4" >drinks</HashLink>
        </div>
    )
}