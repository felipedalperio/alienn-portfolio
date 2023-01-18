import './vantagens.css';
import { useContext, useState } from 'react';
import { ScrollContext } from '../../context/ScrollContext';

export default function Vantagens() {
  const {scrollContext} = useContext(ScrollContext)
  const[pass,setPass] = useState(false);
  if(scrollContext > 1500){
      if(pass == false){
          setPass(true)
      }
  }  
  return (
    <div className='vantagens'>
        <div className="boxvantagem" style={{animationName: pass && 'showCard'}}>
            <div className="imageVantagem">
                <div className="circle">
                    <img src="./images/planet.webp  " alt="" width={220} height={200} />
                </div>
            </div>
            <div className="descVantagem">
                <h1><span className='greenColor'>Vantagens</span> de ter um Site</h1>
                <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum obcaecati possimus adipisci sapiente cum nobis, repudiandae laudantium, repellendus officia quia architecto sit quo, repellat enim molestias! Quae, maiores minima. <br/>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum obcaecati possimus adipisci sapiente cum nobis, repudiandae laudantium, repellendus officia quia architecto sit quo, repellat enim molestias! Quae, maiores minima.
                </span>
                <div className="optionsVantagem">
                    <button>PROFISSIONAL</button>
                    <button>CONFIAVEL</button>
                    <button>ACCESIVEL</button>
                </div>
            </div>
        </div>
    </div>
  )
}
