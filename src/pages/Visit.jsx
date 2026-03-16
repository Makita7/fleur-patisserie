
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
    return(
        <div className='md:px-30'>
            <div className='md:flex md:justify-center'>
                <div className='mt-8 mb-12 mx-10 md:pr-[4rem] md:pl-[10rem] md:mt-[14rem]'>
                    <h1 className='title-red'>Visit Fleur</h1>
                    <hr className='line-red mb-4' />
                    <p>Step into a calm garden atmosphere where pastries, coffee, and nature come together. Whether you're stopping by for a quick espresso or a slow afternoon with friends, Fleur Patisserie is a place to pause and enjoy the moment.</p>
                    <img src={VisitLeavesHeaderWeb} className='w-[90%] md:w-[70%] md:mt-4' />
                </div>
                <img src={VisitGardenMobile} className='blobk md:hidden' />
                <img src={VisitGardenWeb} className='hidden md:block w-1/2' />
            </div>

            <div className='md:flexv mt-20 md:mt-40 md:mb-20'>
                <img src={VisitFlowerMobile} className='blobk md:hidden' />
                <img src={VisitFlowerWeb} className='hidden md:block w-1/2' />
                <div className='mt-8 mb-12 mx-10 md:w-1/2 md:pl-[4rem] md:pr-[10rem] md:mt-[6rem]'>
                    <h3 className='title-red mb-4' >A Place to Slow Down</h3>
                    <p>At Fleur, we believe that enjoying a pastry should be a moment to savor. Our spaces combine soft natural light, greenery, and warm hospitality to create a peaceful escape from the pace of the city.</p>
                </div>
            </div>

            <div className='text-center my-40 mx-10 md:flex md:flex-col md:items-center md:justify-center md:w-1/2 md:mx-auto md:h-[22rem]'>
                <h3 className='title-red mb-4' >Garden Seating</h3>
                <p className=''>Many of our guests choose to sit in the garden, surrounded by plants and fresh air. It's the perfect setting for enjoying a coffee, a pastry, and a quiet conversation.</p>
            </div>

            <div className='md:flex md:justify-center md:items-center'>
                <img src={VisitVeggiesMobile} className='blobk md:hidden' />
                <img src={VisitVeggiesWeb} className='hidden md:block w-1/3' />
                <div className='mt-8 mb-12 mx-10 md:w-1/2 md:pl-[4rem] md:pr-[10rem]'>
                    <h3 className='title-green mb-4'>Botanical Cooking Workshops</h3>
                    <p>At Fleur, we believe that enjoying a pastry should be a moment to savor. Our spaces combine soft natural light, greenery, and warm hospitality to create a peaceful escape from the pace of the city.</p>
                    <a>Follow us for upcoming workshops</a>
                </div>
            </div>

            <div className='md:flex md:justify-center md:items-center md:mt-12'>
                <img src={VisitLattesMobile} className='blobk md:hidden' />
                <div className='mt-8 mb-12 mx-10 md:pr-[4rem] md:pl-[10rem]'>
                    <img src={VisitLeavesFooterWeb} className='w-1/3 md:w-[28%]' />
                    <h3 className='title-red mb-4'>Plan Your Visit</h3>
                    <p>At Fleur, we believe that enjoying a pastry should be a moment to savor. Our spaces combine soft natural light, greenery, and warm hospitality to create a peaceful escape from the pace of the city.</p>
                    <div className="flex mt-8 mb-4 justify-end">
                        <ReserveTableBtn label='Reserve Table' link='' />
                    </div>
                </div>
                <img src={VisitLattesWeb} className='hidden md:block w-1/2  py-20 py-20 pr-30 pl-10' />
            </div>


        </div>
    )
}