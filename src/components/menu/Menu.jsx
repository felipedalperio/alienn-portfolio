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
                <FaFacebookF />
            </div>
            <div className="circle">
                <FaInstagram />
            </div>
            <div className="circle">
                <FiGithub />
            </div>
        </div>
        
    </div>
  )
}
