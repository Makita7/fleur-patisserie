import { useLanguage } from "./LanguageContext";
import ArrowIcon from '../assets/white-arrow-icon.png'

type Props = {
    link: string;
}

export default function ReserveTableBtn({link} : Props){
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