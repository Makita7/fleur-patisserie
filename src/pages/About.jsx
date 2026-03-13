
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
    return(
        <div className='md:px-30'>
            <div className='md:flex md:justify-center md:items-center'>
                <img src={AboutBaristaMobile} className='block md:hidden' />
                <div className='hidden md:flex md:w-1/2 justify-end py-20 pl-30 pr-10'>
                    <img src={AboutBaristaWeb}  />
                </div>
                <div className='mt-8 mb-12 mx-10 md:w-1/2 md:pl-[4rem] md:pr-[10rem]'>
                    <h3 className='title-red' >Our Story</h3>
                    <hr className='line-red mb-5' />
                    <p>
                        Fleur Patisserie was founded with a love for fresh ingredients and thoughtful baking. Inspired by seasonal fruits, herbs, and natural flavors, our pastries celebrate the beauty of simple ingredients prepared with care.
                        <br/>
                        We believe baking is an art. One that blends creativity, craftsmanship, and passion. Every dessert is designed to bring together flavor, texture, and beauty in a way that feels both elegant and comforting.
                    </p>
                </div>
            </div>
            <div className='md:flex md:justify-center md:items-center'>
                <img src={AboutLatteMobile} className='block md:hidden' />
                <div className='mt-8 mb-12 mx-10 md:pr-[4rem] md:pl-[10rem]'>
                    <h3 className='title-red' >Our Coffee & Tea</h3>
                    <hr className='line-red mb-5' />
                    <p>
                        We serve a variety of teas and freshly ground coffee made from carefully selected coffee beans, crafted to complement the delicate flavors of our pastries.<br/>
                        Brewing is part of the ritual at Fleur. Each drink is prepared with patience and care, highlighting the natural aromas of the beans and tea leaves.
                    </p>
                </div>
                <img src={AboutLatteWeb} className='hidden md:block w-1/2 py-20 pl-30 pr-10' />
            </div>
            <div className='mb-20 md:flex md:justify-center md:items-center'>
                <img src={AboutCroissantMobile} className='block md:hidden' />
                <div className='hidden md:flex md:w-1/2 justify-end py-20 pr-30 pl-10'>
                    <img src={AboutCroissantWeb} className='' />
                </div>
                <div className='mt-8 mb-12 mx-10 md:w-1/2 md:pl-[4rem] md:pr-[10rem]'>
                    <h3 className='title-red'>Our Pastries</h3>
                    <hr className='line-red mb-5'/>
                    <p>
                        Our pastries are inspired by classic French baking traditions and crafted with fresh, regional ingredients. From delicate macarons to buttery tarts and fragrant cakes, each dessert reflects a balance of technique, flavor, and creativity.
                        <br/>
                        We combine the elegance of French pastry with the richness of local seasonal produce. The result is a collection of desserts that celebrate both tradition and the natural flavors of our region.
                    </p>
                </div>
            </div>
        </div>
    )
}