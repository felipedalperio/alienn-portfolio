import './vantagens.css';
import { useContext, useState } from 'react';
import { ScrollContext } from '../../context/ScrollContext';
import { LanguageContext } from '../../context/LanguageContext';
import { advantage } from '../../data';

export default function Vantagens() {
    const { scrollContext } = useContext(ScrollContext)
    const [pass, setPass] = useState(false);
    const {languageContext} = useContext(LanguageContext)
    if (scrollContext > 1500) {
        if (pass == false) {
            setPass(true)
        }
    }
    return (
        <div className='vantagens'>
            <div className="boxvantagem" style={{ animationName: pass && 'showCard' }}>
                <div className="imageVantagem">
                    <div className="circle">
                        <img src="./images/planet.webp  " alt="" width={220} height={200} />
                    </div>
                </div>
                <div className="descVantagem">
                    <h1>
                        <span className='greenColor'>
                            {advantage[languageContext].title}
                        </span> 
                        {advantage[languageContext].title2}
                    </h1>
                    <span>{advantage[languageContext].subTitle1}</span>
                    <div className="infoDesc">
                        <span>
                            {advantage[languageContext].desc1}
                        </span>
                    </div>
                    <span> {advantage[languageContext].subtitle2}</span>
                    <div className="infoDesc">
                        <span>
                            {advantage[languageContext].desc2}
                        </span>
                    </div>
                    <span className='pilares'>  {advantage[languageContext].advantage}</span>
                    <div className="optionsVantagem">
                        <button>{advantage[languageContext].buttons[0]}</button>
                        <button>{advantage[languageContext].buttons[1]}</button>
                        <button>{advantage[languageContext].buttons[2]}</button>
                        <button>{advantage[languageContext].buttons[3]}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
