//import { Link } from 'react-router-dom';
import './index.scss';
import { Link as ScrollLink } from 'react-scroll';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const NavBar = () => {
        const [click, setClick] = useState(false)
        const handleClick = () => setClick(!click)
        const closeMenu = () => setClick(false)

        return (
        <div className='nav-bar'>
            <ScrollLink to="home" spy={true} smooth={true} offset={0} duration={500} className='logo'>
                <span className='accent'>A</span>bad
            </ScrollLink>
            <div className='hamburger' onClick={handleClick}>
                    <FontAwesomeIcon icon={faBars} />
            </div>
            <ul className={ click ? "nav-menu active" : "nav-menu" }>
                <li className='nav-item'>
                    <ScrollLink to="home" spy={true} smooth={true} offset={0} duration={500} className='sidebar-text' onClick={closeMenu}>Home</ScrollLink>
                </li>
                <li className='nav-item'>
                    <ScrollLink to="about" spy={true} smooth={true} offset={0} duration={500} className='sidebar-text' onClick={closeMenu}>About</ScrollLink>
                </li>
                <li className='nav-item'>
                    <ScrollLink to="expereience" spy={true} smooth={true} offset={0} duration={500} className='sidebar-text' onClick={closeMenu}>Experience</ScrollLink>
                </li>
                <li className='nav-item'>
                    <ScrollLink to="contact" spy={true} smooth={true} offset={0} duration={500} className='sidebar-text' onClick={closeMenu}>Contact</ScrollLink>
                </li>
                <li className='nav-item'>
                    <a href="../AdamAbad_Resume.docx.pdf" target="_blank" className="sidebar-text">Resume</a>
                </li>
                <li className='nav-hidden-item'>
                    <a href="mailto:adam.abad1101@gmail.com" target="_blank" rel="noreferrer">adam.abad1101@gmail.com</a>
                </li>
                <li className='nav-hidden-item icon'>
                <a href="https://www.linkedin.com/in/adam-abad-91972a197/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} color="$set_color" className="anchor-icon"/>
                </a>
                </li>
                <li className='nav-hidden-item icon'>
                    <a href="https://github.com/adamabad" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} color="$set_color" className="anchor-icon"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default NavBar


