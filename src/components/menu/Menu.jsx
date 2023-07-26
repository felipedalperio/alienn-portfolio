import './menu.css';
import { FaFacebookF, FaInstagram, FaCaretDown } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { RiAliensLine } from 'react-icons/ri';
import { useContext, useEffect, useRef, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { flags, menu } from '../../data';

export default function Menu() {

    const [option, setOption] = useState(0)
    const [menuItem, setMenuItem] = useState(0)
    const [showList, setShowList] = useState(false)
    const { languageContext, setLanguageContext } = useContext(LanguageContext)
    const list = useRef(null);


    useEffect(() => {
        setLanguageContext(option)
    }, [option])

    useEffect(() => {
        if (list) {

            for (let i = 0; i < 4; i++) {
                list.current.children[i].style.borderBottom = "none";
            }

            list.current.children[menuItem].style.borderBottom = "2px solid #89D790";
        }
    }, [menuItem])

    return (
        <div className='menu' >
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
                    <div> 
                        {flags[option].img} {flags[option].name} <p>{flags[option].lang}</p> 
                    </div>
                    <FaCaretDown />
                </div>
                <ul id='list' style={{ height: showList ? 'auto' : '0' }}>
                    {flags.map((item, key) => (
                        <li
                            className='options'
                            onClick={() => setOption(key)}
                            key={key}
                            style={{ color: option == key ? '#89D790' : '#fff' }}>
                            <p>{item.name}</p>
                            <img src={item.imgUrl} width={20} height={20} alt={item.imgUrl}/>
                        </li>
                    ))}

                </ul>
            </div>


        </div>
    )
}
