
import ArrowIcon from '../assets/white-arrow-icon.png'

export default function ReserveTableBtn({label='button', link}){
    return(
        <button className='flex items-center justify-center' onClick={()=> window.open(link, "_blank")} >
            {label}
            <img className='icon ml-4' src={ArrowIcon} />
        </button>
    )
}