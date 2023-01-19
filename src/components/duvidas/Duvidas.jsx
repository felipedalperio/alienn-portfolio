import './duvidas.css';
import { duvida } from '../../data';
import Duvida from '../../duvida/Duvida';
import { useContext, useState } from 'react';
import { ScrollContext } from '../../context/ScrollContext';
import { LanguageContext } from '../../context/LanguageContext';

export default function Duvidas() {
  const {scrollContext} = useContext(ScrollContext)
  const {languageContext} = useContext(LanguageContext)
  const[pass,setPass] = useState(false);
  if(scrollContext > 800){
      if(pass == false){
          setPass(true)
      }
  }  
  return (
    <div className='duvidas' id='duvida'>
        <div className="left" style={{animationName: pass && 'slashLeft'}}>
                <img src='./images/astronaut.webp' alt='' width={500} height={500}/>
        </div>
        <div className="right" style={{animationName: pass && 'slashRight'}}>
            <div className="titleDuvida">
                <span>{duvida[languageContext][0].title} <span className='greenColor'>{duvida[languageContext][0].title2}</span></span>
                <span>
                    {duvida[languageContext][0].desc[0]}
                    <span className='greenColor'> {duvida[languageContext][0].desc[1]}</span>
                    {duvida[languageContext][0].desc[2]}
                    <span className='greenColor'> {duvida[languageContext][0].desc[3]}</span>
                </span>
            </div>
            <div className="rightwrapperduvida">
                {duvida[languageContext][1].map((item,key) => (
                    <Duvida props={item} key={key} pass={pass}/>
                ))}
            </div>
        </div>
    </div>
  )
}
