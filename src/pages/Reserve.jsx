import { locationsEng } from '../data/locationsData'
import ReserveTableBtn from '../components/ReserveTableBtn'

const Mendoza = locationsEng[0]
const BsAs = locationsEng[1]

// Mobile Images
import MendozaMobile from '../assets/mobile-images/mendoza-reservation-mobile.png'
import BuenosAiresMobile from '../assets/mobile-images/buenos-aires-reservation-mobile.png'

// Web Images
import MendozaWeb from '../assets/web-images/mendoza-reservation-web.png'
import BuenosAiresWeb from '../assets/web-images/buenos-aires-reservation-web.png'


export default function Reserve() {
    return (
        <div>
            <h1 className='title-red text-center mt-8 mb-12'>Reservations</h1>
            <div className="md:container md:mx-auto md:px-6 md:flex md:gap-20 justify-center mb-20">
                <div className="flex flex-col items-center text-center mb-16 md:mb-0">
                    <img src={MendozaMobile} alt="" className="block md:hidden w-full"/>
                    <img src={MendozaWeb} alt="" className="hidden md:block w-full max-full"/>
                    <div className="mt-8 max-w-md flex flex-col justify-center items-center">
                        <h4 className='title-green title-reservation'>{Mendoza.location}</h4>
                        <p className='mt-4'>Address:</p>
                        <p>{Mendoza.address}</p>
                        <p className='mt-4'>Hours:</p>
                        <div className='flex'>
                            <p>Mon - Fri</p>
                            <p className='mr-3 ml-4'>·</p>
                            <p>{Mendoza.hours.MonFri}</p>
                        </div>
                        <div className='flex'>
                            <p>Sat - Sun</p>
                            <p className='mr-3 ml-4'>·</p>
                            <p>{Mendoza.hours.SatSun}</p>
                        </div>
                        <p className='mt-4'>Phone:</p>
                        <p className='mb-8'>{Mendoza.phone}</p>
                        <ReserveTableBtn label='Reserve Table' link='' />
                    </div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img src={BuenosAiresMobile} alt="" className="block md:hidden w-full"/>
                    <img src={BuenosAiresWeb} alt="" className="hidden md:block w-full max-full"/>
                    <div className="mt-8 max-w-md flex flex-col justify-center items-center">
                        <h4 className='title-green title-reservation'>{BsAs.location}</h4>
                        <p className='mt-4'>Address:</p>
                        <p>{BsAs.address}</p>
                        <p className='mt-4'>Hours:</p>
                        <div className='flex'>
                            <p>Mon - Fri</p>
                            <p className='mr-3 ml-4'>·</p>
                            <p>{BsAs.hours.MonFri}</p>
                        </div>
                        <div className='flex'>
                            <p>Sat - Sun</p>
                            <p className='mr-3 ml-4'>·</p>
                            <p>{BsAs.hours.SatSun}</p>
                        </div>
                        <p className='mt-4'>Phone:</p>
                        <p className='mb-8'>{BsAs.phone}</p>
                        <ReserveTableBtn label='Reserve Table' link='' />
                    </div>
                </div>
            </div>
        </div>
    )
}