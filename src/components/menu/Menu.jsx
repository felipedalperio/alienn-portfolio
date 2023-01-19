import './menu.css';
import { FaFacebookF, FaInstagram, FaCaretDown } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { RiAliensLine } from 'react-icons/ri';
import { useContext, useEffect, useRef, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { menu } from '../../data';

export default function Menu() {

    const[option, setOption] = useState(0)
    const[menuItem, setMenuItem] = useState(0)
    const[showList, setShowList] = useState(false)
    const {languageContext, setLanguageContext} = useContext(LanguageContext)
    const list = useRef(null);


    useEffect(() =>{
        setLanguageContext(option)
    },[option])

    useEffect(() =>{
        if(list){
            
            for(let i=0; i < 4; i++){
                list.current.children[i].style.borderBottom = "none"; 
            }
           
            list.current.children[menuItem].style.borderBottom = "2px solid #89D790"; 
        }
    },[menuItem])

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
            <ul ref={list}>
                <li onClick={() => setMenuItem(0)} ><a href="#home">{menu[languageContext].item1}</a></li>
                <li onClick={() => setMenuItem(1)} ><a href="#about">{menu[languageContext].item2} </a></li>
                <li onClick={() => setMenuItem(2)} ><a href="#duvida">{menu[languageContext].item3} </a></li>
                <li onClick={() => setMenuItem(3)} ><a href="#contato">{menu[languageContext].item4} </a></li>
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
