import './tech.css'
import {FaReact, FaCode, FaDatabase} from 'react-icons/fa'

export default function Tech() {
  return (
    <div className='tech'>
        <h1>Tecnologias</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod illo iusto eveniet rem voluptatem maiores ratione dignissimos obcaecati alias quis molestiae saepe quasi, aperiam necessitatibus, accusamus laudantium minus laboriosam magni?</span>
        <div className="wrapperTech">
            <div className="iconTech">
                <FaReact size={60} style={{color:'#89D790'}}/>
                <span>Front-End</span>
                <span>React.js e Next.js</span>
            </div>
            <div className="iconTech">
                <FaCode size={60} style={{color:'#89D790'}}/>
                <span>Back-end</span>
                <span>Java, Javascript e Node</span>
            </div>
            <div className="iconTech">
                <FaDatabase size={60} style={{color:'#89D790'}}/>
                <span>Database</span>
                <span>Firebase, MongoDB, MySql</span>
            </div>
        </div>

    </div>
  )
}
