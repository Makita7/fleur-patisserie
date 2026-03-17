import { useState } from 'react'
import Slash from '../assets/slash-language-bar.png'

export default function LanguageBar() {

    const [activeLang, setActiveLang] = useState('eng');

    return(
        <div className="flex lang-bar justify-center">
            <button
                className={`mx-2 ${activeLang === 'spa' ? 'active-lang' : ''}`}
                onClick={() => setActiveLang('spa')}
            >SPA</button>
            <img src={Slash} className='lang-bar-slash' alt='' />
            <button
                className={`mx-2 ${activeLang === 'eng' ? 'active-lang' : ''}`}
                onClick={() => setActiveLang('eng')}
            >ENG</button>
        </div>
    )
}