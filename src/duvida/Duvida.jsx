import './duvida.css';
import { useEffect, useState } from 'react';
import {IoIosArrowDown, IoIosClose} from 'react-icons/io'

export default function Duvida({props, pass}) {
  const[show,setShow] = useState(false);
  return (
    <div className='duvida' style={{animationName: pass && 'slashRight' }}>
            <div className="contentDuvida">
                        <div className="duvidaWrapper">
                            <div className="duvidaTitle">
                                <div className="duvLeft">
                                     {props.title}
                                </div>
                                <div className='duvRight'>
                                    {!show 
                                        ? (<IoIosArrowDown style={{color:"#89D790", fontSize:"28px", cursor:'pointer'}} onClick={() => setShow(!show)} />)
                                        : (<IoIosClose style={{color:"#89D790", fontSize:"34px", cursor:'pointer'}} onClick={() => setShow(!show)}/>)
                                    }
                                </div>
                            </div>
                            <div className='duvidaContent' style={show ? {maxHeight:'800px', padding:'10px 0'} : {maxHeight:'0', padding:'0'}}>
                                {props.duvidas.map((item,key) => (
                                    <span key={key}>{item.text}</span>
                                ))}
                            </div>
                        </div>
                    </div>
    </div>
  )
}
