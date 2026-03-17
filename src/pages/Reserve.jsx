import { locations, reserveLabels } from '../data/reserveData'
import { useLanguage } from "../components/LanguageContext";
import ReserveTableBtn from '../components/ReserveTableBtn'

const Mendoza = locations[0];
const BsAs = locations[1];

// Mobile Images
import MendozaMobile from '../assets/mobile-images/mendoza-reservation-mobile.png'
import BuenosAiresMobile from '../assets/mobile-images/buenos-aires-reservation-mobile.png'

// Web Images
import MendozaWeb from '../assets/web-images/mendoza-reservation-web.png'
import BuenosAiresWeb from '../assets/web-images/buenos-aires-reservation-web.png'


export default function Reserve() {
    const { lang } = useLanguage();
    const labels = reserveLabels[lang];

    return (
        <div>
            <h1 className='title-red text-center mt-8 mb-12'>{ lang === 'eng' ? "Reservations" : "Reservas" }</h1>
            <div className="md:container md:mx-auto md:px-6 md:flex md:gap-20 justify-center mb-20">
                <div className="flex flex-col items-center text-center mb-16 md:mb-0">
                    <img src={MendozaMobile} alt="" className="block md:hidden w-full"/>
                    <img src={MendozaWeb} alt="" className="hidden md:block w-full max-full"/>
                    <div className="mt-8 max-w-md flex flex-col justify-center items-center">
                        <h4 className='title-green title-reservation'>{Mendoza.location}</h4>
                        <p className='mt-4'>{labels.address}:</p>
                        <p>{Mendoza.address}</p>
                        <p className='mt-4'>{labels.hours}:</p>
                        <div className='flex'>
                            <p>{labels.monFri}</p>
                            <p className='mr-3 ml-4'>·</p>
                            <p>{Mendoza.hours.MonFri}</p>
                        </div>
                        <div className='flex'>
                            <p>{labels.satSun}</p>
                            <p className='mr-3 ml-4'>·</p>
                            <p>{Mendoza.hours.SatSun}</p>
                        </div>
                        <p className='mt-4'>{labels.phone}:</p>
                        <p className='mb-8'>{Mendoza.phone}</p>
                        <ReserveTableBtn link={labels.link} />
                    </div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img src={BuenosAiresMobile} alt="" className="block md:hidden w-full"/>
                    <img src={BuenosAiresWeb} alt="" className="hidden md:block w-full max-full"/>
                    <div className="mt-8 max-w-md flex flex-col justify-center items-center">
                        <h4 className='title-green title-reservation'>{BsAs.location}</h4>
                        <p className='mt-4'>{labels.address}:</p>
                        <p>{BsAs.address}</p>
                        <p className='mt-4'>{labels.hours}:</p>
                        <div className='flex'>
                            <p>{labels.monFri}</p>
                            <p className='mr-3 ml-4'>·</p>
                            <p>{BsAs.hours.MonFri}</p>
                        </div>
                        <div className='flex'>
                            <p>{labels.satSun}</p>
                            <p className='mr-3 ml-4'>·</p>
                            <p>{BsAs.hours.SatSun}</p>
                        </div>
                        <p className='mt-4'>{labels.phone}:</p>
                        <p className='mb-8'>{BsAs.phone}</p>
                        <ReserveTableBtn link={labels.link} />
                    </div>
                </div>
            </div>
        </div>
    )
}