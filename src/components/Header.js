import{useState} from 'react';

import MobileMenu from './MobileMenu'


import menuIcon from '../images/icon-hamburger.svg';
import closeMenuIcon from '../images/icon-close.svg'
import logo from '../images/logo.svg';

import '../styles/header.css'



const Header = () => {

    const [isMenuShowing, setIsMenuShowing] = useState(false)

    const toggleMenu = ()=>{
        setIsMenuShowing(!isMenuShowing)
    }


    return (
       
        <header className='header'>
            <img src ={logo} alt ='easyBank'/>
            {
                isMenuShowing ? (<img src = {closeMenuIcon} alt = 'close Menu' onClick ={toggleMenu}/>): <img src = {menuIcon} alt ='open menu' onClick ={toggleMenu}/>
            }

            {
                isMenuShowing ? (<MobileMenu/>) : null
            }
            
        </header>

        
    )
}

export default Header
