import React from 'react'

import InviteButton from './InviteButton'

import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg';
import youtube from '../images/icon-youtube.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

import '../styles/footer.css';

const Footer = () => {
    return (
        <footer>
            {/* <img src = {logo} alt = 'easybank'/> */}

            <ul className='socials-list'>
                <li><img src = {facebook} alt = 'facebook'/></li>
                <li><img src = {youtube} alt = 'youtube'/></li>
                <li><img src = {twitter} alt = 'twitter'/></li>
                <li><img src = {pinterest} alt = 'pinterest'/></li>
                <li><img src = {instagram} alt = 'instagram'/></li>
            </ul>

            <nav className='footer-nav'>
                <ul className='footer-ul'>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>
                </ul>
            </nav>

            <InviteButton/>

            <p className='copyright'>© Easybank. All Rights Reserved</p>
        </footer>
    )
}

export default Footer
