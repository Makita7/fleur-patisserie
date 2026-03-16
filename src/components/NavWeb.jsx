
import { Link } from "react-router-dom"
import './nav.css'

export default function NavMobile() {
    return(
        <div className="hidden md:flex justify-between items-center nav-web mt-8 px-[10rem] z-10 sticky top-0">
            <p className="nav-logo">Fleur Patisserie</p>
            <div className="flex">
                <Link to="/" className="nav-link px-6 py-4" >menu</Link>
                <Link to="/garden" className="nav-link px-6 py-4" >garden</Link>
                <Link to="/about" className="nav-link px-6 py-4" >about</Link>
                <Link to="/visit" className="nav-link px-6 py-4" >visit</Link>
                <Link to="/reserve" className="nav-link px-6 py-4" >reserve</Link>
            </div>
            <div className="flex">lang</div>
        </div>
    )
}