import './index.scss'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LeftBar = () => (
    <div className="left-bar">
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/adam-abad-91972a197/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} color="$set_color" className="anchor-icon"/>
                </a>
            </li>
            <li>
                <a href="https://github.com/adamabad" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} color="$set_color" className="anchor-icon"/>
                </a>
            </li>
        </ul>
        <div class="vl"></div>
    </div>
)

export default LeftBar