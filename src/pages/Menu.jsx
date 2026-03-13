
// Mobile Images
import HeroMobile from '../assets/mobile-images/menu-header-mobile.png'
import HeroWeb from '../assets/web-images/menu-header-web.png'
import MadeleineMobile from '../assets/mobile-images/madeleine-mobile.png'
import MadeleineWeb from '../assets/web-images/madeleine-web.png'
import LemonTartMobile from '../assets/mobile-images/lemon-tart-mobile.png'
import LemonTartWeb from '../assets/web-images/lemon-tart-web.png'
import StrawberryTartMobile from '../assets/mobile-images/strawberry-tart-mobile.png'
import StrawberryTartWeb from '../assets/web-images/strawberry-tart-web.png'
import LatteMobile from '../assets/mobile-images/latte-mobile.png'
import LatteWeb from '../assets/web-images/latte-web.png'

// Components
import MenuItem from '../components/MenuItem'
import MenuNav from '../components/MenuNav'

//Data
import { floralPastries, herbDesserts, seasonalFruit, drinks } from '../data/menuData'

function Menu() {

    return(
        <>
            <img src={HeroMobile} alt='' className='block md:hidden' />
            <img src={HeroWeb} alt='' className='hidden md:block' />
            <div className='sticky top-0'>
                <MenuNav/>
            </div>
            <div id="floral-pastries" className='block md:flex md:px-[5rem] justify-center items-center'>
                <img src={MadeleineMobile} className='block md:hidden' alt='hero mobile' />
                <div className='mb-18 md:w-1/2 md:pl-[10rem] md:pr-[4rem]'>
                    <h3 className='title-red mt-14 mb-8 md:mb-12 text-center'>Floral Pastries</h3>
                    {floralPastries.map((pastry, index) => (
                        <MenuItem title={pastry.title} price={pastry.price} description={pastry.description} isRed={true} isLast={index === floralPastries.length - 1} />
                    ))}
                </div>
                <img src={MadeleineWeb} className='hidden md:block menu-img-desktop' alt='hero web' />
            </div>

            <div id='herb-desserts' className='block md:flex md:px-[5rem] justify-center items-center'>
                <img src={LemonTartMobile} className='block md:hidden' alt='lemon tart' />
                <img src={LemonTartWeb} className='hidden md:block menu-img-desktop' alt='hero web' />
                <div className='mb-18 md:w-1/2 md:pl-[4rem] md:pr-[10rem]'>
                    <h3 className='title-green mt-14 mb-8 md:mb-12 text-center'>Herb Desserts</h3>
                    {herbDesserts.map((herb) => (
                        <MenuItem title={herb.title} price={herb.price} description={herb.description} isRed={false} />
                    ))}
                </div>
            </div>

            <div id='seasonal-fruit' className='block md:flex md:px-[5rem] justify-center  items-center'>
                <img src={StrawberryTartMobile} className='block md:hidden' alt='hero mobile' />
                <div className='mb-18 md:w-1/2 md:pl-[10rem] md:pr-[4rem]'>
                    <h3 className='title-red mt-14 mb-8 md:mb-12 text-center'>Seasonal Fruit</h3>
                    {seasonalFruit.map((fruit) => (
                        <MenuItem title={fruit.title} price={fruit.price} description={fruit.description} isRed={true} />
                    ))}
                </div>
                <img src={StrawberryTartWeb} className='hidden md:block menu-img-desktop' alt='hero web' />
            </div>

            <div id='drinks' className='block md:flex md:px-[5rem] justify-center md:pb-[10rem] items-center'>
                <img src={LatteMobile} className='block md:hidden' alt='hero mobile' />
                <img src={LatteWeb} className='hidden md:block menu-img-desktop' alt='hero web' />
                <div className='mb-18 md:w-1/2 md:pl-[4rem] md:pr-[10rem]'>
                    <h3 className='mt-14 mb-8 md:mb-12 title-green text-center'>Drinks</h3>
                    {drinks.map((drink) => (
                        <MenuItem title={drink.title} price={drink.price} description={drink.description} isRed={false} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Menu