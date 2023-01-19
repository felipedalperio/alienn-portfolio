import './tech.css'
import {FaReact, FaCode, FaDatabase} from 'react-icons/fa'
import { useContext} from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { tech } from '../../data';

export default function Tech() {
  const {languageContext} = useContext(LanguageContext)
  return (
    <div className='tech'>
        <h1>{tech[languageContext].title}</h1>
        <span>{tech[languageContext].desc}</span>
        <div className="wrapperTech">
            <div className="iconTech">
                <FaReact size={40} style={{color:'#89D790'}}/>
                <span>Front-End</span>
                <span>React.js e Next.js</span>
            </div>
            <div className="iconTech">
                <FaCode size={40} style={{color:'#89D790'}}/>
                <span>Back-end</span>
                <span>Java, Javascript e Node</span>
            </div>
            <div className="iconTech">
                <FaDatabase size={40} style={{color:'#89D790'}}/>
                <span>Database</span>
                <span>Firebase, MongoDB, MySql</span>
            </div>
        </div>

    </div>
  )
}
