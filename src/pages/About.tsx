
import { useLanguage } from "../components/LanguageContext";
import { aboutData } from "../data/aboutData";
import './about.css'

//Mobile Images
import AboutBaristaMobile from '../assets/mobile-images/barista-mobile.png'
import AboutLatteMobile from '../assets/mobile-images/latte-about-mobile.png'
import AboutCroissantMobile from '../assets/mobile-images/croissants-mobile.png'

//Web Images
import AboutBaristaWeb from '../assets/web-images/barista-web.png'
import AboutLatteWeb from '../assets/web-images/latte-about-web.png'
import AboutCroissantWeb from '../assets/web-images/croissants-web.png'

export default function About() {

    const { lang } = useLanguage();
    const about = aboutData[lang];

    return(
        <div className='md:px-30'>
            <div className='md:flex md:justify-center md:items-center'>
                <img src={AboutBaristaMobile} className='block md:hidden' />
                <div className='hidden md:flex md:w-1/2 justify-end py-20 pl-30 pr-10'>
                    <img src={AboutBaristaWeb}  />
                </div>
                <div className='mt-8 mb-12 mx-10 md:w-1/2 md:pl-16 md:pr-40'>
                    <h3 className='title-red' >{about.title}</h3>
                    <hr className='line-red mb-5' />
                    <p className="mb-8">{about.textHeader1}</p>
                    <p>{about.textHeader2}</p>
                </div>
            </div>
            <div className='md:flex md:justify-center md:items-center'>
                <img src={AboutLatteMobile} className='block md:hidden' />
                <div className='mt-8 mb-12 mx-10 md:pr-16 md:pl-40'>
                    <h3 className='title-red' >{about.titleOurCoffee}</h3>
                    <hr className='line-red mb-5' />
                    <p className="mb-8">{about.textOurCoffee1}</p>
                    <p>{about.textOurCoffee2}</p>
                </div>
                <img src={AboutLatteWeb} className='hidden md:block w-1/2 py-20 pl-30 pr-10' />
            </div>
            <div className='mb-20 md:flex md:justify-center md:items-center'>
                <img src={AboutCroissantMobile} className='block md:hidden' />
                <div className='hidden md:flex md:w-1/2 justify-end py-20 pr-30 pl-10'>
                    <img src={AboutCroissantWeb} className='' />
                </div>
                <div className='mt-8 mb-12 mx-10 md:w-1/2 md:pl-16 md:pr-40'>
                    <h3 className='title-red'>{about.titleOurPastries}</h3>
                    <hr className='line-red mb-5'/>
                    <p className="mb-8">{about.textOurPastries1}</p>
                    <p>{about.textOurPastries2}</p>
                </div>
            </div>
        </div>
    )
}