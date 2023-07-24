import './footer.css';
import {FaFacebookF, FaInstagram} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';
import { info, links } from '../../data';

export default function Footer() {
  return (
    <div className='footer'>
        <div className="top">
            <div className="content">
                <span>PHONE</span>
                <span>{info.phone}</span>
            </div>
            <div className="content">
                <span>EMAIL</span>
                <span>{info.email}</span>
            </div>
        </div>
        <div className="bottom">
            <span>Sonhe e viva, Pense e cria.</span>
            <div className="iconsFooter">
                <a href={links.facebook} title='Facebook'>
                    <div className="circle">
                        <div className="light"></div>
                        <FaFacebookF size={20}/>
                    </div>
                </a>
                <a href={links.instagram} title='Instagram'>
                    <div className="circle">
                        <div className="light"></div>
                        <FaInstagram size={20}/>
                    </div>
                </a>
                <a href={links.github} title='Github'>
                    <div className="circle">
                        <div className="light"></div>
                        <FiGithub size={20}/>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}
