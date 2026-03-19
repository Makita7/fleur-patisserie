
import { useEffect,useState } from 'react'
import { useLanguage } from "../components/LanguageContext";
import type { SectionHash } from '../types/appTypes'

// Mobile Images
import HeroMobile from '../assets/mobile-images/menu-header-mobile.png'
import MadeleineMobile from '../assets/mobile-images/madeleine-mobile.png'
import LemonTartMobile from '../assets/mobile-images/lemon-tart-mobile.png'
import StrawberryTartMobile from '../assets/mobile-images/strawberry-tart-mobile.png'
import LatteMobile from '../assets/mobile-images/latte-mobile.png'

//Web Images
import HeroWeb from '../assets/web-images/menu-header-web.png'
import MadeleineWeb from '../assets/web-images/madeleine-web.png'
import LemonTartWeb from '../assets/web-images/lemon-tart-web.png'
import StrawberryTartWeb from '../assets/web-images/strawberry-tart-web.png'
import LatteWeb from '../assets/web-images/latte-web.png'

// Components
import MenuItem from '../components/MenuItem'
import MenuNav from '../components/MenuNav'

//Data
import { floralPastries, herbDesserts, seasonalFruit, drinks } from '../data/menuData'

function Menu() {

    const [activeSection, setActiveSection] = useState("floral-pastries");

    const { lang } = useLanguage();
    const floral = floralPastries[lang];
    const herb = herbDesserts[lang];
    const seasonal = seasonalFruit[lang];
    const drink = drinks[lang];


type SectionEntry = IntersectionObserverEntry & { target: HTMLElement };

useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        let visibleSection: SectionEntry | null = null;

        entries.forEach((entry) => {
            const e = entry as SectionEntry;
            if (e.isIntersecting) {
                if (!visibleSection || e.intersectionRatio > visibleSection.intersectionRatio) {
                    visibleSection = e;
                }
            }
        });

        if (visibleSection) setActiveSection(visibleSection.target.id);
        },
        { threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
}, []);

    return(
        <>
            <img src={HeroMobile} alt='' className='block md:hidden' />
            <img src={HeroWeb} alt='' className='hidden md:block' />
            <div className='sticky top-0'>
                <MenuNav activeSection={`#${activeSection}` as SectionHash} />
            </div>
            <section id="floral-pastries" className="block md:flex md:px-20 justify-center items-center">
                <img src={MadeleineMobile} className='block md:hidden' alt='hero mobile' />
                <div className='mb-18 md:w-1/2 md:pl-40 md:pr-16'>
                    <h3 className='title-red mt-14 mb-8 md:mb-12 text-center'>{lang === 'eng' ? "Floral Pastries" : "Pasteleria Floral"}</h3>
                    {floral.map((pastry, index) => (
                        <MenuItem title={pastry.title} price={pastry.price} description={pastry.description} isRed={true} isLast={index === floralPastries[lang].length - 1} />
                    ))}
                </div>
                <img src={MadeleineWeb} className='hidden md:block menu-img-desktop py-20' alt='hero web' />
            </section>

            <section id="herb-desserts" className="block md:flex md:px-20 justify-center items-center">
                <img src={LemonTartMobile} className='block md:hidden' alt='lemon tart' />
                <img src={LemonTartWeb} className='hidden md:block menu-img-desktop  py-20' alt='hero web' />
                <div className='mb-18 md:w-1/2 md:pl-16 md:pr-40'>
                    <h3 className='title-green mt-14 mb-8 md:mb-12 text-center'>{lang === 'eng' ? "Herb Desserts" : "Postres con Hierbas" }</h3>
                    {herb.map((herb, index) => (
                        <MenuItem title={herb.title} price={herb.price} description={herb.description} isRed={false} isLast={index === herbDesserts[lang].length - 1} />
                    ))}
                </div>
            </section>

            <section id='seasonal-fruit' className='block md:flex md:px-20 justify-center  items-center'>
                <img src={StrawberryTartMobile} className='block md:hidden' alt='hero mobile' />
                <div className='mb-18 md:w-1/2 md:pl-40 md:pr-16'>
                    <h3 className='title-red mt-14 mb-8 md:mb-12 text-center'>{lang === 'eng' ? "Seasonal Fruit" : "Frutas de Temporada" }</h3>
                    {seasonal.map((fruit, index) => (
                        <MenuItem title={fruit.title} price={fruit.price} description={fruit.description} isRed={true} isLast={index === seasonalFruit[lang].length - 1} />
                    ))}
                </div>
                <img src={StrawberryTartWeb} className='hidden md:block menu-img-desktop  py-20' alt='hero web' />
            </section>

            <section id='drinks' className='block md:flex md:px-20 justify-center md:pb-40 items-center'>
                <img src={LatteMobile} className='block md:hidden' alt='hero mobile' />
                <img src={LatteWeb} className='hidden md:block menu-img-desktop pt-20' alt='hero web' />
                <div className='mb-18 md:w-1/2 md:pl-16 md:pr-40'>
                    <h3 className='mt-14 mb-8 md:mb-12 title-green text-center'>{lang === 'eng' ?  "Drinks" : "Infusiones" }</h3>
                    {drink.map((drink, index) => (
                        <MenuItem title={drink.title} price={drink.price} description={drink.description} isRed={false} isLast={index === drinks[lang].length - 1} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Menu