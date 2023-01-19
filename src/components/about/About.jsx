import './about.css';
import { useContext, useState } from 'react';
import { ScrollContext } from '../../context/ScrollContext';
import { LanguageContext } from '../../context/LanguageContext';
import {about} from '../../data.js'

export default function About() {
  const {scrollContext} = useContext(ScrollContext)
  const {languageContext} = useContext(LanguageContext); 
  const[pass,setPass] = useState(false);
  
  if(scrollContext > 400){
      if(pass == false){
          setPass(true)
      }
  }  
  const info = [
    {
      title: about[languageContext].title
    }
  ]
  return (
    <div className='about' id='about'>
          <div className="title" style={{animationName: pass && 'introSlash'}}>
                <span> 
                    <span className='greenColor'>
                      {about[languageContext].title}
                    </span> 
                    {about[languageContext].title2}
                </span>
                <span> 
                    {about[languageContext].subTitle} 
                    <span className='greenColor'>alienn</span>
                </span>
          </div>
          <div className="infoAbout" style={{animationName: pass && 'identifier'}}>
            <div className="line"></div>
            <span>
              {about[languageContext].desc} 
            </span>
          </div>
    </div>
  )
}
