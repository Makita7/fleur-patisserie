import { garden } from '../data/gardenData'
import { useLanguage } from "../components/LanguageContext";
import './garden.css'

// Mobile Images
import GardenHeroMobile from '../assets/mobile-images/menu-header-mobile.png'
import GardenMacaroonsMobile from '../assets/mobile-images/macarons-mobile.png'
import GardenTableMobile from '../assets/mobile-images/garden-table-mobile.png'
import GardenVisitMobile from '../assets/mobile-images/visit-us-mobile.png'

//Web Images
import GardenHeroWeb from '../assets/web-images/garden-header-web.png'
import GardenMacaroonsWeb from '../assets/web-images/macarons-web.png'
import GardenTableWeb from '../assets/web-images/garden-table-web.png'
import GardenVisitWeb from '../assets/web-images/visit-us-web.png'

//Components

export default function Garden() {

    const { lang } = useLanguage();
    const gardenData = garden[lang];

    return (
        <div className='garden'>
            <div className='block md:flex md:px-20 justify-center items-center'>
                <img src={GardenHeroMobile} className="block md:hidden" />
                <div className='hidden md:flex justify-end w-1/2'>
                    <img src={GardenHeroWeb} className=" garden-hero-img-desktop" />
                </div>
                <div className='px-8 mt-8 mb-14 md:mb-0 md:w-1/2 md:pl-16 md:pr-40 text-center md:text-left md:my-0'>
                    <h1 className='title-green'>{gardenData.title}</h1>
                    <p>{gardenData.textHeader}</p>
                    <hr className='line-green' />
                </div>
            </div>

            <div className='block md:flex md:px-20 justify-center items-center md:h-240'>
                <img src={GardenMacaroonsMobile} className="block md:hidden" />
                <div className='mt-8 mb-12 mx-10 md:my-0 md:w-1/2 md:pl-40 md:pr-16'>
                    <h3 className='title-red'>{gardenData.titleUnwind}</h3>
                    <p>{gardenData.textUnwind}</p>
                </div>
                <img src={GardenMacaroonsWeb} className="hidden md:block garden-macaroon-desktop" />
            </div>

            <div className='block md:flex md:px-20 justify-center items-center'>
                <img src={GardenTableMobile} className="block md:hidden" />
                <img src={GardenTableWeb} className="hidden md:block garden-img-table-desktop" />
                <div className='mt-8 mb-12 mx-10 md:my-0 md:w-1/2 md:pl-16 md:pr-40'>
                    <h3 className='title-green'>{gardenData.titleSeason}</h3>
                    <p>{gardenData.textSeason}</p>
                </div>
            </div>

            <div className='mb-20 md:my-30 md:flex relative'>
                <img src={GardenVisitMobile} className="block md:hidden" />
                <img src={GardenVisitWeb} className="hidden md:block menu-img-visit mx-auto" />
                <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center md:mr-20'>
                    <h3>{gardenData.titleVisit}</h3>
                    <p className='px-12 md:px-0 md:w-1/3'>{gardenData.textVisit}</p>
                </div>
            </div>
        </div>
    )
}