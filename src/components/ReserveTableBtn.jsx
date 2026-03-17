import { useLanguage } from "../components/LanguageContext";
import ArrowIcon from '../assets/white-arrow-icon.png'

export default function ReserveTableBtn({link}){
    const { lang } = useLanguage();

    const labels = {
        eng: "Reserve a Table",
        spa: "Reserva tu Mesa",
    }

    return(
        <button className='flex items-center justify-center' onClick={()=> window.open(link, "_blank")} >
            {labels[lang]}
            <img className='icon ml-4' src={ArrowIcon} />
        </button>
    )
}