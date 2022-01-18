import React from 'react'

import InviteButton from './InviteButton';
import mockups from '../images/image-mockups.png';


import '../styles/intro.css'

const Intro = () => {
    return (
        <div className='intro'>
            <div className='hero'>
                <img src = {mockups} alt = 'mock ups'/>
            </div>

            <div className='intro-text'>


            <h1>Next generation digital banking</h1>

            <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
               for spending, saving, budgeting, investing, and much more.</p>

            <InviteButton/>


            </div>
        </div>
    )
}

export default Intro
