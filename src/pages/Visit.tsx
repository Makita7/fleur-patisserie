
import { useLanguage } from "../components/LanguageContext";
import { visit } from "../data/VisitData";
import ReserveTableBtn from '../components/ReserveTableBtn'

// Mobile Images
import VisitGardenMobile from '../assets/mobile-images/garden-visit-mobile.png'
import VisitFlowerMobile from '../assets/mobile-images/flower-mobile.png'
import VisitVeggiesMobile from '../assets/mobile-images/vegetables-mobile.png'
import VisitLattesMobile from '../assets/mobile-images/latte-visit-mobile.png'

// Web Images
import VisitGardenWeb from '../assets/web-images/garden-visit-web.png'
import VisitFlowerWeb from '../assets/web-images/flower-web.png'
import VisitVeggiesWeb from '../assets/web-images/vegetables-web.png'
import VisitLattesWeb from '../assets/web-images/latte-visit-web.png'
import VisitLeavesHeaderWeb from '../assets/visit-header-leaves.png'
import VisitLeavesFooterWeb from '../assets/visit-leaves.png'


export default function Visit() {

    const { lang } = useLanguage();
    const visits = visit[lang];

    return(
        <div className='md:px-30'>
            <div className='md:flex md:justify-center'>
                <div className='mt-8 mb-12 mx-10 md:pr-16 md:pl-40 md:mt-56'>
                    <h1 className='title-red'>{visits.title}</h1>
                    <hr className='line-red mb-4' />
                    <p>{visits.textHeader}</p>
                    <img src={VisitLeavesHeaderWeb} className='w-[90%] md:w-[70%] md:mt-4' />
                </div>
                <img src={VisitGardenMobile} className='blobk md:hidden' />
                <img src={VisitGardenWeb} className='hidden md:block w-1/2' />
            </div>

            <div className='md:flex mt-20 md:mt-40 md:mb-20'>
                <img src={VisitFlowerMobile} className='blobk md:hidden' />
                <img src={VisitFlowerWeb} className='hidden md:block w-1/2' />
                <div className='mt-8 mb-12 mx-10 md:w-1/2 md:pl-16 md:pr-40 md:mt-24'>
                    <h3 className='title-red mb-4' >{visits.titlePlace}</h3>
                    <p>{visits.textPlace}</p>
                </div>
            </div>

            <div className='text-center my-40 mx-10 md:flex md:flex-col md:items-center md:justify-center md:w-1/2 md:mx-auto md:h-88'>
                <h3 className='title-red mb-4' >{visits.titleSeating}</h3>
                <p className=''>{visits.textSeating}</p>
            </div>

            <div className='md:flex md:justify-center md:items-center'>
                <img src={VisitVeggiesMobile} className='blobk md:hidden' />
                <img src={VisitVeggiesWeb} className='hidden md:block w-1/3' />
                <div className='mt-8 mb-12 mx-10 md:w-1/2 md:pl-16 md:pr-40'>
                    <h3 className='title-green mb-4'>{visits.titleBotanical}</h3>
                    <p>{visits.textBotanical}</p>
                    <a>{visits.linkText}</a>
                </div>
            </div>

            <div className='md:flex md:justify-center md:items-center md:mt-12'>
                <img src={VisitLattesMobile} className='blobk md:hidden' />
                <div className='mt-8 mb-12 mx-10 md:pr-16 md:pl-40'>
                    <img src={VisitLeavesFooterWeb} className='w-1/3 md:w-[28%]' />
                    <h3 className='title-red mb-4'>{visits.titlePlan}</h3>
                    <p>{visits.textPlan}</p>
                    <div className="flex mt-8 mb-4 justify-end">
                        <ReserveTableBtn link='' />
                    </div>
                </div>
                <img src={VisitLattesWeb} className='hidden md:block w-1/2  py-20 pr-30 pl-10' />
            </div>


        </div>
    )
}