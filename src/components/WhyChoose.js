import React from 'react'

import '../styles/whychoose.css'


import online from '../images/icon-online.svg'
import budgeting from '../images/icon-budgeting.svg'
import onboarding from '../images/icon-onboarding.svg'
import api from '../images/icon-api.svg'
const WhyChoose = () => {
    return (
        <div className='why-choose'>
            
            <section>
                <h2> Why choose Easybank?</h2>

                <p className='why-choose-main-p'>We leverage Open Banking to turn your bank account into your financial hub. Control 
                your finances like never before.</p>
            </section>
            
            <section>
                <img src ={online} alt ='online'/>
                <h3>Online Banking</h3>
                <p>Our modern web and mobile applications allow you to keep track of your finances 
                wherever you are in the world.</p>
            </section>
            

            <section>
            <img src ={budgeting} alt ='budgeting'/>
                <h3>Simple Budgeting</h3>
                <p>See exactly where your money goes each month. Receive notifications when you’re 
                close to hitting your limits.</p>
            </section>
           

            <section>
            <img src ={onboarding} alt ='onboarding'/>

                <h3>Fast Onboarding</h3>
                <p>We don’t do branches. Open your account in minutes online and start taking control 
                of your finances right away.</p>

            </section>
            

            <section>
            <img src ={api} alt ='api'/>

                <h3>Open API</h3>
               <p> Manage your savings, investments, pension, and much more from one account. Tracking 
                your money has never been easier.</p>
            </section>
            
        </div>
    )
}

export default WhyChoose
