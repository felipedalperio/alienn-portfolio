import './footer.css';
import {FaFacebookF, FaInstagram} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';

export default function Footer() {
  return (
    <div className='footer'>
        <div className="top">
            <div className="content">
                <span>NUMERO</span>
                <span>(41) 99719-1301</span>
            </div>
            <div className="content">
                <span>EMAIL</span>
                <span>felipedalperio@gmail.com</span>
            </div>
        </div>
        <div className="bottom">
            <span>Sonhe e viva, Pense e cria.</span>
            <div className="iconsFooter">
                <div className="circle">
                    <div className="light"></div>
                    <FaFacebookF size={20}/>
                </div>
                <div className="circle">
                    <div className="light"></div>
                    <FaInstagram size={20}/>
                </div>
                <div className="circle">
                    <div className="light"></div>
                    <FiGithub size={20}/>
                </div>
            </div>
        </div>
    </div>
  )
}
