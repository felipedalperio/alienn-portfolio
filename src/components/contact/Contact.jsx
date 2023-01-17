import './contact.css'
import {AiOutlineSend} from 'react-icons/ai'
import { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { IMaskInput } from "react-imask";


export default function Contact() {
  const[email,setEmail] = useState("");
  const[name,setName] = useState("");
  const[tel,setTel] = useState("");
  const[desc,setDesc] = useState("");
  const emailRef = useRef(null);
  const telRef = useRef(null);

  useEffect(() => {
    if(email != ""){
        if(!email.split("").includes("@")){
            emailRef.current.style = `
                transform: translateY(-50%) scale(0.8); 
                top: 0%; 
                background-color: #090b13;
                padding: 0 .2em;
                color: #f14f4a;
            `;
        }else{
            emailRef.current.style = `
                color: #89D790;
            `;
        }
    }
  },[email])

  useEffect(() => {
    if(tel != ""){
        if(tel.length < 19){
            if(telRef){
                telRef.current.style = `
                    color: #f14f4a;
                `;
            }
        }else{
            telRef.current.style = `
                color: #89D790;
            `; 
        }
    }
  },[tel])
  return (
    <div className='contact'>
        <div className="top">
            <h1>CONTATO</h1>
            <span>NOS FALE SOBRE SEU PROJETO</span>
        </div>
        <div className="bottom">
            <form>
                <div className="first">
                    <div className="name">
                        <input onChange={(e) => setName(e.target.value)} className='input' id="nome" type="text" autocomplete="off" required="true"/>
                        <label htmlFor="nome">nome</label>
                    </div>
                    <div className="telefone">
                        <IMaskInput mask="+55 (00) 00000-0000" onChange={(e) => setTel(e.target.value)} className='input' id='telefone' autocomplete="off" required="true"/>
                        <label htmlFor="telefone" ref={telRef}>telefone</label>
                    </div>
                </div>
                <div className="telefone">
                    <input onChange={(e) => setEmail(e.target.value)} className='input' id='email' type="email" autocomplete="off" required="true" />
                    <label htmlFor="email" ref={emailRef}>email</label>
                </div>
                <div className="desc">
                    <textarea onChange={(e) => setDesc(e.target.value)} id='desc' utocomplete="off" required="true" />
                    <label htmlFor="desc" >Descrição do projeto</label>
                </div>
                <button><AiOutlineSend size={20}/> ENVIAR</button>
            </form>
        </div>
    </div>
  )
}
