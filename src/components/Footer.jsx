import './footer.css'
import Insta from '../assets/insta.png'
import Whatsapp from '../assets/whatsapp.png'

export default function Footer() {
    return(
        <div className='footer flex justify-between items-end py-8 px-24 md:px-28'>
            <div className='flex flex-col footer-cols pb-12 md:pb-8'>
                <p className='logo pb-2'>Fleur Patisserie</p>
                <hr className='pb-4'/>
                <p>Handcrafted Pastries</p>
                <div className="pt-2 footer-icon-cont">
                    <img src={Insta} alt='link to instagram account' className='footer-icon' />
                    <img src={Whatsapp} alt='link to whatsapp us' className='footer-icon ml-15' />
                </div>
            </div>
            <div className='text-center flex flex-col footer-cols pb-8 hidden md:block'>
                <p className='mb-2'>Opening Hours</p>
                <hr className='mb-4' />
                <p>Mon to Fri: 8–19 hs</p>
                <p>Sat to Sun: 9–18 hs</p>
            </div>
            <div className='text-center flex flex-col footer-cols pb-8 hidden md:block'>
                <p className='mb-2'>Our Locations</p>
                <hr className='mb-4' />
                <p>Palermo</p>
                <p>Godoy Cruz</p>
            </div>
        </div>
    )
}