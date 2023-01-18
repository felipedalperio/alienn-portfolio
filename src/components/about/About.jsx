import './about.css';
import { useContext, useState } from 'react';
import { ScrollContext } from '../../context/ScrollContext';

export default function About() {
  const {scrollContext} = useContext(ScrollContext)
  const[pass,setPass] = useState(false);
  if(scrollContext > 400){
      if(pass == false){
          setPass(true)
      }
  }  
  return (
    <div className='about'>
          <div className="title" style={{animationName: pass && 'introSlash'}}>
                <span> <span className='greenColor'>NOSSA</span> AGÊNCIA</span>
                <span> um pouco sobre o <span className='greenColor'>alienn</span> </span>
          </div>
          <div className="infoAbout" style={{animationName: pass && 'identifier'}}>
            <div className="line"></div>
            <span>
            Aplicar máscaras em React em campos de formulário limita os usuários com padrões predefinidos. Isso evita o envio de dados incorretos e também deixa mais intuitivo ao usuário. Poderíamos elaborar nossas próprias funções, fazer a validação das informações e mostrar algum erro após o usuário inserir o valor, mas esse processo leva um tempo desnecessário, sendo que existem libs para aplicação de máscaras que ajudam na formatação dos dados em tempo real.
            </span>
          </div>
    </div>
  )
}
