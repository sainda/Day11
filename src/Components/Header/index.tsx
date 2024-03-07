
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

export default function Header(){
    return(
        <div className='header'>
        <h2>Where in the world?</h2>
        <a href="#" className='darkMode'>
            <FontAwesomeIcon icon={faMoon}/>
            <p className='darkModeText'>Dark Mode</p>
        </a>
        </div>
    )
}