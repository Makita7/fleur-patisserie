import './footer.css'
import Insta from '../assets/insta.png'
import Whatsapp from '../assets/whatsapp.png'
import type { Language, FooterLabels } from '../types/appTypes'
import { useLanguage } from './LanguageContext'

export default function Footer() {

    const { lang } = useLanguage();
    type labels = Record<Language, FooterLabels>;

    const Labels:labels  = {
        eng: {
            subtitle: 'Handcrafted Pastries',
            hours: 'Opening Hours',
            monFri: 'Mon to Fri',
            satSun: 'Sat to Sun',
            locations: 'Our Locations',
        },
        spa: {
            subtitle: 'Pastelería Artesanal',
            hours: 'Horarios',
            monFri: 'Lun a Vie',
            satSun: 'Sáb a Dom',
            locations: 'Nuestros Locales',
        },
    }

    const LangLabels = Labels[lang];

    return(
        <div className='footer flex justify-between items-end py-8 px-24 md:px-28'>
            <div className='flex flex-col footer-cols pb-12 md:pb-8'>
                <p className='logo pb-2'>Fleur Patisserie</p>
                <hr className='pb-4'/>
                <p>{LangLabels.subtitle}</p>
                <div className="pt-2 footer-icon-cont">
                    <img src={Insta} alt='link to instagram account' className='footer-icon' />
                    <img src={Whatsapp} alt='link to whatsapp us' className='footer-icon ml-15' />
                </div>
            </div>
            <div className='text-center hidden md:flex flex-col footer-cols pb-8'>
                <p className='mb-2'>{LangLabels.hours}</p>
                <hr className='mb-4' />
                <p>{LangLabels.monFri}: 8–19 hs</p>
                <p>{LangLabels.satSun}: 9–18 hs</p>
            </div>
            <div className='text-center hidden md:flex flex-col footer-cols pb-8'>
                <p className='mb-2'>{LangLabels.locations}</p>
                <hr className='mb-4' />
                <p>Palermo</p>
                <p>Godoy Cruz</p>
            </div>
        </div>
    )
}