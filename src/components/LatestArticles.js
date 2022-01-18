import React from 'react'


import cash from '../images/image-currency.jpg';
import restaurant from '../images/image-restaurant.jpg';
import plane from '../images/image-plane.jpg';
import confetti from '../images/image-confetti.jpg';

import '../styles/latest.css'

const LatestArticles = () => {
    return (
        <div className='latest'>
            <div className='latest-content'>
            <h2>Latest Articles</h2>

                                
            <section className='latest-section'>
                <img src ={cash} alt = 'cash'/>
                <div className='article-text'>
                <p className='author-tag'>By Claire Robinson</p>
                <h4>Receive money in any currency with no fees</h4>
                <p> The world is getting smaller and we’re becoming more mobile. So why should you be 
                forced to only receive money in a single …</p>
                </div>
                
            </section>


            <article className='latest-section'>
            <img src ={restaurant} alt = 'restaurant'/>
                <div className='article-text'>
                <p className='author-tag'> By Wilson Hutton</p>
                <h4> Treat yourself without worrying about money</h4>
                <p>Our simple budgeting feature allows you to separate out your spending and set 
                realistic limits each month. That means you …</p>
                </div>
                
            </article>


            <section className='latest-section'>
                <img src ={plane} alt = 'plane'/>
                <div className='article-text'>

                    <p className='author-tag'> By Wilson Hutton</p>
                    <h4>Take your Easybank card wherever you go</h4>
                    <p> We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                    while you’re abroad. We’ll even show you …</p>
                </div>
                
            </section>
            

            <section className='latest-section'>
                <img src ={confetti} alt = 'confetti'/>
                <div className='article-text'>
                    <p className='author-tag'>By Claire Robinson</p>     
                    <h4>Our invite-only Beta accounts are now live!</h4>
                    <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                    It’s easy to request an invite through the site ...</p>
                </div>
            </section>

                
        </div>
    </div>
    )
}

export default LatestArticles
