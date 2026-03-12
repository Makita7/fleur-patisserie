
import { Link } from "react-router-dom"
import './nav.css'

export default function NavMobile() {
    return(
        <div className="nav mt-8">
            <Link to="/" className="nav-link px-6 py-4" >menu</Link>
            <Link to="/garden" className="nav-link px-6 py-4" >garden</Link>
            <Link to="/about" className="nav-link px-6 py-4" >about</Link>
            <Link to="/visit" className="nav-link px-6 py-4" >visit</Link>
            <Link to="/reserve" className="nav-link px-6 py-4" >reserve</Link>
        </div>
    )
}