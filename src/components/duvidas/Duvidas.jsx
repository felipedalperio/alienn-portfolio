import './duvidas.css';
import { duvida } from '../../data';
import Duvida from '../../duvida/Duvida';

export default function Duvidas() {
  return (
    <div className='duvidas'>
        <div className="left">
                <img src='./images/astronaut.webp' alt='' width={500} height={500}/>
        </div>
        <div className="right">
            <div className="titleDuvida">
                <span>COMO <span className='greenColor'>FUNCIONA ?</span></span>
                <span>
                     estão aqui as <span className='greenColor'> duvidas</span> mais <span className='greenColor'> frequentes</span>
                </span>
            </div>
            <div className="rightwrapperduvida">
                {duvida.map((item,key) => (
                    <Duvida props={item} key={key}/>
                ))}
            </div>
        </div>
    </div>
  )
}
