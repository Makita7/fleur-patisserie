import "./menu-item.css";
import Leaf from '../assets/leaf.png'
import LeafPink from '../assets/leaf-pink.png'

export default function MenuItem({ title, price, description, isNotLast = true, isRed }) {
    return (
        <div key={title} className={`menu-item mx-8 mb-4 ${isNotLast ? "border-bottom" : ""}`}>
            <div className="flex align-center text-wrap">
                <h4 className={`menu-item-title mr-6 ${isRed ? "title-red" : "title-green"}`}>{ title }</h4>
                <img src={isRed? LeafPink : Leaf} alt="" className="leaf mr-6" />
                <p className={`menu-item-price ${isRed ? "title-red" : "title-green"}`}>{ price }</p>
            </div>
            <p className="text-left">{ description }</p>
        </div>
    )
}
