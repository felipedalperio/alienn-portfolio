import './menu.css';
import {FaFacebookF, FaInstagram} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';
 
export default function Menu() {
  return (
    <div className='menu'>
        <div className="logo">
            <span>ALIE</span>
            <span>NN</span>
        </div>
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>DUVIDAS</li>
            <li>CONTATO</li>
        </ul>

        <div className="icons">
            <div className="circle">
                <div className="light"></div>
                <FaFacebookF />
            </div>
            <div className="circle">
                <div className="light"></div>
                <FaInstagram />
            </div>
            <div className="circle">
                <div className="light"></div>
                <FiGithub />
            </div>
        </div>
        
    </div>
  )
}
