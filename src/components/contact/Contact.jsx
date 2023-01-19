import './contact.css'
import {AiOutlineSend} from 'react-icons/ai'
import { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { IMaskInput } from "react-imask";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


export default function Contact() {
  const[email,setEmail] = useState("");
  const[name,setName] = useState("");
  const[tel,setTel] = useState("");
  const[desc,setDesc] = useState("");
  const[showProfress,setShowProfress] = useState(false);
  const emailRef = useRef(null);
  const telRef = useRef(null);
  const form = useRef(null);
  
  const sendEmail = (e) => {
    e.preventDefault();
    //https://www.youtube.com/watch?v=I4DKr1JLC50
    setShowProfress(true);
    if(email != "" && desc != "" && name != "" && tel != ""){
        if(email.split("").includes("@")){
            emailjs.sendForm('service_zlwqjiq', 'template_0yifm45', form.current, 'Odl7AKHDXonkGb0qm')
            .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Sucesso!',
                    text: 'Seu email foi enviado com sucesso. Por favor aguarde, pois responderemos em breve.',
                })

                setDesc("");
                setEmail("");
                setName("");
                setTel("");
                setShowProfress(false);
            }, (error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo deu errado, Por favor tente novamente mais tarde.',
                })
                setShowProfress(false);
            });
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor Digite um email valido.',
            })
            setShowProfress(false);
        }
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor preencha todos os campos do formulário.',
        })
        setShowProfress(false);
    }
  };

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
    <div className='contact' id='contato'>
        <div className="top">
            <h1>CONTATO</h1>
            <span>NOS FALE SOBRE SEU PROJETO</span>
        </div>
        <div className="bottom">
            <form ref={form} >
                <div className="progressBar" style={{display: showProfress && 'flex' }}></div>
                <div className="first">
                    <div className="name">
                        <input onChange={(e) => setName(e.target.value)} value={name} name="name" className='input' id="nome" type="text" required/>
                        <label htmlFor="name">nome</label>
                    </div>
                    <div className="telefone">
                        <IMaskInput mask="+55 (00) 00000-0000" name="tel" autoComplete="nope" onChange={(e) => setTel(e.target.value)} value={tel} className='input' id='telefone' required/>
                        <label htmlFor="tel" ref={telRef}>telefone</label>
                    </div>
                </div>
                <div className="email">
                    <input onChange={(e) => setEmail(e.target.value)} value={email} name="email" className='input' id='email' type="email" required />
                    <label htmlFor="email" ref={emailRef}>email</label>
                </div>
                <div className="desc">
                    <textarea onChange={(e) => setDesc(e.target.value)} value={desc} name="desc" id='desc' utocomplete="off" required />
                    <label htmlFor="desc" >Descrição do projeto</label>
                </div>
                <button onClick={sendEmail}><AiOutlineSend size={20}/> ENVIAR</button>
            </form>
        </div>
    </div>
  )
}
