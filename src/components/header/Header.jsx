import './header.css'
import {FaFacebookF, FaInstagram} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';

export default function Header() {
  return (
    <div className="header">
        <div className="info">
            <h1>Agência Alienn</h1>
            <h3>Seja Bem Vindo</h3>
            <span>
                Agência de websites, Lutando para que seus projetos cresçam e criem vida.
                <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis at alias soluta perspiciatis, sed vero aliquid minima.</span>    
            </span>
            
            <div className="groupButtons">
                <div className="icons">
                    <div className="circleBack">
                       <FaFacebookF />
                    </div>
                    <div className="circleBack">
                        <FaInstagram />
                    </div>
                    <div className="circleBack">
                        <FiGithub/>
                    </div>
                </div>
                <button>
                    <div className="light"></div>
                    SAIBA MAIS
                </button>
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
