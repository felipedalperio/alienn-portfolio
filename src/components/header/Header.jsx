import './header.css'
import {FaFacebookF, FaInstagram} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';
import { useContext} from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import {header, links} from '../../data.js'

export default function Header() {
  const {languageContext} = useContext(LanguageContext); 

  //https://pixy.org/download/203743/
  return (
    <div className="header" id="home">
        <div className="info">
            <h1>{header[languageContext].title}</h1>
            <span className='subTitle'>{header[languageContext].welcom}</span>
            <span>
                {header[languageContext].desc1}
                <br />
                <span> {header[languageContext].desc2}</span>    
            </span>
            
            <div className="groupButtons">
                <div className="icons">
                    <a href={links.facebook} title="Facebook">
                        <div className="circleBack">
                        <FaFacebookF />
                        </div>
                    </a>
                    <a href={links.instagram} title="Instragram">
                        <div className="circleBack">
                            <FaInstagram />
                        </div>
                    </a>
                    <a href={links.github}>
                        <div className="circleBack" title="Github">
                            <FiGithub/>
                        </div>
                    </a>
                </div>
                <a  href="#about">
                    <button>
                        <div className="light"></div>
                        {header[languageContext].button}
                    </button>
                </a>
            </div>
        </div>
        <div className="alien">
             <img className="spaceship" src="./images/alien.png" alt=""/>
             <div className="triangle-up"></div>
             <div className="circle"></div>
             <img className="car" src="./images/car2.webp" alt=""/>
        </div>
        <div className="board">
            <div className="poste"></div>
            <img src="./images/placa.png" alt=""/>
        </div>
    </div>
  )
}
