
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
    return (
        <div className='garden'>
            <div className='block md:flex md:px-[5rem] justify-center items-center'>
                <img src={GardenHeroMobile} className="block md:hidden" />
                <div className='hidden md:flex justify-end w-1/2'>
                    <img src={GardenHeroWeb} className=" garden-hero-img-desktop" />
                </div>
                <div className='px-8 mt-8 mb-14 md:mb-0 md:w-1/2 md:pl-[4rem] md:pr-[10rem] text-center md:text-left md:my-0'>
                    <h1 className='title-green'>Our Garden</h1>
                    <p>A quiet corner to enjoy pastries, coffee, and fresh air.</p>
                    <hr className='line-green' />
                </div>
            </div>

            <div className='block md:flex md:px-[5rem] justify-center items-center md:h-[60rem]'>
                <img src={GardenMacaroonsMobile} className="block md:hidden" />
                <div className='mt-8 mb-12 mx-10 md:my-0 md:w-1/2 md:pl-[10rem] md:pr-[4rem]'>
                    <h3 className='title-red'>Perfect for Unwinding</h3>
                    <p>Our garden inspires the flavors of the patisserie. Seasonal fruits, fresh herbs, and natural ingredients help shape many of our pastries and drinks. It’s a simple idea—fresh ingredients, baked with care, and enjoyed just a few steps away in the garden.</p>
                </div>
                <img src={GardenMacaroonsWeb} className="hidden md:block garden-macaroon-desktop" />
            </div>

            <div className='block md:flex md:px-[5rem] justify-center items-center'>
                <img src={GardenTableMobile} className="block md:hidden" />
                <img src={GardenTableWeb} className="hidden md:block garden-img-table-desktop" />
                <div className='mt-8 mb-12 mx-10 md:my-0 md:w-1/2 md:pl-[4rem] md:pr-[10rem]'>
                    <h3 className='title-green'>Changing With the Seasons</h3>
                    <p>The garden changes throughout the year. In spring and summer, the space fills with flowers and sunlight. During autumn, warm drinks and golden light make it the perfect cozy corner. Each season brings a new atmosphere to enjoy.</p>
                </div>
            </div>

            <div className='mb-20 md:my-30 md:flex relative'>
                <img src={GardenVisitMobile} className="block md:hidden" />
                <img src={GardenVisitWeb} className="hidden md:block menu-img-visit mx-auto" />
                <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center md:mr-20'>
                    <h3>Visit Us</h3>
                    <p className='px-12 md:px-0 md:w-1/3'>The garden is open during our regular store hours and available at both of our locations.</p>
                </div>
            </div>
        </div>
    )
}