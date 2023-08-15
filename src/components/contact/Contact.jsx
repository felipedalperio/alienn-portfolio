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
                    <input onChange={(e) => setEmail(e.target.value)} value={email} name="email" className='input' id='email' type="text" required />
                    <label htmlFor="email" ref={emailRef}>{contact[languageContext].email}</label>
                </div>
                <div className="desc">
                    <textarea onChange={(e) => setDesc(e.target.value)} value={desc} name="desc" id='desc' utocomplete="off" required/>
                    <label htmlFor="desc" >{contact[languageContext].desc}</label>
                </div>
                <button><AiOutlineSend size={20}/> {contact[languageContext].button}</button>
            </form>
        </div>
    </div>
  )
}
