import './menu.css';
import { FaFacebookF, FaInstagram, FaCaretDown } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { RiAliensLine } from 'react-icons/ri';
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { menu } from '../../data';

export default function Menu() {

    const[option, setOption] = useState(0)
    const[showList, setShowList] = useState(false)
    const {languageContext, setLanguageContext} = useContext(LanguageContext)
    

    useEffect(() =>{
        setLanguageContext(option)
    },[option])

    const options = [
        {
            img: <img src='./images/brazil.png' width={20} height={20} />,
            name: 'BRA',
            lang: 'pt-br'
        },
        {
            img: <img src='/images/USA.png' width={20} height={20} />,
            name: 'USA',
            lang: 'en-us'
        },
    ]
    return (
        <div className='menu'>
            <div className="logo">
                <span>ALIE</span>
                <RiAliensLine />
                <span>NN</span>
            </div>
            <ul>
                <li> <a href="#home">{menu[languageContext].item1}</a></li>
                <li> <a href="#about">{menu[languageContext].item2} </a></li>
                <li> <a href="#duvida">{menu[languageContext].item3} </a></li>
                <li> <a href="#contato">{menu[languageContext].item4} </a></li>
            </ul>

            <div className="selector" onClick={() => setShowList(!showList)}>
                <div className="selectField">
                    <p> {options[option].img} {options[option].name} <p>{options[option].lang}</p></p>
                    <FaCaretDown />
                </div>
                <ul id='list' style={{height: showList ? 'auto' : '0'}}>
                    <li className='options' onClick={() => setOption(0)} style={{color: option == 0 ? '#89D790' : '#fff'}} >
                        <p>BRA</p>
                        <img src='./images/brazil.png' width={20} height={20} />
                    </li>
                    <li className='options' onClick={() => setOption(1)} style={{color: option == 1 ? '#89D790' : '#fff'}}>
                        <p>USA</p>
                        <img src='./images/USA.png' width={20} height={20} />
                    </li>
                </ul>
            </div>
            

        </div>
    )
}
