
// Mobile Images
import HeroMobile from '../assets/mobile-images/menu-header-mobile.png'
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

//Data
import { floralPastries, herbDesserts, seasonalFruit, drinks } from '../data/menuData'

function Menu() {

    return(
        <>
            <img src={HeroMobile} alt=''/>
            <div>
                submenu
            </div>
            <div className='block md:flex'>
                <img src={MadeleineMobile} className='block md:hidden' alt='hero mobile' />
                <div className='mb-18'>
                    <h3 className='title-red mt-14 mb-8'>Floral Pastries</h3>
                    {floralPastries.map((pastry) => (
                        <MenuItem title={pastry.title} price={pastry.price} description={pastry.description} isRed={true} />
                    ))}
                </div>
                <img src={MadeleineWeb} className='hidden md:block' alt='hero web' />
            </div>
            <div className='block md:flex'>
                <img src={LemonTartMobile} className='block md:hidden' alt='lemon tart' />
                <div className='mb-18'>
                    <h3 className='title-green mt-14 mb-8'>Herb Desserts</h3>
                    {herbDesserts.map((herb) => (
                        <MenuItem title={herb.title} price={herb.price} description={herb.description} isRed={false} />
                    ))}
                </div>
                <img src={LemonTartWeb} className='hidden md:block' alt='hero web' />
            </div>
            <div className='block md:flex'>
                <img src={StrawberryTartMobile} className='block md:hidden' alt='hero mobile' />
                <div className='mb-18'>
                    <h3 className='title-red mt-14 mb-8'>Seasonal Fruit</h3>
                    {seasonalFruit.map((fruit) => (
                        <MenuItem title={fruit.title} price={fruit.price} description={fruit.description} isRed={true} />
                    ))}
                </div>
                <img src={StrawberryTartWeb} className='hidden md:block' alt='hero web' />
            </div>
            <div className='block md:flex'>
                <img src={LatteMobile} className='block md:hidden' alt='hero mobile' />
                <div className='mb-18'>
                    <h3 className='mt-14 mb-8 title-green'>Drinks</h3>
                    {drinks.map((drink) => (
                        <MenuItem title={drink.title} price={drink.price} description={drink.description} isRed={false} />
                    ))}
                </div>
                <img src={LatteWeb} className='hidden md:block' alt='hero web' />
            </div>
        </>
    )
}

export default Menu