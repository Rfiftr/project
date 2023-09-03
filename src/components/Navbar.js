import logo from '../images/logo.png'
import { useRef } from "react"
import {FaBars, FaTimes} from "react-icons/fa"

export default function Navbar() {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
      <header className='header-nav'>
        <img className='logo-nav' src={logo} alt='logo'/>
        <nav className='nav' ref={navRef}>
          <a href="/#">Projects</a>
          <a href="/#">About me</a>
          <a href="/#">Contact us</a>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <FaTimes/>
          </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
        </button>
      </header>
    











        /*
        <nav className='nav'>
            <img className='nav-logo' src={logo} alt="logo"/>
            <ul className="nav-list">
                <li><a href="#">Projects</a></li>
                <li><a href="#">About me</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </nav>
        */
    )
}