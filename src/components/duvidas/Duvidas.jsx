import './duvidas.css';
import { duvida } from '../../data';
import Duvida from '../../duvida/Duvida';
import { useContext, useState } from 'react';
import { ScrollContext } from '../../context/ScrollContext';

export default function Duvidas() {
  const {scrollContext} = useContext(ScrollContext)
  const[pass,setPass] = useState(false);
  if(scrollContext > 600){
      if(pass == false){
          setPass(true)
      }
  }  
  return (
    <div className='duvidas'>
        <div className="left" style={{animationName: pass && 'slashLeft'}}>
                <img src='./images/astronaut.webp' alt='' width={500} height={500}/>
        </div>
        <div className="right" style={{animationName: pass && 'slashRight'}}>
            <div className="titleDuvida">
                <span>COMO <span className='greenColor'>FUNCIONA ?</span></span>
                <span>
                     estão aqui as <span className='greenColor'> duvidas</span> mais <span className='greenColor'> frequentes</span>
                </span>
            </div>
            <div className="rightwrapperduvida">
                {duvida.map((item,key) => (
                    <Duvida props={item} key={key} pass={pass}/>
                ))}
            </div>
        </div>
    </div>
  )
}
