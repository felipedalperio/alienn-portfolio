import './contact.css'
import {AiOutlineSend} from 'react-icons/ai'
import { IMaskInput } from "react-imask";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useContext, useState,useRef,useEffect } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { contact } from '../../data';

export default function Contact() {
  const[email,setEmail] = useState("");
  const[name,setName] = useState("");
  const[tel,setTel] = useState("");
  const[desc,setDesc] = useState("");
  const[showProfress,setShowProfress] = useState(false);
  const emailRef = useRef(null);
  const telRef = useRef(null);
  const form = useRef(null);
  const {languageContext} = useContext(LanguageContext)
  
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
                    title: contact[languageContext].sucessTitle,
                    text: contact[languageContext].sucess,
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
                    text: contact[languageContext].error,
                })
                setShowProfress(false);
            });
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: contact[languageContext].emailError,
            })
            setShowProfress(false);
        }
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: contact[languageContext].empity,
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
            <h1>{contact[languageContext].title}</h1>
            <span>{contact[languageContext].sub}</span>
        </div>
        <div className="bottom">
            <form ref={form} >
                <div className="progressBar" style={{display: showProfress && 'flex' }}></div>
                <div className="first">
                    <div className="name">
                        <input onChange={(e) => setName(e.target.value)} value={name} name="name" className='input' id="nome"required type="text" aria-labelledby="name"/>
                        <label htmlFor="name">{contact[languageContext].name}</label>
                    </div>
                    <div className="telefone">
                        <IMaskInput mask="+55 (00) 00000-0000" name="tel" autoComplete="nope" onChange={(e) => setTel(e.target.value)} value={tel} className='input' id='telefone' required type="text" aria-labelledby="tel"/>
                        <label htmlFor="tel" ref={telRef}>{contact[languageContext].tel}</label>
                    </div>
                </div>
                <div className="email">
                    <input onChange={(e) => setEmail(e.target.value)} value={email} name="email" className='input' id='email' type="email" required />
                    <label htmlFor="email" ref={emailRef}>{contact[languageContext].email}</label>
                </div>
                <div className="desc">
                    <textarea onChange={(e) => setDesc(e.target.value)} value={desc} name="desc" id='desc' utocomplete="off" required/>
                    <label htmlFor="desc" >{contact[languageContext].desc}</label>
                </div>
                <button onClick={sendEmail}><AiOutlineSend size={20}/> {contact[languageContext].button}</button>
            </form>
        </div>
    </div>
  )
}
